import Link from "next/link";
import type { Route } from "next";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { PatternBackdrop } from "@/components/ui/pattern-backdrop";
import { SparkleIcon } from "@/components/ui/icons";

type Crumb = { label: string; href: Route };

type PageHeroProps = {
  breadcrumbs: Crumb[];
  eyebrow?: string;
  title: string;
  lead: string;
  children?: ReactNode;
};

/** Inner-page hero (practice/service/contact) with breadcrumbs. */
export function PageHero({ breadcrumbs, eyebrow, title, lead, children }: PageHeroProps) {
  return (
    <section className="theme-dark relative isolate overflow-hidden bg-ink text-paper">
      <PatternBackdrop />
      <SparkleIcon className="pointer-events-none absolute -right-16 -bottom-16 size-72 text-brand/10" />
      <Container className="relative py-16 sm:py-20">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-dark">
            {breadcrumbs.map((crumb) => (
              <li key={crumb.href} className="flex items-center gap-2">
                <Link href={crumb.href} className="hover:text-brand">
                  {crumb.label}
                </Link>
                <span aria-hidden="true">/</span>
              </li>
            ))}
            <li aria-current="page" className="text-paper">
              {title}
            </li>
          </ol>
        </nav>
        {eyebrow && (
          <p className="mt-8 inline-block bg-brand px-3 py-1 text-sm font-semibold text-ink">{eyebrow}</p>
        )}
        <h1 className="mt-6 max-w-4xl text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-dark sm:text-xl">{lead}</p>
        {children && <div className="mt-10">{children}</div>}
      </Container>
    </section>
  );
}
