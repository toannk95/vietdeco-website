import { put } from "@vercel/blob";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * Nhận ảnh CMS từ ERP backend và ghi lên Vercel Blob THAY cho ERP backend tự gọi Vercel
 * Blob trực tiếp. Lý do: điều tra lỗi "Access denied" trên production (2026-10-21) xác
 * nhận Vercel Blob read-write token (static, dùng ngoài hạ tầng Vercel) bị từ chối ở TẦNG
 * TÀI KHOẢN với mọi token/store đã thử (xác nhận bằng curl + SDK + CLI chính thức), trong
 * khi ghi bằng OIDC NGAY TRONG 1 Vercel Function (chính route này) lại thành công bình
 * thường - đã test thật trước khi viết route chính thức. Nên chuyển việc ghi Blob vào
 * route này (chạy trên hạ tầng Vercel, OIDC tự động, KHÔNG cần quản lý token tĩnh nào cả)
 * thay vì cố dùng BLOB_READ_WRITE_TOKEN từ xa.
 *
 * Gộp luôn bước revalidate cache vào route này (trước đây là 1 webhook riêng ERP tự gọi
 * sau khi upload) - vì đã ở đúng trong tiến trình Next.js rồi, không cần round-trip thứ 2.
 */
const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024;
const ALLOWED_CONTENT_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"]);
// "cms/{categoryKey}.{ext}" - khớp đúng pattern ERP backend dùng (xem
// CmsCategoryImageService.upload) - chặn sớm pathname lạ dù secret có lỡ lộ.
const PATHNAME_PATTERN = /^cms\/[a-z0-9-]+\.(jpg|jpeg|png|webp|heic|heif)$/;

export async function POST(request: NextRequest) {
  const secretFromHeader = request.headers.get("x-cms-upload-secret");
  const expectedSecret = process.env.CMS_UPLOAD_SECRET;
  if (!expectedSecret || secretFromHeader !== expectedSecret) {
    return NextResponse.json({ success: false, error: "Invalid secret" }, { status: 401 });
  }

  const formData = await request.formData();
  const pathname = formData.get("pathname");
  const contentType = formData.get("contentType");
  const file = formData.get("file");

  if (typeof pathname !== "string" || !PATHNAME_PATTERN.test(pathname)) {
    return NextResponse.json({ success: false, error: "Invalid pathname" }, { status: 400 });
  }
  if (typeof contentType !== "string" || !ALLOWED_CONTENT_TYPES.has(contentType)) {
    return NextResponse.json({ success: false, error: "Invalid contentType" }, { status: 400 });
  }
  if (!(file instanceof Blob) || file.size === 0) {
    return NextResponse.json({ success: false, error: "Missing file" }, { status: 400 });
  }
  if (file.size > MAX_IMAGE_SIZE_BYTES) {
    return NextResponse.json({ success: false, error: "File too large" }, { status: 400 });
  }

  let blobUrl: string;
  try {
    const bytes = Buffer.from(await file.arrayBuffer());
    const blob = await put(pathname, bytes, {
      access: "public",
      contentType,
      allowOverwrite: true,
    });
    blobUrl = blob.url;
  } catch (err) {
    console.error("cms-upload: put() lên Vercel Blob thất bại", err);
    return NextResponse.json({ success: false, error: "Blob upload failed" }, { status: 502 });
  }

  // Ảnh đã lưu Blob thành công - lỗi revalidate (nếu có) KHÔNG được làm fail response này,
  // ERP backend coi response 200 kèm url là upload đã xong (xem CmsCategoryImageService).
  try {
    revalidateTag("cms-images");
  } catch (err) {
    console.error("cms-upload: revalidateTag thất bại - ảnh vẫn đã lưu thành công", err);
  }

  return NextResponse.json({ success: true, url: blobUrl });
}
