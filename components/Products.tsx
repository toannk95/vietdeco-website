"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { ProductLightbox } from "@/components/ProductLightbox";
import { productCategories, type ProductCategory } from "@/lib/data";

export function Products() {
  const [selected, setSelected] = useState<ProductCategory | null>(null);

  return (
    <section id="san-pham" className="bg-ink py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Sản phẩm"
          title="Nội thất đo ni đóng giày cho từng không gian"
          description="Ngoài thiết kế trọn gói, VietDeco còn sản xuất từng món đồ nội thất theo yêu cầu — vừa vặn về kích thước, đúng gu về phong cách. Bấm vào từng hạng mục để xem ảnh minh hoạ."
          light
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {productCategories.map((product, index) => (
            <Reveal key={product.name} delay={(index % 5) * 0.06}>
              <button
                type="button"
                onClick={() => setSelected(product)}
                className="group flex w-full flex-col items-center gap-3 rounded-2xl border border-cream/10 bg-cream/5 px-4 py-8 text-center transition-colors duration-300 hover:border-gold/40 hover:bg-cream/[0.08]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold-light transition-transform duration-300 group-hover:scale-110">
                  <product.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <p className="text-sm font-medium text-cream">{product.name}</p>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-12 flex justify-center">
          <Button href="#lien-he" variant="outline-light" size="lg">
            Liên hệ nhận báo giá & catalogue đầy đủ
          </Button>
        </Reveal>
      </Container>

      <ProductLightbox product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
