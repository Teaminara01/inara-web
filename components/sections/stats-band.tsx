import type { StatsContent } from "@/content";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

/**
 * Track-record numbers. Renders nothing unless enabled AND every value is
 * filled, so placeholders can never reach the page.
 */
export function StatsBand({ data }: { data: StatsContent }) {
  const complete = data.items.every((item) => item.value);
  if (!data.enabled || !complete || data.items.length === 0) return null;

  return (
    <Section tone="surface">
      <SectionHeading title={data.title} align="center" />
      <dl className="mt-12 grid grid-cols-2 gap-8 text-center sm:grid-cols-3 lg:grid-cols-5">
        {data.items.map((item) => (
          <div key={item.label} className="flex flex-col">
            <dt className="text-sm text-muted">{item.label}</dt>
            <dd className="order-first font-display text-4xl font-bold">{item.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
