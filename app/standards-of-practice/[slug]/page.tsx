import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { AutoSlider } from "@/components/auto-slider";
import { STANDARDS, getStandard } from "@/content/standards";

export function generateStaticParams() {
  return STANDARDS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getStandard(slug);
  if (!s) return {};
  return {
    title: `${s.title} — Standards of Practice — Rhonda Tidgwell`,
    description: s.pull,
  };
}

export default async function StandardDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getStandard(slug);
  if (!s) notFound();

  const idx = STANDARDS.findIndex((x) => x.slug === s.slug);
  const next = STANDARDS[(idx + 1) % STANDARDS.length];

  return (
    <main className="bg-paper">
      {/* Crumb */}
      <Container className="pt-12 md:pt-16">
        <Link
          href="/standards-of-practice"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted hover:text-accent transition-colors"
        >
          <ArrowLeft size={14} />
          The Standards of Practice
        </Link>
      </Container>

      {/* Numeral-as-headline opener */}
      <section className="pt-10 md:pt-16 pb-16 md:pb-24 overflow-hidden">
        <Container>
          <div className="md:grid md:grid-cols-12 md:gap-6 md:items-end">
            <div className="md:col-span-4">
              <p
                className="h-numeral text-ink select-none"
                style={{ fontSize: "clamp(8rem, 22vw, 20rem)" }}
                aria-hidden
              >
                {s.num}
              </p>
              <p className="sr-only">Standard {s.ord}.</p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-muted">
                Standard {s.ord} of 5
              </p>
            </div>
            <div className="md:col-span-8 mt-8 md:mt-0 md:pb-6">
              <h1 className="h-display-xl font-display font-normal text-ink text-balance">
                {s.title}.
              </h1>
              <p className="mt-6 font-display italic text-xl md:text-2xl text-[color:var(--text-body)] leading-[1.25] max-w-2xl">
                {s.pull}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Slider — only when photos exist */}
      {s.photoDir && s.photoCount > 0 && (
        <AutoSlider
          src={s.photoDir}
          count={s.photoCount}
          alt={s.title}
        />
      )}

      {/* Obligations — numbered editorial list */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="md:grid md:grid-cols-12 md:gap-10">
            <div className="md:col-span-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
                What the standard demands
              </p>
              <h2 className="mt-6 h-display-md font-display text-ink">
                The four
                <br />
                <em className="font-normal text-[color:var(--accent-2)]">
                  non-negotiables.
                </em>
              </h2>
            </div>
            <ol className="md:col-span-8 mt-10 md:mt-2 border-t border-ink/90">
              {s.obligations.map((o, i) => (
                <li
                  key={i}
                  className="grid grid-cols-12 gap-4 md:gap-6 py-7 md:py-9 border-b border-rule items-baseline"
                >
                  <span className="col-span-2 md:col-span-1 font-display italic text-[color:var(--accent-2)] text-2xl md:text-3xl leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="col-span-10 md:col-span-11 text-[1rem] md:text-[1.125rem] leading-[1.55] text-[color:var(--text-body)]">
                    {o}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Next standard */}
      <section className="border-t border-ink/90">
        <Container className="py-12 md:py-16">
          <Link
            href={`/standards-of-practice/${next.slug}`}
            className="group flex items-center justify-between gap-6"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
                Next standard
              </p>
              <p className="mt-3 font-display text-2xl md:text-[2rem] leading-tight text-ink group-hover:text-accent transition-colors">
                <span className="font-display italic text-[color:var(--accent-2)] mr-3">
                  {next.num}.
                </span>
                {next.title}
              </p>
            </div>
            <ArrowUpRight
              size={28}
              className="text-accent shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </Container>
      </section>
    </main>
  );
}
