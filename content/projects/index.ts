/**
 * Projects registry (client work at /work).
 *
 * To add a project: create `<slug>.ts` (copy a sibling), add a cover image to
 * public/work/, then add it to `allProjects` below (display order).
 *
 * Projects with `draft: true` appear only in `npm run dev`; production builds,
 * the sitemap, and the nav ignore them. The "Our Work" nav link appears only
 * once at least one non-draft project exists.
 */
import type { Project } from "../schema";

import { ammasSpecial } from "./ammas-special";
import { neotiaGetwel } from "./neotia-getwel";
import { genomeFertility } from "./genome-fertility";
import { dosaCoffee } from "./dosa-coffee";
import { calcuttaGin } from "./calcutta-gin";
import { bonneFemme } from "./bonne-femme";

import { sampleManufacturingAgents } from "./sample-manufacturing-agents";
import { sampleHeadlessCommerce } from "./sample-headless-commerce";
import { sampleSaasMvp } from "./sample-saas-mvp";
import { sampleLocalSeo } from "./sample-local-seo";

const allProjects: Project[] = [
  ammasSpecial,
  neotiaGetwel,
  genomeFertility,
  dosaCoffee,
  calcuttaGin,
  bonneFemme,
  // Fictional layout samples (draft: dev only).
  sampleManufacturingAgents,
  sampleHeadlessCommerce,
  sampleSaasMvp,
  sampleLocalSeo,
];

const showDrafts = process.env.NODE_ENV !== "production";

/** Projects visible in this environment. */
export const projects: Project[] = allProjects.filter((p) => showDrafts || !p.draft);

/** True when real (non-draft) work exists: controls nav link and indexing. */
export const hasPublishedProjects = allProjects.some((p) => !p.draft);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/**
 * For app/work/[slug]/page.tsx. Cache Components requires at least one param,
 * so a placeholder is returned when nothing is published (it renders 404).
 */
export const PLACEHOLDER_PROJECT_SLUG = "__placeholder__";

export function getAllProjectParams(): { slug: string }[] {
  return projects.length > 0
    ? projects.map((p) => ({ slug: p.slug }))
    : [{ slug: PLACEHOLDER_PROJECT_SLUG }];
}
