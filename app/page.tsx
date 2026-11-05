import { home, practices, site, stats, type HomeSection } from "@/content";
import { JsonLd } from "@/components/seo/json-ld";
import { TimelineBlock } from "@/components/blocks/timeline-block";
import { CtaBand } from "@/components/sections/cta-band";
import { HomeHero } from "@/components/sections/home-hero";
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
          telephone: site.contact.phones[0]?.tel,
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
    case "cta":
      return <CtaBand title={section.title} items={section.items} />;
    default: {
      const unhandled: never = section;
      return unhandled;
    }
  }
}
