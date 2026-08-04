"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ServiceModal } from "@/components/ServiceModal";
import { services, type Service } from "@/lib/data";

export function Services() {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <section id="dich-vu" className="bg-ink py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Dịch vụ"
          title="Giải pháp nội thất toàn diện"
          description="Từ tư vấn ý tưởng, thiết kế 3D đến thi công hoàn thiện — VietDeco đồng hành xuyên suốt mọi hạng mục công trình. Bấm vào từng dịch vụ để xem chi tiết."
          light
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 0.1}>
              <button
                type="button"
                onClick={() => setSelected(service)}
                className="group h-full w-full rounded-2xl border border-cream/10 bg-cream/5 p-8 text-left transition-colors duration-300 hover:border-gold/40 hover:bg-cream/[0.08]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold-light transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-cream">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/60">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-gold-light opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Xem chi tiết
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      <ServiceModal service={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
