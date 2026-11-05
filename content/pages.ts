/** Copy for standalone pages that aren't driven by the services registry. */
import type { Seo, WorkPageContent } from "./schema";

type SimplePage = { seo: Required<Seo> };

export const servicesPage = {
  seo: {
    title: "Services",
    description:
      "Development, digital marketing, and AI & intelligent automation: one partner to build, grow, and automate.",
  },
} satisfies SimplePage;

export const workPage = {
  seo: {
    title: "Our Work",
    description:
      "Client projects from Inara AI across development, digital marketing, and AI & intelligent automation.",
  },
  eyebrow: "Our Work",
  title: "Projects we've built, grown, and automated",
  lead: "A selection of client work across our three practices.",
  filterAll: "All work",
  emptyTitle: "Case studies coming soon",
  emptyBody: "We're preparing write-ups of recent client projects. In the meantime, tell us what you're working on.",
  labels: {
    client: "Client",
    industry: "Industry",
    year: "Year",
    services: "Services",
    challenge: "The challenge",
    solution: "What we did",
    results: "Results",
    stack: "Technology",
    visit: "Visit live site",
    viewProject: "View project",
    moreWork: "More work",
  },
} satisfies WorkPageContent;

export const notFoundPage = {
  seo: {
    title: "Page not found",
    description: "The page you're looking for doesn't exist or has moved.",
  },
  homeLabel: "Back to home",
  servicesLabel: "View services",
};
