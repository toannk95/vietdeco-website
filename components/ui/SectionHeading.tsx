import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "inline-block text-xs font-semibold uppercase tracking-[0.2em]",
              light ? "text-gold-light" : "text-gold-dark"
            )}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-3 font-display text-3xl font-semibold text-balance sm:text-4xl",
            light ? "text-cream" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-4 text-base leading-relaxed sm:text-lg",
              light ? "text-cream/70" : "text-ink/60"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
