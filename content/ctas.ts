/**
 * Reusable calls to action (from "Ready to get started?" in the brief).
 * Change a label here and it updates on every page that uses it.
 */
import type { Cta } from "./schema";

export const ctas = {
  discoveryWorkshop: { label: "Book a discovery workshop", service: "Discovery workshop" },
  freeAudit: { label: "Get a free SEO, PPC, or CRO audit", service: "Free marketing audit" },
  workflowAssessment: {
    label: "Book a free workflow assessment",
    service: "Free workflow assessment and ROI estimate",
  },
  agentDemo: { label: "Schedule a live agent demo", service: "Live agent demo" },
  contact: { label: "Contact Inara AI" },
} satisfies Record<string, Cta>;
