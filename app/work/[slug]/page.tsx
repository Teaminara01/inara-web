import Image from "next/image";
import { notFound } from "next/navigation";
import { ctas, getAllProjectParams, getPractice, getProject, projects, site, workPage } from "@/content";
import { JsonLd } from "@/components/seo/json-ld";
import { PracticeCtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { RelatedLinks } from "@/components/sections/related-links";
import { ButtonAnchor } from "@/components/ui/button";
import { ExternalLinkIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { ProjectCard } from "@/components/work/project-card";
import { routes } from "@/lib/routes";
import { absoluteUrl, toMetadata } from "@/lib/seo";

type Props = PageProps<"/work/[slug]">;

/** Prerenders every visible project (placeholder → 404 when none are published). */
export function generateStaticParams() {
  return getAllProjectParams();
}

export async function generateMetadata({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    ...toMetadata(project.seo, routes.project(project.slug), {
      title: project.title,
      description: project.summary,
    }),
    ...(project.draft ? { robots: { index: false } } : {}),
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const { labels } = workPage;
  const practiceTitles = project.practices.flatMap((slug) => getPractice(slug)?.navLabel ?? []);
  const primaryPractice = getPractice(project.practices[0] ?? "");
  const more = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  const meta = [
    { label: labels.client, value: project.client },
    { label: labels.industry, value: project.industry },
    { label: labels.year, value: project.year },
    { label: labels.services, value: practiceTitles.join(", ") },
  ];

  return (
    <>
      {!project.draft && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            description: project.summary,
            url: absoluteUrl(routes.project(project.slug)),
            image: absoluteUrl(project.cover.src),
            creator: { "@type": "Organization", name: site.name, url: absoluteUrl("/") },
          }}
        />
      )}

      <PageHero
        breadcrumbs={[
          { label: site.ui.home, href: routes.home() },
          { label: workPage.eyebrow, href: routes.work() },
        ]}
        eyebrow={project.draft ? site.ui.draft : project.industry}
        title={project.title}
        lead={project.summary}
      >
        {project.url && (
          <ButtonAnchor href={project.url} size="lg">
            {labels.visit}
            <ExternalLinkIcon className="size-4" />
          </ButtonAnchor>
        )}
      </PageHero>

      <Section className="pb-0 sm:pb-0">
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-line bg-ink">
          <Image src={project.cover.src} alt={project.cover.alt} fill sizes="(min-width: 1152px) 1152px, 100vw" className="object-cover" />
        </div>

        <dl className="mt-10 grid gap-6 rounded-3xl border border-line bg-card p-7 sm:grid-cols-2 lg:grid-cols-4">
          {meta.map((m) => (
            <div key={m.label}>
              <dt className="text-xs font-semibold tracking-wide text-muted uppercase">{m.label}</dt>
              <dd className="mt-1 font-semibold">{m.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl sm:text-3xl">{labels.challenge}</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{project.challenge}</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl">{labels.solution}</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{project.solution}</p>
          </div>
        </div>

        {project.results && project.results.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl">{labels.results}</h2>
            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              {project.results.map((r) => (
                <div key={r.label} className="theme-dark flex flex-col rounded-3xl bg-ink p-7 text-paper dark:ring-1 dark:ring-line">
                  <dt className="mt-2 text-sm text-muted-dark">{r.label}</dt>
                  <dd className="order-first font-display text-4xl font-bold text-brand">{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {project.stack && project.stack.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl">{labels.stack}</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li key={tech} className="rounded-full border border-fg/15 bg-brand/15 px-4 py-2 text-sm font-medium">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.testimonial && (
          <figure className="mt-16 rounded-3xl border-l-4 border-brand bg-surface p-8 sm:p-10">
            <blockquote className="font-display text-2xl leading-snug font-bold">“{project.testimonial.quote}”</blockquote>
            <figcaption className="mt-4 text-muted">
              {project.testimonial.author}, {project.testimonial.role}
            </figcaption>
          </figure>
        )}

        <div className="mt-16">
          <RelatedLinks links={project.services} title={site.ui.relatedServices} />
        </div>

        {more.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-8 text-2xl sm:text-3xl">{labels.moreWork}</h2>
            <ul className="grid gap-6 md:grid-cols-2">
              {more.map((p) => (
                <li key={p.slug}>
                  <ProjectCard
                    project={p}
                    viewLabel={labels.viewProject}
                    draftLabel={site.ui.draft}
                    practiceTitles={p.practices.flatMap((slug) => getPractice(slug)?.navLabel ?? [])}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>

      <PracticeCtaBand title={site.ui.ctaHeading} cta={primaryPractice?.cta ?? ctas.contact} />
    </>
  );
}
