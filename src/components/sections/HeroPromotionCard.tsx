/* eslint-disable @next/next/no-img-element */

"use client";

import { Check, Copy, Users } from "lucide-react";
import { useState } from "react";

import type { HeroPromotionCard } from "@/types/content";
import { getMediaUrl } from "@/lib/media";

interface HeroPromotionCardProps {
  card: HeroPromotionCard | null;
}

export default function HeroPromotionCard({ card }: HeroPromotionCardProps) {
  const [copied, setCopied] = useState(false);

  if (!card) {
    return null;
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(card.ReferralCode);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="relative w-full max-w-115">
      {/* =====================================================
          OUTER GLOW
          ===================================================== */}

      <div className="pointer-events-none absolute -inset-3 rounded-[30px] bg-linear-to-br from-[#1877ff]/20 via-transparent to-[#ff1764]/20 blur-2xl" />

      {/* =====================================================
          MAIN CARD
          ===================================================== */}

      <div className="relative overflow-hidden rounded-[26px] border border-[#1877ff]/30 bg-[#080d18]/95 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:p-6">
        {/* Blue atmosphere */}

        <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#1877ff]/10 blur-3xl" />

        {/* Pink atmosphere */}

        <div className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-[#ff1764]/10 blur-3xl" />

        <div className="relative z-10">
          {/* =================================================
              BADGE
              ================================================= */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1877ff]/25 bg-[#1877ff]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#46b9ff]">
            <Users size={15} />

            {card.Badge}
          </div>

          {/* =================================================
              TITLE
              ================================================= */}

          <h2 className="max-w-100 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
            {card.CardTitle}
          </h2>

          {/* =================================================
              REFERRAL CODE
              ================================================= */}

          <div className="relative mt-6">
            <div className="absolute -top-3 left-5 rounded-full bg-[#0b1726] px-3 text-xs font-semibold text-[#46b9ff]">
              Referral Code
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl border border-[#1877ff]/35 bg-[#09111f] px-5 py-4">
              <span className="min-w-0 truncate text-2xl font-black tracking-[0.12em] text-[#46b9ff] sm:text-3xl">
                {card.ReferralCode}
              </span>

              <button
                type="button"
                onClick={handleCopy}
                className="flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/6 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                aria-label={
                  copied ? "Referral code copied" : "Copy referral code"
                }
              >
                {copied ? (
                  <>
                    <Check size={17} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={17} />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          {/* =================================================
              BENEFITS
              ALL CONTENT COMES FROM STRAPI
              ================================================= */}

          {card.Benefits && card.Benefits.length > 0 && (
            <div className="mt-5 divide-y divide-white/10 border-t border-white/10">
              {card.Benefits.map((benefit, index) => {
                const iconUrl = benefit.Icon
                  ? getMediaUrl(benefit.Icon, "small")
                  : null;

                return (
                  <div
                    key={benefit.id ?? `${benefit.Title}-${index}`}
                    className="flex items-start gap-3 py-3.5"
                  >
                    {/* =================================================
                        BENEFIT ICON FROM STRAPI
                        ================================================= */}

                    <div
                      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg ${
                        index % 2 === 0 ? "bg-[#1877ff]/15" : "bg-[#ff1764]/10"
                      }`}
                    >
                      {iconUrl ? (
                        <img
                          src={iconUrl}
                          alt={benefit.Title}
                          className="h-full w-full object-contain p-1.5"
                        />
                      ) : (
                        <Check
                          size={15}
                          className={
                            index % 2 === 0
                              ? "text-[#46b9ff]"
                              : "text-[#ff5b91]"
                          }
                        />
                      )}
                    </div>

                    {/* =================================================
                        BENEFIT CONTENT FROM STRAPI
                        ================================================= */}

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-white">
                        {benefit.Title}
                      </p>

                      {benefit.Description && (
                        <p className="mt-1 text-xs leading-5 text-white/50">
                          {benefit.Description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* =================================================
              COMMUNITY CTA
              MUST STAY BELOW BENEFITS
              ================================================= */}

          <a
            href={card.CommunityButtonURL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex w-full items-center justify-center rounded-xl border border-[#ff1764]/30 bg-[#ff1764]/10 px-5 py-4 text-sm font-semibold text-white transition hover:border-[#ff1764]/50 hover:bg-[#ff1764]/15"
          >
            {card.CommunityButtonText}
          </a>
        </div>
      </div>
    </div>
  );
}
