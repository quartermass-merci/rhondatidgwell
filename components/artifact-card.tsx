import { FileText, Presentation, Image as ImageIcon, FileType } from "lucide-react";
import { getCompetency } from "@/lib/competencies";
import { cn } from "@/lib/cn";

export type ArtifactCardProps = {
  label: string; // e.g. "LESSON PLAN · 2019"
  title: string;
  blurb: string;
  fileUrl: string;
  fileType: "pdf" | "pptx" | "png" | "jpg" | "docx";
  year?: number;
  competencyTags?: number[];
  ctaLabel?: string;
  className?: string;
};

const ICON = {
  pdf: FileText,
  pptx: Presentation,
  png: ImageIcon,
  jpg: ImageIcon,
  docx: FileType,
} as const;

// Audit M3 — drop shadow replaced with a left-rule affordance + underline on
// the title and a moving arrow on the CTA.
export function ArtifactCard({
  label,
  title,
  blurb,
  fileUrl,
  fileType,
  competencyTags = [],
  ctaLabel = "View the artifact →",
  className,
}: ArtifactCardProps) {
  const Icon = ICON[fileType];
  const ariaLabel = `${title} — ${fileType.toUpperCase()}, opens in new tab`;

  return (
    <article
      className={cn(
        "group relative flex flex-col bg-paper pl-6 pr-6 py-7 md:pl-7",
        "border-l-2 border-rule transition-colors duration-200",
        "hover:border-l-[var(--accent)]",
        className,
      )}
    >
      <div className="absolute top-6 right-5 text-muted group-hover:text-accent transition-colors">
        <Icon size={18} aria-hidden />
      </div>
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted pr-10">
        {label}
      </p>
      <h3 className="mt-3 font-display text-xl md:text-2xl leading-snug text-ink">
        {title}
      </h3>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-[color:var(--text-body)]">
        {blurb}
      </p>

      {competencyTags.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {competencyTags.map((id) => {
            const c = getCompetency(id);
            if (!c) return null;
            return (
              <li
                key={id}
                className="rounded-full border border-rule px-2.5 py-0.5 text-[11px] text-muted"
                title={c.label}
              >
                {c.short}
              </li>
            );
          })}
        </ul>
      )}

      <a
        href={fileUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="mt-6 inline-flex items-center text-sm font-medium text-accent hover:underline underline-offset-4"
      >
        {ctaLabel}
      </a>
    </article>
  );
}
