import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Prose } from "@/components/container";
import { CtaStrip } from "@/components/cta-strip";

export const metadata = {
  description:
    "Teacher-Librarian and ESL teacher at Rivercrest Junior School. Twenty-four years in TDSB classrooms and learning commons. Inquiry-driven, equity-forward, still in love with the work.",
};

const FACTS = [
  {
    meta: "Role",
    headline: "Teacher-Librarian + ESL",
    sub: "Rivercrest Junior School · 2021–present",
  },
  {
    meta: "Years",
    headline: "Twenty-four in TDSB",
    sub: "K–5 Library · Grades 4–8 Classroom · Special Ed · ESL",
  },
  {
    meta: "Approach",
    headline: "Inquiry-driven, equity-forward",
    sub: "Because curious kids become citizens",
  },
];

const SECTIONS = [
  {
    num: "I",
    href: "/classroom",
    title: "Classroom Practice",
    blurb:
      "Inquiry-driven lesson planning and differentiation across grades four through eight.",
  },
  {
    num: "II",
    href: "/library",
    title: "Library & Learning Commons",
    blurb:
      "The Rivercrest library, the makerspace, digital citizenship, and the collection I've built since 2021.",
  },
  {
    num: "III",
    href: "/assessment",
    title: "Assessment & Feedback",
    blurb:
      "How Growing Success becomes classroom practice — conferences, levelled exemplars, a comment bank, and feedback students can actually use.",
  },
  {
    num: "IV",
    href: "/leadership",
    title: "Leadership & Community",
    blurb:
      "Staff PD, mentorship, equity work, and the committees and PLCs that keep me learning.",
  },
];

export default function Home() {
  return (
    <main id="main" className="flex-1">
      {/* Hero — monumental display escapes the grid. The headline is the
          whole event; the photo docks as an asymmetric inset breaking out
          from the right. Eyebrow moves to marginalia in the left column. */}
      <Container className="pt-12 md:pt-20 pb-24 md:pb-32">
        <div className="md:grid md:grid-cols-12 md:gap-8">
          <aside className="md:col-span-2 md:pt-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
              Rhonda
              <br />
              Tidgwell
              <br />
              <span className="text-[color:var(--accent-2)]">§</span>{" "}
              Toronto
            </p>
          </aside>
          <div className="md:col-span-10 mt-8 md:mt-0">
            <h1 className="h-display-2xl font-display font-normal text-ink text-balance">
              Twenty-four{" "}
              <em className="font-normal text-[color:var(--accent-2)]">
                years
              </em>
              <br />
              in classrooms
              <br />
              &amp; libraries.
            </h1>
          </div>
        </div>

        {/* Photo docks below the headline, breaking out via negative margin
            on md+ so it overlaps the bottom of the display mass. */}
        <div className="mt-14 md:mt-20 md:grid md:grid-cols-12 md:gap-8 items-start">
          <figure className="md:col-span-5 md:col-start-7 md:-mt-40 relative aspect-[4/5] overflow-hidden bg-highlight">
            <Image
              src="/images/rhonda.jpg"
              alt="Rhonda Tidgwell, Teacher-Librarian at Rivercrest Junior School"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
              priority
            />
          </figure>
          <div className="md:col-span-5 md:col-start-1 md:row-start-1 mt-8 md:mt-0 md:pt-4">
            <p className="font-display italic text-2xl md:text-[2rem] leading-[1.15] text-ink/90 max-w-md">
              Teacher-Librarian &amp; ESL Teacher,
              <br />
              Rivercrest Junior School.
            </p>
            <Prose className="mt-8">
              <p>
                I&apos;m the Teacher-Librarian and Multi-Language Learning
                (ESL) Teacher at Rivercrest Junior School — K–5 library
                literacy, STEAM and coding, small-group English language
                learning, and Special Ed resource. I&apos;ve been in TDSB
                classrooms since 2002.
              </p>
              <p>
                This site is my portfolio. The teaching, the library work,
                the student artifacts, and the thinking behind all of it.
              </p>
            </Prose>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/library"
                className="inline-flex items-center rounded-sm bg-accent px-6 py-3.5 text-sm font-medium text-paper hover:bg-accent/90 transition-colors min-h-[44px]"
              >
                Enter the library
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-1 py-3.5 text-sm font-medium text-ink hover:text-accent transition-colors min-h-[44px] border-b border-ink hover:border-accent"
              >
                Read my philosophy
              </Link>
            </div>
            <p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-muted">
              Rivercrest Junior School · K–5
            </p>
          </div>
        </div>
      </Container>

      {/* Proof — reversed marine panel, monumental typographic stack.
          Full-bleed so it reads as a band, not a card. */}
      <section className="reversed py-20 md:py-28">
        <Container>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] rev-muted">
            On the record
          </p>
          <dl className="mt-10 border-t-[3px] border-paper/60 divide-y divide-paper/20">
            {FACTS.map((f, i) => (
              <div
                key={f.meta}
                className="grid grid-cols-12 gap-6 py-10 md:py-14 items-baseline"
              >
                <dt className="col-span-12 md:col-span-1 font-display italic text-lg md:text-xl rev-muted md:pt-4">
                  {String(i + 1).padStart(2, "0")}
                </dt>
                <dd className="col-span-12 md:col-span-8">
                  <p className="font-display text-[2.25rem] md:text-[3.75rem] leading-[0.98] tracking-[-0.025em] text-paper">
                    {f.headline}
                  </p>
                  <p className="mt-4 text-sm rev-muted">{f.sub}</p>
                </dd>
                <dd className="hidden md:block md:col-span-3 text-right">
                  <p className="text-[11px] uppercase tracking-[0.24em] rev-muted">
                    {f.meta}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Pull-quote — monumental, the glyph escapes the container entirely. */}
      <section className="bg-highlight py-24 md:py-36 overflow-hidden">
        <Container>
          <div className="md:grid md:grid-cols-12 md:gap-8">
            <figure className="md:col-span-11 md:col-start-2 relative">
              <span
                aria-hidden
                className="absolute -left-8 md:-left-24 -top-16 md:-top-28 font-display not-italic leading-[0.7] text-[color:var(--accent-2)] select-none pointer-events-none"
                style={{ fontSize: "clamp(10rem, 22vw, 22rem)" }}
              >
                &ldquo;
              </span>
              <blockquote
                className="relative font-display italic font-normal text-ink leading-[0.98] tracking-[-0.025em]"
                style={{ fontSize: "clamp(2.5rem, 7vw + 0.5rem, 6.5rem)" }}
              >
                Every student deserves a
                <br />
                &lsquo;Ms.&nbsp;Tidgwell&nbsp;year.&rsquo;
              </blockquote>
              <figcaption className="mt-10 text-xs uppercase tracking-[0.22em] text-muted">
                — Student nomination, World Teachers&apos; Day Award
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* Table of contents — editorial ToC, headline pushed large */}
      <Container className="py-24 md:py-32">
        <div className="md:grid md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
              Table of contents
            </p>
            <h2 className="mt-6 h-display-lg font-display text-ink">
              Four rooms.
              <br />
              Twenty-four years.
              <br />
              <em className="font-normal text-[color:var(--accent-2)]">
                Every claim backed.
              </em>
            </h2>
          </div>
          <ol className="md:col-span-7 mt-10 md:mt-2">
            {SECTIONS.map((s, i) => (
              <li
                key={s.href}
                className={
                  i === 0
                    ? "border-t border-b border-rule"
                    : "border-b border-rule"
                }
              >
                <Link
                  href={s.href}
                  className="group grid grid-cols-12 gap-4 py-8 md:py-12 items-baseline hover:bg-highlight/40 -mx-4 px-4 transition-colors"
                >
                  <span className="col-span-2 md:col-span-2 font-display italic text-[color:var(--accent-2)] text-3xl md:text-[3rem] leading-none">
                    {s.num}
                  </span>
                  <div className="col-span-10 md:col-span-8">
                    <h3 className="font-display text-[1.75rem] md:text-[2.5rem] text-ink leading-[1.02] group-hover:text-accent transition-colors tracking-[-0.015em]">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-[color:var(--text-body)] max-w-2xl">
                      {s.blurb}
                    </p>
                  </div>
                  <span className="hidden md:flex col-span-2 items-center justify-end text-accent">
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </Container>

      <CtaStrip
        headline="Hiring for a Teacher-Librarian role?"
        body="Let's talk. I'm available for a September 2026 start."
        ctaLabel="Get in touch"
        ctaHref="/contact"
      />
    </main>
  );
}
