/** §1.4 E-commerce Development */
import type { Service } from "../../schema";

export const ecommerce = {
  slug: "ecommerce",
  title: "E-commerce Development",
  headline:
    "Commerce platforms built around your catalog, pricing, and fulfillment, designed to convert.",
  blocks: [
    {
      type: "features",
      title: "What's included",
      items: [
        {
          label: "B2C storefronts",
          text: "Direct-to-consumer stores with fast, conversion-optimized checkout",
        },
        {
          label: "B2B commerce",
          text: "Wholesale portals, multi-tier and customer-group pricing, bulk ordering, quotes, and ERP integration",
        },
        {
          label: "Marketplaces",
          text: "Multi-vendor portals, commission management, vendor payouts, unified checkout, ratings and reviews, and admin moderation",
        },
        {
          label: "Headless commerce",
          text: "Next.js frontends on Shopify Plus or other commerce APIs, with omnichannel content and PWA support",
        },
        {
          label: "Migration & re-platforming",
          text: "Moves to Shopify, Magento, or WooCommerce with full data migration, SEO preservation, 301 redirect mapping, and zero-downtime cutover",
        },
      ],
    },
    {
      type: "text",
      title: "Integrations",
      body: "Payment gateways, ERP, CRM, inventory, shipping and logistics, tax, and marketing automation.",
    },
    {
      type: "text",
      title: "After launch",
      body: "Security updates, performance monitoring, and ongoing conversion rate optimization.",
    },
  ],
  related: [{ practice: "digital-marketing", service: "cro" }],
} satisfies Service;
