import type { WhyItem } from "@/content";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SparkleIcon } from "@/components/ui/icons";

/** "Why Inara AI" differentiators on a dark band. */
export function WhyInara({ data }: { data: { title: string; items: WhyItem[] } }) {
  return (
    <Section tone="dark" pattern>
      <SectionHeading title={data.title} />
      <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line-dark bg-line-dark sm:grid-cols-2 lg:grid-cols-3">
        {data.items.map((item) => (
          <li
            key={item.title}
            // Last item stretches to fill its row, so no empty grid cell shows.
            className="bg-ink p-8 sm:[&:nth-child(2n+1):last-child]:col-span-2 lg:col-span-1 lg:[&:nth-child(3n+1):last-child]:col-span-3 lg:[&:nth-child(3n+2):last-child]:col-span-2"
          >
            <SparkleIcon className="size-5 text-brand" />
            <h3 className="mt-4 font-sans text-lg font-semibold tracking-normal">{item.title}</h3>
            <p className="mt-2 leading-relaxed text-muted-dark">{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
