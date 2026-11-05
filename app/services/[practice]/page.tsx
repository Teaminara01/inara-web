import { notFound } from "next/navigation";
import { getAllPracticeParams, getPractice, site } from "@/content";
import { ContentBlocks } from "@/components/blocks/content-blocks";
import { PracticeCtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceGrid } from "@/components/sections/service-grid";
import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { routes } from "@/lib/routes";
import { toMetadata } from "@/lib/seo";

/** Every practice is prerendered at build time from the content registry. */
export function generateStaticParams() {
  return getAllPracticeParams();
}

export async function generateMetadata({ params }: PageProps<"/services/[practice]">) {
  const practice = getPractice((await params).practice);
  if (!practice) return {};
  return toMetadata(practice.seo, routes.practice(practice.slug), {
    title: practice.title,
    description: practice.intro,
  });
}

export default async function PracticePage({ params }: PageProps<"/services/[practice]">) {
  const practice = getPractice((await params).practice);
  if (!practice) notFound();

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: site.ui.home, href: routes.home() },
          { label: site.ui.services, href: routes.services() },
        ]}
        eyebrow={String(practice.number).padStart(2, "0")}
        title={practice.title}
        lead={practice.intro}
      >
        <ButtonLink href={routes.contact({ service: practice.cta.service })} size="lg">
          {practice.cta.label}
        </ButtonLink>
      </PageHero>

      {practice.quote && (
        <Section tone="surface">
          <SectionHeading title={practice.quote.title} intro={practice.quote.body} />
        </Section>
      )}

      <Section>
        <SectionHeading title={site.ui.servicesInPractice} />
        <div className="mt-10">
          <ServiceGrid practice={practice.slug} services={practice.services} learnMoreLabel={site.ui.learnMore} />
        </div>
      </Section>

      {practice.blocks.length > 0 && (
        <Section className="pt-0 sm:pt-0">
          <ContentBlocks blocks={practice.blocks} />
        </Section>
      )}

      <PracticeCtaBand title={site.ui.ctaHeading} cta={practice.cta} secondaryCta={practice.secondaryCta} />
    </>
  );
}
