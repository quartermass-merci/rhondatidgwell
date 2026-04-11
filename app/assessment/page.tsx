import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";

export const metadata = {
  title: "Assessment & Feedback",
  description:
    "Growing Success in practice — conferences, levelled exemplars, and a comment bank students can actually use.",
};

const ROOMS = [
  {
    num: "01",
    href: "/assessment/growing-success",
    title: "Growing Success in Practice",
    blurb:
      "My working synthesis of Ontario's assessment policy, plus the levelling exemplars I use day-to-day.",
    photo: "/images/competencies/6/01.jpg",
  },
  {
    num: "02",
    href: "/assessment/conferences",
    title: "Student-Led Conferences",
    blurb:
      "The model I use to put students in the driver's seat at reporting time.",
    photo: "/images/competencies/6/02.jpg",
  },
  {
    num: "03",
    href: "/assessment/feedback",
    title: "Descriptive Feedback",
    blurb:
      "Report card comments written so a kid can act on them tomorrow.",
    photo: "/images/competencies/6/03.jpg",
  },
];

export default function Assessment() {
  return (
    <main id="main" className="flex-1">
      {/* HERO */}
      <section className="min-h-[calc(100svh-4rem)] flex items-center py-8 md:py-10 overflow-hidden">
        <Container>
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
                Assessment &amp; Feedback
              </p>
              <h1
                className="mt-4 font-display font-normal text-ink leading-[0.88] tracking-[-0.035em] text-balance"
                style={{ fontSize: "clamp(2.25rem, 6vw + 0.5rem, 5.75rem)" }}
              >
                Assessment is a{" "}
                <em className="font-normal text-[color:var(--accent-2)]">
                  conversation,
                </em>{" "}
                not a verdict.
              </h1>
              <p className="mt-6 text-[1rem] leading-[1.6] text-[color:var(--text-body)] max-w-[56ch]">
                Mine is rooted in Ontario&apos;s Growing Success — clear
                learning goals, co-created success criteria, feedback a kid
                can actually use, and more than one way to show what they
                know. Grades come last and they surprise no one.
              </p>
            </div>
            <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-3">
              <figure className="photo-tile relative row-span-2 aspect-[3/5]">
                <Image
                  src="/images/competencies/6/01.jpg"
                  alt="Assessment in practice"
                  fill
                  sizes="(min-width: 768px) 22vw, 45vw"
                  className="object-cover"
                />
              </figure>
              <figure className="photo-tile relative aspect-square">
                <Image
                  src="/images/competencies/6/02.jpg"
                  alt="Conference notes"
                  fill
                  sizes="(min-width: 768px) 22vw, 45vw"
                  className="object-cover"
                />
              </figure>
              <figure className="photo-tile relative aspect-square">
                <Image
                  src="/images/competencies/6/03.jpg"
                  alt="Student feedback"
                  fill
                  sizes="(min-width: 768px) 22vw, 45vw"
                  className="object-cover"
                />
              </figure>
            </div>
          </div>
        </Container>
      </section>

      {/* ROOMS — INK INVERTED 3-up, fits one viewport */}
      <section className="min-h-[calc(100svh-4rem)] flex flex-col justify-center border-t-[3px] border-ink bg-ink text-paper py-8 md:py-10">
        <Container>
          <div className="flex items-end justify-between gap-6 mb-6 md:mb-8">
            <h2
              className="font-display text-paper leading-[0.92] tracking-[-0.03em] text-balance"
              style={{ fontSize: "clamp(1.75rem, 3.6vw + 0.4rem, 3.25rem)" }}
            >
              Three sides of{" "}
              <em className="font-normal text-[color:var(--citrus)]">
                the conversation
              </em>
              .
            </h2>
            <p className="hidden md:block text-[11px] uppercase tracking-[0.22em] text-paper/60 pb-2">
              Growing Success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {ROOMS.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="photo-tile reveal group relative h-[48vh] md:h-[58vh]"
              >
                <Image
                  src={r.photo}
                  alt={r.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
                <span className="tile-corner" />
                <div className="relative z-10 p-5 md:p-6 flex flex-col justify-between h-full">
                  <span className="font-display italic text-[color:var(--citrus)] text-[2.5rem] md:text-[3.5rem] leading-[0.78]">
                    {r.num}
                  </span>
                  <div className="tile-caption">
                    <h3 className="font-display text-paper leading-[1.05] tracking-[-0.015em] text-[1.2rem] md:text-[1.45rem] text-balance">
                      {r.title}.
                    </h3>
                    <p className="mt-1.5 text-[0.85rem] leading-[1.45] text-paper/95">
                      {r.blurb}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[color:var(--citrus)] font-semibold">
                      Read more
                      <ArrowUpRight
                        size={13}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
