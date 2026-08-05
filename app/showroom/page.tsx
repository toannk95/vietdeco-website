import type { Metadata } from "next";
import { Building2, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { ShowroomTour } from "@/components/ShowroomTour";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Showroom 360°",
  description:
    "Tham quan showroom VietDeco theo hình thức tour 360° — khám phá các mẫu phòng khách, phòng bếp, phòng ngủ và khu trưng bày vật liệu.",
};

export default function ShowroomPage() {
  return (
    <main className="bg-cream pb-24 pt-32 sm:pb-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-dark">
              <Building2 className="h-3.5 w-3.5" />
              Showroom 360°
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
              Tham quan showroom VietDeco ngay tại nhà
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 leading-relaxed text-ink/60">
              Trải nghiệm không gian trưng bày như đang tham quan trực tiếp — đi qua từng
              khu vực phòng khách, phòng bếp, phòng ngủ và khu vật liệu để tìm cảm hứng cho
              tổ ấm của bạn.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-3 flex items-center justify-center gap-2 text-sm text-ink/50">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              {siteConfig.address}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="mt-14">
          <ShowroomTour />
        </Reveal>
      </Container>
    </main>
  );
}
