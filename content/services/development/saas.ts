/** §1.5 SaaS Development */
import type { Service } from "../../schema";

export const saas = {
  slug: "saas",
  title: "SaaS Development",
  headline:
    "From MVP to enterprise-grade SaaS, with multi-tenant architecture, built-in analytics, and room to scale.",
  blocks: [
    {
      type: "features",
      title: "Who it's for",
      items: [
        {
          label: "Startups",
          text: "Lean MVP scoping, UX/UI, and investor-ready demos, with end-to-end support for non-technical founders",
        },
        {
          label: "Growing businesses",
          text: "Legacy modernization, CRM/ERP/billing/support integrations, intelligent automation, and built-in security and compliance",
        },
        {
          label: "Enterprises",
          text: "Cloud migration with rollback plans, containerization, microservices, autoscaling, observability, and performance SLAs",
        },
      ],
    },
    {
      type: "list",
      title: "Platform capabilities",
      items: [
        "Multi-tenant architecture with modular, independently deployable services",
        "Subscription billing, user management, roles, and permissions",
        "Product analytics from day one",
        "Embedded AI/ML features",
        "Cross-platform delivery across web, mobile, and APIs",
      ],
    },
    {
      type: "list",
      title: "What you receive",
      items: [
        "Roadmap, timeline, and cost structure",
        "Wireframes, interactive prototypes, and a scalable UI system",
        "Automated testing (functional, security, performance, accessibility)",
        "CI/CD, logging, uptime monitoring, and alerting",
        "Support SLAs, warranty bug-fixing, onboarding, training, and documentation",
      ],
    },
  ],
  related: [{ practice: "ai-automation" }],
} satisfies Service;
