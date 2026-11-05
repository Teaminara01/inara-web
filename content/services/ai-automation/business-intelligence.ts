/** §3.3 Business Intelligence */
import type { Service } from "../../schema";

export const businessIntelligence = {
  slug: "business-intelligence",
  title: "Business Intelligence",
  headline: "Ask business questions in plain language and get live, data-backed answers.",
  intro:
    "Inara AI connects structured and unstructured data from your ERP, CRM, databases, and spreadsheets into one source of truth that you can query in natural language.",
  blocks: [
    {
      type: "features",
      title: "Capabilities",
      items: [
        {
          label: "Natural-language analytics",
          text: "A text-to-SQL agent turns questions into governed queries over your databases",
        },
        {
          label: "Executive dashboards",
          text: "Real-time KPI dashboards across sales, finance, operations, and HR",
        },
        {
          label: "Predictive analytics",
          text: "Revenue forecasting, demand prediction, and customer-behavior modeling",
        },
        {
          label: "Operational monitoring",
          text: "Profitability, inventory tracking, and anomaly alerts",
        },
        {
          label: "Automated reporting",
          text: "Scheduled reports and automated compliance reporting",
        },
        {
          label: "Market & competitor research",
          text: "A research agent that gathers and summarizes market intelligence",
        },
        {
          label: "Talent intelligence",
          text: "Resume parsing, skill extraction, employee suitability analysis, and data-driven task assignment",
        },
      ],
    },
    {
      type: "callout",
      title: "Governance built in",
      body: "Role-based data access, SQL governance, and an audit log of every query.",
    },
  ],
} satisfies Service;
