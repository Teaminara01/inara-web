import Link from "next/link";
import type { PracticeSlug, Service } from "@/content";
import { ArrowRightIcon } from "@/components/ui/icons";
import { routes } from "@/lib/routes";

/** Cards linking to each service in a practice. */
type ServiceGridProps = {
  practice: PracticeSlug;
  services: Service[];
  learnMoreLabel: string;
};

export function ServiceGrid({ practice, services, learnMoreLabel }: ServiceGridProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <li key={service.slug}>
          <Link
            href={routes.service(practice, service.slug)}
            className="group flex h-full flex-col rounded-2xl border border-line bg-card p-6 transition-colors hover:border-fg hover:bg-brand/10"
          >
            <h3 className="font-sans text-lg font-semibold tracking-normal">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{service.headline}</p>
            <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold">
              {learnMoreLabel}
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
