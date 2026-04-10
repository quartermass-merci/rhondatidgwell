import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { AutoSlider } from "@/components/auto-slider";
import { COMMITMENTS, getCommitment } from "@/content/commitments";

export function generateStaticParams() {
  return COMMITMENTS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCommitment(slug);
  if (!c) return {};
  return {
    title: `${c.title} — Rhonda Tidgwell`,
    description: c.tagline,
  };
}

export default async function CommitmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCommitment(slug);
  if (!c) notFound();

  const idx = COMMITMENTS.findIndex((x) => x.slug === c.slug);
  const next = COMMITMENTS[(idx + 1) % COMMITMENTS.length];
  const prev = COMMITMENTS[(idx - 1 + COMMITMENTS.length) % COMMITMENTS.length];

  return (
    <main className="bg-paper">
      {/* Crumb */}
      <Container className="pt-12 md:pt-16">
        <Link
          href="/#commitments"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted hover:text-accent transition-colors"
        >
          <ArrowLeft size={14} />
          My Commitment to Students
        </Link>
      </Container>

      {/* Opener — numeral + title */}
      <section className="pt-10 md:pt-16 pb-16 md:pb-24 overflow-hidden">
        <Container>
          <div className="md:grid md:grid-cols-12 md:gap-6 md:items-end">
            <div className="md:col-span-4">
              <p
                className="h-numeral text-ink select-none"
                style={{ fontSize: "clamp(8rem, 22vw, 20rem)" }}
                aria-hidden
              >
                {c.num}
              </p>
              <p className="sr-only">Commitment {c.ord}.</p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-muted">
                Commitment {c.ord} of {COMMITMENTS.length}
              </p>
            </div>
            <div className="md:col-span-8 mt-8 md:mt-0 md:pb-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
                {c.title}
              </p>
              <h1 className="mt-4 h-display-xl font-display font-normal text-ink text-balance">
                <em className="font-normal text-[color:var(--accent-2)]">
                  {c.tagline}
                </em>
              </h1>
              <p className="mt-6 font-display italic text-xl md:text-2xl text-[color:var(--text-body)] leading-[1.3] max-w-2xl">
                {c.intro}
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-muted">
                {c.competencies.length}{" "}
                {c.competencies.length === 1 ? "competency" : "competencies"}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Competency modules */}
      {c.competencies.map((comp, ci) => (
        <section
          key={comp.slug}
          className={`${ci === 0 ? "border-t-[3px]" : "border-t"} border-ink/90 py-20 md:py-28`}
        >
          <Container>
            <div className="md:grid md:grid-cols-12 md:gap-10 md:items-start">
              <div className="md:col-span-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
                  Competency {comp.ord}
                </p>
                <h2 className="mt-5 h-display-md font-display text-ink">
                  {comp.title}.
                </h2>
                <p className="mt-6 font-display italic text-lg md:text-xl text-[color:var(--text-body)] leading-[1.3] max-w-md">
                  {comp.pull}
                </p>
              </div>
              <div className="md:col-span-8 mt-10 md:mt-0">
                <ol className="border-t border-ink/90">
                  {comp.subs.map((sub, si) => (
                    <li
                      key={si}
                      className="grid grid-cols-12 gap-4 md:gap-6 py-7 md:py-9 border-b border-rule"
                    >
                      <span className="col-span-12 md:col-span-2 font-display italic text-[color:var(--accent-2)] text-2xl md:text-3xl leading-none">
                        {String(si + 1).padStart(2, "0")}
                      </span>
                      <div className="col-span-12 md:col-span-10">
                        <h3 className="font-display text-[1.25rem] md:text-[1.5rem] text-ink leading-tight">
                          {sub.title}
                        </h3>
                        <ul className="mt-4 space-y-2">
                          {sub.bullets.map((b, bi) => (
                            <li
                              key={bi}
                              className="text-[0.95rem] md:text-base leading-[1.55] text-[color:var(--text-body)] pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-[color:var(--accent-2)]"
                            >
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Container>

          {/* Slower marquee slider for this competency's photos */}
          {comp.photoCount > 0 && (
            <div className="mt-16 md:mt-20">
              <AutoSlider
                src={comp.photoDir}
                count={comp.photoCount}
                alt={comp.title}
              />
            </div>
          )}
        </section>
      ))}

      {/* Prev / Next commitment nav */}
      <section className="border-t-[3px] border-ink">
        <Container className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6">
            <Link
              href={`/commitments/${prev.slug}`}
              className="group flex items-start gap-4 md:border-r md:border-rule md:pr-10"
            >
              <ArrowLeft
                size={22}
                className="text-accent mt-2 shrink-0 transition-transform group-hover:-translate-x-1"
              />
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
                  Previous commitment
                </p>
                <p className="mt-3 font-display text-xl md:text-[1.75rem] leading-tight text-ink group-hover:text-accent transition-colors">
                  <span className="font-display italic text-[color:var(--accent-2)] mr-3">
                    {prev.num}.
                  </span>
                  {prev.tagline}
                </p>
              </div>
            </Link>
            <Link
              href={`/commitments/${next.slug}`}
              className="group flex items-start justify-between gap-4 md:pl-10 md:text-right"
            >
              <div className="md:order-1 md:ml-auto">
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
                  Next commitment
                </p>
                <p className="mt-3 font-display text-xl md:text-[1.75rem] leading-tight text-ink group-hover:text-accent transition-colors">
                  <span className="font-display italic text-[color:var(--accent-2)] mr-3">
                    {next.num}.
                  </span>
                  {next.tagline}
                </p>
              </div>
              <ArrowUpRight
                size={22}
                className="text-accent mt-2 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:order-2"
              />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
