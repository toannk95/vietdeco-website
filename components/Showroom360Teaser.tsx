import Image from "next/image";
import { Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";

export function Showroom360Teaser() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="absolute inset-0">
        <Image
          src="/images/projects/landmark81.jpg"
          alt="Không gian trưng bày tại showroom VietDeco"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-ink/70" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-xl text-center">
          <Reveal>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold-light">
              <Compass className="h-7 w-7" strokeWidth={1.5} />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 text-balance font-display text-3xl font-semibold text-cream sm:text-4xl">
              Trải nghiệm Showroom 360°
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 leading-relaxed text-cream/70">
              Tham quan không gian trưng bày vật liệu và các mẫu phòng khách, phòng bếp,
              phòng ngủ của VietDeco ngay trên trình duyệt — như đang có mặt tại showroom.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-8">
            <Button href="/showroom" size="lg">
              Khám phá Showroom 360°
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
