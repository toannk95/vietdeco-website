import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "outline" | "outline-light" | "ghost";
  size?: "md" | "lg";
  className?: string;
  onClick?: () => void;
};

type ButtonAsLink = CommonProps & {
  href: string;
  type?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  type?: "button" | "submit";
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary: "bg-ink text-cream hover:bg-gold hover:text-ink",
  outline: "border border-ink/20 text-ink hover:border-gold hover:text-gold-dark",
  "outline-light": "border border-cream/20 text-cream hover:border-gold hover:text-gold-light",
  ghost: "text-cream hover:text-gold-light",
};

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
