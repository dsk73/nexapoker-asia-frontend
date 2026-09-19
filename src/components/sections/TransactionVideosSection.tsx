// src/components/sections/TransactionVideosSection.tsx

"use client";

import { motion } from "framer-motion";

import type { TransactionVideo } from "@/types/pages";

import { getMediaUrl } from "@/lib/media";

interface TransactionVideosSectionProps {
  videos?: TransactionVideo[];
}

export default function TransactionVideosSection({
  videos = [],
}: TransactionVideosSectionProps) {
  const activeVideos = [...videos]
    .filter((video) => video.Active !== false && video.Video)
    .sort(
      (a, b) =>
        (a.DisplayOrder ?? Number.MAX_SAFE_INTEGER) -
        (b.DisplayOrder ?? Number.MAX_SAFE_INTEGER),
    );

  if (!activeVideos.length) {
    return null;
  }

  return (
    <motion.div
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
        duration: 0.6,
      }}
      className="group relative h-full min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#090c13] sm:rounded-3xl"
    >
      {/* =====================================================
          PANEL ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Pink glow */}

        <div className="absolute left-[-20%] top-[-10%] h-52 w-52 rounded-full bg-[#ff1764]/8 blur-[90px] sm:left-[-15%] sm:h-64 sm:w-64 sm:blur-[110px]" />

        {/* Blue glow */}

        <div className="absolute bottom-[-18%] right-[-15%] h-60 w-60 rounded-full bg-[#1877ff]/8 blur-[100px] sm:bottom-[-15%] sm:right-[-10%] sm:h-72 sm:w-72 sm:blur-[120px]" />

        {/* Top gradient */}

        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-white/2.5 to-transparent sm:h-40" />
      </div>

      {/* =====================================================
          PANEL BORDER GLOW
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition-colors duration-500 group-hover:border-[#1877ff]/30 sm:rounded-3xl" />

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="relative z-10 flex h-full min-w-0 flex-col p-5 sm:p-7 lg:p-8">
        {/* =================================================
            HEADER
            ================================================= */}

        <div className="mb-6 min-w-0 sm:mb-7">
          <div className="flex min-w-0 items-start gap-3">
            <span className="mt-0.5 h-7 w-0.75 shrink-0 rounded-full bg-linear-to-b from-[#ff1764] to-[#1877ff] sm:h-8" />

            <h3 className="min-w-0 wrap-break-word text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl">
              Watch Video Guides
            </h3>
          </div>

          <p className="mt-3 max-w-xl text-sm leading-6 text-white/55 sm:mt-4 sm:text-base sm:leading-7">
            Follow our step-by-step tutorials to make a deposit and withdraw
            funds from your Nexa Poker account.
          </p>
        </div>

        {/* =================================================
            VIDEO GRID

            Mobile:
            - One video per row

            Small screens and above:
            - Two videos per row
        ================================================= */}

        <div
          className={`grid flex-1 gap-5 sm:gap-4 ${
            activeVideos.length === 1
              ? "mx-auto w-full max-w-70"
              : "grid-cols-1 sm:grid-cols-2"
          }`}
        >
          {activeVideos.map((video, index) => {
            const videoUrl = getMediaUrl(video.Video, "original");

            if (!videoUrl) {
              return null;
            }

            const videoKey = video.id ?? `${video.Title}-${index}`;

            return (
              <motion.article
                key={videoKey}
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
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.1, 0.2),
                }}
                className="group/video relative min-w-0 overflow-hidden rounded-xl border border-white/10 bg-[#050507] transition-all duration-300 hover:border-[#1877ff]/40 sm:rounded-2xl"
              >
                {/* =================================================
                    VIDEO
                    ================================================= */}

                <div className="relative aspect-9/16 overflow-hidden bg-black">
                  <video
                    src={videoUrl}
                    controls
                    preload="metadata"
                    playsInline
                    className="
                      h-full
                      w-full
                      object-cover

                      [&:fullscreen]:h-dvh
                      [&:fullscreen]:w-[min(56.25dvh,100dvw)]
                      [&:fullscreen]:max-h-dvh
                      [&:fullscreen]:max-w-dvw
                      [&:fullscreen]:min-h-0
                      [&:fullscreen]:min-w-0
                      [&:fullscreen]:rounded-none
                      [&:fullscreen]:bg-black
                      [&:fullscreen]:object-contain
                    "
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* =================================================
                    VIDEO INFORMATION
                    ================================================= */}

                <div className="min-w-0 p-4 sm:p-5">
                  <h4 className="wrap-break-word text-base font-bold leading-tight tracking-tight text-white sm:text-lg">
                    {video.Title}
                  </h4>

                  {video.Description && (
                    <p className="mt-2 wrap-break-word text-xs leading-6 text-white/50 sm:text-sm">
                      {video.Description}
                    </p>
                  )}
                </div>

                {/* Bottom accent */}

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-[#ff1764] to-[#1877ff] transition-all duration-500 group-hover/video:w-full" />
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          OUTER ACCENT
          ===================================================== */}

      <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-[#ff1764]/60 via-[#1877ff]/60 to-transparent opacity-70" />
    </motion.div>
  );
}
