import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Prose } from "@/components/container";
import { PullQuote } from "@/components/pull-quote";
import { CtaStrip } from "@/components/cta-strip";

export const metadata = {
  description:
    "Teacher-Librarian and ESL teacher at Rivercrest Junior School. Twenty-four years in TDSB classrooms and learning commons. Inquiry-driven, equity-forward, still in love with the work.",
};

const FACTS = [
  {
    meta: "CURRENT ROLE",
    headline: "Teacher-Librarian + ESL",
    sub: "Rivercrest Junior School · 2021–present",
  },
  {
    meta: "EXPERIENCE",
    headline: "Twenty-four years in TDSB",
    sub: "K–5 Library · Grades 4–8 Classroom · Special Ed · ESL",
  },
  {
    meta: "APPROACH",
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
      {/* Hero — asymmetric 7/5 split, fluid clamp headline */}
      <Container className="pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
          <div className="md:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
              Rhonda Tidgwell · Toronto
            </p>
            <h1 className="mt-6 h-display-xl font-display font-normal text-ink text-balance">
              Twenty-four years in classrooms and libraries.
            </h1>
            <p className="mt-7 font-display italic text-xl md:text-2xl text-ink/80 max-w-xl">
              Teacher-Librarian and ESL Teacher, Rivercrest Junior School.
            </p>
            <Prose className="mt-8">
              <p>
                I&apos;m the Teacher-Librarian and Multi-Language Learning (ESL)
                Teacher at Rivercrest Junior School — K–5 library literacy,
                STEAM and coding, small-group English language learning, and
                Special Ed resource. I&apos;ve been in TDSB classrooms since
                2002.
              </p>
              <p>
                This site is my portfolio. The teaching, the library work, the
                student artifacts, and the thinking behind all of it.
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
          </div>
          <div className="md:col-span-5 md:pt-4">
            <figure className="relative aspect-[4/5] overflow-hidden bg-highlight">
              <Image
                src="/images/rhonda.jpg"
                alt="Rhonda Tidgwell, Teacher-Librarian at Rivercrest Junior School"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </figure>
            <figcaption className="mt-4 text-xs uppercase tracking-[0.16em] text-muted">
              Rivercrest Junior School · K–5
            </figcaption>
          </div>
        </div>
      </Container>

      {/* Proof — typographic stack, no boxes, rules between */}
      <Container className="pb-24">
        <div className="border-t-2 border-ink/90">
          <dl className="divide-y divide-[color:var(--rule)]">
            {FACTS.map((f) => (
              <div
                key={f.meta}
                className="grid grid-cols-12 gap-6 py-7 md:py-8 items-baseline"
              >
                <dt className="col-span-12 md:col-span-3 text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                  {f.meta}
                </dt>
                <dd className="col-span-12 md:col-span-9">
                  <p className="font-display text-[1.75rem] md:text-[2.25rem] leading-[1.1] text-ink">
                    {f.headline}
                  </p>
                  <p className="mt-2 text-sm text-muted">{f.sub}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      {/* Hero pull-quote — now left-aligned with hanging quote */}
      <Container className="pb-24">
        <PullQuote
          style="hero"
          quote="Every student deserves a 'Ms. Tidgwell year.'"
          attribution="Student nomination, World Teachers' Day Award"
        />
      </Container>

      {/* Table of contents — editorial ToC, not a card grid */}
      <Container className="pb-28">
        <div className="md:grid md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
              Table of contents
            </p>
            <h2 className="mt-4 h-display-md font-display text-ink">
              Four rooms,
              <br />
              twenty-four years,
              <br />
              <em className="font-normal">every claim backed.</em>
            </h2>
          </div>
          <ol className="md:col-span-8 mt-10 md:mt-2">
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
                  className="group grid grid-cols-12 gap-4 py-7 md:py-8 items-baseline hover:bg-highlight/40 -mx-4 px-4 transition-colors"
                >
                  <span className="col-span-2 md:col-span-1 font-display italic text-[color:var(--accent-70)] text-lg">
                    {s.num}
                  </span>
                  <div className="col-span-10 md:col-span-9">
                    <h3 className="font-display text-2xl md:text-[1.75rem] text-ink leading-tight group-hover:text-accent transition-colors">
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
