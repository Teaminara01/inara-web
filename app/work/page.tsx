import { creatives, ctas, getPractice, hasPublishedProjects, practices, projects, site, workPage } from "@/content";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CreativeGallery } from "@/components/work/creative-gallery";
import { ProjectCard } from "@/components/work/project-card";
import { ProjectGrid } from "@/components/work/project-grid";
import { routes } from "@/lib/routes";
import { toMetadata } from "@/lib/seo";

export const metadata = {
  ...toMetadata(workPage.seo, routes.work()),
  // Not indexed until real (non-draft) case studies exist.
  ...(hasPublishedProjects ? {} : { robots: { index: false, follow: true } }),
};

/** Client work, filterable by practice. Content: content/projects/. */
export default function WorkPage() {
  // Only offer filters for practices that have projects.
  const filters = practices
    .filter((p) => projects.some((project) => project.practices.includes(p.slug)))
    .map((p) => ({ slug: p.slug, label: p.navLabel }));

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: site.ui.home, href: routes.home() }]}
        eyebrow={workPage.eyebrow}
        title={workPage.title}
        current={workPage.eyebrow}
        lead={workPage.lead}
      />

      <Section pattern={projects.length === 0}>
        {projects.length > 0 ? (
          <ProjectGrid
            allLabel={workPage.filterAll}
            filters={filters}
            items={projects.map((project) => ({
              key: project.slug,
              practices: project.practices,
              card: (
                <ProjectCard
                  project={project}
                  viewLabel={workPage.labels.viewProject}
                  draftLabel={site.ui.draft}
                  practiceTitles={project.practices.flatMap((slug) => getPractice(slug)?.navLabel ?? [])}
                />
              ),
            }))}
          />
        ) : (
          <SectionHeading title={workPage.emptyTitle} intro={workPage.emptyBody} align="center" className="py-12" />
        )}
      </Section>

      {creatives.brands.length > 0 && (
        <Section tone="surface" id="creatives">
          <CreativeGallery data={creatives} newTabLabel={site.ui.opensInNewTab} />
        </Section>
      )}

      <CtaBand title={site.ui.ctaHeading} items={[{ cta: ctas.contact }]} />
    </>
  );
}
