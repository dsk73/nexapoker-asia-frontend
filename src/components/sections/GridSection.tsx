// src/components/sections/GridSection.tsx

"use client";

import { motion } from "framer-motion";

import type { JoinNexaPoker, TransactionVideo } from "@/types/pages";

import TransactionVideosSection from "@/components/sections/TransactionVideosSection";
import JoinNexaPokerSection from "@/components/sections/JoinNexaPokerSection";

interface GridSectionProps {
  videos?: TransactionVideo[];
  joinData?: JoinNexaPoker | null;
}

export default function GridSection({
  videos = [],
  joinData,
}: GridSectionProps) {
  const hasVideos = videos.some(
    (video) => video.Active !== false && video.Video,
  );

  if (!hasVideos && !joinData) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#050507] px-4 py-14 sm:px-6 sm:py-20 lg:px-0 lg:py-28">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Pink glow */}

        <div className="absolute left-[-18%] top-[10%] h-72 w-72 rounded-full bg-[#ff1764]/7 blur-[110px] sm:left-[-10%] sm:h-105 sm:w-105 sm:blur-[140px]" />

        {/* Blue glow */}

        <div className="absolute bottom-[5%] right-[-18%] h-72 w-72 rounded-full bg-[#1877ff]/7 blur-[110px] sm:right-[-10%] sm:h-105 sm:w-105 sm:blur-[140px]" />

        {/* Center glow */}

        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1877ff]/3 blur-[110px] sm:h-96 sm:w-96 sm:blur-[150px]" />
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="container-nexa relative z-10 min-w-0">
        {/* =================================================
            SECTION HEADER
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
          className="mx-auto mb-8 max-w-4xl text-center sm:mb-12"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#ff1764] sm:mb-3 sm:text-sm sm:tracking-[0.2em]">
            Nexa Poker
          </p>

          <h2 className="wrap-break-word text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Get Started with Nexa Poker
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/55 sm:mt-4 sm:text-lg sm:leading-7">
            Get started, manage your account, and join the Nexa Poker community.
          </p>
        </motion.div>

        {/* =================================================
            TWO COLUMN GRID

            Mobile:
            - Sections stack vertically

            Large screens:
            - Two equal columns
        ================================================= */}

        <div className="grid min-w-0 grid-cols-1 items-stretch gap-5 sm:gap-6 lg:grid-cols-2">
          {/* =================================================
              LEFT — VIDEO GUIDES
              ================================================= */}

          {hasVideos && (
            <div className="min-w-0">
              <TransactionVideosSection videos={videos} />
            </div>
          )}

          {/* =================================================
              RIGHT — JOIN NEXA POKER
              ================================================= */}

          {joinData && (
            <div className="min-w-0">
              <JoinNexaPokerSection data={joinData} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
