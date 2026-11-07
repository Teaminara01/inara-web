/**
 * Step timeline on a dark panel (e.g. "Your AI Transformation in 4 Simple Steps").
 * Desktop: steps in a row joined by a dashed line. Mobile: stacked with a
 * vertical dashed line. Content: a `timeline` ContentBlock in content/.
 */
import type { ComponentType, SVGProps } from "react";
import type { TimelineBlock as TimelineBlockData, TimelineIcon } from "@/content";
import { ArrowPillLink } from "@/components/ui/button";
import { CodeIcon, FlaskIcon, RocketIcon, SearchIcon } from "@/components/ui/icons";
import { PatternBackdrop } from "@/components/ui/pattern-backdrop";
import { cn } from "@/lib/utils";
import { routes } from "@/lib/routes";

const icons: Record<TimelineIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  search: SearchIcon,
  code: CodeIcon,
  flask: FlaskIcon,
  rocket: RocketIcon,
};

/** Brand warm tones, one per step (cycles if there are more steps). */
const accents = [
  { text: "text-brand", hover: "group-hover:border-brand/70 group-hover:shadow-[0_0_36px_-6px_var(--color-brand)]" },
  { text: "text-brand-amber", hover: "group-hover:border-brand-amber/70 group-hover:shadow-[0_0_36px_-6px_var(--color-brand-amber)]" },
  { text: "text-brand-orange", hover: "group-hover:border-brand-orange/70 group-hover:shadow-[0_0_36px_-6px_var(--color-brand-orange)]" },
  { text: "text-brand-orange-deep", hover: "group-hover:border-brand-orange-deep/70 group-hover:shadow-[0_0_36px_-6px_var(--color-brand-orange-deep)]" },
] as const;

export function TimelineBlock({ title, highlight, items, note, cta }: TimelineBlockData) {
  return (
    <section className="theme-dark relative isolate overflow-hidden rounded-3xl bg-ink px-6 py-16 text-paper sm:px-12 sm:py-20 dark:ring-1 dark:ring-line">
      <PatternBackdrop />

      <h2 className="mx-auto max-w-4xl text-center text-3xl leading-tight sm:text-4xl lg:text-5xl">
        {title} {highlight && <span className="text-brand">{highlight}</span>}
      </h2>

      <ol className="relative mt-14 grid gap-10 lg:mt-20 lg:grid-cols-4 lg:gap-8">
        {/* Dashed connector: horizontal through tile centres (desktop), vertical (mobile). */}
        <span
          aria-hidden="true"
          className="absolute top-10 right-[12.5%] left-[12.5%] hidden border-t-2 border-dashed border-line-dark lg:block"
        />
        <span
          aria-hidden="true"
          className="absolute top-8 bottom-8 left-8 border-l-2 border-dashed border-line-dark lg:hidden"
        />

        {items.map((item, i) => {
          const Icon = icons[item.icon];
          const accent = accents[i % accents.length];
          return (
            <li key={item.title} className="group relative flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
              <span
                className={cn(
                  "relative flex size-16 shrink-0 items-center justify-center rounded-2xl lg:size-20 border border-line-dark bg-ink-raised transition-all duration-300 group-hover:-translate-y-1",
                  accent.hover,
                )}
              >
                <Icon className={cn("size-7 lg:size-8", accent.text)} />
              </span>
              <div className="pt-1 lg:pt-7">
                <p className={cn("text-xs font-semibold tracking-[0.3em] uppercase", accent.text)}>
                  {item.label}
                </p>
                <h3 className="mt-2 font-sans text-xl font-semibold tracking-normal">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-dark">{item.text}</p>
              </div>
            </li>
          );
        })}
      </ol>

      {note && <p className="mx-auto mt-14 max-w-2xl text-center text-sm text-muted-dark">{note}</p>}

      {cta && (
        <div className="mt-10 flex justify-center">
          <ArrowPillLink href={routes.contact({ service: cta.service })}>{cta.label}</ArrowPillLink>
        </div>
      )}
    </section>
  );
}
