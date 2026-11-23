# Content Management — File-based, Type-safe Content

All website copy and business data live in **TypeScript content files under `content/`**. Components only render data and contain **no user-visible text**. To change information, edit one `.ts` file. Your editor autocompletes fields and flags mistakes immediately, and `npm run build` catches anything missed.

## Why TypeScript files (not JSON, not a CMS)

| Need                         | How `.ts` content delivers it                                            |
| ---------------------------- | ------------------------------------------------------------------------ |
| Easy edits for a developer   | Autocomplete on every field, go-to-definition, rename refactors          |
| Catch mistakes early         | `satisfies` type checks show red squiggles in the editor and fail the build |
| No duplication               | Share values with imports (e.g. one `ctas.workshop` used on 5 pages)     |
| Notes for future you         | Comments are allowed (JSON has none)                                     |
| No infra                     | Bundled at build time: no CMS, DB, API, or fetch                         |

## Sources of truth

| Folder          | Role                                                                                 |
| --------------- | ------------------------------------------------------------------------------------ |
| `content/`      | **What the site renders.** Edit here to change the live site.                       |
| `content-info/` | Original brief (services doc, brand sheet, logos). Read-only. Used to seed `content/`. |

## Folder layout

```
content/
  index.ts                  # barrel: the ONLY import path for pages/components → `@/content`
  schema.ts                 # all content types (SiteContent, Practice, Service, LeadForm, Seo, Cta…)
  site.ts                   # brand, contact (email/phones/WhatsApp/address), nav, footer, default SEO, `ui` labels
  pages.ts                  # copy for standalone pages (services index, work, 404)
  ctas.ts                   # reusable CTAs, referenced by pages instead of retyping labels
  home.ts                   # home page sections, in render order
  about.ts                  # /about: journey, DNA, what we do, why Inara, process, approach (from the brochure)
  stats.ts                  # track-record numbers (brochure); `enabled: false` hides the band
  clients.ts                # brands worked with, by industry (home + about)
  partners.ts               # platform partners as text badges (home + about)
  creatives.ts              # creatives gallery on /work (images in public/work/creatives/)
  projects/
    index.ts                # registry: allProjects (display order), draft filtering
    <slug>.ts               # one file per client project (cover image in public/work/)
  forms/
    contact.ts              # fields, labels, WhatsApp message template, fallback text
  services/
    index.ts                # registry: practices + services, slug lookups, static params
    development/
      practice.ts           # practice overview, delivery process, tech stack
      web.ts  web-apps.ts  mobile-apps.ts  ecommerce.ts  saas.ts
    digital-marketing/
      practice.ts
      seo.ts  social-media.ts  cro.ts  content.ts  ppc.ts  youtube.ts
    ai-automation/
      practice.ts           # agent loop, foundations, integrations, 4-week deployment
      workflow-automation.ts  conversational-ai.ts
      business-intelligence.ts  multi-agent-orchestration.ts
lib/
  routes.ts                 # route builders: routes.service("development", "web") → typed href
  whatsapp.ts               # buildWhatsAppUrl(), fillTemplate() (pure, tested)
  seo.ts                    # toMetadata(seo) → Next `Metadata` (one place for title/OG rules)
```

## Conventions

1. **Typed with `satisfies`.** Every file exports one object checked against its schema type. This keeps literal types (for slugs) and still validates the shape:
   ```ts
   // content/services/development/web.ts
   import type { Service } from "@/content/schema";
   import { ctas } from "@/content/ctas";

   export const web = {
     slug: "web",
     title: "Web Development",
     headline: "Fast, secure, search-ready websites that turn visitors into customers.",
     included: [
       { label: "CMS development", text: "WordPress, Drupal, headless, or custom CMS…" },
     ],
     highlights: { title: "Why it matters", items: ["Built SEO-ready, …"] },
     cta: ctas.discoveryWorkshop,
     seo: { title: "Web Development", description: "…" },
   } satisfies Service;
   ```
2. **One import path.** Pages and components import from `@/content` (the barrel), never from deep files. Keep content structure changes internal to `content/`.
3. **Explicit registry, not filesystem magic.** `content/services/index.ts` lists every practice and service in display order. Slugs, `generateStaticParams`, the sitemap, nav menus, and the contact form's service dropdown are **all derived from this registry**, so nothing else keeps its own copy of the list.
   ```ts
   export const practices = [development, digitalMarketing, aiAutomation] as const;
   export type PracticeSlug = (typeof practices)[number]["slug"];
   export function getService(practice: string, slug: string): Service | undefined { … }
   export function getAllServiceParams() { … } // → generateStaticParams
   ```
4. **No hard-coded hrefs, including in content files.** Build links with `lib/routes.ts` (`routes.contact()`, `routes.practice("development")`). `typedRoutes: true` makes `<Link href>` type-checked. With dynamic segments, the generated `Route` type only accepts static literals, so raw strings like `"/services/development"` fail to compile, which is by design.
5. **Optional sections can be turned off.** Sections take `enabled?: boolean`, or use `null` for "not provided", and components render nothing in that case. Never use placeholder text.
6. **Plain strings only.** For emphasis, `**bold**` is rendered by one `RichText` helper. Never store raw HTML or JSX in content.
7. **Server-side only.** Content is read in Server Components. Pass only the needed slice as props to client leaves such as the WhatsApp form.
8. **Assets.** Image paths point to `public/` (`"/brand/logo.png"`), never `content-info/`.
9. **Draft projects.** `draft: true` projects render only in `npm run dev`, with a "Draft · sample data" badge. Production builds, the sitemap and the nav exclude them. The `sample-*` projects are fictional layout samples: replace them, never publish them.
10. **No invented content.** Seed text word for word from `content-info/inara-ai-services.md`. Bracket placeholders like `[Clients served]` never become values.
11. **Environment vs content.** Information the business might change (copy, phone, WhatsApp number) goes in `content/`. Deployment-specific values (site URL) go in env: `NEXT_PUBLIC_SITE_URL` in `.env.local`, documented in a committed `.env.example`.

## Common changes (cookbook)

| I want to…                              | Edit                                                                 |
| --------------------------------------- | -------------------------------------------------------------------- |
| Change phone, email, or WhatsApp number | `content/site.ts` → `contact`                                        |
| Change the WhatsApp message format      | `content/forms/contact.ts` → `whatsappTemplate`                      |
| Edit a service's text                   | `content/services/<practice>/<service>.ts`                           |
| Rename a CTA everywhere                 | `content/ctas.ts`                                                    |
| Reorder home page sections              | `content/home.ts` → `sections` array order                           |
| Add/reorder nav items                   | `content/site.ts` → `nav`                                            |
| Update track-record numbers             | `content/stats.ts` → edit values (set `enabled: false` to hide)      |
| Add/remove a client brand               | `content/clients.ts` → that industry's `brands` (feeds the home marquee and About list) |
| Show a real logo in the brand marquee   | Add a light/greyscale-friendly SVG or transparent PNG to `public/brands/`, then map it in `content/clients.ts` → `logos` (key = exact brand name). Brands without a logo render as a wordmark. |
| Change the home "featured work" grid    | `content/home.ts` → `featuredWork` (copy, `limit`). Tiles come from published projects in `allProjects` order. |
| Add a partner                           | `content/partners.ts` → `partners`                                    |
| Add creatives for a brand               | Add images to `public/work/creatives/`, then an entry in `content/creatives.ts` (add `width`/`height` to every image in a group to keep natural aspect ratios) |
| Edit the About page                     | `content/about.ts`                                                    |
| Change a page's SEO title/description   | that page's content file → `seo`                                     |
| Change a button/aria label ("Learn more") | `content/site.ts` → `ui`                                            |
| Set the production domain               | `NEXT_PUBLIC_SITE_URL` in `.env.local` / hosting env                 |
| **Add a new service**                   | 1. Create `content/services/<practice>/<slug>.ts` (copy a sibling). 2. Add it to that practice's `services` array in `content/services/index.ts`. The page, sitemap, nav, and form dropdown update automatically. |
| **Add a client project**                | 1. Copy a file in `content/projects/`. 2. Add a ~1600×1000 cover to `public/work/`. 3. Add it to `allProjects` in `content/projects/index.ts`. Leave out `draft` (or set it to `false`) to publish. The page, sitemap entry and "Our Work" nav link then appear. |
| Edit the 4-week deployment timeline     | `content/services/ai-automation/practice.ts` → `aiDeploymentTimeline` (shown on the AI page and the home page) |
| Add a field to all services             | Add it to `Service` in `content/schema.ts`. TypeScript then lists every file that needs it. |

After any change: `npm run typecheck && npm run build`.
