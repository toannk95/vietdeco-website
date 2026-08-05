import { Facebook, Music2, Youtube, MapPin, Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { navLinks, siteConfig } from "@/lib/site-config";
import { services } from "@/lib/data";

const socialLinks = [
  { icon: Facebook, href: siteConfig.socials.facebook, label: "Facebook" },
  { icon: Music2, href: siteConfig.socials.tiktok, label: "TikTok" },
  { icon: Youtube, href: siteConfig.socials.youtube, label: "Youtube" },
];

export function Footer() {
  return (
    <footer className="bg-ink pt-20">
      <Container>
        <div className="grid gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="/#trang-chu" className="font-display text-xl font-semibold text-cream">
              Viet<span className="text-gold-light">Deco</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/50">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-gold hover:text-ink"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-cream">Liên kết nhanh</p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-cream/50 hover:text-gold-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-cream">Dịch vụ</p>
            <ul className="mt-4 space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <a href="/#dich-vu" className="text-sm text-cream/50 hover:text-gold-light">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-cream">Liên hệ</p>
            <ul className="mt-4 space-y-3 text-sm text-cream/50">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href={siteConfig.phoneHref} className="hover:text-gold-light">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-light">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-cream/10 py-8 text-xs text-cream/40 sm:flex-row">
          <p>© {new Date().getFullYear()} VietDeco. Đã đăng ký bản quyền.</p>
          <p>Thiết kế &amp; phát triển bởi đội ngũ VietDeco</p>
        </div>
      </Container>
    </footer>
  );
}
