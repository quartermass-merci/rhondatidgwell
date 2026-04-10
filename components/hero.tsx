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
        size === "lg" ? "py-24 md:py-32" : "py-16 md:py-24",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          {eyebrow}
        </p>
      )}
      <h1
        className={cn(
          "mt-5 font-display text-ink font-normal max-w-4xl",
          size === "lg"
            ? "text-[2.5rem] md:text-[4rem] leading-[1.05]"
            : "text-3xl md:text-5xl leading-[1.08]",
        )}
      >
        {title}
      </h1>
      {lede && (
        <p className="mt-6 max-w-2xl text-lg text-ink/80 leading-relaxed">
          {lede}
        </p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </section>
  );
}
