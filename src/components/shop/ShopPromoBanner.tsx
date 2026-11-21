
import Image from "next/image";
import Link from "next/link";
import type { ShopPageSetting } from "@/types/shop";
import { getMediaUrl } from "@/lib/media";
import { ArrowRight } from "lucide-react";

interface ShopPromoBannerProps {
  settings: ShopPageSetting;
}

export default function ShopPromoBanner({ settings }: ShopPromoBannerProps) {
  const image = getMediaUrl(settings.PromotionalBannerImage, "large");

  if (
    !settings.PromotionalBannerTitle &&
    !settings.PromotionalBannerDescription &&
    !image
  ) {
    return null;
  }

  return (
    <section className="bg-[#050507] px-4 py-10 sm:px-6 sm:py-12">
      <div className="container-nexa">
        <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-[#101015]">

          {/* Background Image */}
          {image && (
            <div className="absolute inset-0 -z-10">
              <Image
                src={image}
                alt={settings.PromotionalBannerTitle || "Nexa Poker collection"}
                fill
                sizes="100vw"
                className="object-cover object-center opacity-95"
              />

              {/* Reduced image overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-[#050507]/40 via-[#050507]/20 to-transparent" />
            </div>
          )}

          {/* Banner Content */}
          <div className="relative z-10 max-w-2xl px-6 py-9 sm:px-10 sm:py-12 lg:px-14 lg:py-14">

            {/* Highlight Label */}
            {settings.PromotionalBannerHighlight && (
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff6b9b] sm:text-xs">
                {settings.PromotionalBannerHighlight}
              </p>
            )}

            {/* Heading */}
            {settings.PromotionalBannerTitle && (
              <h2 className="text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
                {settings.PromotionalBannerTitle}
              </h2>
            )}

            {/* Description */}
            {settings.PromotionalBannerDescription && (
              <p className="mt-4 max-w-xl text-xs leading-6 text-white/75 sm:text-sm sm:leading-7">
                {settings.PromotionalBannerDescription}
              </p>
            )}

            {/* CTA */}
            {settings.PromotionalBannerButtonText &&
              settings.PromotionalBannerButtonLink && (
                <Link
                  href={settings.PromotionalBannerButtonLink}
                  className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#ff1764] px-6 py-3 text-xs font-bold text-white transition-all duration-300 hover:bg-[#c90046] hover:shadow-[0_0_20px_rgba(255,23,100,0.25)] sm:text-sm"
                >
                  {settings.PromotionalBannerButtonText}
                  <ArrowRight size={17} />
                </Link>
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
