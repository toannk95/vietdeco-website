import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section id="quy-trinh" className="bg-ink py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Quy trình"
          title="4 bước hiện thực hoá không gian mơ ước"
          description="Quy trình làm việc rõ ràng, minh bạch từng giai đoạn giúp bạn luôn chủ động theo dõi tiến độ dự án."
          light
        />

        <div className="mx-auto mt-16 max-w-3xl">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={(index % 3) * 0.08}>
              <div className="relative flex gap-6 pb-10 last:pb-0">
                {index !== processSteps.length - 1 && (
                  <span className="absolute left-6 top-14 h-[calc(100%-2.5rem)] w-px bg-cream/10" />
                )}
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 bg-ink font-display text-lg font-semibold text-gold-light">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="pt-1.5">
                  <div className="flex items-center gap-3">
                    <step.icon className="h-5 w-5 text-gold-dark" strokeWidth={1.5} />
                    <h3 className="font-display text-lg font-semibold text-cream sm:text-xl">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gold-light/80">
                    {step.subtitle}
                  </p>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-cream/60">
                    {step.description}
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
