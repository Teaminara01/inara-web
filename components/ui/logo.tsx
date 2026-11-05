import Image from "next/image";
import Link from "next/link";
import { site } from "@/content";
import { cn } from "@/lib/utils";
import lightLogo from "@/public/brand/inara-logo.png";
import darkLogo from "@/public/brand/inara-logo-dark.png";

type LogoProps = {
  /**
   * "auto" (default) = follows dark mode; "light" = black wordmark (light
   * backgrounds); "dark" = white wordmark (always-dark bands).
   */
  variant?: "auto" | "light" | "dark";
  className?: string;
  /** Load eagerly (above the fold, e.g. header). */
  eager?: boolean;
};

/** Brand logo linking home. Assets: public/brand/ (from content-info/). */
export function Logo({ variant = "auto", className, eager = false }: LogoProps) {
  const loading = eager ? "eager" : "lazy";
  return (
    <Link href="/" className={cn("inline-block shrink-0", className)} aria-label={`${site.name}, home`}>
      {variant !== "dark" && (
        <Image
          src={lightLogo}
          alt={site.name}
          className={cn("h-full w-auto", variant === "auto" && "dark:hidden")}
          loading={loading}
          sizes="200px"
        />
      )}
      {variant !== "light" && (
        <Image
          src={darkLogo}
          alt={variant === "auto" ? "" : site.name}
          className={cn("h-full w-auto", variant === "auto" && "hidden dark:block")}
          loading={loading}
          sizes="200px"
        />
      )}
    </Link>
  );
}
