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
      {/* Editorial header — no Hero shell, no card */}
      <section className="pt-16 md:pt-24 pb-10 md:pb-14">
        <Container>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
            About · Philosophy
          </p>
          <h1 className="mt-6 h-display-xl font-display font-normal text-ink max-w-4xl text-balance">
            What I believe about{" "}
            <em className="font-normal">kids, classrooms, and books.</em>
          </h1>
        </Container>
      </section>

      {/* Opening essay with marginalia pull-quote */}
      <Container className="pb-16 md:pb-20">
        <div className="md:grid md:grid-cols-12 md:gap-12">
          {/* Left margin: pull-quote as marginalia, sticky on scroll */}
          <aside className="md:col-span-4 md:pt-6">
            <figure className="md:sticky md:top-24">
              <p
                aria-hidden
                className="font-display text-5xl text-[color:var(--accent-40)] leading-none"
              >
                &ldquo;
              </p>
              <blockquote className="mt-2 font-display italic text-xl md:text-2xl text-ink leading-snug">
                When a flower doesn&apos;t bloom, you fix the environment in
                which it grows. Not the flower.
              </blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-[0.18em] text-muted">
                — Alexander Den Heijer
              </figcaption>
            </figure>
          </aside>

          {/* Main essay */}
          <div className="md:col-span-8 mt-12 md:mt-0 max-w-[60ch]">
            <p className="dropcap text-[1.125rem] md:text-[1.1875rem] leading-[1.65] text-[color:var(--text-body)]">
              The classroom is a room where kids practice being people. The
              library is the same room with better light and more books. My
              job in both is to build the environment where students take
              risks, get things wrong in public, and figure out they&apos;re
              capable of more than they thought.
            </p>
            <p className="mt-6 text-[1.0625rem] md:text-[1.1875rem] leading-[1.65] text-[color:var(--text-body)]">
              I teach through inquiry because kids learn when they&apos;re the
              ones asking. Success criteria get co-created so students know
              what &quot;good&quot; looks like before they&apos;re asked to
              make it. Universal Design for Learning is the baseline, not the
              accommodation — because the alternative is teaching most kids
              that school is something that happens to them.
            </p>
            <p className="mt-6 text-[1.0625rem] md:text-[1.1875rem] leading-[1.65] text-[color:var(--text-body)]">
              Equity isn&apos;t a unit. It runs through Culturally Responsive
              and Relevant Pedagogy and Indigenous Ways of Knowing, and it
              shows up in who gets to see themselves in the books on the
              shelf and whether the kid in the back of the classroom is being
              reached or managed. Gholdy Muhammad&apos;s framework anchors
              how I think about identity and genius in the work. Twenty-four
              years in, I still know the difference.
            </p>
            <p className="mt-6 text-[1.0625rem] md:text-[1.1875rem] leading-[1.65] text-[color:var(--text-body)]">
              After two-plus decades, the work still looks like this: meet
              the kid where they are, and trust them with real questions. The
              rest is craft.
            </p>
          </div>
        </div>
      </Container>

      {/* Identity rule — three words, full-bleed, separated by hairlines */}
      <section className="border-y border-ink/90 py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x divide-[color:var(--rule)]">
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
                className={`text-center md:px-8 ${i === 0 ? "md:pl-0" : ""} ${
                  i === 2 ? "md:pr-0" : ""
                }`}
              >
                <p className="font-display text-3xl md:text-[2.25rem] uppercase tracking-[0.2em] text-ink leading-tight">
                  {item.word}
                </p>
                <p className="mt-3 text-sm text-muted max-w-[22ch] mx-auto">
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
