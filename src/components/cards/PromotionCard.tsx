// src/components/cards/PromotionCard.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import type { FeaturedPromotion } from "@/types/content";
import { getMediaUrl } from "@/lib/media";

interface PromotionCardProps {
  promotion: FeaturedPromotion;
  index: number;
  accentColor?: string;
}

interface CardTheme {
  background: string;
  border: string;
  hoverBorder: string;
  glow: string;
}

export default function PromotionCard({
  promotion,
  index,
  accentColor,
}: PromotionCardProps) {
  const iconUrl = getMediaUrl(promotion.Icon, "large");

  /*
   * Six different promotion colours.
   *
   * 1 → Blue
   * 2 → Pink
   * 3 → Purple
   * 4 → Cyan
   * 5 → Orange
   * 6 → Green
   *
   * These are used as fallback colours when no
   * accentColor is explicitly provided.
   */
  const cardThemes: CardTheme[] = [
    {
      background:
        "bg-[radial-gradient(circle_at_50%_45%,rgba(24,119,255,0.48),rgba(7,29,63,0.96)_72%)]",
      border: "border-[#1877ff]/50",
      hoverBorder: "group-hover:border-[#3d91ff]/80",
      glow: "bg-[#1877ff]/30",
    },
    {
      background:
        "bg-[radial-gradient(circle_at_50%_45%,rgba(255,23,100,0.48),rgba(63,10,30,0.96)_72%)]",
      border: "border-[#ff1764]/50",
      hoverBorder: "group-hover:border-[#ff4a91]/80",
      glow: "bg-[#ff1764]/30",
    },
    {
      background:
        "bg-[radial-gradient(circle_at_50%_45%,rgba(139,92,246,0.48),rgba(38,20,70,0.96)_72%)]",
      border: "border-[#8b5cf6]/50",
      hoverBorder: "group-hover:border-[#a78bfa]/80",
      glow: "bg-[#8b5cf6]/30",
    },
    {
      background:
        "bg-[radial-gradient(circle_at_50%_45%,rgba(6,182,212,0.48),rgba(5,38,48,0.96)_72%)]",
      border: "border-[#06b6d4]/50",
      hoverBorder: "group-hover:border-[#22d3ee]/80",
      glow: "bg-[#06b6d4]/30",
    },
    {
      background:
        "bg-[radial-gradient(circle_at_50%_45%,rgba(245,158,11,0.48),rgba(63,38,7,0.96)_72%)]",
      border: "border-[#f59e0b]/50",
      hoverBorder: "group-hover:border-[#fbbf24]/80",
      glow: "bg-[#f59e0b]/30",
    },
    {
      background:
        "bg-[radial-gradient(circle_at_50%_45%,rgba(34,197,94,0.48),rgba(8,48,25,0.96)_72%)]",
      border: "border-[#22c55e]/50",
      hoverBorder: "group-hover:border-[#4ade80]/80",
      glow: "bg-[#22c55e]/30",
    },
  ];

  const theme = cardThemes[index % cardThemes.length];

  /*
   * If PromotionSection or RelatedPromotion provides
   * an accentColor, use it for the card border and glow.
   *
   * Otherwise, fall back to the predefined theme.
   */
  const hasCustomAccent = Boolean(accentColor);

  const customBorderStyle = hasCustomAccent
    ? {
        borderColor: `${accentColor}80`,
      }
    : undefined;

  const customGlowStyle = hasCustomAccent
    ? {
        backgroundColor: `${accentColor}4d`,
      }
    : undefined;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.1, 0.3),
      }}
      className="relative h-full min-w-0"
    >
      <Link
        href={`/promotion/${promotion.Slug}`}
        className="group block h-full min-w-0"
      >
        {/* =================================================
            CARD WRAPPER

            Extra top space allows the transparent PNG
            to extend outside the card frame.
        ================================================= */}

        <article className="relative pt-14 sm:pt-16">
          {/* =================================================
              CARD
          ================================================= */}

          <div
            className={`
              relative
              h-52
              min-w-0
              overflow-visible
              rounded-2xl
              border
              ${!hasCustomAccent ? theme.border : ""}
              ${theme.hoverBorder}
              ${theme.background}
              transition-all
              duration-400
              group-hover:-translate-y-1
              sm:h-55
              sm:rounded-[22px]
            `}
            style={customBorderStyle}
          >
            {/* =================================================
                CARD ATMOSPHERE
            ================================================= */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl sm:rounded-[22px]">
              {/* Main glow behind icon */}

              <div
                className={`
                  absolute
                  left-1/2
                  -top-20
                  h-56
                  w-56
                  -translate-x-1/2
                  rounded-full
                  ${!hasCustomAccent ? theme.glow : ""}
                  blur-[70px]
                  opacity-100
                  transition-all
                  duration-500
                  group-hover:scale-125
                  sm:-top-22.5
                  sm:h-64
                  sm:w-64
                  sm:blur-[80px]
                `}
                style={customGlowStyle}
              />

              {/* Bottom glow */}

              <div className="absolute -bottom-20 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-white/5 blur-[70px] sm:-bottom-25 sm:h-56 sm:w-80 sm:blur-[85px]" />

              {/* Top border highlight */}

              <div className="absolute inset-x-4 top-0 h-px bg-white/20 sm:inset-x-5" />
            </div>

            {/* =================================================
                LARGE FLOATING PNG

                Intentionally extends outside the card.
            ================================================= */}

            {iconUrl && (
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  -top-20
                  z-20
                  h-45
                  w-45
                  -translate-x-1/2
                  transition-transform
                  duration-500
                  group-hover:-translate-y-2
                  group-hover:scale-[1.05]
                  sm:-top-22
                  sm:h-51.25
                  sm:w-51.25
                "
              >
                <Image
                  src={iconUrl}
                  alt={promotion.Title}
                  fill
                  sizes="(max-width: 640px) 180px, 220px"
                  className="object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.6)] sm:drop-shadow-[0_22px_32px_rgba(0,0,0,0.6)]"
                />
              </div>
            )}

            {/* =================================================
                CARD CONTENT
            ================================================= */}

            <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-5 text-center sm:px-6 sm:pb-6">
              {/* Title */}

              <h3
                className="
                  wrap-break-word
                  text-base
                  font-bold
                  leading-tight
                  tracking-tight
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-white
                  sm:whitespace-nowrap
                  sm:text-[20px]
                "
              >
                {promotion.Title}
              </h3>

              {/* Description */}

              {promotion.Description && (
                <p
                  className="
                    mx-auto
                    mt-2
                    max-w-full
                    wrap-break-word
                    text-xs
                    leading-5
                    text-white/70
                    sm:mt-3
                    sm:text-sm
                  "
                >
                  {promotion.Description}
                </p>
              )}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
