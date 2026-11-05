/** Copy for standalone pages that aren't driven by the services registry. */
import type { Seo } from "./schema";

type SimplePage = { seo: Required<Seo> };

export const servicesPage = {
  seo: {
    title: "Services",
    description:
      "Development, digital marketing, and AI & intelligent automation: one partner to build, grow, and automate.",
  },
} satisfies SimplePage;

export const notFoundPage = {
  seo: {
    title: "Page not found",
    description: "The page you're looking for doesn't exist or has moved.",
  },
  homeLabel: "Back to home",
  servicesLabel: "View services",
};
