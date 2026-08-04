import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { designStyles } from "@/lib/data";

export function DesignStyles() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Phong cách thiết kế"
          title="Mỗi không gian, một tinh thần riêng"
          description="VietDeco linh hoạt theo nhiều trường phái thiết kế, giúp bạn tìm ra phong cách phản ánh đúng cá tính của mình."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {designStyles.map((style, index) => (
            <Reveal key={style.name} delay={(index % 5) * 0.07}>
              <div className="group overflow-hidden rounded-2xl">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={style.image}
                    alt={`Nội thất phong cách ${style.name}`}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {style.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60">
                    {style.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
