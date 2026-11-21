
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
} from "lucide-react";

export interface ProductGalleryImage {
  id: string | number;
  src: string;
  alt: string;
}

interface ProductGalleryProps {
  images: ProductGalleryImage[];
  productName: string;
  badge?: string | null;
  discountPercentage?: number;
}

export default function ProductGallery({
  images,
  productName,
  badge,
  discountPercentage = 0,
}: ProductGalleryProps) {
  const validImages = images.filter((image) => Boolean(image.src));

  const [selectedIndex, setSelectedIndex] = useState(0);

  const safeSelectedIndex = Math.min(
    selectedIndex,
    Math.max(0, validImages.length - 1)
  );

  const selectedImage = validImages[safeSelectedIndex];

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current <= 0 ? validImages.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current >= validImages.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="w-full min-w-0">
      {/* Main Product Image */}
      <div className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#17171d] via-[#0e0e13] to-[#08080b] sm:rounded-3xl">
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(255,23,100,0.07),transparent_65%)]" />

        {selectedImage ? (
          <Image
            key={selectedImage.id}
            src={selectedImage.src}
            alt={selectedImage.alt || productName}
            fill
            priority={safeSelectedIndex === 0}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.025] sm:p-7 lg:p-9"
          />
        ) : (
          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3 text-white/30">
            <ImageIcon size={38} strokeWidth={1.2} />
            <span className="text-xs sm:text-sm">
              Product image coming soon
            </span>
          </div>
        )}

        {/* Product Badge */}
        {badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full border border-[#ff6b9b]/30 bg-[#ff1764] px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#ff1764]/20 sm:left-4 sm:top-4 sm:px-4 sm:py-2 sm:text-[10px]">
            {badge}
          </span>
        )}

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <span className="absolute right-3 top-3 z-10 rounded-full border border-white/10 bg-black/75 px-3 py-1.5 text-[9px] font-bold text-white backdrop-blur-md sm:right-4 sm:top-4 sm:px-4 sm:py-2 sm:text-[10px]">
            SAVE {discountPercentage}%
          </span>
        )}

        {/* Image Navigation */}
        {validImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous product image"
              className="absolute left-2.5 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur-md transition-all hover:border-[#ff1764] hover:bg-[#ff1764] sm:left-4 sm:h-10 sm:w-10 sm:opacity-0 sm:group-hover:opacity-100"
            >
              <ChevronLeft size={19} />
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next product image"
              className="absolute right-2.5 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur-md transition-all hover:border-[#ff1764] hover:bg-[#ff1764] sm:right-4 sm:h-10 sm:w-10 sm:opacity-0 sm:group-hover:opacity-100"
            >
              <ChevronRight size={19} />
            </button>
          </>
        )}

        {/* Image Counter */}
        {validImages.length > 1 && (
          <span className="absolute bottom-3 right-3 z-10 rounded-full border border-white/10 bg-black/70 px-2.5 py-1 text-[9px] font-semibold text-white/80 backdrop-blur-md sm:bottom-4 sm:right-4 sm:px-3 sm:py-1.5 sm:text-[10px]">
            {safeSelectedIndex + 1} / {validImages.length}
          </span>
        )}
      </div>

      {/* Thumbnail Gallery - Seven Images in One Row */}
      {validImages.length > 0 && (
        <div className="mt-3 w-full sm:mt-4">
          <div
            className="grid grid-flow-col auto-cols-[76px] gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/15 sm:auto-cols-[minmax(0,1fr)] sm:grid-flow-row sm:grid-cols-7 sm:gap-2.5 sm:overflow-visible sm:pb-0"
            aria-label="Product image thumbnails"
          >
            {validImages.map((image, index) => {
              const isSelected = safeSelectedIndex === index;

              return (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`View product image ${index + 1}`}
                  aria-pressed={isSelected}
                  className={`group relative aspect-square min-w-0 overflow-hidden rounded-lg border bg-[#0b0c10] transition-all duration-200 sm:rounded-xl ${
                    isSelected
                      ? "border-2 border-[#ff1764] shadow-[0_0_14px_rgba(255,23,100,0.14)]"
                      : "border-white/10 hover:border-white/40"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt || `${productName} image ${index + 1}`}
                    fill
                    sizes="(max-width: 639px) 76px, (max-width: 1023px) 12vw, 7vw"
                    className={`object-contain p-1.5 transition-all duration-300 sm:p-2 ${
                      isSelected
                        ? "opacity-100"
                        : "opacity-75 group-hover:scale-105 group-hover:opacity-100"
                    }`}
                  />

                  {isSelected && (
                    <span className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-[#ff1764] shadow-[0_0_8px_rgba(255,23,100,0.8)] sm:bottom-1.5 sm:right-1.5 sm:h-2 sm:w-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
