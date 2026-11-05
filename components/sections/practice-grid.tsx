import Link from "next/link";
import type { Practice } from "@/content";
import { ArrowRightIcon } from "@/components/ui/icons";
import { routes } from "@/lib/routes";

/** Three practice cards, each listing its services. */
export function PracticeGrid({ practices, exploreLabel }: { practices: Practice[]; exploreLabel: string }) {
  return (
    <ul className="grid gap-6 lg:grid-cols-3">
      {practices.map((practice) => (
        <li
          key={practice.slug}
          className="group flex flex-col rounded-3xl border border-line bg-card p-8 transition-colors hover:border-fg"
        >
          <span className="w-fit bg-brand px-2 py-0.5 font-display text-sm font-bold text-ink">
            {String(practice.number).padStart(2, "0")}
          </span>
          <h3 className="mt-3 text-2xl leading-tight">
            <Link href={routes.practice(practice.slug)} className="hover:underline decoration-brand decoration-4 underline-offset-4">
              {practice.title}
            </Link>
          </h3>
          <p className="mt-3 leading-relaxed text-muted">{practice.intro}</p>
          <ul className="mt-6 space-y-2 border-t border-line pt-6 text-sm">
            {practice.services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={routes.service(practice.slug, service.slug)}
                  className="underline-offset-4 decoration-brand decoration-2 hover:underline"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={routes.practice(practice.slug)}
            className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold"
            aria-label={`${exploreLabel} ${practice.title}`}
          >
            {exploreLabel}
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
