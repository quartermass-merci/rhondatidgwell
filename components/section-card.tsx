import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

export type SectionCardProps = {
  href: string;
  label: string;
  title: string;
  blurb: string;
  className?: string;
};

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
        "group flex flex-col rounded-sm border border-rule bg-paper p-6 md:p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_30px_-12px_rgba(26,31,46,0.18)] hover:border-accent/40",
        className,
      )}
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
        {label}
      </p>
      <h3 className="mt-3 font-display text-2xl md:text-3xl leading-tight text-ink">
        {title}
      </h3>
      <p className="mt-3 text-sm md:text-base text-ink/80 leading-relaxed">
        {blurb}
      </p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
        Read more
        <ArrowRight
          size={14}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
