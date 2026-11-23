import type { ClientsContent } from "@/content";
import { Section, type SectionTone } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

/** Brands we've worked with, one column per industry. Content: content/clients.ts. */
export function ClientShowcase({ data, tone = "light" }: { data: ClientsContent; tone?: SectionTone }) {
  return (
    <Section tone={tone}>
      <SectionHeading title={data.title} intro={data.intro} />
      <ul className="mt-12 grid gap-4 md:grid-cols-3">
        {data.groups.map((group) => (
          <li key={group.industry} className="rounded-3xl border border-line bg-card p-7">
            <h3 className="flex items-baseline justify-between gap-3 font-sans text-lg font-semibold tracking-normal">
              {group.industry}
              <span className="rounded-full bg-brand px-2.5 py-0.5 text-xs font-semibold text-ink">
                {group.brands.length}
              </span>
            </h3>
            <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
              {group.brands.map((brand) => (
                <li key={brand} className="flex items-start gap-3 leading-snug">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-orange-deep" />
                  {brand}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
