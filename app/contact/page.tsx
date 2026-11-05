import { Suspense } from "react";
import { contactForm, getContactForm, site } from "@/content";
import { WhatsAppLeadForm, WhatsAppLeadFormFromUrl } from "@/components/forms/whatsapp-lead-form";
import { PageHero } from "@/components/sections/page-hero";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { routes } from "@/lib/routes";
import { toMetadata } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = toMetadata(contactForm.seo, routes.contact());

export default function ContactPage() {
  const form = getContactForm();
  const { contact } = site;
  const formProps = { form, whatsappNumber: contact.whatsapp.number };

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: site.ui.home, href: routes.home() }]}
        eyebrow={site.tagline}
        title={contactForm.seo.title}
        lead={contactForm.seo.description}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
          <div id="lead-form" className="scroll-mt-28">
            <h2 className="text-3xl leading-tight">{form.title}</h2>
            <p className="mt-3 mb-8 max-w-2xl text-muted">{form.intro}</p>
            {/* Fallback = same form without URL prefill, so the static shell is fully usable. */}
            <Suspense fallback={<WhatsAppLeadForm {...formProps} />}>
              <WhatsAppLeadFormFromUrl {...formProps} />
            </Suspense>
          </div>

          <aside className="h-fit rounded-3xl bg-ink p-8 text-paper theme-dark">
            <h2 className="font-sans text-sm font-semibold tracking-wide text-brand uppercase">
              {site.footer.contactHeading}
            </h2>
            <ul className="mt-6 space-y-5">
              <li>
                <a
                  href={buildWhatsAppUrl(contact.whatsapp.number, contact.whatsapp.defaultMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-brand"
                >
                  <WhatsAppIcon className="size-5 text-brand" />
                  {contact.whatsapp.label}
                </a>
              </li>
              {contact.phones.map((phone) => (
                <li key={phone.tel}>
                  <a href={`tel:${phone.tel}`} className="flex items-center gap-3 hover:text-brand">
                    <PhoneIcon className="size-5 text-brand" />
                    {phone.display}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 break-all hover:text-brand">
                  <MailIcon className="size-5 shrink-0 text-brand" />
                  {contact.email}
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
