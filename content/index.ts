/**
 * Content barrel: pages and components import content ONLY from "@/content".
 * Restructuring files inside content/ then never touches app code.
 */
import { ctas } from "./ctas";
import { contactForm } from "./forms/contact";
import type { Cta, ResolvedLeadForm } from "./schema";
import { getAllServiceTitles } from "./services";

export { site } from "./site";
export { ctas } from "./ctas";
export { home } from "./home";
export { stats } from "./stats";
export { contactForm } from "./forms/contact";
export { servicesPage, notFoundPage } from "./pages";
export {
  practices,
  getPractice,
  getService,
  getAllPracticeParams,
  getAllServiceParams,
  getAllServiceTitles,
  resolveLink,
} from "./services";
export type * from "./schema";

/** Option appended to the service dropdown for undecided visitors. */
const OTHER_OPTION = "Not sure yet / Other";

/**
 * Contact form with "services" options resolved to every service title plus
 * every CTA's `service` value, so any ?service= pre-selection exists in the
 * dropdown. Serializable, safe to pass to the client form component.
 */
export function getContactForm(): ResolvedLeadForm {
  const ctaServices = Object.values(ctas as Record<string, Cta>).flatMap((c) =>
    c.service ? [c.service] : [],
  );
  // `seo` is page metadata, not needed by the client component.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { seo, ...form } = contactForm;
  return {
    ...form,
    fields: form.fields.map((field) => {
      if (!("options" in field)) return field;
      const { options, ...rest } = field;
      const resolved =
        options === "services"
          ? [...new Set([...getAllServiceTitles(), ...ctaServices, OTHER_OPTION])]
          : options;
      return { ...rest, options: resolved };
    }),
  };
}
