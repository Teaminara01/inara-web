import { notFoundPage } from "@/content";
import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { routes } from "@/lib/routes";

export const metadata = { title: notFoundPage.seo.title, robots: { index: false } };

export default function NotFound() {
  return (
    <Section>
      <SectionHeading as="h1" eyebrow="404" title={notFoundPage.seo.title} intro={notFoundPage.seo.description} />
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href={routes.home()} size="lg">
          {notFoundPage.homeLabel}
        </ButtonLink>
        <ButtonLink href={routes.services()} variant="outline" size="lg">
          {notFoundPage.servicesLabel}
        </ButtonLink>
      </div>
    </Section>
  );
}
