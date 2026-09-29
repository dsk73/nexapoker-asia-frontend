// src/app/promotion/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PromotionCard from "@/components/cards/PromotionCard";
import { getFeaturedPromotions } from "@/lib/api";

export const metadata: Metadata = {
  title: "Featured Promotions",
  description:
    "Explore the latest Nexa Poker promotions, rewards and exciting poker opportunities.",
  alternates: {
    canonical: "https://nexapoker-asia.com/promotion",
  },
  openGraph: {
    title: "Featured Promotions | Nexa Poker",
    description:
      "Explore the latest Nexa Poker promotions, rewards and exciting poker opportunities.",
    url: "https://nexapoker-asia.com/promotion",
    siteName: "Nexa Poker",
    type: "website",
  },
};

export const dynamic = "force-dynamic";

export default async function PromotionPage() {
  const promotions = await getFeaturedPromotions();

  /*
   * =========================================================
   * PROMOTIONS
   * =========================================================
   *
   * Maximum of 6 promotions are displayed.
   *
   * The grid layout is intentionally kept identical to the
   * homepage PromotionSection.
   *
   * Desktop:
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
   * → 6-column internal grid
   *
   * PromotionCard handles its own accent colours:
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
   * Six internal columns allow precise positioning of cards.
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
       * Full 3-card row.
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
    <>
      <Navbar />

      <main className="min-h-screen overflow-x-hidden bg-[#050507]">
        {/* =====================================================
            PAGE HEADER
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#050507]">
          {/* =================================================
              BACKGROUND ATMOSPHERE
          ================================================= */}

          <div className="pointer-events-none absolute inset-0">
            {/* Blue glow */}

            <div className="absolute right-[-20%] top-[-15%] h-80 w-80 rounded-full bg-[#1877ff]/4 blur-[110px] sm:right-[-12%] sm:top-[-20%] sm:h-120 sm:w-120 sm:bg-[#1877ff]/5 sm:blur-[150px]" />

            {/* Pink glow */}

            <div className="absolute bottom-[-20%] left-[-20%] h-80 w-80 rounded-full bg-[#ff1764]/3 blur-[110px] sm:bottom-[-30%] sm:left-[-10%] sm:h-120 sm:w-120 sm:bg-[#ff1764]/4 sm:blur-[150px]" />
          </div>

          {/* =================================================
              HEADER CONTENT
          ================================================= */}

          <div className="container-nexa relative z-10 px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
            {/* =================================================
                BREADCRUMB
            ================================================= */}

            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex min-w-0 items-center gap-1.5 text-xs sm:mb-12 sm:gap-2 sm:text-sm"
            >
              <Link
                href="/"
                className="shrink-0 font-medium text-white transition-colors duration-200 hover:text-[#ff1764]"
              >
                Home
              </Link>

              <ChevronRight
                size={14}
                className="shrink-0 text-white/30 sm:h-3.75 sm:w-3.75"
                aria-hidden="true"
              />

              <span className="truncate text-white/45">Promotions</span>
            </nav>

            {/* =================================================
                PAGE HEADING
            ================================================= */}

            <div className="max-w-3xl">
              {/* Eyebrow */}

              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.17em] text-[#ff1764] sm:mb-4 sm:text-sm sm:tracking-[0.2em]">
                Nexa Poker
              </p>

              {/* Heading */}

              <h1 className="max-w-full text-3xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[1.05]">
                Featured Promotions
              </h1>

              {/* Description */}

              <p className="mt-4 max-w-2xl text-[14px] leading-6 text-white/55 sm:mt-6 sm:text-lg sm:leading-8">
                Discover the latest promotions and exciting opportunities
                available at Nexa Poker.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROMOTION CARDS
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#050507] px-4 pb-16 sm:px-6 sm:pb-20 lg:px-0 lg:pb-24">
          {/* =================================================
              BACKGROUND ATMOSPHERE
          ================================================= */}

          <div className="pointer-events-none absolute inset-0">
            {/* Blue glow */}

            <div className="absolute right-[-18%] top-[5%] h-72 w-72 rounded-full bg-[#1877ff]/7 blur-[110px] sm:right-[-12%] sm:h-105 sm:w-105 sm:blur-[150px]" />

            {/* Pink glow */}

            <div className="absolute bottom-[-10%] left-[-18%] h-72 w-72 rounded-full bg-[#ff1764]/6 blur-[110px] sm:bottom-[-8%] sm:left-[-12%] sm:h-105 sm:w-105 sm:blur-[150px]" />

            {/* Center atmosphere */}

            <div className="absolute left-1/2 top-[45%] h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1877ff]/3 blur-[100px] sm:h-80 sm:w-80 sm:blur-[140px]" />
          </div>

          {/* =================================================
              CARD GRID
          ================================================= */}

          <div className="container-nexa relative z-10 min-w-0">
            {visiblePromotions.length > 0 ? (
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
                  <div
                    key={promotion.id}
                    className={`
                      min-w-0
                      ${getDesktopItemClass(index)}
                    `}
                  >
                    <PromotionCard
                      promotion={promotion}
                      index={index}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-white/8 bg-[#0a0d14] px-5 py-10 text-center sm:rounded-3xl sm:px-8 sm:py-14">
                <p className="text-sm text-white/50 sm:text-base">
                  No promotions are currently available.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}