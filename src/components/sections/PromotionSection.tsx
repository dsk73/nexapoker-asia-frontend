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
   * =========================================================
   * HOMEPAGE FEATURED PROMOTIONS
   * =========================================================
   *
   * Maximum of 6 promotions are displayed.
   *
   * Desktop layouts:
   *
   * 6 promotions:
   * [ 1 ] [ 2 ] [ 3 ]
   * [ 4 ] [ 5 ] [ 6 ]
   *
   * 5 promotions:
   * [ 1 ] [ 2 ] [ 3 ]
   *     [ 4 ] [ 5 ]
   *
   * 4 promotions:
   * [     1     ] [     2     ]
   * [     3     ] [     4     ]
   *
   * 3 promotions:
   * [ 1 ] [ 2 ] [ 3 ]
   *
   * 2 promotions:
   *     [ 1 ] [ 2 ]
   *
   * 1 promotion:
   *         [ 1 ]
   *
   * Mobile:
   * → 1 column
   *
   * Tablet:
   * → 2 columns
   *
   * Desktop:
   * → 6-column internal grid for precise positioning
   *
   * PromotionCard handles the individual card colours:
   *
   * 1 → Blue
   * 2 → Pink
   * 3 → Purple
   * 4 → Cyan
   * 5 → Orange
   * 6 → Green
   */

  const visiblePromotions = promotions.slice(0, 6);
  const promotionCount = visiblePromotions.length;

  /*
   * =========================================================
   * DESKTOP GRID
   * =========================================================
   *
   * Six internal columns allow precise positioning for:
   *
   * - Centered single card
   * - Centered pair
   * - 3-card row
   * - Special 4-card 2 × 2 layout
   * - 5-card 3 + centered 2 layout
   * - 6-card 3 × 2 layout
   */

  const gridClassName = "lg:grid-cols-6";

  /*
   * =========================================================
   * DESKTOP ITEM POSITIONING
   * =========================================================
   */

  const getDesktopItemClass = (index: number) => {
    switch (promotionCount) {
      /*
       * =====================================================
       * 1 PROMOTION
       *
       *           [ 1 ]
       *
       * Centered.
       * =====================================================
       */
      case 1:
        return "lg:col-span-2 lg:col-start-3";

      /*
       * =====================================================
       * 2 PROMOTIONS
       *
       *       [ 1 ] [ 2 ]
       *
       * Centered as a group.
       * =====================================================
       */
      case 2:
        return index === 0
          ? "lg:col-span-2 lg:col-start-2"
          : "lg:col-span-2 lg:col-start-4";

      /*
       * =====================================================
       * 3 PROMOTIONS
       *
       * [ 1 ] [ 2 ] [ 3 ]
       *
       * Full 3-column row.
       * =====================================================
       */
      case 3:
        return "lg:col-span-2";

      /*
       * =====================================================
       * 4 PROMOTIONS
       *
       * [     1     ] [     2     ]
       * [     3     ] [     4     ]
       *
       * Special 2 × 2 layout.
       *
       * Each card occupies 3 of the 6 internal columns.
       * =====================================================
       */
      case 4:
        return "lg:col-span-3";

      /*
       * =====================================================
       * 5 PROMOTIONS
       *
       * [ 1 ] [ 2 ] [ 3 ]
       *     [ 4 ] [ 5 ]
       *
       * Second row is centered.
       * =====================================================
       */
      case 5:
        if (index < 3) {
          return "lg:col-span-2";
        }

        return index === 3
          ? "lg:col-span-2 lg:col-start-2"
          : "lg:col-span-2 lg:col-start-4";

      /*
       * =====================================================
       * 6 PROMOTIONS
       *
       * [ 1 ] [ 2 ] [ 3 ]
       * [ 4 ] [ 5 ] [ 6 ]
       *
       * =====================================================
       */
      case 6:
      default:
        return "lg:col-span-2";
    }
  };

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

            MOBILE
            → 1 column

            TABLET
            → 2 columns

            DESKTOP
            → Dynamic 6-column layout

            1 → centered
            2 → centered 2 cards
            3 → 3 cards
            4 → special 2 × 2
            5 → 3 + centered 2
            6 → 3 × 2

            PromotionCard handles the card colours:
            1 → Blue
            2 → Pink
            3 → Purple
            4 → Cyan
            5 → Orange
            6 → Green
        ================================================= */}

        <div
          className={`
            grid
            min-w-0
            grid-cols-1
            gap-x-5
            gap-y-10

            sm:grid-cols-2
            sm:gap-x-6
            sm:gap-y-12

            md:gap-x-7
            md:gap-y-14

            lg:mt-2
            lg:gap-x-8
            lg:gap-y-16

            xl:gap-x-10
            xl:gap-y-20

            ${gridClassName}
          `}
        >
          {visiblePromotions.map((promotion, index) => (
            <motion.div
              key={promotion.id}
              className={`
                min-w-0
                ${getDesktopItemClass(index)}
              `}
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
              <PromotionCard promotion={promotion} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
