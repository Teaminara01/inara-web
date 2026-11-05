import Link from "next/link";
import type { ReactNode } from "react";
import { cacheLife } from "next/cache";
import { practices, site } from "@/content";
import { Container } from "@/components/ui/container";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import { routes } from "@/lib/routes";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/** Site footer: logo, practices, company links, contact (all from content). */
export function SiteFooter() {
  const { contact, footer } = site;

  return (
    <footer className="theme-dark border-t-4 border-brand bg-ink text-paper">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="dark" className="h-12" />
          <p className="mt-5 text-sm text-muted-dark">{footer.blurb}</p>
        </div>

        <FooterColumn title={footer.servicesHeading}>
          {practices.map((p) => (
            <li key={p.slug}>
              <Link href={routes.practice(p.slug)} className="hover:text-brand">
                {p.title}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title={footer.companyHeading}>
          {footer.companyLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-brand">
                {l.label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title={footer.contactHeading}>
          <li>
            <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-brand">
              <MailIcon className="size-4 text-brand" />
              {contact.email}
            </a>
          </li>
          {contact.phones.map((phone) => (
            <li key={phone.tel}>
              <a href={`tel:${phone.tel}`} className="inline-flex items-center gap-2 hover:text-brand">
                <PhoneIcon className="size-4 text-brand" />
                {phone.display}
              </a>
            </li>
          ))}
          <li>
            <a
              href={buildWhatsAppUrl(contact.whatsapp.number, contact.whatsapp.defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-brand"
            >
              <WhatsAppIcon className="size-4 text-brand" />
              {contact.whatsapp.label}
            </a>
          </li>
        </FooterColumn>
      </Container>

      <div className="border-t border-line-dark">
        <Container className="flex flex-col gap-2 py-6 text-xs text-muted-dark sm:flex-row sm:justify-between">
          <p>
            © <CopyrightYear /> {site.name}. {site.tagline}.
          </p>
          <p>{contact.location}</p>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 font-sans text-sm font-semibold tracking-wide text-brand uppercase">{title}</h2>
      <ul className="space-y-3 text-sm">{children}</ul>
    </div>
  );
}

/** Cached so prerendering stays static (Cache Components disallows raw `new Date()`). */
async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
