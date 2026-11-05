/** §3.4 Multi-Agent Orchestration */
import type { Service } from "../../schema";

export const multiAgentOrchestration = {
  slug: "multi-agent-orchestration",
  title: "Multi-Agent Orchestration",
  headline:
    "A coordinated team of specialized AI agents that solve complex, cross-department problems.",
  intro:
    "A central orchestrator breaks goals into tasks, sends each task to the agent that owns that domain, shares context between them, and enforces guardrails across the workflow.",
  blocks: [
    {
      type: "table",
      title: "Our specialized agents",
      columns: ["Agent", "Role"],
      rows: [
        ["SQL Agent", "Data queries and analysis"],
        ["Research Agent", "Market and competitor insights"],
        ["Document Agent", "OCR, extraction, RFQ and tender evaluation, risk scoring"],
        ["Data Processing Agent", "ETL and data cleaning"],
        ["Meeting Agent", "Scheduling, transcription, MoM, and action items"],
        ["Talent Agent", "HR and recruiting intelligence"],
        ["Project Management Agent", "Task assignment and tracking"],
        [
          "Sales / Support / Finance / Ops Agents",
          "Domain workflows connected to your CRM, helpdesk, and ERP",
        ],
      ],
    },
    {
      type: "features",
      title: "Architecture",
      items: [
        {
          label: "Orchestrator–worker pattern",
          text: "Each agent has one clear responsibility, coordinated as a team",
        },
        {
          label: "Shared memory & context",
          text: "Agents pass structured context so hand-offs don't lose information",
        },
        {
          label: "Tool-calling across systems",
          text: "Agents act directly in SAP, Salesforce, HubSpot, Zoho, Gmail, WhatsApp, Slack, Teams, and others",
        },
        {
          label: "Configurable autonomy",
          text: "Per-agent permission tiers and approval gates",
        },
        {
          label: "Full observability",
          text: "Every step logged, traceable, and auditable",
        },
      ],
    },
    {
      type: "features",
      title: "Example: manufacturing operations",
      items: [
        { label: "Agents", text: "Inventory sync → PO automation → supplier communications" },
        { label: "Integrations", text: "SAP, Zoho, Gmail, WhatsApp" },
        {
          label: "Guardrails",
          text: "Human approval above set thresholds, capped autonomy tier, and full audit trail",
        },
      ],
    },
  ],
  related: [{ practice: "ai-automation", service: "workflow-automation" }],
} satisfies Service;
