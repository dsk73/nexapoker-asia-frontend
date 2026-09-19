// src/components/sections/HeroPromotionCard.tsx

/* eslint-disable @next/next/no-img-element */

"use client";

import { Check, Copy, Users } from "lucide-react";
import { useState } from "react";

import type { HeroPromotionCard as HeroPromotionCardType } from "@/types/content";
import { getMediaUrl } from "@/lib/media";

interface HeroPromotionCardProps {
  card: HeroPromotionCardType | null;
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
    <div className="relative w-full max-w-115 min-w-0">
      {/* =====================================================
          OUTER GLOW
          ===================================================== */}

      <div className="pointer-events-none absolute -inset-2 rounded-[28px] bg-linear-to-br from-[#1877ff]/20 via-transparent to-[#ff1764]/20 blur-2xl sm:-inset-3 sm:rounded-[30px]" />

      {/* =====================================================
          MAIN CARD
          ===================================================== */}

      <div className="relative overflow-hidden rounded-3xl border border-[#1877ff]/30 bg-[#080d18]/95 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:rounded-[26px] sm:p-6">
        {/* Blue atmosphere */}

        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#1877ff]/10 blur-3xl sm:-right-24 sm:-top-24 sm:h-48 sm:w-48" />

        {/* Pink atmosphere */}

        <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[#ff1764]/10 blur-3xl sm:-bottom-24 sm:-left-24 sm:h-48 sm:w-48" />

        <div className="relative z-10 min-w-0">
          {/* =================================================
              BADGE
              ================================================= */}

          <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[#1877ff]/25 bg-[#1877ff]/10 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#46b9ff] sm:mb-5 sm:px-4 sm:text-xs">
            <Users size={14} className="shrink-0 sm:h-3.75 sm:w-3.75" />

            <span className="truncate">{card.Badge}</span>
          </div>

          {/* =================================================
              TITLE
              ================================================= */}

          <h2 className="max-w-full wrap-break-word text-2xl font-bold leading-tight tracking-tight text-white sm:max-w-100 sm:text-3xl">
            {card.CardTitle}
          </h2>

          {/* =================================================
              REFERRAL CODE
              ================================================= */}

          <div className="relative mt-5 sm:mt-6">
            <div className="absolute -top-3 left-4 max-w-[calc(100%-2rem)] truncate rounded-full bg-[#0b1726] px-2.5 text-[11px] font-semibold text-[#46b9ff] sm:left-5 sm:px-3 sm:text-xs">
              Referral Code
            </div>

            <div className="flex min-w-0 flex-col gap-3 rounded-2xl border border-[#1877ff]/35 bg-[#09111f] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5">
              <span className="min-w-0 break-all text-xl font-black leading-tight tracking-widest text-[#46b9ff] sm:truncate sm:text-3xl sm:tracking-[0.12em]">
                {card.ReferralCode}
              </span>

              <button
                type="button"
                onClick={handleCopy}
                className="flex w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/6 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10 sm:w-auto"
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
                    className="flex min-w-0 items-start gap-2.5 py-3.5 sm:gap-3"
                  >
                    {/* =================================================
                        BENEFIT ICON FROM STRAPI
                        ================================================= */}

                    <div
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg sm:h-9 sm:w-9 ${
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
                      <p className="wrap-break-word text-sm font-semibold leading-5 text-white">
                        {benefit.Title}
                      </p>

                      {benefit.Description && (
                        <p className="mt-1 wrap-break-word text-xs leading-5 text-white/50">
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
            className="mt-5 flex min-h-12 w-full items-center justify-center rounded-xl border border-[#ff1764]/30 bg-[#ff1764]/10 px-4 py-3 text-center text-sm font-semibold leading-5 text-white transition hover:border-[#ff1764]/50 hover:bg-[#ff1764]/15 sm:px-5 sm:py-4"
          >
            {card.CommunityButtonText}
          </a>
        </div>
      </div>
    </div>
  );
}
