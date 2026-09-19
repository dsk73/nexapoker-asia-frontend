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
}

export default function PromotionCard({
  promotion,
  index,
}: PromotionCardProps) {
  const iconUrl = getMediaUrl(promotion.Icon, "large");

  /*
   * The three featured promotion cards use the same
   * visual language as the reference:
   *
   * Card 1 → Purple
   * Card 2 → Blue
   * Card 3 → Red
   */

  const cardThemes = [
    {
      background:
        "bg-[radial-gradient(circle_at_50%_45%,rgba(116,42,150,0.48),rgba(38,16,55,0.94)_72%)]",
      border: "border-[#7b2fa0]/50",
      hoverBorder: "group-hover:border-[#b34bdc]/80",
      glow: "bg-[#a02dd0]/30",
    },
    {
      background:
        "bg-[radial-gradient(circle_at_50%_45%,rgba(19,73,145,0.52),rgba(7,29,63,0.96)_72%)]",
      border: "border-[#1877ff]/50",
      hoverBorder: "group-hover:border-[#3d91ff]/80",
      glow: "bg-[#1877ff]/30",
    },
    {
      background:
        "bg-[radial-gradient(circle_at_50%_45%,rgba(128,25,25,0.52),rgba(63,10,10,0.96)_72%)]",
      border: "border-[#a51f1f]/55",
      hoverBorder: "group-hover:border-[#df3434]/80",
      glow: "bg-[#ff3030]/30",
    },
  ];

  const theme = cardThemes[index % cardThemes.length];

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
              ${theme.border}
              ${theme.hoverBorder}
              ${theme.background}
              transition-all
              duration-400
              group-hover:-translate-y-1
              sm:h-55
              sm:rounded-[22px]
            `}
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
                  ${theme.glow}
                  blur-[70px]
                  transition-all
                  duration-500
                  group-hover:scale-125
                  sm:-top-22.5
                  sm:h-64
                  sm:w-64
                  sm:blur-[80px]
                `}
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

                Title stays on one line on larger screens,
                while mobile allows wrapping when necessary.
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
