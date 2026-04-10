import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type HeroProps = {
  eyebrow?: string;
  title: string;
  lede?: string;
  children?: ReactNode;
  size?: "lg" | "md";
  className?: string;
};

export function Hero({
  eyebrow,
  title,
  lede,
  children,
  size = "md",
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "mx-auto w-full max-w-6xl px-6",
        size === "lg" ? "py-20 md:py-28" : "py-14 md:py-20",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
          {eyebrow}
        </p>
      )}
      <h1
        className={cn(
          "mt-6 font-display text-ink font-normal max-w-4xl text-balance",
          // Audit L2 — fluid clamp, no more step-jumps between breakpoints
          size === "lg" ? "h-display-xl" : "h-display-lg",
        )}
      >
        {title}
      </h1>
      {lede && (
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-[color:var(--text-body)] leading-relaxed">
          {lede}
        </p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </section>
  );
}
