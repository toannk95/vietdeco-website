// Lấy ảnh minh hoạ 10 danh mục sản phẩm từ ERP (VietDeco ERP backend) - CHỈ gọi ở Server
// Component (không "use client"), dùng cache tag "cms-images" để liên kết với
// revalidateTag("cms-images") ở app/api/revalidate/route.ts: khi ERP báo có ảnh mới,
// Next.js tự fetch lại ĐÚNG data này ở lần request tiếp theo, không rebuild lại toàn bộ
// trang không cần thiết.
//
// KHÔNG dùng cache: "no-store" - mục tiêu là cache tĩnh, chỉ fetch lại khi có webhook gọi
// revalidate, không phải fetch mới mỗi lượt khách xem trang (xem ghi chú trong prompt
// CMS ảnh website).

const DEFAULT_ERP_PUBLIC_API_BASE_URL = "https://app.vietdeco.com.vn";

export interface CmsCategoryImage {
  categoryKey: string;
  categoryDisplayName: string;
  imageUrl: string | null;
  updatedAt: string | null;
}

/**
 * Trả về Map<categoryKey, imageUrl> - CHỈ categoryKey có imageUrl thực sự (không null)
 * mới có mặt trong Map, để nơi gọi dễ check "có ảnh CMS hay chưa" bằng .has()/.get().
 *
 * Lỗi mạng/ERP đang bảo trì/response không hợp lệ -> trả về Map RỖNG (KHÔNG throw) - trang
 * phải vẫn hiển thị bình thường bằng icon/ảnh mặc định sẵn có, không được crash vì ERP.
 */
export async function getCmsCategoryImageMap(): Promise<Map<string, string>> {
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

    const map = new Map<string, string>();
    for (const item of body.data) {
      if (item.categoryKey && item.imageUrl) {
        map.set(item.categoryKey, item.imageUrl);
      }
    }
    return map;
  } catch (error) {
    // ERP đang bảo trì/down/timeout - KHÔNG để lỗi này làm sập trang, chỉ log để biết.
    console.error("[CMS] Không gọi được API ảnh danh mục từ ERP", error);
    return new Map();
  }
}
