
import Image from "next/image";
import type { ShopBenefit } from "@/types/shop";
import { getMediaUrl } from "@/lib/media";
import { Award, Gem, Gift, ShieldCheck } from "lucide-react";

interface ShopBenefitsProps {
  benefits?: ShopBenefit[];
}

const benefitIcons = [Award, Gem, Gift, ShieldCheck];

export default function ShopBenefits({
  benefits = [],
}: ShopBenefitsProps) {
  const activeBenefits = benefits
    .filter((benefit) => benefit.Active)
    .sort(
      (a, b) => (a.DisplayOrder ?? 0) - (b.DisplayOrder ?? 0)
    );

  if (!activeBenefits.length) return null;

  return (
    <section className="border-y border-white/8 bg-[#0b0c10] py-12 sm:py-16">
      <div className="container-nexa grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {activeBenefits.map((benefit, index) => {
          const Icon = benefitIcons[index % benefitIcons.length];
          const iconUrl = getMediaUrl(benefit.Icon, "small");

          return (
            <div
              key={benefit.id}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#ff1764]/20 bg-[#ff1764]/8">
                {iconUrl ? (
                  <Image
                    src={iconUrl}
                    alt={benefit.Title}
                    width={44}
                    height={44}
                    className="h-11 w-11 object-contain"
                  />
                ) : (
                  <Icon size={30} className="text-[#ff1764]" />
                )}
              </div>

              <h2 className="mt-4 text-sm font-bold text-white sm:text-base">
                {benefit.Title}
              </h2>

              {benefit.Description && (
                <p className="mt-2 max-w-xs text-xs leading-5 text-white/55 sm:text-sm">
                  {benefit.Description}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
