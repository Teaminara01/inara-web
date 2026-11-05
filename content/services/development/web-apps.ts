/** §1.2 Web App Development */
import type { Service } from "../../schema";

export const webApps = {
  slug: "web-apps",
  title: "Web App Development",
  headline:
    "Cloud-native web applications that run core operations, such as portals, dashboards, and internal tools.",
  blocks: [
    {
      type: "features",
      title: "What's included",
      items: [
        {
          label: "Enterprise web applications",
          text: "Custom business logic, workflow engines, and role-based dashboards",
        },
        { label: "Web portals", text: "Customer, partner, vendor, and employee intranet portals" },
        {
          label: "Real-time applications",
          text: "Collaboration tools, live tracking, and monitoring with automated threshold alerts",
        },
        {
          label: "Industry portals",
          text: "Healthcare, FinTech, logistics, and manufacturing systems",
        },
        {
          label: "Application modernization",
          text: "Re-architecting legacy applications onto modern, maintainable stacks",
        },
        {
          label: "Support & maintenance",
          text: "Updates, security patches, bug fixes, and performance monitoring",
        },
      ],
    },
    {
      type: "list",
      title: "Architecture & features",
      items: [
        "Cloud-native infrastructure with auto-scaling, load balancing, and observability",
        "API-first design that connects to CRM, ERP, payment gateways, and third-party services",
        "Secure authentication (SSO/OAuth), encryption at rest and in transit, role-based access control, and API security",
        "Responsive, mobile-first interfaces",
      ],
    },
    {
      type: "callout",
      title: "Typical timeline",
      body: "A focused MVP usually takes about 4–8 weeks, depending on scope.",
    },
  ],
  related: [{ practice: "development", service: "saas" }],
} satisfies Service;
