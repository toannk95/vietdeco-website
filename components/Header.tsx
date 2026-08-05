"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <a
          href="/#trang-chu"
          className="font-display text-xl font-semibold tracking-tight text-ink"
        >
          Viet<span className="text-gold-dark">Deco</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/#lien-he" size="md">
            Nhận tư vấn miễn phí
          </Button>
        </div>

        <button
          type="button"
          aria-label="Mở menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-cream lg:hidden"
          >
            <Container className="flex flex-col gap-1 pb-8 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink/80 hover:bg-ink/5"
                >
                  {link.label}
                </a>
              ))}
              <Button href="/#lien-he" className="mt-3 w-full" onClick={() => setOpen(false)}>
                Nhận tư vấn miễn phí
              </Button>
              <a
                href={siteConfig.phoneHref}
                className="mt-2 px-3 text-sm text-ink/50"
              >
                {siteConfig.phone}
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
