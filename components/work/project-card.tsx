import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content";
import { ArrowRightIcon } from "@/components/ui/icons";
import { routes } from "@/lib/routes";

type ProjectCardProps = {
  project: Project;
  /** Visible label for the link, e.g. "View project". */
  viewLabel: string;
  /** Badge text for draft projects (dev only). */
  draftLabel: string;
  /** Practice titles shown as tags. */
  practiceTitles: string[];
};

/** Cover, tags, title and summary, linking to /work/<slug>. */
export function ProjectCard({ project, viewLabel, draftLabel, practiceTitles }: ProjectCardProps) {
  return (
    <Link
      href={routes.project(project.slug)}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card transition-colors hover:border-fg"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-ink">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {project.draft && (
          <span className="absolute top-4 left-4 rounded-full bg-brand-orange-deep px-3 py-1 text-xs font-semibold text-ink">
            {draftLabel}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-7">
        <ul className="flex flex-wrap gap-2 text-xs font-medium">
          <li className="rounded-full bg-brand px-3 py-1 text-ink">{project.industry}</li>
          {practiceTitles.map((title) => (
            <li key={title} className="rounded-full border border-line px-3 py-1 text-muted">
              {title}
            </li>
          ))}
        </ul>
        <h3 className="mt-4 text-xl leading-snug sm:text-2xl">{project.title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{project.summary}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold">
          {viewLabel}
          <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
