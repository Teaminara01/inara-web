# Services & Capability Copy

**Original brief:** `content-info/inara-ai-services.md`. Use it to seed the TypeScript content files, word for word. Don't paraphrase it.

**Live site copy:** `content/services/**/*.ts`. After seeding, edit these files to change what the site shows (see `.claude/CONTENT.md`).

## Structure at a glance

| # | Practice | Sub-services | Suggested slug |
|---|---|---|---|
| 1 | Development | 1.1 Web Development · 1.2 Web App Development · 1.3 Mobile App Development · 1.4 E-commerce Development · 1.5 SaaS Development | `development/{web, web-apps, mobile-apps, ecommerce, saas}` |
| 2 | Digital Marketing | 2.1 SEO & Search Marketing · 2.2 Social Media Marketing · 2.3 CRO · 2.4 Content Marketing · 2.5 PPC · 2.6 YouTube Marketing | `digital-marketing/{seo, social-media, cro, content, ppc, youtube}` |
| 3 | AI & Intelligent Automation | 3.1 Workflow Automation · 3.2 Conversational AI · 3.3 Business Intelligence · 3.4 Multi-Agent Orchestration | `ai-automation/{workflow-automation, conversational-ai, business-intelligence, multi-agent-orchestration}` |

## Repeating content blocks (build these as reusable components)

These blocks recur across service sections and map naturally to components:

- **Hero:** bold one-line promise for each service (the `**…**` line under each heading)
- **What's included:** a list of bold label followed by a description
- **Process steps:** numbered steps (Development's six-step delivery process, SEO's six steps, and the "A → B → C" chains)
- **KPIs we report on:** chip or tag list
- **Typical timeline:** callout
- **Tables:** tech stack, integrations (ERP/CRM/…), 4-week AI deployment, specialized agents
- **Practice-level sections:** agent loop (Perceive → Reason → Decide → Act → Learn), platform foundations, Why Inara AI, CTA band

Page content is stored in `content/services/<practice>/<service>.ts`, registered in `content/services/index.ts`, and imported via `@/content`, so copy changes never touch JSX. See `.claude/CONTENT.md` for the structure and rules. The suggested slugs above double as the filenames.

## Copy rules

- Use the copy as written. Don't add claims, statistics, client names, certifications, or guarantees that aren't in the source file.
- `[Projects delivered] · [Clients served] · …` are **placeholders**. Never render invented numbers.
- Timelines must stay hedged as in the source ("usually", "typically", "depending on scope").
- Brand name is "Inara AI" in body copy and "inara ai" only inside the logo.
- Cross-links in the source (e.g. E-commerce → CRO, SaaS → AI & Automation) should become internal `<Link>`s between service pages.
