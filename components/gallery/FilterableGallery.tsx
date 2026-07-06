"use client";

import { useMemo, useState } from "react";
import { ImageGrid } from "./ImageGrid";
import type { GalleryImage } from "@/data/galeria";

type FilterableGalleryProps = {
  images: GalleryImage[];
  filters: readonly string[];
};

export function FilterableGallery({ images, filters }: FilterableGalleryProps) {
  const [active, setActive] = useState<string>(filters[0]);

  const filtered = useMemo(
    () => (active === "Todos" ? images : images.filter((image) => image.category === active)),
    [active, images]
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2.5">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
              active === filter
                ? "bg-brand-blue text-white shadow-sm"
                : "bg-white text-ink-soft hover:bg-brand-sky"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-10">
        <ImageGrid
          key={active}
          images={filtered.map((image) => ({ label: image.label, caption: image.caption }))}
        />
      </div>
    </div>
  );
}
