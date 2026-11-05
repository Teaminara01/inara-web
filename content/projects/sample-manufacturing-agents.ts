/**
 * DRAFT · SAMPLE DATA. Fictional project for layout preview in `npm run dev`.
 * Replace with a real, client-approved case study, then remove `draft: true`.
 */
import type { Project } from "../schema";

export const sampleManufacturingAgents = {
  slug: "sample-manufacturing-agents",
  draft: true,
  client: "Sample Client: Industrial Manufacturer",
  title: "Multi-agent operations for a manufacturing supply chain",
  summary:
    "Inventory sync, PO automation, and supplier communications coordinated by AI agents connected to the client's existing ERP.",
  industry: "Manufacturing",
  year: "2026",
  practices: ["ai-automation"],
  services: [
    { practice: "ai-automation", service: "multi-agent-orchestration" },
    { practice: "ai-automation", service: "workflow-automation" },
  ],
  cover: {
    src: "/work/sample-manufacturing-agents.svg",
    alt: "Abstract illustration of connected agent nodes in brand yellow on black",
  },
  challenge:
    "Purchasing staff spent much of each day reconciling stock levels across systems and chasing suppliers by email and WhatsApp.",
  solution:
    "We deployed an orchestrator with inventory, purchase-order, and supplier agents connected to SAP, Zoho, Gmail, and WhatsApp, with human approval above set thresholds and a full audit trail.",
  results: [
    { value: "[x] hrs", label: "Saved per week (sample)" },
    { value: "[x]%", label: "POs auto-drafted (sample)" },
    { value: "4 wks", label: "To production (sample)" },
  ],
  stack: ["SAP", "Zoho", "Gmail", "WhatsApp", "PostgreSQL"],
} satisfies Project;
