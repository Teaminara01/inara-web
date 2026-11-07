/**
 * Renders a content `blocks` array in order. Each block type maps to one
 * component; to add a block type, extend `ContentBlock` in content/schema.ts
 * and add a case here (TypeScript flags the missing case).
 */
import type { ContentBlock } from "@/content";
import { CheckIcon, SparkleIcon } from "@/components/ui/icons";
import { RichText } from "@/components/ui/rich-text";
import { cn } from "@/lib/utils";
import { TimelineBlock } from "./timeline-block";

export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-16 sm:space-y-20">
      {blocks.map((block, i) => (
        <Block key={`${block.type}-${i}`} block={block} />
      ))}
    </div>
  );
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "features":
      return <FeaturesBlock {...block} />;
    case "list":
      return <ListBlock {...block} />;
    case "steps":
      return <StepsBlock {...block} />;
    case "chips":
      return <ChipsBlock {...block} />;
    case "table":
      return <TableBlock {...block} />;
    case "callout":
      return <CalloutBlock {...block} />;
    case "text":
      return <TextBlock {...block} />;
    case "timeline":
      return <TimelineBlock {...block} />;
    default: {
      const unhandled: never = block;
      return unhandled;
    }
  }
}

function BlockTitle({ children }: { children: string }) {
  return <h2 className="mb-8 text-2xl leading-tight sm:text-3xl">{children}</h2>;
}

type Of<T extends ContentBlock["type"]> = Extract<ContentBlock, { type: T }>;

function FeaturesBlock({ title, intro, items }: Of<"features">) {
  return (
    <section>
      <BlockTitle>{title}</BlockTitle>
      {intro && <p className="-mt-4 mb-8 max-w-3xl text-muted">{intro}</p>}
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li
            key={item.label}
            className="rounded-2xl border border-line bg-card p-6 transition-colors hover:border-brand"
          >
            <h3 className="mb-2 font-sans text-base font-semibold tracking-normal">{item.label}</h3>
            <p className="text-sm leading-relaxed text-muted">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ListBlock({ title, items }: Of<"list">) {
  return (
    <section>
      <BlockTitle>{title}</BlockTitle>
      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-relaxed">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand text-ink">
              <CheckIcon className="size-3.5" />
            </span>
            <span>
              <RichText text={item} />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function StepsBlock({ title, items }: Of<"steps">) {
  const detailed = items.some((s) => s.text);
  return (
    <section>
      <BlockTitle>{title}</BlockTitle>
      <ol
        className={cn(
          "grid gap-4",
          detailed ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-3 lg:grid-cols-6",
        )}
      >
        {items.map((step, i) => (
          <li key={step.title} className="relative rounded-2xl bg-ink p-6 text-paper dark:ring-1 dark:ring-line">
            <span className="font-display text-3xl font-bold text-brand" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-sans text-base font-semibold tracking-normal">
              <span className="sr-only">Step {i + 1}: </span>
              {step.title}
            </h3>
            {step.text && <p className="mt-2 text-sm leading-relaxed text-muted-dark">{step.text}</p>}
          </li>
        ))}
      </ol>
    </section>
  );
}

function ChipsBlock({ title, items, note }: Of<"chips">) {
  return (
    <section>
      <BlockTitle>{title}</BlockTitle>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-fg/15 bg-brand/15 px-4 py-2 text-sm font-medium"
          >
            {item}
          </li>
        ))}
      </ul>
      {note && <p className="mt-5 text-sm text-muted">{note}</p>}
    </section>
  );
}

function TableBlock({ title, columns, rows, note }: Of<"table">) {
  return (
    <section>
      <BlockTitle>{title}</BlockTitle>
      <div className="overflow-x-auto rounded-2xl border border-line bg-card">
        <table className="w-full min-w-lg text-left text-sm">
          <thead className="bg-ink text-paper">
            <tr>
              {columns.map((col) => (
                <th key={col} scope="col" className="px-5 py-4 font-semibold">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.join("|")} className="border-t border-line even:bg-surface">
                {row.map((cell, i) =>
                  i === 0 ? (
                    <th key={i} scope="row" className="px-5 py-4 font-semibold whitespace-nowrap">
                      {cell}
                    </th>
                  ) : (
                    <td key={i} className="px-5 py-4 leading-relaxed text-muted">
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="mt-5 text-sm text-muted">{note}</p>}
    </section>
  );
}

function CalloutBlock({ title, body }: Of<"callout">) {
  return (
    <aside className="flex gap-4 rounded-2xl border-l-4 border-brand bg-surface p-6 sm:p-8">
      <SparkleIcon className="mt-1 size-5 shrink-0 text-brand-orange" />
      <div>
        <h2 className="font-sans text-lg font-semibold tracking-normal">{title}</h2>
        <p className="mt-2 leading-relaxed text-muted">{body}</p>
      </div>
    </aside>
  );
}

function TextBlock({ title, body }: Of<"text">) {
  return (
    <section className="max-w-3xl">
      <h2 className="mb-3 text-2xl leading-tight">{title}</h2>
      <p className="text-lg leading-relaxed text-muted">
        <RichText text={body} />
      </p>
    </section>
  );
}
