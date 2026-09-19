// src/components/sections/PromotionSection.tsx

"use client";

import { motion } from "framer-motion";

import PromotionCard from "@/components/cards/PromotionCard";
import type { FeaturedPromotion } from "@/types/content";

interface PromotionSectionProps {
  promotions: FeaturedPromotion[];
  showHeading?: boolean;
}

export default function PromotionSection({
  promotions,
  showHeading = true,
}: PromotionSectionProps) {
  if (!promotions.length) {
    return null;
  }

  /*
   * Homepage Featured Promotions intentionally displays
   * only the first three promotions.
   *
   * The reusable PromotionCard component handles:
   * - Card colours
   * - Floating promotion icon
   * - Card glow
   * - Title
   * - Description
   * - Hover animation
   * - Promotion link
   */

  const visiblePromotions = promotions.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-[#050507] px-4 py-14 sm:px-6 sm:py-20 lg:px-0 lg:py-28">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}

        <div className="absolute right-[-18%] top-[5%] h-72 w-72 rounded-full bg-[#1877ff]/7 blur-[110px] sm:right-[-12%] sm:h-105 sm:w-105 sm:blur-[150px]" />

        {/* Pink glow */}

        <div className="absolute bottom-[-10%] left-[-18%] h-72 w-72 rounded-full bg-[#ff1764]/6 blur-[110px] sm:bottom-[-8%] sm:left-[-12%] sm:h-105 sm:w-105 sm:blur-[150px]" />

        {/* Center atmosphere */}

        <div className="absolute left-1/2 top-[45%] h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1877ff]/3 blur-[100px] sm:h-80 sm:w-80 sm:blur-[140px]" />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="container-nexa relative z-10 min-w-0">
        {/* =================================================
            SECTION HEADING

            This heading is shown on the homepage.

            The Promotion page will have its own page-level
            heading and can render PromotionCard directly.
        ================================================= */}

        {showHeading && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mb-8 text-center sm:mb-12"
          >
            {/* Eyebrow */}

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#ff1764] sm:mb-3 sm:text-sm sm:tracking-[0.2em]">
              Nexa Poker
            </p>

            {/* Heading */}

            <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Featured Promotions
            </h2>

            {/* Description */}

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:mt-5 sm:text-lg sm:leading-7">
              Discover the latest promotions and exciting opportunities
              available at Nexa Poker.
            </p>
          </motion.div>
        )}

        {/* =================================================
            PROMOTION GRID
        ================================================= */}

        <div className="grid min-w-0 grid-cols-1 gap-x-5 gap-y-10 sm:gap-x-6 sm:gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-20">
          {visiblePromotions.map((promotion, index) => (
            <div key={promotion.id} className="min-w-0">
              <PromotionCard promotion={promotion} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
