import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

export type SectionCardProps = {
  href: string;
  label?: string;
  title: string;
  blurb: string;
  className?: string;
};

// Audit M3 — no drop shadow, no translate-y. The affordance is typographic:
// left rule shifts to --accent on hover, the title underlines, the arrow moves.
export function SectionCard({
  href,
  label,
  title,
  blurb,
  className,
}: SectionCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col bg-paper pl-6 pr-6 py-7 md:pl-8 md:pr-6 md:py-8",
        "border-l-2 border-rule transition-colors duration-200",
        "hover:border-l-[var(--accent)]",
        className,
      )}
    >
      {label ? (
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
          {label}
        </p>
      ) : null}
      <h3
        className={cn(
          "font-display text-2xl md:text-[1.75rem] leading-tight text-ink group-hover:[text-decoration:underline] [text-decoration-thickness:1.5px] [text-underline-offset:6px] decoration-[var(--accent-70)]",
          label ? "mt-3" : "",
        )}
      >
        {title}
      </h3>
      <p className="mt-3 text-[0.95rem] md:text-base leading-relaxed text-[color:var(--text-body)]">
        {blurb}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
        Read more
        <ArrowRight
          size={14}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
