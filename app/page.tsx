import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container, Prose } from "@/components/container";
import { CtaStrip } from "@/components/cta-strip";
import { STANDARDS } from "@/content/standards";

export const metadata = {
  description:
    "Teacher-Librarian and ESL teacher at Rivercrest Junior School. Twenty-four years in TDSB classrooms and learning commons. Inquiry-driven, equity-forward, still in love with the work.",
};

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
      {/* Hero — photo-led, face-cropped. The big display headline is gone;
          the bio carries the page now. */}
      <Container className="pt-12 md:pt-20 pb-20 md:pb-28">
        <div className="md:grid md:grid-cols-12 md:gap-10 items-start">
          {/* Photo column — face-focused via object-position */}
          <figure className="md:col-span-5 md:col-start-1 relative aspect-[4/5] overflow-hidden bg-highlight">
            <Image
              src="/images/rhonda.jpg"
              alt="Rhonda Tidgwell, Teacher-Librarian at Rivercrest Junior School"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover object-[center_22%]"
              priority
            />
            <figcaption className="absolute left-0 bottom-0 right-0 px-4 py-3 bg-paper/90 text-[11px] uppercase tracking-[0.18em] text-muted">
              Rivercrest Junior School · K–5
            </figcaption>
          </figure>

          {/* Bio column */}
          <div className="md:col-span-7 mt-8 md:mt-0 md:pt-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
              Rhonda Tidgwell{" "}
              <span className="text-[color:var(--accent-2)] mx-1">§</span>{" "}
              Toronto
            </p>
            <h1 className="mt-6 font-display font-normal text-ink leading-[1.02] tracking-[-0.02em] text-balance"
                style={{ fontSize: "clamp(1.875rem, 2.6vw + 0.75rem, 3rem)" }}>
              Teacher-Librarian &amp; ESL Teacher,{" "}
              <em className="font-normal text-[color:var(--accent-2)]">
                Rivercrest Junior School.
              </em>
            </h1>
            <Prose className="mt-8">
              <p>
                I&apos;m currently the Teacher-Librarian and Multi-Language
                Learning (ESL) Teacher at Rivercrest Junior School: K–5
                library literacy, STEAM and coding, small-group English
                language learning, and Special Ed resource. I&apos;ve been in
                TDSB classrooms since 2002.
              </p>
              <p>
                I am committed to moving beyond &lsquo;best practice&rsquo;
                by modelling innovation and critical thinking skills in the
                classroom.
              </p>
              <p>
                My goal is to challenge and support each student to achieve
                excellence in academic growth and global citizenship through
                the delivery of differentiated, inquiry-based instruction to
                the whole child.
              </p>
              <p>
                This site is my portfolio that details my career as a
                teacher, a teacher-librarian, and an advocate for every
                student I come across.
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
        </div>
      </Container>

      {/* The Standards of Practice — bento grid, asymmetric.
          Replaces the old "On the record" stack. Each card links to its
          standard's detail page. */}
      <section className="border-y-[3px] border-ink py-16 md:py-24">
        <Container>
          <div className="md:grid md:grid-cols-12 md:gap-10 md:items-end mb-12 md:mb-16">
            <div className="md:col-span-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted">
                Ontario College of Teachers
              </p>
              <h2 className="mt-5 font-display text-ink leading-[0.94] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(2.5rem, 7.5vw + 0.5rem, 7rem)" }}>
                The Standards
                <br />
                of{" "}
                <em className="font-normal text-[color:var(--accent-2)]">
                  Practice.
                </em>
              </h2>
            </div>
            <div className="md:col-span-5 mt-6 md:mt-0">
              <p className="font-display italic text-xl md:text-2xl text-[color:var(--text-body)] leading-[1.25] max-w-md">
                The five things every certified Ontario teacher is held to.
                Here&apos;s how I read each one — and where to find the
                receipts.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 grid-flow-row-dense border-t border-l border-ink/90">
            {STANDARDS.map((s, i) => {
              const span =
                i === 0
                  ? "md:col-span-3 md:row-span-2"
                  : i === 1
                    ? "md:col-span-3"
                    : "md:col-span-2";

              return (
                <Link
                  key={s.slug}
                  href={`/standards-of-practice/${s.slug}`}
                  className={`group relative flex flex-col justify-between border-r border-b border-ink/90 p-7 md:p-10 transition-colors hover:bg-highlight/60 ${span}`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-display italic text-[color:var(--accent-2)] text-3xl md:text-[3.5rem] leading-[0.85]">
                      {s.num}
                    </span>
                    <ArrowUpRight
                      size={22}
                      className="text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 mt-2"
                    />
                  </div>
                  <div className={i === 0 ? "mt-16 md:mt-32" : "mt-10 md:mt-16"}>
                    <p className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                      Standard {s.ord}
                    </p>
                    <h3
                      className={`mt-3 font-display text-ink leading-[0.98] tracking-[-0.02em] group-hover:text-accent transition-colors ${
                        i === 0
                          ? "text-[1.875rem] md:text-[3.25rem]"
                          : "text-[1.5rem] md:text-[1.875rem]"
                      }`}
                    >
                      {s.title}.
                    </h3>
                    <p
                      className={`mt-4 font-display italic text-[color:var(--text-body)] max-w-[36ch] leading-[1.3] ${
                        i === 0 ? "text-lg md:text-xl" : "text-base"
                      }`}
                    >
                      {s.pull}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
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
