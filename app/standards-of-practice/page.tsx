import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { STANDARDS } from "@/content/standards";

export const metadata: Metadata = {
  title: "The Standards of Practice — Rhonda Tidgwell",
  description:
    "How I read the five Ontario College of Teachers standards, and where the work shows up in twenty-four years of TDSB classrooms.",
};

export default function StandardsOfPracticePage() {
  return (
    <main className="bg-paper">
      {/* Opener — quote-as-headline, monumental */}
      <section className="pt-20 md:pt-28 pb-16 md:pb-24 overflow-hidden">
        <Container>
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
            Ontario College of Teachers
          </p>
          <h1 className="mt-6 h-display-xl font-display text-ink text-balance">
            The five standards,
            <br />
            twenty-four years
            <br />
            of <em className="font-normal text-[color:var(--accent-2)]">putting them to work.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-[color:var(--text-body)] leading-relaxed">
            The Ontario College of Teachers publishes a short list of
            standards every certified teacher in the province is held to.
            They&apos;re the spine of the profession. Each section below
            takes one standard, names what it actually demands, and shows
            where the work lives in my practice.
          </p>
        </Container>
      </section>

      {/* The bento grid — 5 standards, asymmetric */}
      <Container className="pb-28">
        <div className="grid grid-cols-1 md:grid-cols-6 grid-flow-row-dense border-t border-l border-ink/90">
          {STANDARDS.map((s, i) => {
            // Bento layout: #1 spans wide (3 cols), #2 spans 3 cols,
            // #3 spans 2, #4 spans 2, #5 spans 2 — total balances to a
            // 6-col grid across two rows.
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
                  <h2
                    className={`mt-3 font-display text-ink leading-[0.98] tracking-[-0.02em] group-hover:text-accent transition-colors ${
                      i === 0
                        ? "text-[1.875rem] md:text-[3.25rem]"
                        : "text-[1.5rem] md:text-[1.875rem]"
                    }`}
                  >
                    {s.title}.
                  </h2>
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
    </main>
  );
}
