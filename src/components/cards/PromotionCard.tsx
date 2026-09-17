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
      className="relative h-full"
    >
      <Link
        href={`/promotion/${promotion.Slug}`}
        className="group block h-full"
      >
        {/* =================================================
            CARD WRAPPER

            Extra top space allows the transparent PNG
            to extend outside the card frame.
        ================================================= */}

        <article className="relative pt-16">
          {/* =================================================
              CARD
          ================================================= */}

          <div
            className={`
              relative
              h-55
              overflow-visible
              rounded-[22px]
              border
              ${theme.border}
              ${theme.hoverBorder}
              ${theme.background}
              transition-all
              duration-400
              group-hover:-translate-y-1
            `}
          >
            {/* =================================================
                CARD ATMOSPHERE
            ================================================= */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[22px]">
              {/* Main glow behind icon */}

              <div
                className={`
                  absolute
                  left-1/2
                  -top-22.5
                  h-64
                  w-64
                  -translate-x-1/2
                  rounded-full
                  ${theme.glow}
                  blur-[80px]
                  transition-all
                  duration-500
                  group-hover:scale-125
                `}
              />

              {/* Bottom glow */}

              <div className="absolute -bottom-25 left-1/2 h-56 w-80 -translate-x-1/2 rounded-full bg-white/5 blur-[85px]" />

              {/* Top border highlight */}

              <div className="absolute inset-x-5 top-0 h-px bg-white/20" />
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
                  -top-22
                  z-20
                  h-51.25
                  w-51.25
                  -translate-x-1/2
                  transition-transform
                  duration-500
                  group-hover:-translate-y-3
                  group-hover:scale-[1.05]
                  sm:h-55
                  sm:w-55
                "
              >
                <Image
                  src={iconUrl}
                  alt={promotion.Title}
                  fill
                  sizes="220px"
                  className="object-contain drop-shadow-[0_22px_32px_rgba(0,0,0,0.6)]"
                />
              </div>
            )}

            {/* =================================================
                CARD CONTENT

                Title stays on one line.
                Description wraps naturally inside the card.
            ================================================= */}

            <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-6 text-center sm:px-6">
              {/* Title */}

              <h3
                className="
                  whitespace-nowrap
                  text-[18px]
                  font-bold
                  leading-tight
                  tracking-tight
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-white
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
                    mt-3
                    max-w-full
                    text-[13px]
                    leading-5
                    text-white/70
                    sm:text-sm
                    sm:leading-5
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
