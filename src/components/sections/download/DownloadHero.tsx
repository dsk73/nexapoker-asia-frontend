// src/components/sections/download/DownloadHero.tsx

import Image from "next/image";
import { ArrowDownToLine, ShieldCheck, Zap } from "lucide-react";

import type { DownloadPage } from "@/types/pages";
import { getMediaUrl } from "@/lib/media";

interface DownloadHeroProps {
  page: DownloadPage;
}

export default function DownloadHero({ page }: DownloadHeroProps) {
  const imageUrl = getMediaUrl(page.BannerImage, "large");

  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 md:pb-24 md:pt-32 lg:pb-28 lg:pt-36">
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}

        <div className="absolute left-[-30%] top-[8%] h-96 w-96 rounded-full bg-[#1877ff]/10 blur-[120px] sm:left-[-15%] sm:h-128 sm:w-lg sm:blur-[140px]" />

        {/* Purple glow */}

        <div className="absolute right-[-25%] top-[5%] h-112 w-md rounded-full bg-[#7c3aed]/10 blur-[120px] sm:right-[-8%] sm:h-152 sm:w-152 sm:bg-[#7c3aed]/12 sm:blur-[150px]" />

        {/* Pink accent */}

        <div className="absolute bottom-[-12%] right-[-10%] h-64 w-64 rounded-full bg-[#ff1473]/7 blur-[110px] sm:right-[8%] sm:h-80 sm:w-80 sm:bg-[#ff1473]/8 sm:blur-[140px]" />

        {/* Bottom blue glow */}

        <div className="absolute bottom-[-15%] left-[25%] h-60 w-60 rounded-full bg-[#46b9ff]/5 blur-[100px] sm:left-[35%] sm:h-72 sm:w-72 sm:bg-[#46b9ff]/6 sm:blur-[120px]" />

        {/* Grid */}

        <div
          className="
            absolute inset-0
            opacity-[0.022]
            bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            bg-size-[50px_50px]
            sm:bg-size-[70px_70px]
            sm:opacity-[0.028]
          "
        />

        {/* Image-side radial light */}

        <div
          className="
            absolute
            right-[-25%]
            top-[55%]
            h-96
            w-96
            -translate-y-1/2
            rounded-full
            bg-[radial-gradient(circle,rgba(24,119,255,0.14),rgba(124,58,237,0.08)_45%,transparent_72%)]
            blur-2xl
            sm:right-[-5%]
            sm:top-1/2
            sm:h-152
            sm:w-152
          "
        />
      </div>

      <div className="container-nexa relative z-10">
        {/* =================================================
            HERO GRID
            LEFT 60% / RIGHT 40%
        ================================================= */}

        <div className="grid items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-6 xl:gap-10">
          {/* =================================================
              LEFT CONTENT — 60%
          ================================================= */}

          <div className="relative z-20 min-w-0 max-w-3xl">
            {/* Eyebrow */}

            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#46b9ff]/20 bg-[#46b9ff]/5 px-3 py-2 shadow-[0_0_30px_rgba(70,185,255,0.05)] sm:px-3.5">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#46b9ff]/60" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#46b9ff] shadow-[0_0_12px_rgba(70,185,255,0.9)]" />
              </span>

              <span className="truncate text-[10px] font-semibold uppercase tracking-[0.16em] text-[#46b9ff] sm:text-xs sm:tracking-[0.2em]">
                Nexa Poker
              </span>
            </div>

            {/* =================================================
                HEADING
            ================================================= */}

            <h1
              className="
                mt-5
                max-w-full
                wrap-break-word
                text-[2.35rem]
                font-bold
                leading-[1.05]
                tracking-[-0.04em]
                text-white
                sm:mt-6
                sm:whitespace-nowrap
                sm:text-5xl
                md:text-[3.5rem]
                lg:text-[3.55rem]
                xl:text-[4rem]
              "
            >
              {page.Title || "Download Nexa Poker"}
            </h1>

            {/* Accent line */}

            <div className="mt-5 h-1 w-16 rounded-full bg-linear-to-r from-[#46b9ff] via-[#7c3aed] to-[#ff1473] sm:mt-6 sm:w-20" />

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            {page.Description && (
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/60 sm:mt-6 sm:text-lg sm:leading-8">
                {page.Description}
              </p>
            )}

            {/* =================================================
                SUPPORTING FEATURES
            ================================================= */}

            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:mt-9 sm:grid-cols-3">
              {/* Easy Download */}

              <div
                className="
                  group flex min-w-0 items-center gap-3
                  rounded-2xl
                  border border-white/[0.07]
                  bg-white/2.5
                  px-3.5 py-3
                  transition-all duration-300
                  hover:border-[#46b9ff]/25
                  hover:bg-[#1877ff]/4
                  sm:px-4 sm:py-3.5
                "
              >
                <div
                  className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-xl
                    border border-[#1877ff]/20
                    bg-[#1877ff]/10
                    text-[#46b9ff]
                    transition-transform duration-300
                    group-hover:scale-105
                    sm:h-10 sm:w-10
                  "
                >
                  <ArrowDownToLine size={18} strokeWidth={1.8} />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-white">
                    Easy Download
                  </p>

                  <p className="mt-0.5 truncate text-[11px] text-white/40">
                    Simple setup
                  </p>
                </div>
              </div>

              {/* Secure Access */}

              <div
                className="
                  group flex min-w-0 items-center gap-3
                  rounded-2xl
                  border border-white/[0.07]
                  bg-white/2.5
                  px-3.5 py-3
                  transition-all duration-300
                  hover:border-[#8b5cf6]/25
                  hover:bg-[#7c3aed]/4
                  sm:px-4 sm:py-3.5
                "
              >
                <div
                  className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-xl
                    border border-[#8b5cf6]/20
                    bg-[#7c3aed]/10
                    text-[#a78bfa]
                    transition-transform duration-300
                    group-hover:scale-105
                    sm:h-10 sm:w-10
                  "
                >
                  <ShieldCheck size={18} strokeWidth={1.8} />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-white">
                    Secure Access
                  </p>

                  <p className="mt-0.5 truncate text-[11px] text-white/40">
                    Trusted platform
                  </p>
                </div>
              </div>

              {/* Ready to Play */}

              <div
                className="
                  group flex min-w-0 items-center gap-3
                  rounded-2xl
                  border border-white/[0.07]
                  bg-white/2.5
                  px-3.5 py-3
                  transition-all duration-300
                  hover:border-[#46b9ff]/25
                  hover:bg-[#46b9ff]/4
                  sm:px-4 sm:py-3.5
                "
              >
                <div
                  className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-xl
                    border border-[#46b9ff]/20
                    bg-[#46b9ff]/10
                    text-[#46b9ff]
                    transition-transform duration-300
                    group-hover:scale-105
                    sm:h-10 sm:w-10
                  "
                >
                  <Zap size={18} strokeWidth={1.8} />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-white">
                    Ready to Play
                  </p>

                  <p className="mt-0.5 truncate text-[11px] text-white/40">
                    Get started fast
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                PLATFORM SUMMARY
            ================================================= */}

            <div className="mt-6 flex flex-col items-start gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <div className="flex max-w-full items-start gap-2 text-sm leading-6 text-white/50 sm:items-center">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#46b9ff] shadow-[0_0_8px_rgba(70,185,255,0.8)] sm:mt-0" />

                <span>Available on Windows, macOS, Android and iOS</span>
              </div>

              <div className="hidden h-4 w-px bg-white/10 sm:block" />

              <span className="text-xs font-medium uppercase tracking-[0.12em] text-white/30">
                Play Your Way
              </span>
            </div>
          </div>

          {/* =================================================
              RIGHT IMAGE — TRANSPARENT PNG
          ================================================= */}

          {imageUrl && (
            <div
              className="
                relative
                flex
                min-w-0
                items-center
                justify-center
                lg:-mr-10
                xl:-mr-16
              "
            >
              {/* Ambient glow behind transparent image */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[-12%]
                  rounded-full
                  bg-[radial-gradient(circle,rgba(24,119,255,0.18),rgba(124,58,237,0.1)_42%,transparent_72%)]
                  blur-3xl
                  sm:inset-[-18%]
                "
              />

              {/* Pink glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[5%]
                  top-[20%]
                  h-40
                  w-40
                  rounded-full
                  bg-[#ff1473]/8
                  blur-[80px]
                  sm:h-52
                  sm:w-52
                  sm:bg-[#ff1473]/10
                  sm:blur-[100px]
                "
              />

              {/* =================================================
                  PNG IMAGE
              ================================================= */}

              <Image
                src={imageUrl}
                alt={
                  page.BannerImage?.alternativeText ||
                  page.Title ||
                  "Download Nexa Poker"
                }
                width={page.BannerImage?.width || 1200}
                height={page.BannerImage?.height || 800}
                className="
                  relative
                  z-10
                  h-auto
                  w-full
                  max-w-105
                  object-contain
                  drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]
                  sm:max-w-130
                  lg:max-w-none
                  lg:drop-shadow-[0_35px_70px_rgba(0,0,0,0.5)]
                "
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
