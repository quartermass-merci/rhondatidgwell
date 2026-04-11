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
      {/* HERO — fits viewport */}
      <section className="min-h-[calc(100svh-4rem)] flex items-center py-8 md:py-10 overflow-hidden">
        <Container>
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
                Classroom Practice
              </p>
              <h1
                className="mt-4 font-display font-normal text-ink leading-[0.88] tracking-[-0.035em] text-balance"
                style={{ fontSize: "clamp(2.25rem, 6vw + 0.5rem, 5.75rem)" }}
              >
                Nineteen years,
                <br />
                <em className="font-normal text-[color:var(--accent-2)]">
                  four schools,
                </em>{" "}
                one room at a time.
              </h1>
              <p className="mt-6 text-[1rem] leading-[1.6] text-[color:var(--text-body)] max-w-[56ch]">
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

      {/* ROOMS — stacked editorial index, fits one viewport */}
      <section className="min-h-[calc(100svh-4rem)] flex flex-col justify-center border-t-[3px] border-ink bg-highlight py-6 md:py-8">
        <Container>
          <div className="flex items-end justify-between gap-6 mb-4 md:mb-5">
            <h2
              className="font-display text-ink leading-[0.92] tracking-[-0.03em] text-balance"
              style={{ fontSize: "clamp(1.6rem, 3.2vw + 0.4rem, 2.8rem)" }}
            >
              Three rooms inside{" "}
              <em className="font-normal text-[color:var(--accent-2)]">
                one classroom
              </em>
              .
            </h2>
            <p className="hidden md:block text-[11px] uppercase tracking-[0.22em] text-muted pb-2">
              Grades 4–8 · Four schools
            </p>
          </div>
          <ol className="border-y-[1.5px] border-ink/25 divide-y-[1.5px] divide-ink/25">
            {ROOMS.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="group grid grid-cols-12 gap-4 md:gap-6 items-center py-3 md:py-4 hover:bg-paper/50 transition-colors px-1"
                >
                  <span className="col-span-2 md:col-span-1 font-display italic text-[color:var(--hot)] text-3xl md:text-5xl leading-none">
                    {r.num}
                  </span>
                  <figure className="photo-tile col-span-4 md:col-span-2 relative aspect-[4/3]">
                    <Image
                      src={r.photo}
                      alt={r.title}
                      fill
                      sizes="(min-width: 768px) 16vw, 33vw"
                      className="object-cover"
                    />
                  </figure>
                  <div className="col-span-6 md:col-span-8">
                    <h3
                      className="font-display text-ink leading-[1.05] tracking-[-0.02em] text-balance"
                      style={{ fontSize: "clamp(1.05rem, 1.6vw + 0.4rem, 1.7rem)" }}
                    >
                      {r.title}.
                    </h3>
                    <p className="mt-1 md:mt-1.5 text-[0.85rem] md:text-[0.92rem] text-[color:var(--text-body)] leading-[1.45] max-w-[52ch]">
                      {r.blurb}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={22}
                    className="hidden md:block md:col-span-1 text-[color:var(--hot)] ml-auto transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </main>
  );
}
