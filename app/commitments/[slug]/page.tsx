import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
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

// Pick up to `n` photos from a competency's photo directory as preview tiles.
function previewPhotos(photoDir: string, photoCount: number, n: number) {
  const out: string[] = [];
  const max = Math.min(n, photoCount);
  for (let i = 1; i <= max; i++) {
    out.push(`${photoDir}/${String(i).padStart(2, "0")}.jpg`);
  }
  return out;
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

  const heroPhotos = c.competencies
    .map((comp) => `${comp.photoDir}/01.jpg`)
    .slice(0, 4);

  return (
    <main className="bg-paper">
      {/* ============================================================
          OPENER — one viewport. Crumb + headline + collage, centered.
          ============================================================ */}
      <section className="min-h-[calc(100svh-4rem)] flex flex-col justify-center py-8 md:py-10 overflow-hidden">
        <Container>
          <Link
            href="/#commitments"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            My Commitment to Students
          </Link>
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
                Commitment {c.ord} of {COMMITMENTS.length}
              </p>
              <h1
                className="mt-4 font-display font-normal text-ink leading-[0.92] tracking-[-0.03em] text-balance"
                style={{ fontSize: "clamp(2rem, 5vw + 0.5rem, 5rem)" }}
              >
                <em className="font-normal text-[color:var(--accent-2)]">
                  {c.tagline}
                </em>
              </h1>
              <p className="mt-6 text-[0.98rem] md:text-[1.02rem] leading-[1.55] text-[color:var(--text-body)] max-w-[56ch]">
                {c.intro}
              </p>
            </div>
            <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-2 md:gap-3">
              {heroPhotos.map((src, i) => (
                <figure
                  key={src}
                  className={`photo-tile reveal relative ${
                    i === 0 ? "row-span-2 aspect-[3/5]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${c.title} — preview ${i + 1}`}
                    fill
                    sizes="(min-width: 768px) 20vw, 45vw"
                    className="object-cover"
                  />
                </figure>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          COMPETENCY MODULES — each fits its own viewport.
          No watermark numerals, compact sub-cards, photo strip inline.
          ============================================================ */}
      {c.competencies.map((comp, ci) => {
        const photos = previewPhotos(comp.photoDir, comp.photoCount, 3);
        const isEven = ci % 2 === 0;
        return (
          <section
            key={comp.slug}
            className={`min-h-[calc(100svh-4rem)] flex flex-col justify-center py-6 md:py-8 ${
              ci === 0 ? "border-t-[3px]" : "border-t"
            } border-ink/90 ${isEven ? "bg-highlight" : "bg-paper"}`}
          >
            <Container>
              {/* Module header — compact, pull quote beside the title */}
              <div className="grid grid-cols-12 gap-4 md:gap-6 items-end mb-4 md:mb-5">
                <div className="col-span-12 md:col-span-7">
                  <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
                    Competency {ci + 1} of {c.competencies.length}
                  </p>
                  <h2
                    className="mt-1.5 font-display text-ink leading-[0.98] tracking-[-0.025em] text-balance"
                    style={{
                      fontSize: "clamp(1.4rem, 2.6vw + 0.3rem, 2.35rem)",
                    }}
                  >
                    {comp.title}.
                  </h2>
                </div>
                <p className="col-span-12 md:col-span-5 font-display italic text-sm md:text-base text-[color:var(--text-body)] leading-[1.35] border-l-2 border-[color:var(--hot)] pl-4">
                  {comp.pull}
                </p>
              </div>

              {/* Body: photo column + 2x2 sub-competency cards */}
              <div className="grid grid-cols-12 gap-4 md:gap-5">
                {/* Photo column — 2 stacked landscape shots */}
                <div className="col-span-12 md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-3 content-start self-start">
                  {photos.slice(0, 2).map((src, pi) => (
                    <figure
                      key={src}
                      className="photo-tile relative aspect-[4/3] md:aspect-[3/2]"
                    >
                      <Image
                        src={src}
                        alt={`${comp.title} — ${pi + 1}`}
                        fill
                        sizes="(min-width: 768px) 28vw, 45vw"
                        className="object-cover"
                      />
                    </figure>
                  ))}
                </div>

                {/* Sub-competency grid — 2x2 compact */}
                <ol className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-2.5 self-start">
                  {comp.subs.map((sub, si) => (
                    <li
                      key={si}
                      className="bg-paper border-l-[3px] border-[color:var(--hot)] p-2.5 md:p-3"
                    >
                      <div className="flex items-baseline gap-2">
                        <span className="font-display italic text-[color:var(--hot)] text-sm leading-none shrink-0">
                          {String(si + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-[0.88rem] md:text-[0.95rem] text-ink leading-[1.18] tracking-[-0.01em]">
                          {sub.title}
                        </h3>
                      </div>
                      <ul className="mt-1.5 space-y-0.5">
                        {sub.bullets.map((b, bi) => (
                          <li
                            key={bi}
                            className="text-[0.74rem] md:text-[0.78rem] leading-[1.35] text-[color:var(--text-body)] pl-3 relative before:content-['—'] before:absolute before:left-0 before:text-[color:var(--hot)]"
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>
            </Container>
          </section>
        );
      })}

      {/* Prev / Next commitment nav */}
      <section className="border-t-[3px] border-ink bg-ink text-paper">
        <Container className="py-8 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href={`/commitments/${prev.slug}`}
              className="group flex items-start gap-4 md:border-r md:border-paper/20 md:pr-10"
            >
              <ArrowLeft
                size={20}
                className="text-[color:var(--hot)] mt-1 shrink-0 transition-transform group-hover:-translate-x-1"
              />
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-paper/60">
                  Previous
                </p>
                <p className="mt-1.5 font-display text-lg md:text-xl leading-tight text-paper">
                  {prev.tagline}
                </p>
              </div>
            </Link>
            <Link
              href={`/commitments/${next.slug}`}
              className="group flex items-start justify-between gap-4 md:pl-10 md:text-right"
            >
              <div className="md:order-1 md:ml-auto">
                <p className="text-[11px] uppercase tracking-[0.22em] text-paper/60">
                  Next
                </p>
                <p className="mt-1.5 font-display text-lg md:text-xl leading-tight text-paper">
                  {next.tagline}
                </p>
              </div>
              <ArrowUpRight
                size={20}
                className="text-[color:var(--hot)] mt-1 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:order-2"
              />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
