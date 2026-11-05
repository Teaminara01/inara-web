/** §2 Digital Marketing: practice overview. */
import { ctas } from "../../ctas";
import type { PracticeInfo } from "../../schema";

export const digitalMarketingPractice = {
  slug: "digital-marketing",
  number: 2,
  title: "Digital Marketing",
  navLabel: "Digital Marketing",
  intro:
    "Data-driven programs that grow visibility, traffic, leads, and revenue, with transparent reporting on every metric.",
  blocks: [],
  cta: ctas.freeAudit,
  seo: {
    title: "Digital Marketing Services",
    description:
      "SEO, social media, CRO, content, PPC, and YouTube programs focused on measurable growth, with transparent reporting on every metric.",
  },
} satisfies PracticeInfo;
