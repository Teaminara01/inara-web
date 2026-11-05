import { site } from "@/content";
import { WhatsAppIcon } from "@/components/ui/icons";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/** Floating "Chat on WhatsApp" button (bottom-right on every page). */
export function WhatsAppFloat() {
  const { whatsapp } = site.contact;
  return (
    <a
      href={buildWhatsAppUrl(whatsapp.number, whatsapp.defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={whatsapp.label}
      title={whatsapp.label}
      className="fixed right-5 bottom-5 z-30 flex size-14 items-center justify-center rounded-full bg-brand text-ink shadow-lg ring-4 ring-ink/5 transition-transform hover:scale-105 sm:right-8 sm:bottom-8"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
