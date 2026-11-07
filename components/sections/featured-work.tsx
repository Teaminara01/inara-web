import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Project } from "@/content";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { routes } from "@/lib/routes";

type FeaturedWorkProps = {
  data: { eyebrow: string; title: string; intro?: string; readMore: string; allWork: string };
  projects: Project[];
};

/**
 * Case studies as a full-bleed checkerboard of text and image tiles.
 * DOM order is always text → image (mobile reads naturally); CSS `order`
 * flips alternate pairs on md (2 cols) and alternate rows on lg (4 cols).
 */
export function FeaturedWork({ data, projects }: FeaturedWorkProps) {
  if (projects.length === 0) return null;

  return (
    <section id="featured-work" className="theme-dark relative isolate bg-ink text-paper">
      <Container className="py-16 sm:py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={data.eyebrow} title={data.title} intro={data.intro} className="reveal-up" />
          <ButtonLink
            href={routes.work()}
            variant="outline"
            className="reveal-up shrink-0 self-start [--stagger:6%] lg:self-auto"
          >
            {data.allWork}
            <ArrowRightIcon className="size-4" />
          </ButtonLink>
        </div>
      </Container>

      <ul className="grid border-t border-line-dark md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, i) => {
          // md: 2 tiles per row → flip every other project.
          const flipMd = i % 2 === 1;
          // lg: 4 tiles (2 projects) per row → flip every other row.
          const flipLg = Math.floor(i / 2) % 2 === 1;
          const order = (flip: boolean, isImage: boolean) => 2 * i + (flip === isImage ? 0 : 1);
          // `--col` = desktop column (0–3), used to stagger the reveal left → right.
          const vars = (isImage: boolean) =>
            ({
              "--om": order(flipMd, isImage),
              "--ol": order(flipLg, isImage),
              "--col": order(flipLg, isImage) % 4,
            }) as CSSProperties;
          const textOrder = vars(false);
          const imageOrder = vars(true);
          const href = routes.project(project.slug);

          return [
            <li
              key={`${project.slug}-text`}
              style={textOrder}
              className="relative flex flex-col justify-center border-b border-line-dark px-6 py-12 transition-colors hover:bg-ink-raised sm:px-10 md:order-(--om) lg:order-(--ol) lg:px-10 lg:py-14 lg:[--stagger:calc(var(--col)*5%)]"
            >
              <div className="reveal-up">
                <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase">{project.client}</p>
                <h3 className="mt-4 text-2xl leading-snug sm:text-[1.7rem]">
                  <Link href={href} className="after:absolute after:inset-0">
                    {project.title}
                  </Link>
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-7 inline-flex w-fit items-center gap-2 border-b border-paper pb-1 text-sm font-semibold"
                >
                  {data.readMore}
                  <ArrowRightIcon className="size-4" />
                </span>
              </div>
            </li>,
            <li
              key={`${project.slug}-image`}
              style={imageOrder}
              className="group relative aspect-[4/3] overflow-hidden border-b border-line-dark bg-ink md:order-(--om) md:aspect-auto md:min-h-80 lg:order-(--ol) lg:min-h-96 lg:[--stagger:calc(var(--col)*5%)]"
            >
              {/* Duplicate link for the image; hidden from assistive tech (the title link is the real one). */}
              <Link href={href} tabIndex={-1} aria-hidden="true" className="absolute inset-0 z-10" />
              {/* Uncovers bottom → top while the image settles from a slight zoom. */}
              <div className="reveal-image absolute inset-0 bg-ink-raised">
                <Image
                  src={project.cover.src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="reveal-zoom object-cover transition-[scale] duration-700 group-hover:scale-105"
                />
              </div>
            </li>,
          ];
        })}
      </ul>
    </section>
  );
}
