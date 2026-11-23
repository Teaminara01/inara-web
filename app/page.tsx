import { clients, home, partners, practices, projects, site, stats, type HomeSection } from "@/content";
import { JsonLd } from "@/components/seo/json-ld";
import { TimelineBlock } from "@/components/blocks/timeline-block";
import { BrandMarquee } from "@/components/sections/brand-marquee";
import { ClientShowcase } from "@/components/sections/client-showcase";
import { CtaBand } from "@/components/sections/cta-band";
import { FeaturedWork } from "@/components/sections/featured-work";
import { HomeHero } from "@/components/sections/home-hero";
import { PartnerStrip } from "@/components/sections/partner-strip";
import { PracticeGrid } from "@/components/sections/practice-grid";
import { StatsBand } from "@/components/sections/stats-band";
import { WhyInara } from "@/components/sections/why-inara";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { absoluteUrl, toMetadata } from "@/lib/seo";

export const metadata = toMetadata(home.seo, "/");

/** Home page: sections render in the order defined in content/home.ts. */
export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: site.name,
          slogan: site.tagline,
          description: site.pitch,
          url: absoluteUrl("/"),
          logo: absoluteUrl("/brand/inara-logo.png"),
          email: site.contact.email,
          telephone: site.contact.phones.map((p) => p.tel),
          foundingDate: "2024-04",
          address: {
            "@type": "PostalAddress",
            streetAddress: site.contact.address.street,
            addressLocality: site.contact.address.locality,
            addressRegion: site.contact.address.region,
            postalCode: site.contact.address.postalCode,
            addressCountry: site.contact.address.country,
          },
        }}
      />
      {home.sections.map((section, i) => (
        <HomeSectionView key={`${section.type}-${i}`} section={section} />
      ))}
    </>
  );
}

function HomeSectionView({ section }: { section: HomeSection }) {
  switch (section.type) {
    case "hero":
      return <HomeHero data={section} />;
    case "practices":
      return (
        <Section tone="surface" pattern>
          <SectionHeading title={section.title} intro={section.intro} />
          <div className="mt-12">
            <PracticeGrid practices={practices} exploreLabel={site.ui.explore} />
          </div>
        </Section>
      );
    case "why":
      return <WhyInara data={section} />;
    case "timeline":
      return (
        <Section>
          <TimelineBlock {...section.block} />
        </Section>
      );
    case "stats":
      return <StatsBand data={stats} />;
    case "clients":
      return <ClientShowcase data={clients} />;
    case "partners":
      return <PartnerStrip data={partners} />;
    case "featuredWork":
      return (
        <FeaturedWork
          data={section}
          projects={projects.filter((p) => !p.draft).slice(0, section.limit)}
        />
      );
    case "brands":
      return (
        <BrandMarquee
          data={section}
          brands={clients.groups.flatMap((g) => g.brands)}
          logos={clients.logos}
        />
      );
    case "cta":
      return <CtaBand title={section.title} items={section.items} />;
    default: {
      const unhandled: never = section;
      return unhandled;
    }
  }
}
