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
      className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#090c13]"
    >
      {/* =====================================================
          PANEL ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Pink glow */}

        <div className="absolute left-[-15%] top-[-10%] h-64 w-64 rounded-full bg-[#ff1764]/8 blur-[110px]" />

        {/* Blue glow */}

        <div className="absolute bottom-[-15%] right-[-10%] h-72 w-72 rounded-full bg-[#1877ff]/8 blur-[120px]" />

        {/* Top gradient */}

        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-white/2.5 to-transparent" />
      </div>

      {/* =====================================================
          PANEL BORDER GLOW
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition-colors duration-500 group-hover:border-[#1877ff]/30" />

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="relative z-10 flex h-full flex-col p-6 sm:p-7 lg:p-8">
        {/* =================================================
            HEADER
            ================================================= */}

        <div className="mb-7">
          <div className="flex items-center gap-3">
            <span className="h-8 w-0.75 rounded-full bg-linear-to-b from-[#ff1764] to-[#1877ff]" />

            <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Watch Video Guides
            </h3>
          </div>

          <p className="mt-4 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
            Follow our step-by-step tutorials to make a deposit and withdraw
            funds from your Nexa Poker account.
          </p>
        </div>

        {/* =================================================
            VIDEO GRID
            ================================================= */}

        <div
          className={`grid flex-1 gap-4 ${
            activeVideos.length === 1
              ? "mx-auto w-full max-w-70"
              : "grid-cols-2"
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
                className="group/video relative overflow-hidden rounded-2xl border border-white/10 bg-[#050507] transition-all duration-300 hover:border-[#1877ff]/40"
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

                <div className="p-4 sm:p-5">
                  <h4 className="text-base font-bold leading-tight tracking-tight text-white sm:text-lg">
                    {video.Title}
                  </h4>

                  {video.Description && (
                    <p className="mt-2 text-xs leading-6 text-white/50 sm:text-sm">
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
