import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";

const highlights = [
  "Đội ngũ kiến trúc sư tận tâm, giàu kinh nghiệm",
  "Quy trình làm việc minh bạch, rõ ràng từng bước",
  "Vật liệu thi công chọn lọc, nguồn gốc rõ ràng",
  "Hỗ trợ bảo hành và bảo trì dài hạn sau bàn giao",
];

export function About() {
  return (
    <section id="gioi-thieu" className="bg-cream py-24 sm:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/about/living-room.jpg"
              alt="Không gian phòng khách ấm cúng do VietDeco thiết kế"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 hidden w-48 rounded-2xl bg-ink p-5 shadow-xl sm:block">
            <p className="font-display text-3xl font-semibold text-gold-light">8+</p>
            <p className="mt-1 text-xs text-cream/70">
              Năm kinh nghiệm thiết kế &amp; thi công nội thất
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
              Về VietDeco
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
              Người bạn đồng hành trên hành trình kiến tạo tổ ấm của bạn
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 leading-relaxed text-ink/60">
              VietDeco là đơn vị thiết kế và thi công nội thất trọn gói, quy tụ
              đội ngũ kiến trúc sư trẻ, sáng tạo và giàu kinh nghiệm. Chúng tôi
              tin rằng mỗi không gian sống đều nên phản ánh đúng cá tính và lối
              sống của chủ nhân — vì vậy, mỗi dự án đều được thực hiện với sự
              lắng nghe, thấu hiểu và tận tâm.
            </p>
          </Reveal>

          <ul className="mt-8 space-y-3">
            {highlights.map((item, index) => (
              <Reveal key={item} delay={0.2 + index * 0.06}>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-dark" strokeWidth={1.5} />
                  <span className="text-sm text-ink/70 sm:text-base">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
