import type { Cta } from "@/content";
import { ButtonLink } from "@/components/ui/button";
import { PatternBackdrop } from "@/components/ui/pattern-backdrop";
import { Section } from "@/components/ui/section";
import { ArrowRightIcon } from "@/components/ui/icons";
import { routes } from "@/lib/routes";

type CtaBandProps = {
  title: string;
  /** Optional line under the title. */
  intro?: string;
  /** One button per CTA; `practice` adds a small label above each. */
  items: { practice?: string; cta: Cta }[];
};

/** Yellow call-to-action band. Every CTA opens the WhatsApp lead form. */
export function CtaBand({ title, intro, items }: CtaBandProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brand text-ink">
      <PatternBackdrop className="[--pattern-dot:rgb(0_0_0/0.14)]" />
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="max-w-3xl text-3xl leading-tight sm:text-4xl">{title}</h2>
        {intro && <p className="mt-4 max-w-2xl text-lg">{intro}</p>}
        <ul className={items.length > 1 ? "mt-10 grid gap-4 md:grid-cols-3" : "mt-8"}>
          {items.map(({ practice, cta }) => (
            <li key={cta.label} className={items.length > 1 ? "rounded-2xl bg-paper/40 p-6" : undefined}>
              {practice && <p className="mb-3 text-sm font-semibold tracking-wide uppercase">{practice}</p>}
              <ButtonLink href={routes.contact({ service: cta.service })} variant="dark">
                {cta.label}
                <ArrowRightIcon className="size-4 shrink-0" />
              </ButtonLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Convenience: practice/service page CTA band. */
type PracticeCtaBandProps = { title: string; cta: Cta; secondaryCta?: Cta };

export function PracticeCtaBand({ title, cta, secondaryCta }: PracticeCtaBandProps) {
  return (
    <Section tone="light" className="pt-0 sm:pt-0">
      <div className="relative isolate flex flex-col gap-6 overflow-hidden rounded-3xl bg-brand p-8 text-ink sm:flex-row sm:items-center sm:justify-between sm:p-12">
        <PatternBackdrop className="[--pattern-dot:rgb(0_0_0/0.14)]" />
        <h2 className="text-2xl leading-tight sm:text-3xl">{title}</h2>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={routes.contact({ service: cta.service })} variant="dark" size="lg">
            {cta.label}
            <ArrowRightIcon className="size-4" />
          </ButtonLink>
          {secondaryCta && (
            <ButtonLink href={routes.contact({ service: secondaryCta.service })} variant="outlineInk" size="lg">
              {secondaryCta.label}
            </ButtonLink>
          )}
        </div>
      </div>
    </Section>
  );
}
