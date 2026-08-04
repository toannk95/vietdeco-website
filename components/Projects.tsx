"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { projects, projectCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Projects() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>(
    "Tất cả"
  );

  const filtered =
    active === "Tất cả"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <section id="du-an" className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Dự án"
          title="Những công trình tiêu biểu"
          description="Mỗi dự án là một câu chuyện riêng — được kể lại qua từng đường nét thiết kế và chi tiết hoàn thiện."
        />

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300",
                  active === category
                    ? "bg-ink text-cream"
                    : "bg-ink/5 text-ink/60 hover:bg-ink/10"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
              className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl"
            >
              <Image
                src={project.image}
                alt={`${project.title} — phong cách ${project.style}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-xs font-medium uppercase tracking-wide text-gold-light">
                  {project.category} · {project.area}
                </span>
                <div className="mt-1 flex items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-cream">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-cream" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14 flex justify-center">
          <Button href="#lien-he" variant="outline" size="lg">
            Liên hệ xem thêm dự án khác
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
