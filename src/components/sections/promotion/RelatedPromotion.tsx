// src/components/sections/promotion/RelatedPromotion.tsx

"use client";

import { motion } from "framer-motion";

import PromotionCard from "@/components/cards/PromotionCard";
import type { FeaturedPromotion } from "@/types/content";

interface RelatedPromotionProps {
  promotions: FeaturedPromotion[];
  currentSlug: string;
}

export default function RelatedPromotion({
  promotions,
  currentSlug,
}: RelatedPromotionProps) {
  if (!promotions.length) {
    return null;
  }

  /*
   * Remove the promotion currently being viewed.
   * Then show up to 3 other promotions.
   */
  const relatedPromotions = promotions
    .filter((promotion) => promotion.Slug !== currentSlug)
    .slice(0, 3);

  if (!relatedPromotions.length) {
    return null;
  }

  /*
   * Related promotion colours.
   *
   * Keep the same colour order as PromotionSection:
   *
   * 1 → Blue
   * 2 → Pink
   * 3 → Purple
   */
  const promotionColors = ["#1877ff", "#ff1764", "#8b5cf6"];

  return (
    <section className="relative overflow-hidden bg-[#050507] px-4 pb-16 sm:px-6 sm:pb-20 lg:px-0 lg:pb-24">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}

        <div className="absolute right-[-20%] top-[10%] h-72 w-72 rounded-full bg-[#1877ff]/4 blur-[110px] sm:right-[-12%] sm:h-105 sm:w-105 sm:bg-[#1877ff]/5 sm:blur-[150px]" />

        {/* Pink glow */}

        <div className="absolute bottom-[-15%] left-[-20%] h-72 w-72 rounded-full bg-[#ff1764]/4 blur-[110px] sm:bottom-[-10%] sm:left-[-12%] sm:h-105 sm:w-105 sm:bg-[#ff1764]/5 sm:blur-[150px]" />

        {/* Center atmosphere */}

        <div className="absolute left-1/2 top-[45%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1877ff]/2.5 blur-[110px] sm:h-80 sm:w-80 sm:blur-[140px]" />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="container-nexa relative z-10 min-w-0">
        {/* =================================================
            SECTION HEADING
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
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
            duration: 0.6,
          }}
          className="mb-7 text-left sm:mb-10"
        >
          <h2 className="text-2xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            More Promotions
          </h2>
        </motion.div>

        {/* =================================================
            RELATED PROMOTION GRID

            Mobile:
            → 1 column

            Tablet:
            → 2 columns

            Desktop:
            → 3 columns
        ================================================= */}

        <div
          className="
            grid
            min-w-0
            grid-cols-1
            gap-x-6
            gap-y-8

            sm:grid-cols-2
            sm:gap-y-10

            lg:grid-cols-3
            lg:gap-x-8
            lg:gap-y-12
          "
        >
          {relatedPromotions.map((promotion, index) => (
            <motion.div
              key={promotion.id}
              className="min-w-0"
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <PromotionCard
                promotion={promotion}
                index={index}
                accentColor={promotionColors[index]}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
