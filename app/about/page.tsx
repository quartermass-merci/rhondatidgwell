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
      {/* Quote-as-headline opener — monumental. Glyph escapes container. */}
      <section className="pt-20 md:pt-32 pb-20 md:pb-28 overflow-hidden">
        <Container>
          <div className="md:grid md:grid-cols-12 md:gap-10">
            <div className="md:col-span-12 relative">
              <span
                aria-hidden
                className="absolute -left-4 md:-left-20 -top-20 md:-top-36 font-display not-italic leading-[0.7] text-[color:var(--accent-2)] select-none pointer-events-none"
                style={{ fontSize: "clamp(12rem, 26vw, 26rem)" }}
              >
                &ldquo;
              </span>
              <h1 className="relative font-display italic font-normal text-ink text-balance leading-[0.96] tracking-[-0.028em]"
                  style={{ fontSize: "clamp(2.5rem, 7vw + 0.5rem, 7rem)" }}>
                When a flower doesn&apos;t bloom,
                <br />
                you fix the{" "}
                <em className="not-italic text-[color:var(--accent-2)]">
                  environment
                </em>{" "}
                in which it grows.
                <br />
                <span className="text-outline">Not the flower.</span>
              </h1>
              <p className="mt-10 text-xs uppercase tracking-[0.22em] text-muted">
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

      {/* Identity rule — now a stacked editorial manifesto. Each word is
          monumental and owns its own row. */}
      <section className="border-t-[3px] border-ink py-16 md:py-24">
        <Container>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted">
            What I bring
          </p>
          <dl className="mt-10 border-t border-rule">
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
                className="grid grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 border-b border-rule items-baseline"
              >
                <dt className="col-span-2 md:col-span-1 font-display italic text-lg md:text-xl text-[color:var(--accent-2)]">
                  {String(i + 1).padStart(2, "0")}
                </dt>
                <dd className="col-span-10 md:col-span-11">
                  <p className="font-display text-ink leading-[0.92] tracking-[-0.035em]"
                     style={{ fontSize: "clamp(2.5rem, 8vw + 0.5rem, 7rem)" }}>
                    {i === 1 ? (
                      <em className="not-italic">{item.word}.</em>
                    ) : (
                      <>{item.word}.</>
                    )}
                  </p>
                  <p className="mt-5 font-display italic text-xl md:text-2xl text-muted max-w-[32ch]">
                    {item.sub}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
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
