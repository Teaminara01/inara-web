# Front-end Context — Next.js

## Actual stack (from `package.json`)

| Package       | Version  |
| ------------- | -------- |
| next          | 16.4.5   |
| react / react-dom | 19.3.0 |
| tailwindcss   | ^4 (loaded via `@tailwindcss/turbopack`) |
| typescript    | ^5 (`strict: true`) |
| eslint        | ^9 + `eslint-config-next` (core-web-vitals + typescript) |

Not installed yet: shadcn/ui, TanStack Query, a form library, a validation library, analytics, or a CMS. Ask before adding any dependency.

**This Next.js is newer than most training data.** As `AGENTS.md` says, read the relevant guide in `node_modules/next/dist/docs/` before using an API you aren't sure about.

## `next.config.ts` flags that change how you write code

```ts
cacheComponents: true,     // Cache Components model
partialPrefetching: true,
experimental: { agentFeedback: true },
turbopack: { rules: { "*.css": { loaders: ["@tailwindcss/turbopack"] } } },
```

### Caching rules under `cacheComponents`

- **Do not** export `revalidate`, `dynamic`, or `fetchCache` from route segments. They **error** with Cache Components enabled.
- **Do not** use `fetch(url, { next: { revalidate } })` or `cache: 'force-cache'`. Instead, put the fetch inside a `'use cache'` function.
- Cache static or slow data with `'use cache'` plus `cacheLife(...)` (`'minutes' | 'hours' | 'days' | 'weeks' | 'max'`). Tag it with `cacheTag()` and invalidate with `revalidateTag(tag, 'max')`.
- Uncached or request-time data (cookies, headers, per-user data) must sit inside `<Suspense>` with a fallback. Otherwise the dev overlay flags a **blocking route**.
- For dynamic routes such as `/services/[practice]/[service]`, use `generateStaticParams` (from `getAllServiceParams()`) to prerender every known slug.
- Content comes from static TypeScript imports (`@/content`) bundled at build time, so it needs no `'use cache'` and no fetch. Use `'use cache'` only if a remote data source is added later.
- **No backend:** don't create `app/api/*`, Route Handlers, or Server Actions. Forms submit by opening WhatsApp (`.claude/BACKEND.md`).
- Docs: `node_modules/next/dist/docs/01-app/01-getting-started/08-caching.md`, `.../02-guides/migrating-to-cache-components.md`

## Conventions

- Path alias: `@/*` maps to the repo root (e.g. `@/components/ui/button`).
- Typed route props: use the global `PageProps<'/route'>` / `LayoutProps<'/route'>` helpers (already used in `app/layout.tsx`). `params` is a Promise, so `await` it.
- Metadata: export `metadata` or `generateMetadata` on every page, with a unique title and description per service. Set `metadataBase` in the root layout once the domain is known.
- SEO files: `app/sitemap.ts`, `app/robots.ts`, and JSON-LD (`Organization`, `Service`) on the home and service pages.
- Images: always `next/image`. Fonts: always `next/font`, never use a `<link>` to Google Fonts.

## Folder layout (as built)

```
app/
  layout.tsx              # fonts, default metadata, header/footer/WhatsApp float
  page.tsx                # home: renders content/home.ts sections in order
  services/page.tsx       # all practices
  services/[practice]/page.tsx            # practice page (generateStaticParams)
  services/[practice]/[service]/page.tsx  # service page (generateStaticParams)
  contact/page.tsx        # WhatsApp lead form (?service= pre-selects)
  not-found.tsx, sitemap.ts, robots.ts, icon.png, apple-icon.png
  globals.css             # fixed + theme-aware tokens, `dark:`/`on-dark:` variants, pattern/glow utilities
components/
  ui/                     # Container, Section, Button(Link/Anchor), SectionHeading, Logo, RichText, icons
  blocks/content-blocks.tsx  # renders ContentBlock[] (features/list/steps/chips/table/callout/text)
  sections/               # HomeHero, PracticeGrid, WhyInara, StatsBand, CtaBand, PageHero, ServiceGrid, RelatedLinks
  layout/                 # SiteHeader, MobileNav + ThemeToggle ("use client"), SiteFooter, WhatsAppFloat
  effects/cursor-glow.tsx # "use client" mouse-follow glow (rAF + CSS vars)
  effects/hero-agent-orbit.tsx # "use client" 3D AI-agent loop diagram + twinkling stars (home hero)
  forms/whatsapp-lead-form.tsx  # "use client" leaf
  seo/json-ld.tsx
content/                  # see .claude/CONTENT.md
lib/
  routes.ts  seo.ts  whatsapp.ts  utils.ts
  theme.ts                # dark mode: init script, apply/set/watch
  storage/preferences.ts  # localStorage wrapper (theme)
public/brand/             # cropped logo (light + dark) generated from content-info/
```

When the client dashboard is specced, move the public pages into an `app/(marketing)/` route group so the dashboard can have its own layout.

Layout components (`SiteHeader`, `SiteFooter`, `WhatsAppFloat`) read `site` directly because they are site-wide chrome. Every other component receives its content through props.

## Developer conventions (keep the codebase easy to change)

**Naming**

- Files and folders: `kebab-case` (`lead-form.tsx`, `web-apps.ts`).
- Components: `PascalCase` exports, one component per file.
- Hooks: `useX`.
- Types: `PascalCase`, no `I` prefix.

**Components**

- Section components take a single typed `data` prop from `@/content/schema`, e.g. `<ServiceHero data={service} />`. A component never imports content itself, which keeps it reusable and easy to preview.
- Pages are thin. They load content, compose sections, and export metadata, and that's all.
- Variants use a `variant` prop mapped to Tailwind classes in one object. Don't build class strings ad hoc. Merge classes with a single `cn()` helper in `lib/utils.ts`. It does not resolve Tailwind conflicts, so never override a variant's `display`, `height`, or colour through `className`. Add a variant instead.
- Colocate page-only pieces in `_components/` next to the route. Promote them to `components/` only when they're reused.

**Single sources**

| Concern                  | Lives in only one place                     |
| ------------------------ | ------------------------------------------- |
| Copy and business data   | `content/`                                  |
| Colors and fonts         | `@theme` in `app/globals.css`               |
| URLs                     | `lib/routes.ts` + `typedRoutes: true`       |
| Metadata rules           | `lib/seo.ts`                                |
| Site URL                 | `NEXT_PUBLIC_SITE_URL` (`.env.example` committed) |

**Imports:** always use the `@/` alias, never `../../..`.

**Type safety:** `strict: true`, no `any`. Use `satisfies` for config and content objects, and `as const` for fixed lists.

**Tooling** (ask before adding each dependency):

- Add a `"typecheck": "tsc --noEmit"` script.
- Recommended: Prettier with `prettier-plugin-tailwindcss` for automatic class sorting.
- Recommended: Vitest for pure logic (`lib/whatsapp.ts`, `lib/routes.ts`, the content registry).

**Definition of done:** `npm run lint`, `npm run typecheck`, and `npm run build` all pass, and the page is checked at mobile and desktop widths.

## Commands

```bash
npm run dev     # dev server (Turbopack)
npm run build   # production build: run before declaring work done
npm run lint
```
