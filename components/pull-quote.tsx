import { cn } from "@/lib/cn";

type PullQuoteProps = {
  quote: string;
  attribution?: string;
  style?: "hero" | "inline";
  className?: string;
};

export function PullQuote({
  quote,
  attribution,
  style = "inline",
  className,
}: PullQuoteProps) {
  if (style === "hero") {
    // Audit M1 — left-aligned, oversized, attribution as marginalia.
    // No centering, no background box, no giant opening glyph hovering above.
    return (
      <figure
        className={cn(
          "relative mx-auto w-full max-w-5xl py-10 md:py-14",
          className,
        )}
      >
        <div className="md:grid md:grid-cols-12 md:gap-10">
          <blockquote className="md:col-span-10 relative font-display italic font-normal text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] leading-[1.1] tracking-[-0.01em] text-ink">
            {/* Hanging opening quote in the left gutter on md+.
                Ornamental — uses marine, not action red. */}
            <span
              aria-hidden
              className="hidden md:block absolute -left-8 top-[-0.05em] font-display not-italic text-[3.75rem] leading-none text-[color:var(--accent-2-60)]"
            >
              &ldquo;
            </span>
            {quote}
          </blockquote>
          {attribution && (
            <figcaption className="md:col-span-2 mt-6 md:mt-3 text-xs uppercase tracking-[0.18em] text-muted md:self-end">
              <span aria-hidden className="mr-1">—</span>
              {attribution}
            </figcaption>
          )}
        </div>
      </figure>
    );
  }

  return (
    <figure
      className={cn(
        "my-10 pl-6 border-l-2 border-[color:var(--accent-2-60)]",
        className,
      )}
    >
      <blockquote className="font-display italic text-xl md:text-2xl text-ink leading-snug">
        {quote}
      </blockquote>
      {attribution && (
        <figcaption className="mt-3 text-sm text-muted">— {attribution}</figcaption>
      )}
    </figure>
  );
}
