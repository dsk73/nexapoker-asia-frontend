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

  const visiblePromotions = promotions.slice(0, 3);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050507]">
        {/* =====================================================
            PAGE HEADER
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#050507]">
          {/* =================================================
              BACKGROUND ATMOSPHERE
          ================================================= */}

          <div className="pointer-events-none absolute inset-0">
            {/* Blue glow */}

            <div className="absolute right-[-12%] top-[-20%] h-120 w-120 rounded-full bg-[#1877ff]/5 blur-[150px]" />

            {/* Pink glow */}

            <div className="absolute bottom-[-30%] left-[-10%] h-120 w-120 rounded-full bg-[#ff1764]/4 blur-[150px]" />
          </div>

          {/* =================================================
              HEADER CONTENT
          ================================================= */}

          <div className="container-nexa relative z-10 py-16 sm:py-20 lg:py-24">
            {/* =================================================
                BREADCRUMB
            ================================================= */}

            <nav
              aria-label="Breadcrumb"
              className="mb-12 flex items-center gap-2 text-sm"
            >
              <Link
                href="/"
                className="font-medium text-white transition-colors duration-200 hover:text-[#ff1764]"
              >
                Home
              </Link>

              <ChevronRight
                size={15}
                className="text-white/30"
                aria-hidden="true"
              />

              <span className="text-white/45">Promotions</span>
            </nav>

            {/* =================================================
                PAGE HEADING
            ================================================= */}

            <div className="max-w-3xl">
              {/* Eyebrow */}

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff1764]">
                Nexa Poker
              </p>

              {/* Heading */}

              <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-[64px] lg:leading-[1.05]">
                Featured Promotions
              </h1>

              {/* Description */}

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
                Discover the latest promotions and exciting opportunities
                available at Nexa Poker.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROMOTION CARDS
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#050507] pb-20 sm:pb-24 lg:pb-28">
          {/* =================================================
              BACKGROUND ATMOSPHERE
          ================================================= */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-12%] top-[5%] h-105 w-105 rounded-full bg-[#1877ff]/5 blur-[150px]" />

            <div className="absolute bottom-[-8%] left-[-12%] h-105 w-105 rounded-full bg-[#ff1764]/5 blur-[150px]" />
          </div>

          {/* =================================================
              CARD GRID
          ================================================= */}

          <div className="container-nexa relative z-10">
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
      </main>

      <Footer />
    </>
  );
}
