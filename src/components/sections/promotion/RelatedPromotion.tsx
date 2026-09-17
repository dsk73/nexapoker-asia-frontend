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

  return (
    <section className="relative overflow-hidden bg-[#050507] pb-20 sm:pb-24 lg:pb-28">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-12%] top-[10%] h-105 w-105 rounded-full bg-[#1877ff]/5 blur-[150px]" />

        <div className="absolute bottom-[-10%] left-[-12%] h-105 w-105 rounded-full bg-[#ff1764]/5 blur-[150px]" />

        <div className="absolute left-1/2 top-[45%] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1877ff]/3 blur-[140px]" />
      </div>

      <div className="container-nexa relative z-10">
        {/* =================================================
            SECTION HEADING
        ================================================= */}

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
          className="mb-10 text-left sm:mb-12"
        >
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            More Promotions
          </h2>
        </motion.div>

        {/* =================================================
            RELATED PROMOTION GRID
        ================================================= */}

        <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
          {relatedPromotions.map((promotion, index) => (
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
