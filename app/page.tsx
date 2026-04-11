import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { COMMITMENTS, HOME_INTRO_QUOTE } from "@/content/commitments";

export const metadata = {
  description:
    "Rhonda Tidgwell — Teacher-Librarian and ESL teacher at Rivercrest Junior School. Twenty-four years in TDSB classrooms and learning commons.",
};

const CORNERSTONES = [
  {
    href: "/classroom",
    eyebrow: "One",
    title: "Classroom Practice",
    blurb:
      "Nineteen years of Grades 4–8 in four TDSB schools. The choices I make every morning to reach the kid in front of me.",
    photo: "/images/competencies/4/02.jpg",
  },
  {
    href: "/library",
    eyebrow: "Two",
    title: "Library & Learning Commons",
    blurb:
      "Rivercrest's library is my other classroom — makerspace, digital citizenship, and a collection I've been growing since 2021.",
    photo: "/images/competencies/15/02.jpg",
  },
  {
    href: "/assessment",
    eyebrow: "Three",
    title: "Assessment & Feedback",
    blurb:
      "Conferences, exemplars, and comments kids can actually use. Grades come last and surprise no one.",
    photo: "/images/competencies/6/02.jpg",
  },
  {
    href: "/leadership",
    eyebrow: "Four",
    title: "Leadership & Community",
    blurb:
      "The work outside my own classroom: staff PD, mentoring, equity, and the PLCs that keep me learning.",
    photo: "/images/competencies/14/03.jpg",
  },
] as const;

export default function Home() {
  return (
    <main id="main" className="flex-1">
      {/* ============================================================
          HERO — fits the viewport. Photo left, name right. No hire-me
          chips, no subtitle line beneath the name.
          ============================================================ */}
      <section className="min-h-[calc(100svh-4rem)] flex items-center py-8 md:py-10 overflow-hidden">
        <Container>
          <div className="grid grid-cols-12 gap-5 md:gap-8 items-center">
            <figure className="col-span-12 md:col-span-5 relative aspect-[4/5] bg-highlight overflow-hidden">
              <Image
                src="/images/rhonda.jpg"
                alt="Rhonda Tidgwell"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-[center_22%]"
                priority
              />
              <span
                aria-hidden
                className="absolute top-0 right-0 h-20 w-20 bg-[color:var(--hot)]"
                style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
              />
              <figcaption className="absolute left-0 bottom-0 right-0 px-4 py-3 bg-paper/95 backdrop-blur-sm">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
                  Rhonda Tidgwell
                </span>
              </figcaption>
            </figure>

            <div className="col-span-12 md:col-span-7 md:pl-4">
              <h1
                className="font-display font-normal text-ink leading-[0.84] tracking-[-0.04em]"
                style={{ fontSize: "clamp(3.25rem, 10vw + 0.5rem, 10rem)" }}
              >
                Rhonda
                <br />
                <span className="relative inline-block">
                  <em className="font-normal text-[color:var(--accent-2)]">
                    Tidgwell.
                  </em>
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

              <p className="mt-7 text-[0.98rem] md:text-base leading-[1.6] text-[color:var(--text-body)] max-w-[54ch]">
                I've spent twenty-four years in TDSB rooms — nineteen of them
                teaching Grades 4 to 8, and the last five running the library
                and learning commons at Rivercrest Junior School. I teach K–5
                library literacy, STEAM and coding, small-group English
                language learners, and I'm the school's Special Education
                resource. I like a room where kids know they're known.
              </p>

              <div className="mt-7">
                <Link href="/about" className="hot-link text-base font-medium">
                  Read more about how I teach →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          COMMITMENTS — section fills viewport. Compact header. Row
          of 5 photo tiles with strong, legible overlays.
          ============================================================ */}
      <section
        id="commitments"
        className="border-b-[3px] border-ink scroll-mt-20 bg-highlight min-h-[100svh] flex flex-col"
      >
        <Container className="pt-12 md:pt-16 pb-6 md:pb-8">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2
              className="font-display text-ink leading-[0.9] tracking-[-0.035em] max-w-2xl"
              style={{ fontSize: "clamp(2.25rem, 5.5vw + 0.5rem, 5.5rem)" }}
            >
              My commitment to{" "}
              <em className="font-normal text-[color:var(--accent-2)]">
                students
              </em>
              <span className="text-[color:var(--hot)]">.</span>
            </h2>
            <blockquote className="font-display italic text-base md:text-lg text-[color:var(--text-body)] leading-[1.35] max-w-sm border-l-2 border-[color:var(--hot)] pl-4 shrink-0">
              &ldquo;{HOME_INTRO_QUOTE}&rdquo;
              <footer className="mt-2 text-[10px] not-italic uppercase tracking-[0.2em] text-muted">
                — A student nomination for the World Teachers&apos; Day Award
              </footer>
            </blockquote>
          </div>
        </Container>

        <ol className="grid grid-cols-2 md:grid-cols-5 gap-0 border-t-[1.5px] border-ink/90 flex-1">
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
                  className="photo-tile reveal group flex h-full flex-col justify-between min-h-[22rem] md:min-h-0"
                >
                  <Image
                    src={photo}
                    alt={c.title}
                    fill
                    sizes="(min-width: 768px) 20vw, 50vw"
                    className="object-cover"
                  />
                  <span className="tile-corner" />

                  <div className="relative z-10 p-5 md:p-6 flex flex-col justify-end h-full">
                    <div className="tile-caption">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--citrus)]">
                        {c.competencies.length}{" "}
                        {c.competencies.length === 1
                          ? "competency"
                          : "competencies"}
                      </p>
                      <h3 className="mt-2 font-display text-paper leading-[1.05] tracking-[-0.015em] text-[1.1rem] md:text-[1.25rem] text-balance">
                        {c.title}.
                      </h3>
                      <p className="mt-2 font-display italic text-paper/95 text-[0.85rem] md:text-[0.92rem] leading-[1.3]">
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
          PULL QUOTE — wraps cleanly, fits the viewport.
          ============================================================ */}
      <section className="py-16 md:py-24 bg-paper">
        <Container>
          <figure>
            <blockquote
              className="font-display italic font-normal text-ink leading-[1.02] tracking-[-0.02em] text-balance"
              style={{ fontSize: "clamp(1.75rem, 4.5vw + 0.5rem, 4.5rem)" }}
            >
              <span aria-hidden className="text-[color:var(--hot)] mr-1">
                &ldquo;
              </span>
              Every student deserves a{" "}
              <em className="font-normal not-italic inline-block">
                <span className="font-display italic text-[color:var(--accent-2)]">
                  &lsquo;Ms.&nbsp;Tidgwell year.&rsquo;
                </span>
              </em>
              <span aria-hidden className="text-[color:var(--hot)] ml-1">
                &rdquo;
              </span>
            </blockquote>
            <figcaption className="mt-5 text-[11px] uppercase tracking-[0.22em] text-muted">
              — A student nomination for the World Teachers&apos; Day Award
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* ============================================================
          FOUR CORNERSTONES — full-bleed bento on ink, fits viewport.
          ============================================================ */}
      <section
        id="cornerstones"
        className="border-t-[3px] border-ink bg-ink text-paper py-14 md:py-20 overflow-hidden scroll-mt-20"
      >
        <Container>
          <h2
            className="font-display leading-[0.92] tracking-[-0.03em] text-paper text-balance max-w-5xl"
            style={{ fontSize: "clamp(2rem, 5vw + 0.5rem, 4.75rem)" }}
          >
            Four Cornerstones of My{" "}
            <em className="font-normal text-[color:var(--citrus)]">
              Teaching Practice
            </em>
            .
          </h2>

          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            {CORNERSTONES.map((cs, i) => {
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
                  className={`photo-tile reveal group relative min-h-[18rem] md:min-h-[22rem] ${span}`}
                >
                  <Image
                    src={cs.photo}
                    alt={cs.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className="tile-corner" />
                  <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between h-full">
                    <span className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--citrus)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                      Cornerstone {cs.eyebrow}
                    </span>
                    <div className="tile-caption max-w-xl">
                      <h3
                        className="font-display text-paper leading-[1.02] tracking-[-0.02em] text-balance"
                        style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.4rem)" }}
                      >
                        {cs.title}.
                      </h3>
                      <p className="mt-3 text-[0.95rem] md:text-base leading-[1.5] text-paper/95 max-w-prose">
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
    </main>
  );
}
