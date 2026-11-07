import Link from "next/link";
import { getNav, site } from "@/content";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { NavStar } from "@/components/ui/nav-star";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

/** Sticky site header. Nav items come from content/site.ts → nav. */
export function SiteHeader() {
  const nav = getNav();
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur supports-[backdrop-filter]:bg-canvas/80">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:font-semibold"
      >
        {site.ui.skipToContent}
      </a>
      <Container className="flex h-16 items-center justify-between gap-6 sm:h-20">
        <Logo eager className="h-9 sm:h-11" />

        <nav aria-label={site.ui.mainNav} className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="underline-offset-8 decoration-brand decoration-2 hover:underline"
                >
                  {item.highlight ? (
                    <span className="relative [text-shadow:0_0_14px_color-mix(in_oklab,var(--color-brand)_75%,transparent)]">
                      {item.label}
                      <NavStar />
                    </span>
                  ) : (
                    item.label
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle labels={{ toDark: site.ui.themeToDark, toLight: site.ui.themeToLight }} />
          <ButtonLink href={site.headerCta.href} variant="inverse" className="max-sm:hidden">
            {site.headerCta.label}
          </ButtonLink>
          <MobileNav items={nav} cta={site.headerCta} labels={{ open: site.ui.openMenu, close: site.ui.closeMenu }} />
        </div>
      </Container>
    </header>
  );
}
