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
        "group relative flex flex-col rounded-sm border border-rule bg-paper p-6 md:p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_30px_-12px_rgba(26,31,46,0.18)]",
        className,
      )}
    >
      <div className="absolute top-5 right-5 text-muted group-hover:text-accent transition-colors">
        <Icon size={18} aria-hidden />
      </div>
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted pr-10">
        {label}
      </p>
      <h3 className="mt-3 font-display text-xl md:text-2xl leading-snug text-ink">
        {title}
      </h3>
      <p className="mt-3 text-sm text-ink/80 leading-relaxed">{blurb}</p>

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
