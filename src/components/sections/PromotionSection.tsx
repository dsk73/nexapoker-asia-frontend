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
    <section className="relative overflow-hidden bg-[#050507] py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}

        <div className="absolute right-[-12%] top-[5%] h-105 w-105 rounded-full bg-[#1877ff]/7 blur-[150px]" />

        {/* Pink glow */}

        <div className="absolute bottom-[-8%] left-[-12%] h-105 w-105 rounded-full bg-[#ff1764]/6 blur-[150px]" />

        {/* Center atmosphere */}

        <div className="absolute left-1/2 top-[45%] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1877ff]/3 blur-[140px]" />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="container-nexa relative z-10">
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
            className="mb-10 text-center sm:mb-12"
          >
            {/* Eyebrow */}

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff1764]">
              Nexa Poker
            </p>

            {/* Heading */}

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Featured Promotions
            </h2>

            {/* Description */}

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
              Discover the latest promotions and exciting opportunities
              available at Nexa Poker.
            </p>
          </motion.div>
        )}

        {/* =================================================
            PROMOTION GRID
        ================================================= */}

        <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
          {visiblePromotions.map((promotion, index) => (
            <PromotionCard
              key={promotion.id}
              promotion={promotion}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
