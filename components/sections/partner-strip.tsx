import type { PartnersContent } from "@/content";
import { SparkleIcon } from "@/components/ui/icons";
import { Section, type SectionTone } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

/** Platform partners as text badges. Content: content/partners.ts. */
export function PartnerStrip({ data, tone = "surface" }: { data: PartnersContent; tone?: SectionTone }) {
  return (
    <Section tone={tone} pattern>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-center">
        <SectionHeading eyebrow={data.eyebrow} title={data.title} intro={data.intro} />
        <div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {data.partners.map((p) => (
              <li
                key={p.name}
                className="flex min-h-24 flex-col justify-center rounded-2xl border border-line bg-card px-4 py-5 text-center"
              >
                <span className="font-display text-xl font-bold">{p.name}</span>
                {p.tier && <span className="mt-1 text-xs font-medium text-muted">{p.tier}</span>}
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-center gap-3 text-sm font-medium">
            <SparkleIcon className="size-4 shrink-0 text-brand-orange-deep" />
            {data.note}
          </p>
        </div>
      </div>
    </Section>
  );
}
