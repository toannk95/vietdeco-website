import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="group relative isolate aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <Image
                  src={stat.image}
                  alt={stat.label}
                  fill
                  sizes="(min-width: 1024px) 22vw, 46vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />

                <div className="relative flex h-full flex-col justify-end p-4 sm:p-6">
                  <stat.icon className="h-6 w-6 text-gold-light" strokeWidth={1.5} />
                  <div className="mt-3 font-display text-3xl font-semibold text-cream sm:text-4xl">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-1 text-sm font-medium text-cream/90">{stat.label}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-cream/60">
                    {stat.description}
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
