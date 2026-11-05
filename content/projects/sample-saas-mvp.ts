/**
 * DRAFT · SAMPLE DATA. Fictional project for layout preview in `npm run dev`.
 * Replace with a real, client-approved case study, then remove `draft: true`.
 */
import type { Project } from "../schema";

export const sampleSaasMvp = {
  slug: "sample-saas-mvp",
  draft: true,
  client: "Sample Client: B2B Logistics Startup",
  title: "Multi-tenant SaaS MVP with an embedded AI assistant",
  summary:
    "From discovery workshop to an investor-ready MVP: multi-tenant architecture, subscription billing, and a conversational assistant for dispatch teams.",
  industry: "Logistics",
  year: "2025",
  practices: ["development", "ai-automation"],
  services: [
    { practice: "development", service: "saas" },
    { practice: "ai-automation", service: "conversational-ai" },
  ],
  cover: {
    src: "/work/sample-saas-mvp.svg",
    alt: "Abstract illustration of a dashboard layout in brand colours",
  },
  challenge:
    "Non-technical founders needed a working product and investor demo quickly, without painting themselves into an architectural corner.",
  solution:
    "We scoped a lean MVP in a discovery workshop, then built a multi-tenant Next.js and NestJS platform with role-based access, billing, product analytics, and a RAG-grounded assistant.",
  results: [
    { value: "[x] wks", label: "Workshop to MVP (sample)" },
    { value: "[x]", label: "Pilot customers onboarded (sample)" },
  ],
  stack: ["Next.js", "NestJS", "PostgreSQL", "AWS", "Docker"],
} satisfies Project;
