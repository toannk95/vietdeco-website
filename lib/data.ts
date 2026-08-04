import {
  Building2,
  Home,
  Store,
  Briefcase,
  HardHat,
  ClipboardCheck,
  Search,
  FileSignature,
  Hammer,
  HeartHandshake,
  Users,
  Award,
  Smile,
  Ruler,
  ShieldCheck,
  Sparkles,
  Gauge,
  Tv,
  Footprints,
  BookOpen,
  Wine,
  Shirt,
  Bed,
  Lamp,
  LayoutGrid,
  ChefHat,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
}

export const services: Service[] = [
  {
    icon: Building2,
    title: "Thiết kế nội thất chung cư",
    description:
      "Tối ưu công năng cho từng mét vuông, mang lại không gian sống hiện đại và tiện nghi cho căn hộ của bạn.",
    highlights: [
      "Tối ưu công năng cho diện tích nhỏ và vừa",
      "Tư vấn bố trí phù hợp phong thuỷ gia chủ",
      "Bản vẽ 3D chi tiết trước khi thi công",
    ],
  },
  {
    icon: Home,
    title: "Thiết kế nội thất nhà phố",
    description:
      "Giải pháp không gian thông minh cho nhà ống, nhà liền kề, hài hoà giữa công năng và thẩm mỹ.",
    highlights: [
      "Giải pháp chiếu sáng và thông gió tự nhiên",
      "Tối ưu cầu thang, giếng trời cho nhà ống",
      "Đồng bộ phong cách xuyên suốt các tầng",
    ],
  },
  {
    icon: Store,
    title: "Thiết kế Shop & Văn phòng",
    description:
      "Không gian kinh doanh, làm việc chuyên nghiệp, truyền cảm hứng sáng tạo và tối ưu hiệu suất.",
    highlights: [
      "Bố trí không gian tối ưu trải nghiệm khách hàng",
      "Thể hiện rõ bản sắc thương hiệu",
      "Vật liệu bền, dễ vệ sinh và bảo trì",
    ],
  },
  {
    icon: Briefcase,
    title: "Sản xuất nội thất theo yêu cầu",
    description:
      "Thiết kế và sản xuất đồ nội thất đo ni đóng giày, vừa vặn với từng không gian riêng.",
    highlights: [
      "Đo đạc và sản xuất theo kích thước thực tế",
      "Đa dạng chất liệu, màu sắc lựa chọn",
      "Kiểm soát chất lượng từng công đoạn",
    ],
  },
  {
    icon: HardHat,
    title: "Thi công trọn gói",
    description:
      "Đội ngũ thi công lành nghề, quản lý chất lượng chặt chẽ từ kết cấu đến hoàn thiện nội thất.",
    highlights: [
      "Đội thi công lành nghề, giám sát chặt chẽ",
      "Cam kết đúng tiến độ theo hợp đồng",
      "Nghiệm thu minh bạch từng hạng mục",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Tư vấn & giám sát công trình",
    description:
      "Đồng hành cùng khách hàng xuyên suốt dự án, đảm bảo đúng tiến độ và minh bạch chi phí.",
    highlights: [
      "Đồng hành xuyên suốt từng giai đoạn dự án",
      "Kiểm soát chất lượng vật tư đầu vào",
      "Minh bạch mọi chi phí phát sinh (nếu có)",
    ],
  },
];

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    icon: Search,
    title: "Khảo sát",
    subtitle: "Lắng nghe & Hiểu rõ nhu cầu",
    description:
      "Tư vấn trực tiếp, khảo sát hiện trạng, nắm bắt mong muốn và ngân sách của khách hàng.",
  },
  {
    icon: FileSignature,
    title: "Xác nhận",
    subtitle: "Chốt thiết kế & ngân sách",
    description:
      "Dựng bản vẽ 3D, lựa chọn vật liệu, báo giá minh bạch từng hạng mục trước khi thi công.",
  },
  {
    icon: Hammer,
    title: "Thi công",
    subtitle: "Đúng cam kết, đúng chất lượng",
    description:
      "Thực hiện đúng theo thiết kế đã chốt, đảm bảo tiến độ và chất lượng từng công đoạn.",
  },
  {
    icon: HeartHandshake,
    title: "Hậu mãi",
    subtitle: "Đồng hành dài lâu",
    description:
      "Bảo hành và hỗ trợ liên tục sau bàn giao, sẵn sàng đồng hành cùng khách hàng lâu dài.",
  },
];

export interface ProjectItem {
  title: string;
  category: "Chung cư" | "Nhà phố" | "Shop/Văn phòng";
  style: string;
  area: string;
  icon: LucideIcon;
  image: string;
}

export const projectCategories = [
  "Tất cả",
  "Chung cư",
  "Nhà phố",
  "Shop/Văn phòng",
] as const;

export const projects: ProjectItem[] = [
  {
    title: "Căn hộ The Marq",
    category: "Chung cư",
    style: "Hiện đại tối giản",
    area: "78 m²",
    icon: Building2,
    image: "/images/projects/the-marq.jpg",
  },
  {
    title: "Nhà phố Yên Mỹ",
    category: "Nhà phố",
    style: "Japandi",
    area: "160 m²",
    icon: Home,
    image: "/images/projects/yen-my.jpg",
  },
  {
    title: "Showroom Mỹ Hào",
    category: "Shop/Văn phòng",
    style: "Hiện đại",
    area: "210 m²",
    icon: Store,
    image: "/images/projects/my-hao.jpg",
  },
  {
    title: "Căn hộ Sunwah Pearl",
    category: "Chung cư",
    style: "Wabi-Sabi",
    area: "95 m²",
    icon: Building2,
    image: "/images/projects/sunwah-pearl.jpg",
  },
  {
    title: "Nhà phố Phú Nhuận",
    category: "Nhà phố",
    style: "Trung Cổ",
    area: "185 m²",
    icon: Home,
    image: "/images/projects/phu-nhuan.jpg",
  },
  {
    title: "Văn phòng Innotech",
    category: "Shop/Văn phòng",
    style: "Luxury",
    area: "150 m²",
    icon: Briefcase,
    image: "/images/projects/innotech.jpg",
  },
  {
    title: "Căn hộ Landmark 81",
    category: "Chung cư",
    style: "Luxury",
    area: "110 m²",
    icon: Building2,
    image: "/images/projects/landmark81.jpg",
  },
  {
    title: "Nhà phố Văn Giang",
    category: "Nhà phố",
    style: "Hiện đại",
    area: "175 m²",
    icon: Home,
    image: "/images/projects/van-giang.jpg",
  },
  {
    title: "Café Cornerstone",
    category: "Shop/Văn phòng",
    style: "Japandi",
    area: "90 m²",
    icon: Store,
    image: "/images/projects/cornerstone-cafe.jpg",
  },
];

export interface DesignStyle {
  name: string;
  description: string;
  image: string;
}

export const designStyles: DesignStyle[] = [
  {
    name: "Wabi-Sabi",
    description:
      "Chấp nhận sự đơn giản, mộc mạc — gốm sứ thô, màu đất trầm, mang đến cảm giác an yên, gần gũi và sâu sắc.",
    image: "/images/styles/wabi-sabi.jpg",
  },
  {
    name: "Hiện đại (Modern)",
    description:
      "Đường nét đơn giản, tối ưu công năng, chất liệu gỗ MDF và kính, tông màu trung tính.",
    image: "/images/styles/modern.jpg",
  },
  {
    name: "Luxury",
    description:
      "Vật liệu cao cấp, đường nét thanh lịch — một tuyên ngôn của đẳng cấp sống.",
    image: "/images/styles/luxury.jpg",
  },
  {
    name: "Japandi",
    description:
      "Kết hợp tinh thần Zen Nhật Bản và sự tối giản Bắc Âu, gỗ sáng màu, không gian thoáng đãng.",
    image: "/images/styles/japandi.jpg",
  },
  {
    name: "Trung Cổ",
    description:
      "Trần cao, gỗ sẫm màu, ánh sáng ấm áp — dấu ấn hoài niệm giữa lòng hiện đại.",
    image: "/images/styles/classic.jpg",
  },
];

export interface ProductCategory {
  icon: LucideIcon;
  name: string;
  images: string[];
}

export const productCategories: ProductCategory[] = [
  {
    icon: Tv,
    name: "Kệ Tivi",
    images: [
      "/images/products/tv-console.jpg",
      "/images/products/tv-console-2.jpg",
      "/images/products/tv-console-3.jpg",
    ],
  },
  {
    icon: Footprints,
    name: "Tủ Giày",
    images: [
      "/images/products/shoe-cabinet.jpg",
      "/images/products/shoe-cabinet-2.jpg",
      "/images/products/shoe-cabinet-3.jpg",
    ],
  },
  {
    icon: BookOpen,
    name: "Tủ Sách",
    images: [
      "/images/products/bookshelf.jpg",
      "/images/products/bookshelf-2.jpg",
      "/images/products/bookshelf-3.jpg",
    ],
  },
  {
    icon: Wine,
    name: "Tủ Rượu",
    images: [
      "/images/products/wine-cabinet.jpg",
      "/images/products/wine-cabinet-2.jpg",
      "/images/products/wine-cabinet-3.jpg",
    ],
  },
  {
    icon: Shirt,
    name: "Tủ Quần Áo",
    images: [
      "/images/products/wardrobe.jpg",
      "/images/products/wardrobe-2.jpg",
      "/images/products/wardrobe-3.jpg",
    ],
  },
  {
    icon: Bed,
    name: "Giường Ngủ",
    images: [
      "/images/products/bed.jpg",
      "/images/products/bed-2.jpg",
      "/images/products/bed-3.jpg",
    ],
  },
  {
    icon: Lamp,
    name: "Tủ Đầu Giường",
    images: [
      "/images/products/nightstand.jpg",
      "/images/products/nightstand-2.jpg",
      "/images/products/nightstand-3.jpg",
    ],
  },
  {
    icon: LayoutGrid,
    name: "Combo Phòng Ngủ",
    images: [
      "/images/products/bedroom-set.jpg",
      "/images/products/bedroom-set-2.jpg",
      "/images/products/bedroom-set-3.jpg",
    ],
  },
  {
    icon: ChefHat,
    name: "Phòng Bếp",
    images: [
      "/images/products/kitchen.jpg",
      "/images/products/kitchen-2.jpg",
      "/images/products/kitchen-3.jpg",
    ],
  },
];

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Chị Minh Anh",
    role: "Chủ căn hộ The Marq",
    quote:
      "Đội ngũ VietDeco tư vấn rất tận tâm, bản thiết kế 3D gần như giống 100% với thực tế. Nhà mình hoàn thiện đúng tiến độ và trong ngân sách dự kiến.",
    rating: 5,
  },
  {
    name: "Anh Quốc Bảo",
    role: "Chủ nhà phố Yên Mỹ",
    quote:
      "Ấn tượng với cách VietDeco tối ưu không gian cho nhà ống. Đội thi công chuyên nghiệp, sạch sẽ, luôn cập nhật tiến độ hằng ngày cho gia đình mình.",
    rating: 5,
  },
  {
    name: "Chị Thu Hà",
    role: "Chủ showroom Mỹ Hào",
    quote:
      "Từ khâu khảo sát đến bàn giao đều rất chuyên nghiệp. Đội ngũ lắng nghe và điều chỉnh thiết kế theo đúng gu thẩm mỹ của mình.",
    rating: 5,
  },
];

export interface Stat {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { icon: Home, value: 500, suffix: "+", label: "Dự án hoàn thành" },
  { icon: Award, value: 8, suffix: "+", label: "Năm kinh nghiệm" },
  { icon: Smile, value: 98, suffix: "%", label: "Khách hàng hài lòng" },
  { icon: Users, value: 20, suffix: "+", label: "Kiến trúc sư & KTS" },
];

export interface WhyUsItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const whyUs: WhyUsItem[] = [
  {
    icon: Ruler,
    title: "Đội ngũ KTS giàu kinh nghiệm",
    description:
      "Đội ngũ kiến trúc sư và giám sát viên đồng hành cùng mỗi dự án, đảm bảo tính thẩm mỹ và kỹ thuật.",
  },
  {
    icon: Sparkles,
    title: "Thiết kế 3D chân thực",
    description:
      "Hình dung không gian sống trước khi thi công, hạn chế tối đa phát sinh và sai lệch thực tế.",
  },
  {
    icon: Gauge,
    title: "Cam kết tiến độ & chi phí",
    description:
      "Hợp đồng rõ ràng, báo giá minh bạch từng hạng mục, không phát sinh chi phí ẩn.",
  },
  {
    icon: ShieldCheck,
    title: "Bảo hành dài hạn",
    description:
      "Chế độ bảo hành và hỗ trợ bảo trì liên tục, đồng hành dài lâu cùng khách hàng sau bàn giao.",
  },
];
