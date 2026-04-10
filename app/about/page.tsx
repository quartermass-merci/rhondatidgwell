import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/container";

export const metadata = {
  title: "Teaching Philosophy",
  description:
    "The philosophy behind twenty-four years of teaching, library work, and equity practice in the TDSB.",
};

export default function Philosophy() {
  return (
    <main id="main" className="flex-1">
      {/* Quote-as-headline opener (critique P3).
          No eyebrow. The pull-quote IS the H1 — treated visually as
          a full-bleed editorial statement, with attribution as
          marginalia in the right column. */}
      <section className="pt-20 md:pt-32 pb-16 md:pb-24">
        <Container>
          <div className="md:grid md:grid-cols-12 md:gap-10">
            <div className="md:col-span-10 md:col-start-1 relative">
              <span
                aria-hidden
                className="absolute -left-2 md:-left-6 -top-8 md:-top-12 font-display not-italic text-[5rem] md:text-[7rem] leading-none text-[color:var(--accent-2-60)]"
              >
                &ldquo;
              </span>
              <h1 className="font-display italic font-normal text-ink text-balance leading-[1.08] tracking-[-0.015em]"
                  style={{ fontSize: "clamp(2.25rem, 5vw + 0.5rem, 4.5rem)" }}>
                When a flower doesn&apos;t bloom, you fix the environment in
                which it grows. Not the flower.
              </h1>
              <p className="mt-8 text-xs uppercase tracking-[0.22em] text-muted">
                — Alexander Den Heijer · the sentence I keep coming back to
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Opening essay — left-aligned, 8-col well with a sticky eyebrow
          label in the left margin. No pull-quote sidebar this time
          (the quote IS the headline above). */}
      <Container className="pb-16 md:pb-20 border-t border-rule pt-14 md:pt-20">
        <div className="md:grid md:grid-cols-12 md:gap-10">
          <aside className="md:col-span-3">
            <p className="md:sticky md:top-24 text-xs uppercase tracking-[0.2em] text-muted">
              Philosophy
            </p>
          </aside>
          <div className="md:col-span-9 mt-6 md:mt-0 max-w-[60ch]">
            <p className="dropcap text-[1.125rem] md:text-[1.1875rem] leading-[1.65] text-[color:var(--text-body)]">
              The classroom is a room where kids practice being people. The
              library is the same room with better light and more books. My
              job in both is to build the environment where students take
              risks, get things wrong in public, and figure out they&apos;re
              capable of more than they thought.
            </p>
            <p className="mt-6 text-[1.0625rem] md:text-[1.1875rem] leading-[1.65] text-[color:var(--text-body)]">
              I teach through inquiry because kids learn when they&apos;re
              the ones asking. Success criteria get co-created so students
              know what &quot;good&quot; looks like before they&apos;re
              asked to make it. Universal Design for Learning is the
              baseline, not the accommodation — because the alternative is
              teaching most kids that school is something that happens to
              them.
            </p>
            <p className="mt-6 text-[1.0625rem] md:text-[1.1875rem] leading-[1.65] text-[color:var(--text-body)]">
              Equity isn&apos;t a unit. It runs through Culturally Responsive
              and Relevant Pedagogy and Indigenous Ways of Knowing, and it
              shows up in who gets to see themselves in the books on the
              shelf and whether the kid in the back of the classroom is
              being reached or managed. Gholdy Muhammad&apos;s framework
              anchors how I think about identity and genius in the work.
              Twenty-four years in, I still know the difference.
            </p>
            <p className="mt-6 text-[1.0625rem] md:text-[1.1875rem] leading-[1.65] text-[color:var(--text-body)]">
              After two-plus decades, the work still looks like this: meet
              the kid where they are, and trust them with real questions.
              The rest is craft.
            </p>
          </div>
        </div>
      </Container>

      {/* Identity rule — left-aligned within each column now
          (minor: was centered). Three columns, hairline dividers,
          display word + supporting copy. */}
      <section className="border-y border-ink/90 py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x divide-[color:var(--rule)]">
            {[
              {
                word: "Teamwork",
                sub: "Every good classroom is a collaboration.",
              },
              {
                word: "Organization",
                sub: "Structure is what makes creative risk safe.",
              },
              {
                word: "Empathy",
                sub: "Meet the kid where they actually are.",
              },
            ].map((item, i) => (
              <div
                key={item.word}
                className={`md:px-8 ${i === 0 ? "md:pl-0" : ""} ${
                  i === 2 ? "md:pr-0" : ""
                }`}
              >
                <p className="font-display text-3xl md:text-[2.25rem] uppercase tracking-[0.18em] text-ink leading-tight">
                  {item.word}
                </p>
                <p className="mt-3 text-sm text-muted max-w-[24ch]">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-20">
        <Link
          href="/about/journey"
          className="inline-flex items-center text-sm font-medium text-ink hover:text-accent transition-colors min-h-[44px] border-b border-ink hover:border-accent px-1"
        >
          See the journey
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </Container>
    </main>
  );
}
