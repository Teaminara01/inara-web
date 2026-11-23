import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

type BrandMarqueeProps = {
  data: { title: string; highlight: string; titleEnd?: string; footerLabel: string };
  brands: string[];
  /** Brand name → logo path in public/. Brands without one render as a wordmark. */
  logos?: Partial<Record<string, string>>;
};

/**
 * Two rows of brands scrolling in opposite directions (CSS only, pauses on
 * hover). With reduced motion the rows become a static, wrapped list.
 */
export function BrandMarquee({ data, brands, logos = {} }: BrandMarqueeProps) {
  if (brands.length === 0) return null;
  const half = Math.ceil(brands.length / 2);
  const rows = [brands.slice(0, half), brands.slice(half)].filter((r) => r.length > 0);

  return (
    <section className="theme-dark relative isolate overflow-hidden bg-ink py-16 text-paper sm:py-24">
      <Container>
        <h2 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">
          {data.title} <span className="text-brand italic">{data.highlight}</span>
          {data.titleEnd && <> {data.titleEnd}</>}
        </h2>
      </Container>

      <div className="mt-14 space-y-6 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] motion-reduce:[mask-image:none]">
        {rows.map((row, r) => (
          <div key={r} className="group flex overflow-hidden motion-reduce:justify-center">
            <ul
              className={cn(
                "flex w-max shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]",
                r % 2 === 1 && "[animation-direction:reverse]",
                "motion-reduce:w-full motion-reduce:max-w-6xl motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-4 motion-reduce:px-5",
              )}
            >
              {/* The list twice: the second copy completes the loop and is hidden from assistive tech. */}
              {[0, 1].map((copy) =>
                row.map((brand) => (
                  <li
                    key={`${copy}-${brand}`}
                    aria-hidden={copy === 1 || undefined}
                    className={cn("flex h-24 shrink-0 items-center px-8 sm:px-12", copy === 1 && "motion-reduce:hidden")}
                  >
                    <BrandMark name={brand} logo={logos[brand]} />
                  </li>
                )),
              )}
            </ul>
          </div>
        ))}
      </div>

      <Container className="mt-14">
        <Link
          href={routes.work()}
          className="inline-flex items-center gap-2 border-b border-paper pb-1 text-sm font-semibold hover:border-brand hover:text-brand"
        >
          {data.footerLabel.replace("{count}", String(brands.length))}
          <ArrowRightIcon className="size-4" />
        </Link>
      </Container>
    </section>
  );
}

function BrandMark({ name, logo }: { name: string; logo?: string }) {
  if (logo) {
    return (
      <Image
        src={logo}
        alt={name}
        width={160}
        height={64}
        className="h-12 w-auto max-w-40 object-contain opacity-60 brightness-0 invert transition-opacity hover:opacity-100"
      />
    );
  }
  return (
    <span className="font-display text-2xl font-bold whitespace-nowrap text-paper/45 transition-colors hover:text-paper sm:text-3xl">
      {name}
    </span>
  );
}
