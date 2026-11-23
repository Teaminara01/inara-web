import Image from "next/image";
import type { CreativesContent, ImageAsset } from "@/content";

/** Width ÷ height; 1 when the size is unknown. */
const ratio = (img: ImageAsset) => (img.width && img.height ? img.width / img.height : 1);
import { InstagramIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

type CreativeGalleryProps = {
  data: CreativesContent;
  /** Screen-reader suffix for links that open in a new tab. */
  newTabLabel: string;
};

/** Campaign creatives grouped by brand. Content: content/creatives.ts. */
export function CreativeGallery({ data, newTabLabel }: CreativeGalleryProps) {
  return (
    <div>
      <SectionHeading title={data.title} intro={data.intro} />
      <ul className="mt-12 space-y-14">
        {data.brands.map((brand) => (
          <li key={brand.brand}>
            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-line pb-4">
              <h3 className="font-sans text-xl font-semibold tracking-normal">
                {brand.brand}
                <span className="ml-3 align-middle text-sm font-medium text-muted">{brand.industry}</span>
              </h3>
              {brand.instagram && (
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
                >
                  <InstagramIcon className="size-4" />
                  {data.instagramLabel}
                  <span className="sr-only">
                    : {brand.brand} {newTabLabel}
                  </span>
                </a>
              )}
            </div>
            {brand.images.every((img) => img.width && img.height) ? (
              // Mixed portrait/landscape pieces: equal-height row, natural widths.
              <ul className="mt-6 flex flex-wrap gap-3 sm:gap-4">
                {brand.images.map((img) => (
                  <li
                    key={img.src}
                    className="overflow-hidden rounded-2xl border border-line bg-surface"
                    style={{ flexGrow: ratio(img), flexBasis: `${ratio(img) * 11}rem` }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="h-full w-full object-cover"
                    />
                  </li>
                ))}
                {/* Absorbs leftover space so a short last row keeps its natural size. */}
                <li aria-hidden="true" className="h-0" style={{ flexGrow: 10 }} />
              </ul>
            ) : (
              <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
                {brand.images.map((img) => (
                  <li
                    key={img.src}
                    className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-surface"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 360px, 50vw"
                      className="object-contain"
                    />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
