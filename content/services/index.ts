/**
 * Services registry: the single list of practices and services.
 *
 * Everything that lists services derives from here: pages
 * (generateStaticParams), the sitemap, nav/footer menus, and the contact
 * form's service dropdown.
 *
 * To add a service: create `<practice>/<slug>.ts` (copy a sibling), then add
 * it to that practice's `services` array below, in display order.
 */
import type { ContentLink, Practice, PracticeSlug, Service } from "../schema";

import { developmentPractice } from "./development/practice";
import { web } from "./development/web";
import { webApps } from "./development/web-apps";
import { mobileApps } from "./development/mobile-apps";
import { ecommerce } from "./development/ecommerce";
import { saas } from "./development/saas";

import { digitalMarketingPractice } from "./digital-marketing/practice";
import { seo } from "./digital-marketing/seo";
import { socialMedia } from "./digital-marketing/social-media";
import { cro } from "./digital-marketing/cro";
import { contentMarketing } from "./digital-marketing/content";
import { ppc } from "./digital-marketing/ppc";
import { youtube } from "./digital-marketing/youtube";

import { aiAutomationPractice } from "./ai-automation/practice";
import { workflowAutomation } from "./ai-automation/workflow-automation";
import { conversationalAi } from "./ai-automation/conversational-ai";
import { businessIntelligence } from "./ai-automation/business-intelligence";
import { multiAgentOrchestration } from "./ai-automation/multi-agent-orchestration";

export const practices: Practice[] = [
  {
    ...developmentPractice,
    services: [web, webApps, mobileApps, ecommerce, saas],
  },
  {
    ...digitalMarketingPractice,
    services: [seo, socialMedia, cro, contentMarketing, ppc, youtube],
  },
  {
    ...aiAutomationPractice,
    services: [workflowAutomation, conversationalAi, businessIntelligence, multiAgentOrchestration],
  },
];

export function getPractice(slug: string): Practice | undefined {
  return practices.find((p) => p.slug === slug);
}

export function getService(
  practiceSlug: string,
  serviceSlug: string,
): { practice: Practice; service: Service } | undefined {
  const practice = getPractice(practiceSlug);
  const service = practice?.services.find((s) => s.slug === serviceSlug);
  return practice && service ? { practice, service } : undefined;
}

/** For app/services/[practice]/page.tsx */
export function getAllPracticeParams(): { practice: PracticeSlug }[] {
  return practices.map((p) => ({ practice: p.slug }));
}

/** For app/services/[practice]/[service]/page.tsx */
export function getAllServiceParams(): { practice: PracticeSlug; service: string }[] {
  return practices.flatMap((p) => p.services.map((s) => ({ practice: p.slug, service: s.slug })));
}

/** Every service title, in display order (contact form dropdown). */
export function getAllServiceTitles(): string[] {
  return practices.flatMap((p) => p.services.map((s) => s.title));
}

/** Resolves a ContentLink to display data; undefined if the target doesn't exist. */
export function resolveLink(
  link: ContentLink,
): { title: string; description: string; practice: PracticeSlug; service?: string } | undefined {
  const practice = getPractice(link.practice);
  if (!practice) return undefined;
  if (!link.service) {
    return { title: practice.title, description: practice.intro, practice: practice.slug };
  }
  const service = practice.services.find((s) => s.slug === link.service);
  if (!service) return undefined;
  return {
    title: service.title,
    description: service.headline,
    practice: practice.slug,
    service: service.slug,
  };
}
