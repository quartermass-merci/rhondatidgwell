import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "./container";

export function CtaStrip({
  headline,
  body,
  ctaLabel,
  ctaHref,
}: {
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section className="mt-24 border-t border-b border-rule bg-highlight/60">
      <Container className="py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight">
            {headline}
          </h2>
          <p className="mt-3 text-ink/80 leading-relaxed">{body}</p>
        </div>
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-medium text-paper hover:bg-accent/90 transition-colors whitespace-nowrap self-start md:self-auto min-h-[44px]"
        >
          {ctaLabel}
          <ArrowRight size={15} />
        </Link>
      </Container>
    </section>
  );
}
