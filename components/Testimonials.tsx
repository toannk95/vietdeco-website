import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="danh-gia" className="bg-ink py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Khách hàng nói gì"
          title="Niềm tin từ những gia đình đã đồng hành"
          light
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-cream/10 bg-cream/5 p-8">
                <Quote className="h-7 w-7 text-gold/50" strokeWidth={1.5} />
                <p className="mt-5 flex-1 text-sm leading-relaxed text-cream/80">
                  “{item.quote}”
                </p>
                <div className="mt-6 flex items-center gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <div className="mt-3">
                  <p className="font-display text-base font-semibold text-cream">
                    {item.name}
                  </p>
                  <p className="text-xs text-cream/50">{item.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
