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
    <section className="relative overflow-hidden bg-[#050507] py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Pink glow */}

        <div className="absolute left-[-10%] top-[10%] h-105 w-105 rounded-full bg-[#ff1764]/7 blur-[140px]" />

        {/* Blue glow */}

        <div className="absolute bottom-[5%] right-[-10%] h-105 w-105 rounded-full bg-[#1877ff]/7 blur-[140px]" />
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
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff1764]">
            Nexa Poker
          </p>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Deposit &amp; Withdrawal
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
            Learn how to manage your poker account with simple deposit and
            withdrawal guides.
          </p>
        </motion.div>

        {/* =================================================
            VIDEO GRID
            ================================================= */}

        <div
          className={`grid gap-6 ${
            activeVideos.length === 1 ? "mx-auto max-w-4xl" : "lg:grid-cols-2"
          }`}
        >
          {activeVideos.map((video, index) => {
            const videoUrl = getMediaUrl(video.Video, "original");

            if (!videoUrl) {
              return null;
            }

            return (
              <motion.article
                key={video.id ?? `${video.Title}-${index}`}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.08, 0.25),
                }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d14] transition-all duration-300 hover:border-[#1877ff]/30"
              >
                {/* Video */}

                <div className="relative aspect-video overflow-hidden bg-black">
                  <video
                    src={videoUrl}
                    controls
                    preload="metadata"
                    playsInline
                    className="h-full w-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Content */}

                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {video.Title}
                  </h3>

                  {video.Description && (
                    <p className="mt-3 text-sm leading-7 text-white/55 sm:text-base">
                      {video.Description}
                    </p>
                  )}
                </div>

                {/* Bottom accent */}

                <div className="h-px w-0 bg-linear-to-r from-[#ff1764] to-[#1877ff] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
