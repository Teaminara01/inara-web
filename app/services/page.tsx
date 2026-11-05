import { ctas, practices, servicesPage, site } from "@/content";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceGrid } from "@/components/sections/service-grid";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { routes } from "@/lib/routes";
import { toMetadata } from "@/lib/seo";

export const metadata = toMetadata(servicesPage.seo, routes.services());

/** All practices with their services. */
export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: site.ui.home, href: routes.home() }]}
        title={site.ui.services}
        eyebrow={site.positioning}
        lead={site.pitch}
      />
      {practices.map((practice, i) => (
        <Section key={practice.slug} tone={i % 2 === 0 ? "light" : "surface"}>
          <SectionHeading eyebrow={String(practice.number).padStart(2, "0")} title={practice.title} intro={practice.intro} />
          <div className="mt-10">
            <ServiceGrid practice={practice.slug} services={practice.services} learnMoreLabel={site.ui.learnMore} />
          </div>
        </Section>
      ))}
      <CtaBand title={site.ui.ctaHeading} items={[{ cta: ctas.contact }]} />
    </>
  );
}
