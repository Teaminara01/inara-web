import { about, clients, partners, site, stats } from "@/content";
import { ContentBlocks } from "@/components/blocks/content-blocks";
import { JsonLd } from "@/components/seo/json-ld";
import { ClientShowcase } from "@/components/sections/client-showcase";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { PartnerStrip } from "@/components/sections/partner-strip";
import { StatsBand } from "@/components/sections/stats-band";
import { RichText } from "@/components/ui/rich-text";
import { Section } from "@/components/ui/section";
import { routes } from "@/lib/routes";
import { absoluteUrl, toMetadata } from "@/lib/seo";

export const metadata = toMetadata(about.seo, routes.about());

/** About Inara AI. Content: content/about.ts (+ stats, clients, partners). */
export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: about.seo.title,
          description: about.seo.description,
          url: absoluteUrl(routes.about()),
          about: { "@type": "Organization", name: site.name, url: absoluteUrl("/") },
        }}
      />

      <PageHero
        breadcrumbs={[{ label: site.ui.home, href: routes.home() }]}
        eyebrow={about.eyebrow}
        title={about.title}
        current={about.seo.title}
        lead={about.lead}
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl leading-tight sm:text-4xl">{about.story.title}</h2>
          <div className="mt-8 space-y-5 border-l-4 border-brand pl-6 text-lg leading-relaxed text-muted">
            {about.story.paragraphs.map((p) => (
              <p key={p}>
                <RichText text={p} />
              </p>
            ))}
          </div>
        </div>
      </Section>

      <StatsBand data={stats} tone="surface" />

      <Section>
        <ContentBlocks blocks={about.blocks} />
      </Section>

      <ClientShowcase data={clients} tone="surface" />
      <PartnerStrip data={partners} tone="light" />

      <CtaBand title={about.cta.title} intro={about.cta.intro} items={[{ cta: about.cta.cta }]} />
    </>
  );
}
