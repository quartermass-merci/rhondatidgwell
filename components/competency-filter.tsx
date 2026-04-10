"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { COMPETENCIES, getCompetency } from "@/lib/competencies";
import {
  ARTIFACTS,
  getAllCompetenciesUsed,
  getArtifactsByCompetency,
} from "@/content/artifacts";
import { ArtifactCard } from "./artifact-card";
import { cn } from "@/lib/cn";

export function CompetencyFilter({ className }: { className?: string }) {
  const [selected, setSelected] = useState<number | null>(null);
  const used = getAllCompetenciesUsed();
  const results = selected ? getArtifactsByCompetency(selected) : [];
  const active = selected ? getCompetency(selected) : null;

  return (
    <div className={cn("", className)}>
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
        Filter the whole portfolio by OCT competency
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {COMPETENCIES.filter((c) => used.includes(c.id)).map((c) => {
          const isActive = selected === c.id;
          return (
            <li key={c.id}>
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => setSelected(isActive ? null : c.id)}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs transition-colors",
                  isActive
                    ? "bg-accent text-paper border-accent"
                    : "border-rule text-muted hover:text-ink hover:border-ink",
                )}
                title={c.label}
              >
                {c.id}. {c.short}
              </button>
            </li>
          );
        })}
      </ul>

      {selected && active && (
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <p className="font-display text-2xl text-ink">
              {results.length} artifact{results.length === 1 ? "" : "s"} tagged{" "}
              <span className="italic">"{active.label}"</span>
            </p>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="inline-flex items-center gap-1 text-sm text-muted hover:text-accent"
              aria-label="Clear filter"
            >
              <X size={14} /> Clear
            </button>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {results.map((a) => (
              <ArtifactCard key={a.id} {...a} />
            ))}
          </div>
        </div>
      )}

      {!selected && (
        <p className="mt-6 text-sm text-muted">
          Tap any competency to see every artifact tagged with it — across the
          whole portfolio. {ARTIFACTS.length} artifacts indexed.
        </p>
      )}
    </div>
  );
}
