"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ProductCategory } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProductLightbox({
  product,
  onClose,
}: {
  product: ProductCategory | null;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [product]);

  const goPrev = () => {
    if (!product) return;
    setIndex((current) => (current - 1 + product.images.length) % product.images.length);
  };

  const goNext = () => {
    if (!product) return;
    setIndex((current) => (current + 1) % product.images.length);
  };

  useEffect(() => {
    if (!product) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm sm:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-cream shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Đóng"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink/60 text-cream backdrop-blur-sm transition-colors hover:bg-ink"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative aspect-[4/3] w-full bg-ink/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={product.images[index]}
                    alt={`${product.name} — ảnh ${index + 1}`}
                    fill
                    sizes="(min-width: 640px) 42rem, 100vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {product.images.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Ảnh trước"
                    onClick={goPrev}
                    className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/50 text-cream backdrop-blur-sm transition-colors hover:bg-ink"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Ảnh tiếp theo"
                    onClick={goNext}
                    className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/50 text-cream backdrop-blur-sm transition-colors hover:bg-ink"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                    {product.images.map((image, dotIndex) => (
                      <button
                        key={image}
                        type="button"
                        aria-label={`Xem ảnh ${dotIndex + 1}`}
                        onClick={() => setIndex(dotIndex)}
                        className={cn(
                          "h-1.5 rounded-full transition-all duration-300",
                          dotIndex === index ? "w-6 bg-cream" : "w-1.5 bg-cream/50"
                        )}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="flex items-center gap-3 p-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
                <product.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold text-ink">
                {product.name}
              </h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
