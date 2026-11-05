/**
 * Content schema: the shape of every file in `content/`.
 *
 * Content files declare their data with `satisfies <Type>`, so a missing or
 * misspelled field is flagged in the editor and fails `npm run typecheck`.
 * Adding a field here makes TypeScript list every file that needs updating.
 *
 * Text conventions: plain strings only. `**bold**` is supported via <RichText>.
 */
import type { Route } from "next";

/* ------------------------------------------------------------------ */
/* Shared                                                              */
/* ------------------------------------------------------------------ */

export type Seo = {
  /** Page title (the site name is appended by the title template). */
  title?: string;
  /** Meta description: aim for 120–160 characters. */
  description?: string;
};

export type NavLink = {
  label: string;
  href: Route;
};

export type PracticeSlug = "development" | "digital-marketing" | "ai-automation";

/** Internal cross-link to a practice or one of its services. */
export type ContentLink = {
  practice: PracticeSlug;
  service?: string;
};

/**
 * Call to action. Every CTA leads to the WhatsApp lead form on /contact,
 * with `service` pre-selected in the form when provided.
 */
export type Cta = {
  label: string;
  /** Pre-selects this value in the contact form's "service" field. */
  service?: string;
};

/* ------------------------------------------------------------------ */
/* Content blocks: rendered in order by <ContentBlocks>               */
/* ------------------------------------------------------------------ */

export type Feature = { label: string; text: string };
export type Step = { title: string; text?: string };

/** Icons available to timeline steps (components/ui/icons.tsx). */
export type TimelineIcon = "search" | "code" | "flask" | "rocket";

export type TimelineBlock = {
  type: "timeline";
  /** Heading text before the highlighted part. */
  title: string;
  /** Highlighted end of the heading, e.g. "4 Simple Steps". */
  highlight?: string;
  items: { label: string; title: string; text: string; icon: TimelineIcon }[];
  note?: string;
  cta?: Cta;
};

export type ContentBlock =
  /** Grid of "label: description" cards (e.g. "What's included"). */
  | { type: "features"; title: string; intro?: string; items: Feature[] }
  /** Bulleted list. Items may use **bold**. */
  | { type: "list"; title: string; items: string[] }
  /** Numbered process. */
  | { type: "steps"; title: string; items: Step[] }
  /** Tag/chip list (KPIs, platforms). */
  | { type: "chips"; title: string; items: string[]; note?: string }
  /** Table with a header row. */
  | { type: "table"; title: string; columns: string[]; rows: string[][]; note?: string }
  /** Short highlighted note (timelines, guarantees). */
  | { type: "callout"; title: string; body: string }
  /** Plain paragraph with a heading. */
  | { type: "text"; title: string; body: string }
  /** Horizontal step timeline on a dark panel (e.g. 4-week deployment). */
  | TimelineBlock;

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export type Service = {
  /** URL segment: /services/<practice>/<slug>. Keep in sync with the filename. */
  slug: string;
  title: string;
  /** One-line promise shown in the hero and on service cards. */
  headline: string;
  /** Optional lead paragraph under the hero. */
  intro?: string;
  blocks: ContentBlock[];
  /** Other pages to link to at the bottom of the page. */
  related?: ContentLink[];
  /** Defaults to the practice CTA when omitted. */
  cta?: Cta;
  seo?: Seo;
};

export type PracticeInfo = {
  slug: PracticeSlug;
  /** Display number from the services brief (1, 2, 3). */
  number: number;
  title: string;
  /** Short label for nav and footer. */
  navLabel: string;
  intro: string;
  /** Optional highlighted statement (e.g. the AI practice line). */
  quote?: { title: string; body: string };
  blocks: ContentBlock[];
  cta: Cta;
  /** Extra CTA shown next to the main one. */
  secondaryCta?: Cta;
  seo?: Seo;
};

export type Practice = PracticeInfo & { services: Service[] };

/* ------------------------------------------------------------------ */
/* Site & pages                                                        */
/* ------------------------------------------------------------------ */

export type PhoneNumber = {
  /** Human-readable, e.g. "+91 96743 41297". */
  display: string;
  /** E.164 for tel: links, e.g. "+919674341297". */
  tel: string;
};

export type SiteContent = {
  name: string;
  tagline: string;
  positioning: string;
  pitch: string;
  contact: {
    email: string;
    phones: PhoneNumber[];
    whatsapp: {
      /** Digits only, international format, no "+" or spaces: "919674341297". */
      number: string;
      /** Message used by generic "Chat on WhatsApp" buttons. */
      defaultMessage: string;
      label: string;
    };
    location: string;
  };
  nav: NavLink[];
  /** Added to nav and footer only when at least one project is published. */
  workLink: NavLink;
  headerCta: { label: string; href: Route };
  footer: {
    blurb: string;
    servicesHeading: string;
    companyHeading: string;
    companyLinks: NavLink[];
    contactHeading: string;
  };
  seo: {
    defaultTitle: string;
    /** `%s` is replaced by the page title. */
    titleTemplate: string;
    description: string;
  };
  /** Small interface labels (buttons, aria labels) so no copy lives in JSX. */
  ui: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    mainNav: string;
    home: string;
    services: string;
    explore: string;
    learnMore: string;
    relatedServices: string;
    servicesInPractice: string;
    ctaHeading: string;
    themeToDark: string;
    themeToLight: string;
    draft: string;
  };
};

export type WhyItem = { title: string; text: string };

export type HomeSection =
  | {
      type: "hero";
      eyebrow: string;
      title: string;
      body: string;
      primaryCta: Cta;
      secondaryCta: { label: string; href: Route };
    }
  | { type: "practices"; title: string; intro: string }
  | { type: "why"; title: string; items: WhyItem[] }
  | { type: "stats" }
  /** Renders a timeline block (shared with a practice page). */
  | { type: "timeline"; block: TimelineBlock }
  | { type: "cta"; title: string; items: { practice: string; cta: Cta }[] };

export type HomeContent = {
  seo?: Seo;
  /** Rendered top to bottom: reorder the array to reorder the page. */
  sections: HomeSection[];
};

export type StatsContent = {
  /** Keep `false` until every value below is a real, verified number. */
  enabled: boolean;
  title: string;
  items: { label: string; value: string | null }[];
};

/* ------------------------------------------------------------------ */
/* Projects (client work, see content/projects/)                       */
/* ------------------------------------------------------------------ */

export type Project = {
  /** URL segment: /work/<slug>. Keep in sync with the filename. */
  slug: string;
  /**
   * Draft projects show in `npm run dev` only. They are excluded from
   * production builds, the sitemap, and the nav.
   */
  draft?: boolean;
  client: string;
  title: string;
  /** One or two sentences for cards and the meta description. */
  summary: string;
  industry: string;
  year: string;
  practices: PracticeSlug[];
  /** Services delivered, as links to service pages. */
  services: ContentLink[];
  /** Cover image in public/, ~1600×1000 (16:10). */
  cover: { src: string; alt: string };
  challenge: string;
  solution: string;
  /** Headline numbers. Only real, client-approved figures. */
  results?: { value: string; label: string }[];
  stack?: string[];
  testimonial?: { quote: string; author: string; role: string };
  /** Live site, if public. */
  url?: string;
  seo?: Seo;
};

export type WorkPageContent = {
  seo: Required<Seo>;
  eyebrow: string;
  title: string;
  lead: string;
  filterAll: string;
  emptyTitle: string;
  emptyBody: string;
  labels: {
    client: string;
    industry: string;
    year: string;
    services: string;
    challenge: string;
    solution: string;
    results: string;
    stack: string;
    visit: string;
    viewProject: string;
    moreWork: string;
  };
};

/* ------------------------------------------------------------------ */
/* Forms (WhatsApp, see .claude/BACKEND.md)                           */
/* ------------------------------------------------------------------ */

export type FormFieldType = "text" | "email" | "tel" | "textarea" | "select";

export type FormField = {
  /** Key used in the WhatsApp template: {{name}}. */
  name: string;
  label: string;
  type: FormFieldType;
  required?: boolean;
  placeholder?: string;
  maxLength?: number;
  autoComplete?: string;
  /** Select options. "services" is replaced with every service title. */
  options?: string[] | "services";
};

export type LeadForm = {
  title: string;
  intro: string;
  fields: FormField[];
  submitLabel: string;
  /**
   * WhatsApp message. `{{field}}` placeholders are replaced with values;
   * a line whose placeholders are all empty is removed.
   */
  whatsappTemplate: string;
  /** Shown under the button, explains what happens on submit. */
  privacyNote: string;
  fallbackLabel: string;
  errors: { required: string; email: string; tel: string };
  seo?: Seo;
};

/** LeadForm after "services" options are resolved, safe to pass to the client. */
export type ResolvedFormField = Omit<FormField, "options"> & { options?: string[] };
export type ResolvedLeadForm = Omit<LeadForm, "fields" | "seo"> & {
  fields: ResolvedFormField[];
};
