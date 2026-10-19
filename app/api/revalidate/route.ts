import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

// Webhook nhận từ VietDeco ERP backend sau khi admin đổi ảnh 1 danh mục trong CMS -
// đánh dấu cache "cms-images" cũ (xem lib/cms.ts) để Next.js tự fetch lại đúng data đó ở
// lần request tiếp theo, KHÔNG rebuild lại toàn bộ trang không cần thiết.
export async function POST(request: NextRequest) {
  const secretFromHeader = request.headers.get("x-revalidate-secret");
  const expectedSecret = process.env.REVALIDATE_SECRET;

  if (!expectedSecret || secretFromHeader !== expectedSecret) {
    return NextResponse.json({ revalidated: false, error: "Invalid secret" }, { status: 401 });
  }

  revalidateTag("cms-images");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
