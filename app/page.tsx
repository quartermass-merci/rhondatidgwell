import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { Ticker } from "@/components/ticker";
import { COMMITMENTS, HOME_INTRO_QUOTE } from "@/content/commitments";

export const metadata = {
  description:
    "Teacher-Librarian and ESL teacher at Rivercrest Junior School. Twenty-four years in TDSB classrooms and learning commons. Inquiry-driven, equity-forward, still in love with the work.",
};

// The four cornerstones — now photo-led bento tiles, each points
// into one of the site's top-level sections.
const CORNERSTONES = [
  {
    num: "I",
    href: "/classroom",
    title: "Classroom Practice",
    blurb:
      "Nineteen years. Four TDSB schools. Lessons, inquiry, and the daily choices that reach every kid.",
    photo: "/images/competencies/4/02.jpg",
    chip: "Grade 4–8",
    tint: "marine",
  },
  {
    num: "II",
    href: "/library",
    title: "Library &amp; Learning Commons",
    blurb:
      "The Rivercrest library is my other classroom. Makerspace, digital citizenship, the collection I've been building since 2021.",
    photo: "/images/competencies/15/02.jpg",
    chip: "Since 2021",
    tint: "hot",
  },
  {
    num: "III",
    href: "/assessment",
    title: "Assessment &amp; Feedback",
    blurb:
      "Growing Success in the room — conferences, exemplars, a comment bank, feedback kids can actually use.",
    photo: "/images/competencies/6/02.jpg",
    chip: "Growing Success",
    tint: "citrus",
  },
  {
    num: "IV",
    href: "/leadership",
    title: "Leadership &amp; Community",
    blurb:
      "The work that happens outside my own classroom: staff PD, mentoring, equity, and the committees that keep me growing.",
    photo: "/images/competencies/14/03.jpg",
    chip: "PLC · Mentor",
    tint: "sky",
  },
] as const;

const CHIP_TONE = {
  marine: "chip-marine",
  hot: "chip-hot",
  citrus: "chip-citrus",
  sky: "chip-sky",
} as const;

export default function Home() {
  return (
    <main id="main" className="flex-1">
      {/* ============================================================
          HERO — dense 12-col, photo left, name right. Much tighter
          padding than before. Name is monumental. Meta strip with
          chip + underline. A single primary CTA.
          ============================================================ */}
      <section className="pt-10 md:pt-14 pb-12 md:pb-16 overflow-hidden">
        <Container>
          <div className="grid grid-cols-12 gap-5 md:gap-8 items-start">
            {/* Photo — tilted frame, coral tape strip */}
            <figure className="col-span-12 md:col-span-5 relative aspect-[4/5] bg-highlight overflow-hidden">
              <Image
                src="/images/rhonda.jpg"
                alt="Rhonda Tidgwell, Teacher-Librarian at Rivercrest Junior School"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-[center_22%]"
                priority
              />
              {/* Coral corner strip */}
              <span
                aria-hidden
                className="absolute top-0 right-0 h-20 w-20 bg-[color:var(--hot)]"
                style={{
                  clipPath: "polygon(100% 0, 100% 100%, 0 0)",
                }}
              />
              {/* Name caption bar */}
              <figcaption className="absolute left-0 bottom-0 right-0 px-4 py-3 bg-paper/95 backdrop-blur-sm flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
                  Rhonda Tidgwell
                </span>
                <span className="chip chip-marine">TDSB · 24 yrs</span>
              </figcaption>
            </figure>

            {/* Name + bio */}
            <div className="col-span-12 md:col-span-7 md:pl-4">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="chip chip-hot">Open for Sept 2026</span>
                <span className="chip">Toronto</span>
                <span className="chip chip-sky">K–5 · ESL · Library</span>
              </div>

              <h1
                className="mt-5 font-display font-normal text-ink leading-[0.84] tracking-[-0.04em]"
                style={{ fontSize: "clamp(3.25rem, 10.5vw + 0.5rem, 11rem)" }}
              >
                Rhonda
                <br />
                <span className="relative inline-block">
                  <em className="font-normal text-[color:var(--accent-2)]">
                    Tidgwell.
                  </em>
                  {/* Hand-drawn citrus underline */}
                  <svg
                    aria-hidden
                    viewBox="0 0 600 40"
                    preserveAspectRatio="none"
                    className="absolute left-0 right-0 -bottom-2 w-full h-[0.35em] draw-line"
                  >
                    <path
                      d="M8 26 C 140 4, 300 36, 592 14"
                      fill="none"
                      stroke="var(--hot)"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="mt-6 font-display italic text-xl md:text-2xl text-[color:var(--text-body)] leading-[1.28] max-w-[36ch]">
                Teacher-Librarian &amp; ESL Teacher at Rivercrest Junior
                School.
              </p>

              <p className="mt-5 text-[0.98rem] md:text-base leading-[1.55] text-[color:var(--text-body)] max-w-[56ch]">
                K–5 library literacy, STEAM and coding, small-group English
                language learning, and Special Ed resource — at Rivercrest
                since 2021, in TDSB classrooms since 2002. Committed to
                moving beyond &lsquo;best practice&rsquo; by modelling
                innovation and critical thinking with every kid who walks
                in.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-5">
                <Link href="/about" className="btn-hot">
                  Read my philosophy
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="#commitments"
                  className="hot-link text-sm font-medium"
                >
                  Or jump to the commitments
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          TICKER — infinite marquee of what she does. Kinetic header.
          ============================================================ */}
      <Ticker
        tone="ink"
        items={[
          "Teacher-Librarian",
          "K–5 STEAM + Coding",
          "Multi-Language Learner Support",
          "Inquiry-Driven",
          "Makerspace",
          "Forest of Reading",
          "Equity-Forward",
          "Since 2002",
        ]}
      />

      {/* ============================================================
          COMMITMENTS — visually dense row of 5. Photo backgrounds,
          hover coral corner, kinetic numeral drift on scroll.
          ============================================================ */}
      <section
        id="commitments"
        className="border-b-[3px] border-ink scroll-mt-24 bg-highlight"
      >
        {/* Section header — tight, one line of meta + one line of title */}
        <Container className="pt-14 md:pt-20 pb-8 md:pb-12">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="chip chip-hot">The heart of the work</span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-muted">
                  5 commitments · 16 competencies
                </span>
              </div>
              <h2
                className="font-display text-ink leading-[0.92] tracking-[-0.035em]"
                style={{ fontSize: "clamp(2.5rem, 7.5vw + 0.5rem, 7.5rem)" }}
              >
                My commitment to{" "}
                <em className="font-normal text-[color:var(--accent-2)]">
                  students
                </em>
                <span className="text-[color:var(--hot)]">.</span>
              </h2>
            </div>
            <blockquote className="font-display italic text-base md:text-lg text-[color:var(--text-body)] leading-[1.35] max-w-sm border-l-2 border-[color:var(--hot)] pl-4 shrink-0">
              &ldquo;{HOME_INTRO_QUOTE}&rdquo;
              <footer className="mt-2 text-[10px] not-italic uppercase tracking-[0.2em] text-muted">
                — Student nomination, World Teachers&apos; Day Award
              </footer>
            </blockquote>
          </div>
        </Container>

        {/* Row of 5 photo-backed commitment tiles */}
        <ol className="grid grid-cols-2 md:grid-cols-5 gap-0 border-t-[1.5px] border-ink/90">
          {COMMITMENTS.map((c, i) => {
            const photo = `${c.competencies[0].photoDir}/01.jpg`;
            const lastOnMobile = i === COMMITMENTS.length - 1 && i % 2 === 0;
            return (
              <li
                key={c.slug}
                className={`relative border-ink/90 ${
                  i < COMMITMENTS.length - 1 ? "md:border-r-[1.5px]" : ""
                } ${i % 2 === 0 ? "border-r-[1.5px] md:border-r-[1.5px]" : ""} ${
                  lastOnMobile ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <Link
                  href={`/commitments/${c.slug}`}
                  className="photo-tile reveal group flex h-full flex-col justify-between min-h-[20rem] md:min-h-[32rem]"
                >
                  <Image
                    src={photo}
                    alt={c.title}
                    fill
                    sizes="(min-width: 768px) 20vw, 50vw"
                    className="object-cover"
                  />
                  <span className="tile-corner" />

                  {/* Overlay content — all above the gradient ::after */}
                  <div className="relative z-10 p-5 md:p-6 flex flex-col justify-between h-full">
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-display italic text-[color:var(--citrus)] text-[3.25rem] md:text-[4.5rem] leading-[0.75] num-drift drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                        {c.num}
                      </span>
                      <ArrowUpRight
                        size={22}
                        className="text-paper mt-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
                      />
                    </div>
                    <div className="mt-auto">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--citrus)]">
                        {c.competencies.length}{" "}
                        {c.competencies.length === 1
                          ? "competency"
                          : "competencies"}
                      </p>
                      <h3 className="mt-2 font-display text-paper leading-[1.02] tracking-[-0.015em] text-[1.15rem] md:text-[1.3rem] text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                        {c.title}.
                      </h3>
                      <p className="mt-2 font-display italic text-paper/90 text-[0.85rem] md:text-[0.95rem] leading-[1.3]">
                        {c.tagline}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      {/* ============================================================
          BIG PULL QUOTE — compact one-liner, bright.
          ============================================================ */}
      <section className="py-14 md:py-20 overflow-hidden bg-paper">
        <Container>
          <figure className="relative">
            <blockquote
              className="font-display italic font-normal text-ink leading-[1] tracking-[-0.03em] whitespace-nowrap"
              style={{ fontSize: "clamp(1.5rem, 5vw, 5rem)" }}
            >
              <span aria-hidden className="text-[color:var(--hot)] mr-1">
                &ldquo;
              </span>
              Every student deserves a{" "}
              <span className="relative inline-block">
                <span className="ink-swap" data-text="‘Ms. Tidgwell year.’">
                  &lsquo;Ms.&nbsp;Tidgwell&nbsp;year.&rsquo;
                </span>
              </span>
              <span aria-hidden className="text-[color:var(--hot)] ml-1">
                &rdquo;
              </span>
            </blockquote>
            <figcaption className="mt-5 text-[11px] uppercase tracking-[0.22em] text-muted">
              — Student nomination, World Teachers&apos; Day Award
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* ============================================================
          CORNERSTONES — bento of 4 photo-led tiles replacing the old
          editorial ToC. Big, visual, less scrolling, more instant.
          ============================================================ */}
      <section className="border-t-[3px] border-ink bg-ink text-paper py-16 md:py-24 overflow-hidden">
        <Container>
          <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="chip chip-citrus">Table of Contents</span>
              </div>
              <h2
                className="font-display leading-[0.92] tracking-[-0.03em] text-paper text-balance"
                style={{ fontSize: "clamp(2.25rem, 5.5vw + 0.5rem, 5.5rem)" }}
              >
                Four cornerstones.
                <br />
                <em className="font-normal text-[color:var(--citrus)]">
                  One teaching career.
                </em>
              </h2>
            </div>
          </div>

          {/* 2x2 bento on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            {CORNERSTONES.map((cs, i) => {
              // Asymmetric spans: I spans 7, II spans 5; III spans 5, IV spans 7
              const span = [
                "md:col-span-7",
                "md:col-span-5",
                "md:col-span-5",
                "md:col-span-7",
              ][i];
              return (
                <Link
                  key={cs.href}
                  href={cs.href}
                  className={`photo-tile reveal group relative min-h-[18rem] md:min-h-[26rem] ${span}`}
                  style={{
                    "--tilt-from": i % 2 === 0 ? "-1.5deg" : "1.5deg",
                    "--tilt-to": "0deg",
                  } as React.CSSProperties}
                >
                  <Image
                    src={cs.photo}
                    alt={cs.title.replace("&amp;", "&")}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className="tile-corner" />
                  <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between h-full">
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-display italic text-[color:var(--citrus)] text-[3rem] md:text-[4.5rem] leading-[0.78] drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                        {cs.num}
                      </span>
                      <span className={`chip ${CHIP_TONE[cs.tint]}`}>
                        {cs.chip}
                      </span>
                    </div>
                    <div className="mt-auto max-w-xl">
                      <h3
                        className="font-display text-paper leading-[1.0] tracking-[-0.02em] text-balance drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
                        style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
                        dangerouslySetInnerHTML={{ __html: cs.title + "." }}
                      />
                      <p className="mt-3 text-[0.95rem] md:text-base leading-[1.5] text-paper/90 max-w-prose">
                        {cs.blurb}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[color:var(--citrus)] font-semibold">
                        Open the room
                        <ArrowUpRight
                          size={16}
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================================
          CTA STRIP — loud, kinetic, gradient-driven.
          ============================================================ */}
      <section className="relative overflow-hidden border-t-[3px] border-ink">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.9]"
          style={{
            background:
              "linear-gradient(100deg, var(--hot) 0%, #FF8A3D 30%, var(--citrus) 65%, var(--hot) 100%)",
            backgroundSize: "300% 100%",
            animation: "grad-drift 6s linear infinite",
          }}
        />
        <Container className="relative py-14 md:py-20">
          <div className="md:grid md:grid-cols-12 md:gap-8 md:items-end">
            <h2
              className="md:col-span-8 font-display text-ink leading-[0.9] tracking-[-0.03em] text-balance"
              style={{ fontSize: "clamp(2.25rem, 5.5vw + 0.5rem, 5.5rem)" }}
            >
              Looking forward to{" "}
              <em className="font-normal">September 2026.</em>
            </h2>
            <div className="md:col-span-4 mt-6 md:mt-0">
              <p className="text-base md:text-lg text-ink leading-[1.45] mb-6">
                I&apos;d love to hear what&apos;s happening in your building.
                Classroom teacher, teacher-librarian, or something else — I&apos;m
                open to the right fit.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3.5 text-sm font-medium hover:bg-[color:var(--accent-2)] transition-colors"
              >
                Get in touch
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
