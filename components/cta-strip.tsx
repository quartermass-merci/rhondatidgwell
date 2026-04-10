import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "./container";

// After the audit and critique, the card-rectangle treatment was the one
// remaining framed surface on the site. Strip the highlight fill and let it
// sit on --paper with just a single top rule — matches the rest of the
// editorial language.
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
    <section className="mt-8 border-t border-ink/90">
      <Container className="py-16 md:py-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-[2.5rem] text-ink leading-[1.08]">
            {headline}
          </h2>
          <p className="mt-3 text-[color:var(--text-body)] leading-relaxed">
            {body}
          </p>
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
