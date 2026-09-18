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
    <section className="relative overflow-hidden bg-[#050507] py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Pink glow */}

        <div className="absolute left-[-10%] top-[10%] h-105 w-105 rounded-full bg-[#ff1764]/7 blur-[140px]" />

        {/* Blue glow */}

        <div className="absolute bottom-[5%] right-[-10%] h-105 w-105 rounded-full bg-[#1877ff]/7 blur-[140px]" />

        {/* Center glow */}

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1877ff]/3 blur-[150px]" />
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="container-nexa relative z-10">
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
          className="mx-auto mb-10 max-w-4xl text-center sm:mb-12"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff1764]">
            Nexa Poker
          </p>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Get Started with Nexa Poker
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
            Get started, manage your account, and join the Nexa Poker community.
          </p>
        </motion.div>

        {/* =================================================
            TWO COLUMN GRID
            ================================================= */}

        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          {/* =================================================
              LEFT — VIDEO GUIDES
              50%
              ================================================= */}

          {hasVideos && (
            <div className="min-w-0">
              <TransactionVideosSection videos={videos} />
            </div>
          )}

          {/* =================================================
              RIGHT — JOIN NEXA POKER
              50%
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
