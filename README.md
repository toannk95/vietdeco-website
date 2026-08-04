# VietDeco Website (Next.js)

Website mới cho VietDeco — thiết kế one-page hiện đại, hiệu ứng scroll-reveal,
tối ưu SEO, và sẵn sàng mở rộng giỏ hàng / lưu lead tư vấn trong tương lai.

## 1. Cài đặt lần đầu

1. Cài **Node.js bản LTS** tại https://nodejs.org (chọn bản "LTS").
2. Mở terminal tại thư mục `D:\vietdeco`, chạy:

   ```bash
   npm install
   npm run dev
   ```

3. Mở trình duyệt tại `http://localhost:3000`.

## 2. Cấu trúc thư mục chính

```
app/                 Các trang & route (App Router của Next.js)
  layout.tsx          Khung chung: font chữ, SEO metadata, JSON-LD, Header/Footer
  page.tsx             Trang chủ — ghép các section lại
  api/contact/route.ts API nhận dữ liệu từ form "Để lại thông tin tư vấn"
  sitemap.ts, robots.ts  Sinh sitemap.xml / robots.txt tự động cho SEO
  icon.svg              Favicon (logo chữ "V" tạm thời, thay bằng logo thật khi có)

components/          Từng khối giao diện (Header, Hero, Services, Projects, ContactForm...)
lib/
  site-config.ts       Thông tin công ty: tên, SĐT, email, địa chỉ, mạng xã hội, menu
  data.ts               Nội dung: dịch vụ, dự án, quy trình, đánh giá khách hàng, số liệu
```

## 3. Sửa nội dung (không cần biết code nhiều)

- **Thông tin công ty** (số điện thoại, email, địa chỉ, Zalo, Facebook...):
  sửa trong `lib/site-config.ts`.
- **Dịch vụ, dự án, quy trình, đánh giá khách hàng, số liệu thống kê**:
  sửa trong `lib/data.ts` — đây là dữ liệu mẫu, thay bằng nội dung thật của VietDeco.
- **Ảnh dự án thật**: hiện tại các ảnh đang là placeholder (khối màu gradient +
  icon) để không phụ thuộc vào file ảnh chưa có. Khi có ảnh thật, thay
  component `<PlaceholderImage />` bằng `<Image src="..." />` của
  `next/image` trong các file `components/Hero.tsx`, `About.tsx`, `Projects.tsx`.

## 4. Form "Để lại thông tin tư vấn"

Form ở cuối trang gửi dữ liệu tới `app/api/contact/route.ts`. Hiện tại dữ liệu
được ghi ra console (log) để kiểm tra hoạt động — đây là chỗ cần nối vào khi
mở rộng: lưu vào database, gửi email, hoặc đẩy sang CRM/Zalo OA. Có ghi chú
`TODO` sẵn trong file đó.

## 5. Định hướng mở rộng sau này

- **SEO**: đã có metadata, Open Graph, sitemap.xml, robots.txt, JSON-LD
  (structured data cho doanh nghiệp). Khi có tên miền/nội dung thật, cập nhật
  lại `siteConfig.url` trong `lib/site-config.ts`.
- **Giỏ hàng / sản phẩm nội thất**: cấu trúc Next.js (App Router + API routes)
  cho phép thêm `app/san-pham/`, `app/gio-hang/` và kết nối cơ sở dữ liệu
  (ví dụ PostgreSQL + Prisma) khi cần, mà không phải viết lại từ đầu.
- **Trang riêng cho Dự án / Giới thiệu**: có thể tách từ section hiện tại
  thành `app/du-an/page.tsx`, `app/gioi-thieu/page.tsx` khi nội dung nhiều hơn.

## 6. Build cho production

```bash
npm run build
npm run start
```

Có thể deploy miễn phí và dễ dàng lên **Vercel** (đơn vị tạo ra Next.js) —
chỉ cần đẩy code lên GitHub rồi kết nối repo với Vercel.
