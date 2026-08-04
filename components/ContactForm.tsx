"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, CheckCircle2, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "loading" | "success" | "error";

const propertyTypes = [
  "Căn hộ / Chung cư",
  "Nhà phố",
  "Biệt thự",
  "Văn phòng / Showroom",
  "Khác",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Có lỗi xảy ra, vui lòng thử lại.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Có lỗi xảy ra, vui lòng thử lại."
      );
    }
  }

  return (
    <section id="lien-he" className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Liên hệ"
          title="Để lại thông tin, chúng tôi tư vấn miễn phí trong 24h"
          description="Chia sẻ một chút về không gian của bạn — đội ngũ VietDeco sẽ liên hệ tư vấn giải pháp phù hợp nhất."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-3xl bg-ink p-8 sm:p-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-light" strokeWidth={1.5} />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-cream/50">Hotline</p>
                    <a href={siteConfig.phoneHref} className="text-cream hover:text-gold-light">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-light" strokeWidth={1.5} />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-cream/50">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-cream hover:text-gold-light">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-light" strokeWidth={1.5} />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-cream/50">Showroom</p>
                    <p className="text-cream">{siteConfig.address}</p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-xs text-cream/40">
                {siteConfig.workingHours}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white/70 p-8 shadow-sm ring-1 ring-ink/5 sm:p-10"
            >
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                  <CheckCircle2 className="h-12 w-12 text-gold-dark" strokeWidth={1.5} />
                  <p className="font-display text-xl font-semibold text-ink">
                    Cảm ơn bạn đã gửi thông tin!
                  </p>
                  <p className="max-w-sm text-sm text-ink/60">
                    Đội ngũ VietDeco sẽ liên hệ tư vấn trong vòng 24h tới.
                  </p>
                </div>
              ) : (
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="text-sm font-medium text-ink/80">
                      Họ và tên *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="mt-2 w-full rounded-xl border border-ink/10 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="phone" className="text-sm font-medium text-ink/80">
                      Số điện thoại *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      required
                      className="mt-2 w-full rounded-xl border border-ink/10 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                      placeholder="0900 000 000"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="email" className="text-sm font-medium text-ink/80">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="mt-2 w-full rounded-xl border border-ink/10 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                      placeholder="ban@email.com"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="propertyType" className="text-sm font-medium text-ink/80">
                      Loại hình không gian
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      className="mt-2 w-full rounded-xl border border-ink/10 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                      defaultValue={propertyTypes[0]}
                    >
                      {propertyTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="area" className="text-sm font-medium text-ink/80">
                      Diện tích (m²)
                    </label>
                    <input
                      id="area"
                      name="area"
                      className="mt-2 w-full rounded-xl border border-ink/10 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                      placeholder="Ví dụ: 80"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="text-sm font-medium text-ink/80">
                      Yêu cầu của bạn
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="mt-2 w-full rounded-xl border border-ink/10 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                      placeholder="Phong cách yêu thích, ngân sách dự kiến..."
                    />
                  </div>

                  {status === "error" && (
                    <p className="sm:col-span-2 text-sm text-red-600">{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-gold hover:text-ink disabled:opacity-60 sm:col-span-2"
                  >
                    {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
                    Gửi thông tin tư vấn
                  </button>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
