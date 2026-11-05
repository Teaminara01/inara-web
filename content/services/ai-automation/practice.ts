/** §3 AI & Intelligent Automation: practice overview. */
import { ctas } from "../../ctas";
import type { PracticeInfo } from "../../schema";

export const aiAutomationPractice = {
  slug: "ai-automation",
  number: 3,
  title: "AI & Intelligent Automation",
  navLabel: "AI & Automation",
  intro:
    "Workflow automation, conversational AI, business intelligence, and multi-agent orchestration.",
  quote: {
    title: "AI handles the analysis. Your people keep the judgment.",
    body: "Inara AI deploys autonomous agents that connect to your existing CRM, ERP, helpdesk, email, and databases without replacing them. Agents take on repetitive, high-volume work, and sensitive decisions go to your team with full context.",
  },
  blocks: [
    {
      type: "steps",
      title: "How our agents work",
      items: [
        { title: "Perceive", text: "Monitors data, email, messages, documents, and system events." },
        { title: "Reason", text: "Analyzes context using your business data, retrieved through RAG." },
        {
          title: "Decide",
          text: "Chooses the next action within defined goals, policies, and guardrails.",
        },
        { title: "Act", text: "Calls tools and APIs to execute tasks across your systems." },
        { title: "Learn", text: "Refines its behavior from outcomes and human feedback." },
      ],
    },
    {
      type: "features",
      title: "Platform foundations",
      items: [
        {
          label: "Tool-calling agents",
          text: "Agents call your APIs, databases, and SaaS tools to complete multi-step goals, not just answer questions.",
        },
        {
          label: "Retrieval-Augmented Generation (RAG)",
          text: "Answers are grounded in your documents and data through vector databases, which reduces hallucinations.",
        },
        {
          label: "Multi-model",
          text: "We choose the best model for each task across leading LLM providers and can fine-tune or deploy private models where needed.",
        },
        {
          label: "Human-in-the-loop",
          text: "Configurable autonomy tiers, with human approval required for sensitive or high-value actions.",
        },
        {
          label: "Enterprise governance",
          text: "Full audit trails, role-based access control, encryption, SQL governance, compliance controls, and data-residency options.",
        },
        {
          label: "Observability",
          text: "Real-time dashboards that show every agent action, outcome, and cost.",
        },
      ],
    },
    {
      type: "table",
      title: "Connects to your entire ecosystem",
      columns: ["Category", "Systems"],
      rows: [
        ["ERP", "SAP, Oracle, Zoho, Microsoft Dynamics"],
        ["CRM", "Salesforce, HubSpot, Zoho CRM"],
        ["Databases", "PostgreSQL, MySQL, Microsoft SQL Server, vector databases"],
        ["Files & sheets", "CSV/XLSX, Google Sheets, document repositories"],
        ["Communication", "Gmail/Outlook, WhatsApp, Slack, Microsoft Teams, Google Meet"],
        ["Custom", "Any system with a REST/GraphQL API or database access"],
      ],
    },
    {
      type: "table",
      title: "4-week deployment",
      columns: ["Week", "Phase", "What happens"],
      rows: [
        ["1", "Discover & Map", "Audit workflows, find automation hotspots, and rank agents by ROI"],
        ["2", "Build & Configure", "Build agents, configure orchestration, and connect your tools"],
        [
          "3",
          "Test & Refine",
          "Validate on real data, handle edge cases, and verify human-in-the-loop guardrails",
        ],
        [
          "4",
          "Deploy & Scale",
          "Production launch with monitoring dashboards, then optimize and add agents",
        ],
      ],
      note: "Simpler automations can go live in 2–3 weeks. Every deployment includes ongoing optimization, 24/7 monitoring, and a dedicated success partner.",
    },
  ],
  cta: ctas.workflowAssessment,
  secondaryCta: ctas.agentDemo,
  seo: {
    title: "AI & Intelligent Automation",
    description:
      "AI agents that connect to your CRM, ERP, helpdesk, email, and databases: workflow automation, conversational AI, business intelligence, and multi-agent orchestration.",
  },
} satisfies PracticeInfo;
