import { notFound } from "next/navigation";
import { getAllServiceParams, getService, site } from "@/content";
import { ContentBlocks } from "@/components/blocks/content-blocks";
import { JsonLd } from "@/components/seo/json-ld";
import { PracticeCtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { RelatedLinks } from "@/components/sections/related-links";
import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { routes } from "@/lib/routes";
import { absoluteUrl, toMetadata } from "@/lib/seo";

type Props = PageProps<"/services/[practice]/[service]">;

/** Every service is prerendered at build time from the content registry. */
export function generateStaticParams() {
  return getAllServiceParams();
}

export async function generateMetadata({ params }: Props) {
  const { practice: p, service: s } = await params;
  const found = getService(p, s);
  if (!found) return {};
  const { practice, service } = found;
  return toMetadata(service.seo, routes.service(practice.slug, service.slug), {
    title: service.title,
    description: service.headline,
  });
}

export default async function ServicePage({ params }: Props) {
  const { practice: p, service: s } = await params;
  const found = getService(p, s);
  if (!found) notFound();
  const { practice, service } = found;
  const cta = service.cta ?? practice.cta;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.headline,
          serviceType: practice.title,
          url: absoluteUrl(routes.service(practice.slug, service.slug)),
          provider: { "@type": "Organization", name: site.name, url: absoluteUrl("/") },
        }}
      />

      <PageHero
        breadcrumbs={[
          { label: site.ui.home, href: routes.home() },
          { label: site.ui.services, href: routes.services() },
          { label: practice.title, href: routes.practice(practice.slug) },
        ]}
        eyebrow={practice.title}
        title={service.title}
        lead={service.headline}
      >
        <ButtonLink href={routes.contact({ service: service.title })} size="lg">
          {cta.label}
        </ButtonLink>
      </PageHero>

      <Section>
        {service.intro && (
          <p className="mb-16 max-w-3xl text-xl leading-relaxed">{service.intro}</p>
        )}
        <ContentBlocks blocks={service.blocks} />
        {service.related && (
          <div className="mt-16 sm:mt-20">
            <RelatedLinks links={service.related} title={site.ui.relatedServices} />
          </div>
        )}
      </Section>

      <PracticeCtaBand
        title={site.ui.ctaHeading}
        cta={{ ...cta, service: service.title }}
        secondaryCta={practice.secondaryCta}
      />
    </>
  );
}
