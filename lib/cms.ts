// Lấy ảnh minh hoạ 10 danh mục sản phẩm từ ERP (VietDeco ERP backend) - CHỈ gọi ở Server
// Component (không "use client"), dùng cache tag "cms-images" để liên kết với
// revalidateTag("cms-images") ở app/api/revalidate/route.ts VÀ app/api/cms-upload/route.ts:
// khi ERP báo có ảnh mới, Next.js tự fetch lại ĐÚNG data này ở lần request tiếp theo,
// không rebuild lại toàn bộ trang không cần thiết.
//
// KHÔNG dùng cache: "no-store" - mục tiêu là cache tĩnh, chỉ fetch lại khi có webhook gọi
// revalidate, không phải fetch mới mỗi lượt khách xem trang.

const DEFAULT_ERP_PUBLIC_API_BASE_URL = "https://app.vietdeco.com.vn";

/**
 * 1 ảnh trong thư viện nhiều ảnh của 1 danh mục. LƯU Ý field "cover" (KHÔNG PHẢI
 * "isCover") - Jackson (backend) serialize getter boolean isCover() thành JSON property
 * "cover" theo quy ước chuẩn (strip tiền tố "is"), đã xác nhận thật bằng test trực tiếp
 * trước khi viết interface này, không phải đoán.
 */
export interface CmsPhoto {
  id: number;
  imageUrl: string;
  caption: string | null;
  sortOrder: number;
  cover: boolean;
}

export interface CmsCategoryImage {
  categoryKey: string;
  categoryDisplayName: string;
  /** Ảnh BÌA hiện tại (field giữ tên cũ "imageUrl" để tương thích ngược) - null nếu danh
   * mục chưa có ảnh CMS nào. */
  imageUrl: string | null;
  updatedAt: string | null;
  /** Thư viện đầy đủ, ĐÃ sắp theo sortOrder - rỗng/undefined nếu danh mục chưa có ảnh CMS
   * nào (website tự fallback ảnh mẫu hardcode trong trường hợp này, xem Products.tsx). */
  photos?: CmsPhoto[];
}

export interface CmsCategoryData {
  imageUrl: string | null;
  photos: CmsPhoto[];
}

/**
 * Trả về Map<categoryKey, {imageUrl, photos}> cho TẤT CẢ 10 danh mục - nơi gọi tự quyết
 * định dùng field nào (ảnh bìa cho ô trang chủ, cả mảng photos cho modal chi tiết).
 *
 * Lỗi mạng/ERP đang bảo trì/response không hợp lệ -> trả về Map RỖNG (KHÔNG throw) - trang
 * phải vẫn hiển thị bình thường bằng icon/ảnh mặc định sẵn có, không được crash vì ERP.
 */
export async function getCmsCategoryData(): Promise<Map<string, CmsCategoryData>> {
  const baseUrl = process.env.ERP_PUBLIC_API_BASE_URL || DEFAULT_ERP_PUBLIC_API_BASE_URL;

  try {
    const response = await fetch(`${baseUrl}/api/public/cms/category-images`, {
      next: { tags: ["cms-images"] },
    });

    if (!response.ok) {
      console.error(`[CMS] ERP trả lỗi HTTP ${response.status} khi lấy ảnh danh mục`);
      return new Map();
    }

    const body: { success?: boolean; data?: CmsCategoryImage[] } = await response.json();
    if (!body.success || !Array.isArray(body.data)) {
      console.error("[CMS] Response từ ERP không đúng format mong đợi", body);
      return new Map();
    }

    const map = new Map<string, CmsCategoryData>();
    for (const item of body.data) {
      if (!item.categoryKey) continue;
      map.set(item.categoryKey, {
        imageUrl: item.imageUrl ?? null,
        photos: Array.isArray(item.photos) ? item.photos : [],
      });
    }
    return map;
  } catch (error) {
    // ERP đang bảo trì/down/timeout - KHÔNG để lỗi này làm sập trang, chỉ log để biết.
    console.error("[CMS] Không gọi được API ảnh danh mục từ ERP", error);
    return new Map();
  }
}
