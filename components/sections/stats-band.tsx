import type { StatsContent } from "@/content";
import { RichText } from "@/components/ui/rich-text";
import { Section, type SectionTone } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

/** Column count per item count, so 3 stats don't sit in a 5-column grid. */
const columns: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

/**
 * Track-record numbers. Renders nothing unless enabled AND every value is
 * filled, so placeholders can never reach the page.
 */
export function StatsBand({ data, tone = "light" }: { data: StatsContent; tone?: SectionTone }) {
  const complete = data.items.every((item) => item.value);
  if (!data.enabled || !complete || data.items.length === 0) return null;

  return (
    <Section tone={tone}>
      <SectionHeading title={data.title} align="center" />
      {data.intro && (
        <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-relaxed text-muted">
          <RichText text={data.intro} />
        </p>
      )}
      <dl
        className={cn(
          "mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line text-center",
          columns[data.items.length] ?? "sm:grid-cols-3 lg:grid-cols-5",
        )}
      >
        {data.items.map((item) => (
          <div key={item.label} className="flex flex-col bg-card px-6 py-8">
            <dt className="mt-2 text-sm text-muted">{item.label}</dt>
            <dd className="order-first font-display text-5xl font-bold">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
