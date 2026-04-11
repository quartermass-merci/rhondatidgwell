import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";

export const metadata = {
  title: "Leadership & Community",
  description:
    "Staff PD, mentorship, equity work, and the committees and PLCs behind twenty-four years in TDSB.",
};

const ROOMS = [
  {
    num: "01",
    era: "Every day",
    href: "/leadership/equity",
    title: "Equity, GSA & Social Justice",
    blurb:
      "Equity isn't a unit. It's how you run the room, every day of the year.",
    photo: "/images/competencies/3/01.jpg",
  },
  {
    num: "02",
    era: "Since 2008",
    href: "/leadership/mentorship",
    title: "Mentorship & Staff PD",
    blurb:
      "The best way to learn something is to have to teach it to another teacher.",
    photo: "/images/competencies/14/01.jpg",
  },
  {
    num: "03",
    era: "24 years in",
    href: "/leadership/professional-learning",
    title: "Professional Learning",
    blurb:
      "Twenty-four years of figuring out how to do the job a little better.",
    photo: "/images/competencies/16/01.jpg",
  },
];

export default function Leadership() {
  return (
    <main id="main" className="flex-1">
      {/* HERO */}
      <section className="min-h-[calc(100svh-4rem)] flex items-center py-8 md:py-10 overflow-hidden">
        <Container>
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
                Leadership &amp; Community
              </p>
              <h1
                className="mt-4 font-display font-normal text-ink leading-[0.88] tracking-[-0.035em] text-balance"
                style={{ fontSize: "clamp(2.25rem, 6vw + 0.5rem, 5.75rem)" }}
              >
                The work doesn&apos;t{" "}
                <em className="font-normal text-[color:var(--accent-2)]">
                  stop at the door.
                </em>
              </h1>
              <p className="mt-6 text-[1rem] leading-[1.6] text-[color:var(--text-body)] max-w-[56ch]">
                Twenty-four years in TDSB hasn&apos;t just been about teaching
                my own students. It&apos;s been the staff PD I&apos;ve run, the
                candidates I&apos;ve mentored, the committees I&apos;ve sat on,
                and the kids I&apos;ve walked alongside through GSA and social
                justice programming.
              </p>
            </div>
            <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-3">
              <figure className="photo-tile relative row-span-2 aspect-[3/5]">
                <Image
                  src="/images/competencies/14/02.jpg"
                  alt="Leadership work"
                  fill
                  sizes="(min-width: 768px) 22vw, 45vw"
                  className="object-cover"
                />
              </figure>
              <figure className="photo-tile relative aspect-square">
                <Image
                  src="/images/competencies/3/01.jpg"
                  alt="Equity and community"
                  fill
                  sizes="(min-width: 768px) 22vw, 45vw"
                  className="object-cover"
                />
              </figure>
              <figure className="photo-tile relative aspect-square">
                <Image
                  src="/images/competencies/16/01.jpg"
                  alt="Professional learning"
                  fill
                  sizes="(min-width: 768px) 22vw, 45vw"
                  className="object-cover"
                />
              </figure>
            </div>
          </div>
        </Container>
      </section>

      {/* ROOMS — timeline strips */}
      <section className="border-t-[3px] border-ink bg-paper py-10 md:py-14">
        <Container>
          <div className="flex items-end justify-between gap-6 mb-6 md:mb-8">
            <h2
              className="font-display text-ink leading-[0.92] tracking-[-0.03em] text-balance"
              style={{ fontSize: "clamp(1.75rem, 3.6vw + 0.4rem, 3.25rem)" }}
            >
              A career in{" "}
              <em className="font-normal text-[color:var(--accent-2)]">
                three strands
              </em>
              .
            </h2>
            <p className="hidden md:block text-[11px] uppercase tracking-[0.22em] text-muted pb-2">
              TDSB · 24 years
            </p>
          </div>
          <ol className="space-y-3 md:space-y-4">
            {ROOMS.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="group grid grid-cols-12 gap-4 md:gap-6 items-stretch bg-highlight hover:bg-[color:var(--hot)]/8 border-l-[4px] border-[color:var(--hot)] transition-colors"
                >
                  <div className="col-span-7 md:col-span-8 p-4 md:p-5 flex flex-col justify-center">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display italic text-[color:var(--hot)] text-2xl md:text-3xl leading-none">
                        {r.num}
                      </span>
                      <span className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-muted">
                        {r.era}
                      </span>
                    </div>
                    <h3
                      className="mt-2 font-display text-ink leading-[1.05] tracking-[-0.02em] text-balance"
                      style={{ fontSize: "clamp(1.05rem, 1.6vw + 0.4rem, 1.75rem)" }}
                    >
                      {r.title}.
                    </h3>
                    <p className="mt-1.5 text-[0.85rem] md:text-[0.95rem] text-[color:var(--text-body)] leading-[1.5] max-w-[56ch]">
                      {r.blurb}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[color:var(--hot)] font-semibold">
                      Read more
                      <ArrowUpRight
                        size={13}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                  <figure className="photo-tile col-span-5 md:col-span-4 relative min-h-[9rem] md:min-h-[10rem]">
                    <Image
                      src={r.photo}
                      alt={r.title}
                      fill
                      sizes="(min-width: 768px) 30vw, 40vw"
                      className="object-cover"
                    />
                  </figure>
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </main>
  );
}
