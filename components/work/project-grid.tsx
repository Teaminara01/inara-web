"use client";

/**
 * Project grid with practice filter chips (interactive leaf).
 * Filtering is client-side state, so the /work page stays fully static.
 */
import { useState, type ReactNode } from "react";
import type { PracticeSlug } from "@/content/schema";
import { cn } from "@/lib/utils";

type ProjectGridProps = {
  filters: { slug: PracticeSlug; label: string }[];
  allLabel: string;
  /** Pre-rendered cards (server components) with the practices each belongs to. */
  items: { key: string; practices: PracticeSlug[]; card: ReactNode }[];
};

export function ProjectGrid({ filters, allLabel, items }: ProjectGridProps) {
  const [active, setActive] = useState<PracticeSlug | null>(null);
  const visible = active ? items.filter((item) => item.practices.includes(active)) : items;

  const chip = (selected: boolean) =>
    cn(
      "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
      selected ? "border-brand bg-brand text-ink" : "border-line hover:border-fg",
    );

  return (
    <>
      <div role="group" aria-label={allLabel} className="flex flex-wrap gap-2">
        <button type="button" aria-pressed={active === null} onClick={() => setActive(null)} className={chip(active === null)}>
          {allLabel}
        </button>
        {filters.map((f) => (
          <button
            key={f.slug}
            type="button"
            aria-pressed={active === f.slug}
            onClick={() => setActive(f.slug)}
            className={chip(active === f.slug)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ul className="mt-10 grid gap-6 md:grid-cols-2" aria-live="polite">
        {visible.map((item) => (
          <li key={item.key}>{item.card}</li>
        ))}
      </ul>
    </>
  );
}
