/**
 * Metadata helpers: one place for title, description, canonical, and Open Graph rules.
 */
import type { Metadata } from "next";
import { site, type Seo } from "@/content";

/** From NEXT_PUBLIC_SITE_URL (see .env.example). No trailing slash. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
  /\/$/,
  "",
);

export function absoluteUrl(path: string): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Page metadata from a content `seo` object.
 * @param path Canonical path of the page, e.g. "/services/development".
 */
export function toMetadata(seo: Seo | undefined, path: string, fallback?: Seo): Metadata {
  const title = seo?.title ?? fallback?.title;
  const description = seo?.description ?? fallback?.description ?? site.seo.description;
  const ogTitle = title ? site.seo.titleTemplate.replace("%s", title) : site.seo.defaultTitle;

  return {
    // No title → root layout's default title is used.
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      siteName: site.name,
      type: "website",
      locale: "en_IN",
    },
  };
}
