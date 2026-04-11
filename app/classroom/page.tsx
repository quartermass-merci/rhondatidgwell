import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";

export const metadata = {
  title: "Classroom Practice",
  description:
    "Nineteen years of teaching grades 4 through 8 across four TDSB middle schools.",
};

const ROOMS = [
  {
    num: "01",
    href: "/classroom/teaching-inquiry",
    title: "Teaching & Inquiry",
    blurb:
      "How I run a room — co-created success criteria, scaffolded enough for every kid to find a way in.",
    photo: "/images/competencies/4/03.jpg",
  },
  {
    num: "02",
    href: "/classroom/lesson-planning",
    title: "Lesson Planning",
    blurb: "Long-range plans and unit plans that hold together for a whole term.",
    photo: "/images/competencies/5/02.jpg",
  },
  {
    num: "03",
    href: "/classroom/differentiation",
    title: "Differentiation & Special Ed",
    blurb:
      "MART work, IEP development, and the accommodations that kids actually use.",
    photo: "/images/competencies/2/02.jpg",
  },
];

export default function Classroom() {
  return (
    <main id="main" className="flex-1">
      {/* HERO */}
      <section className="min-h-[calc(100svh-4rem)] flex items-center py-10 md:py-12 overflow-hidden">
        <Container>
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
                Classroom Practice
              </p>
              <h1
                className="mt-5 font-display font-normal text-ink leading-[0.88] tracking-[-0.035em] text-balance"
                style={{ fontSize: "clamp(2.5rem, 7vw + 0.5rem, 7rem)" }}
              >
                Nineteen years,
                <br />
                <em className="font-normal text-[color:var(--accent-2)]">
                  four schools,
                </em>{" "}
                one room at a time.
              </h1>
              <p className="mt-7 text-[1rem] md:text-[1.05rem] leading-[1.6] text-[color:var(--text-body)] max-w-[56ch]">
                I taught Grades 4 through 8 in four TDSB middle schools before
                moving into the library in 2021. My classroom was
                inquiry-driven, scaffolded, and built around the kid in front
                of me — never around the teacher&apos;s guide.
              </p>
            </div>
            <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-3">
              <figure className="photo-tile relative row-span-2 aspect-[3/5]">
                <Image
                  src="/images/competencies/4/01.jpg"
                  alt="Classroom work"
                  fill
                  sizes="(min-width: 768px) 22vw, 45vw"
                  className="object-cover"
                />
              </figure>
              <figure className="photo-tile relative aspect-square">
                <Image
                  src="/images/competencies/2/01.jpg"
                  alt="Student inquiry"
                  fill
                  sizes="(min-width: 768px) 22vw, 45vw"
                  className="object-cover"
                />
              </figure>
              <figure className="photo-tile relative aspect-square">
                <Image
                  src="/images/competencies/5/01.jpg"
                  alt="Lesson planning"
                  fill
                  sizes="(min-width: 768px) 22vw, 45vw"
                  className="object-cover"
                />
              </figure>
            </div>
          </div>
        </Container>
      </section>

      {/* ROOMS GRID */}
      <section className="border-t-[3px] border-ink bg-highlight py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {ROOMS.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="photo-tile reveal group relative min-h-[22rem] md:min-h-[26rem]"
              >
                <Image
                  src={r.photo}
                  alt={r.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
                <span className="tile-corner" />
                <div className="relative z-10 p-6 md:p-7 flex flex-col justify-between h-full">
                  <span className="font-display italic text-[color:var(--citrus)] text-[3rem] md:text-[3.75rem] leading-[0.78] drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)]">
                    {r.num}
                  </span>
                  <div className="tile-caption">
                    <h3 className="font-display text-paper leading-[1.05] tracking-[-0.015em] text-[1.25rem] md:text-[1.4rem] text-balance">
                      {r.title}.
                    </h3>
                    <p className="mt-2 text-[0.9rem] leading-[1.45] text-paper/95">
                      {r.blurb}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[color:var(--citrus)] font-semibold">
                      Read more
                      <ArrowUpRight
                        size={14}
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
