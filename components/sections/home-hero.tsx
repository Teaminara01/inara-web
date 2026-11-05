import type { Route } from "next";
import type { Cta } from "@/content";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PatternBackdrop } from "@/components/ui/pattern-backdrop";
import { ArrowRightIcon, SparkleIcon } from "@/components/ui/icons";
import { routes } from "@/lib/routes";

type HomeHeroProps = {
  data: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: Cta;
    secondaryCta: { label: string; href: Route };
  };
};

/** Home hero: positioning line with the brand's yellow highlight-bar motif. */
export function HomeHero({ data }: HomeHeroProps) {
  // "Build. Grow. Automate." → highlight the last word with the yellow bar.
  const words = data.title.split(" ");
  const last = words.pop();

  return (
    <section className="relative isolate overflow-hidden bg-canvas">
      <PatternBackdrop />
      <SparkleIcon className="pointer-events-none absolute -top-10 -right-10 size-64 text-brand/20 sm:size-96" />
      <Container className="relative py-20 sm:py-28 lg:py-36">
        <p className="inline-block bg-brand px-3 py-1 text-sm font-semibold text-ink">{data.eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
          {words.join(" ")}{" "}
          {/* Light: yellow underline bar. Dark: full yellow block + black text (logo lock-up). */}
          <span className="relative whitespace-nowrap dark:px-2 dark:text-ink">
            <span
              className="absolute inset-x-0 bottom-1 h-[0.35em] bg-brand sm:bottom-2 dark:inset-y-0 dark:h-auto sm:dark:bottom-0"
              aria-hidden="true"
            />
            <span className="relative">{last}</span>
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{data.body}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={routes.contact({ service: data.primaryCta.service })} size="lg">
            {data.primaryCta.label}
            <ArrowRightIcon className="size-4" />
          </ButtonLink>
          <ButtonLink href={data.secondaryCta.href} variant="outline" size="lg">
            {data.secondaryCta.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
