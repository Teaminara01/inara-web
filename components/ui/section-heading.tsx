import { cn } from "@/lib/utils";
import { SparkleIcon } from "./icons";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  /** h1 for page heroes, h2 (default) for sections, h3 for nested blocks. */
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  className?: string;
};

/** Eyebrow + heading + intro. Colours inherit from the section tone. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  as: Heading = "h2",
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-4 flex items-center gap-2 text-sm font-semibold tracking-wide uppercase",
            align === "center" && "justify-center",
          )}
        >
          <SparkleIcon className="size-3.5 text-brand-orange" />
          {eyebrow}
        </p>
      )}
      <Heading
        className={cn(
          Heading === "h1" && "text-4xl leading-[1.1] sm:text-5xl lg:text-6xl",
          Heading === "h2" && "text-3xl leading-tight sm:text-4xl",
          Heading === "h3" && "text-2xl leading-tight",
        )}
      >
        {title}
      </Heading>
      {intro && (
        <p className="mt-5 text-lg leading-relaxed text-muted on-dark:text-muted-dark">
          {intro}
        </p>
      )}
    </div>
  );
}
