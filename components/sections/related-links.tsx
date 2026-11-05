import Link from "next/link";
import { resolveLink, type ContentLink } from "@/content";
import { ArrowRightIcon } from "@/components/ui/icons";
import { routes } from "@/lib/routes";

/** "Related services" cross-links. Unknown targets are skipped. */
export function RelatedLinks({ links, title }: { links: ContentLink[]; title: string }) {
  const resolved = links.flatMap((link) => {
    const r = resolveLink(link);
    return r ? [r] : [];
  });
  if (resolved.length === 0) return null;

  return (
    <section>
      <h2 className="mb-6 text-2xl leading-tight">{title}</h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {resolved.map((r) => (
          <li key={`${r.practice}/${r.service ?? ""}`}>
            <Link
              href={r.service ? routes.service(r.practice, r.service) : routes.practice(r.practice)}
              className="group flex items-start justify-between gap-4 rounded-2xl border border-line bg-card p-6 transition-colors hover:border-fg"
            >
              <span>
                <span className="block font-semibold">{r.title}</span>
                <span className="mt-1 block text-sm text-muted">{r.description}</span>
              </span>
              <ArrowRightIcon className="mt-1 size-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
