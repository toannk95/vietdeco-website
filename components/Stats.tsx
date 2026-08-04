import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="border-y border-ink/10 bg-cream py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
                <stat.icon className="h-6 w-6 text-gold-dark" strokeWidth={1.5} />
                <div className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-ink/60">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
