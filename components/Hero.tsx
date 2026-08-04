"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="trang-chu"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden bg-cream pt-20"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 h-[120%] w-full">
        <Image
          src="/images/hero/living-room.jpg"
          alt="Không gian phòng khách hiện đại do VietDeco thiết kế"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-cream via-cream/75 to-transparent sm:w-4/5 lg:w-3/5" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream/90 to-transparent" />
      </motion.div>

      <motion.div style={{ opacity: contentOpacity }} className="relative z-10 w-full">
        <Container className="py-24">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream/80 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-dark shadow-sm backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Thiết kế &amp; Thi công nội thất trọn gói
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.15] text-ink sm:text-5xl lg:text-6xl"
          >
            {siteConfig.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink/70 sm:text-lg"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="#lien-he" size="lg">
              Nhận tư vấn miễn phí
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#du-an" size="lg" variant="outline">
              Xem dự án nổi bật
            </Button>
          </motion.div>
        </Container>
      </motion.div>

      <motion.a
        href="#gioi-thieu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-ink/50"
        aria-label="Cuộn xuống"
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">Cuộn xuống</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
