
import Link from "next/link";
import Image from "next/image";
import type { ShopPageSetting, ShopBenefit } from "@/types/shop";
import { getMediaUrl } from "@/lib/media";
import { ArrowRight, Award, Gem, Gift, ShieldCheck } from "lucide-react";

interface ShopHeroProps {
  settings: ShopPageSetting;
}

const benefitIcons = [Award, Gem, Gift, ShieldCheck];

function BenefitCard({
  benefit,
  index,
}: {
  benefit: ShopBenefit;
  index: number;
}) {
  const Icon = benefitIcons[index % benefitIcons.length];
  const iconUrl = getMediaUrl(benefit.Icon, "small");

  return (
    <div className="group flex min-h-[155px] flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-all duration-300 hover:border-[#ff1764]/40 hover:bg-[#ff1764]/[0.06] sm:min-h-[170px] sm:p-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ff1764]/20 bg-[#ff1764]/10">
        {iconUrl ? (
          <Image
            src={iconUrl}
            alt={benefit.Title}
            width={30}
            height={30}
            className="h-7 w-7 object-contain"
          />
        ) : (
          <Icon size={23} className="text-[#ff1764]" />
        )}
      </div>

      <h2 className="mt-4 text-sm font-bold leading-5 text-white sm:text-base">
        {benefit.Title}
      </h2>

      {benefit.Description && (
        <p className="mt-2 text-xs leading-5 text-white/55 sm:text-sm">
          {benefit.Description}
        </p>
      )}
    </div>
  );
}

export default function ShopHero({ settings }: ShopHeroProps) {
  const activeBenefits = (settings.Benefits ?? [])
    .filter((benefit) => benefit.Active)
    .sort((a, b) => (a.DisplayOrder ?? 0) - (b.DisplayOrder ?? 0));

  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#050507] pt-24">
      {/* Background lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_40%,rgba(255,23,100,0.12),transparent_48%)]" />

      <div className="container-nexa grid items-center gap-10 py-12 sm:py-16 lg:min-h-[490px] lg:grid-cols-2 lg:gap-12 lg:py-16">

        {/* LEFT: HERO CONTENT */}
        <div className="max-w-2xl">
          {settings.HeroBadge && (
            <span className="inline-flex items-center gap-2 rounded-full border border-[#ff1764]/30 bg-[#ff1764]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#ff6b9b] sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff1764]" />
              {settings.HeroBadge}
            </span>
          )}

          <h1 className="mt-6 text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
            {settings.HeroTitle}

            {settings.HeroHighlight && (
              <span className="mt-2 block text-[#ff1764]">
                {settings.HeroHighlight}
              </span>
            )}
          </h1>

          {settings.HeroDescription && (
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              {settings.HeroDescription}
            </p>
          )}

          {settings.HeroButtonText && settings.HeroButtonLink && (
            <Link
              href={settings.HeroButtonLink}
              className="nexa-button-primary mt-7 inline-flex items-center gap-2"
            >
              {settings.HeroButtonText}
              <ArrowRight size={18} />
            </Link>
          )}

          <div className="mt-8 h-px w-20 bg-gradient-to-r from-[#ff1764] to-transparent" />
        </div>

        {/* RIGHT: BENEFIT CARDS */}
        {activeBenefits.length > 0 && (
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {activeBenefits.map((benefit, index) => (
              <BenefitCard
                key={benefit.id}
                benefit={benefit}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
