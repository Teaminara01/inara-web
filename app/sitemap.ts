import type { MetadataRoute } from "next";
import { hasPublishedProjects, practices, projects } from "@/content";
import { routes } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";

/** Generated from the content registry: new services appear automatically. */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths: { path: string; priority: number }[] = [
    { path: routes.home(), priority: 1 },
    { path: routes.services(), priority: 0.9 },
    { path: routes.about(), priority: 0.8 },
    { path: routes.contact(), priority: 0.8 },
    ...practices.flatMap((practice) => [
      { path: routes.practice(practice.slug), priority: 0.9 },
      ...practice.services.map((service) => ({
        path: routes.service(practice.slug, service.slug),
        priority: 0.7,
      })),
    ]),
    // Client work: only real (non-draft) projects are listed.
    ...(hasPublishedProjects
      ? [
          { path: routes.work(), priority: 0.8 },
          ...projects
            .filter((p) => !p.draft)
            .map((p) => ({ path: routes.project(p.slug), priority: 0.6 })),
        ]
      : []),
  ];

  return paths.map(({ path, priority }) => ({ url: absoluteUrl(path), priority }));
}
