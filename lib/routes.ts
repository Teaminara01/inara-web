/**
 * Route builders: the only place URLs are constructed.
 * Combined with `typedRoutes`, a renamed route surfaces as a type error.
 */
import type { Route } from "next";
import type { PracticeSlug } from "@/content/schema";

export const routes = {
  home: () => "/" as const,
  services: () => "/services" as const,
  practice: (practice: PracticeSlug) => `/services/${practice}` as Route,
  service: (practice: PracticeSlug, service: string) =>
    `/services/${practice}/${service}` as Route,
  /** Contact page; `service` pre-selects the form dropdown. */
  contact: (opts?: { service?: string }) =>
    (opts?.service
      ? `/contact?service=${encodeURIComponent(opts.service)}#lead-form`
      : "/contact") as Route,
} satisfies Record<string, (...args: never[]) => Route>;
