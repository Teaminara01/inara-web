/** §3.1 Workflow Automation */
import type { Service } from "../../schema";

export const workflowAutomation = {
  slug: "workflow-automation",
  title: "Workflow Automation",
  headline: "Automate repetitive work across your enterprise stack, end to end.",
  intro:
    "Operations teams often spend a large share of each day on manual, repetitive tasks. Our workflow agents handle routine cases automatically and escalate exceptions to your staff with full context.",
  blocks: [
    {
      type: "features",
      title: "Use cases",
      items: [
        {
          label: "Finance & invoicing",
          text: "Invoice capture and processing, expense reconciliation, payment reminders, and financial reporting",
        },
        {
          label: "Procurement & supply chain",
          text: "Purchase-order generation, inventory sync, supplier communication, and demand forecasting",
        },
        {
          label: "Sales operations",
          text: "Lead qualification and scoring, CRM record sync, rep routing, and at-risk deal alerts",
        },
        {
          label: "HR & internal ops",
          text: "Employee onboarding, IT helpdesk triage, and access requests",
        },
        {
          label: "Document intelligence",
          text: "OCR and NLP extraction from invoices, contracts, RFQs, and tenders, with compliance checks and automated risk scoring",
        },
        {
          label: "Data processing",
          text: "ETL, data cleaning, deduplication, and cross-system synchronization",
        },
        {
          label: "Project management",
          text: "AI-based task assignment, tracking, and status reporting",
        },
      ],
    },
    {
      type: "features",
      title: "Industry examples",
      items: [
        {
          label: "Manufacturing",
          text: "Inventory sync, PO automation, QC orchestration, supplier communications",
        },
        {
          label: "Healthcare",
          text: "Patient intake, insurance verification, claims processing, clinical documentation",
        },
        {
          label: "Financial services",
          text: "KYC automation, loan processing, reconciliation, regulatory reporting",
        },
        {
          label: "Logistics",
          text: "Shipment tracking, carrier coordination, exception handling, delivery confirmation",
        },
        {
          label: "Retail & e-commerce",
          text: "Order processing, returns, support triage, catalog sync",
        },
        {
          label: "Professional services",
          text: "Proposals, time tracking, invoicing, client updates",
        },
      ],
    },
    {
      type: "callout",
      title: "ROI you can model",
      body: "Our free assessment estimates hours saved per week, FTE capacity freed, annual savings, and payback period for your own team size and processes.",
    },
  ],
} satisfies Service;
