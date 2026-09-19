//src/app/promotion/page.tsx

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

  const visiblePromotions = promotions.slice(0, 3);

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

        <section className="relative overflow-hidden bg-[#050507] px-4 pb-16 sm:px-6 sm:pb-20 lg:pb-24">
          {/* =================================================
              BACKGROUND ATMOSPHERE
          ================================================= */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-20%] top-[5%] h-72 w-72 rounded-full bg-[#1877ff]/4 blur-[110px] sm:right-[-12%] sm:h-105 sm:w-105 sm:bg-[#1877ff]/5 sm:blur-[150px]" />

            <div className="absolute bottom-[-12%] left-[-20%] h-72 w-72 rounded-full bg-[#ff1764]/4 blur-[110px] sm:bottom-[-8%] sm:left-[-12%] sm:h-105 sm:w-105 sm:bg-[#ff1764]/5 sm:blur-[150px]" />
          </div>

          {/* =================================================
              CARD GRID
          ================================================= */}

          <div className="container-nexa relative z-10">
            {visiblePromotions.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
                {visiblePromotions.map((promotion, index) => (
                  <PromotionCard
                    key={promotion.id}
                    promotion={promotion}
                    index={index}
                  />
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
