import Image from "next/image";

import type { DownloadPage } from "@/types/pages";
import { getMediaUrl } from "@/lib/media";

interface DownloadHeroProps {
  page: DownloadPage;
}

export default function DownloadHero({ page }: DownloadHeroProps) {
  const imageUrl = getMediaUrl(page.BannerImage, "large");

  return (
    <section className="px-6 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pt-36">
      <div className="container-nexa">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#46b9ff] sm:text-sm">
              Download NexaPoker
            </p>

            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {page.Title || "Download NexaPoker"}
            </h1>

            {page.Description && (
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                {page.Description}
              </p>
            )}
          </div>

          {/* =================================================
              BANNER IMAGE
          ================================================= */}

          {imageUrl && (
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/3">
                <Image
                  src={imageUrl}
                  alt={
                    page.BannerImage?.alternativeText ||
                    page.Title ||
                    "Download NexaPoker"
                  }
                  width={page.BannerImage?.width || 1200}
                  height={page.BannerImage?.height || 800}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
