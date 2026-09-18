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
    <section className="relative overflow-hidden px-6 pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-36">
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}

        <div className="absolute left-[-15%] top-[5%] h-128 w-lg rounded-full bg-[#1877ff]/10 blur-[140px]" />

        {/* Purple glow */}

        <div className="absolute right-[-8%] top-[5%] h-152 w-152 rounded-full bg-[#7c3aed]/12 blur-[150px]" />

        {/* Pink accent */}

        <div className="absolute right-[8%] bottom-[-15%] h-80 w-80 rounded-full bg-[#ff1473]/8 blur-[140px]" />

        {/* Bottom blue glow */}

        <div className="absolute left-[35%] bottom-[-20%] h-72 w-72 rounded-full bg-[#46b9ff]/6 blur-[120px]" />

        {/* Grid */}

        <div
          className="
            absolute inset-0
            opacity-[0.028]
            bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            bg-size-[70px_70px]
          "
        />

        {/* Image-side radial light */}

        <div
          className="
            absolute right-[-5%] top-1/2
            h-152 w-152
            -translate-y-1/2
            rounded-full
            bg-[radial-gradient(circle,rgba(24,119,255,0.14),rgba(124,58,237,0.08)_45%,transparent_72%)]
            blur-2xl
          "
        />
      </div>

      <div className="container-nexa relative z-10">
        {/* =================================================
            HERO GRID
            LEFT 60% / RIGHT 40%
        ================================================= */}

        <div className="grid items-center gap-10 lg:grid-cols-[3fr_2fr] lg:gap-6 xl:gap-10">
          {/* =================================================
              LEFT CONTENT — 60%
          ================================================= */}

          <div className="relative z-20 max-w-3xl">
            {/* Eyebrow */}

            <div className="inline-flex items-center gap-2 rounded-full border border-[#46b9ff]/20 bg-[#46b9ff]/5 px-3.5 py-2 shadow-[0_0_30px_rgba(70,185,255,0.05)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#46b9ff]/60" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#46b9ff] shadow-[0_0_12px_rgba(70,185,255,0.9)]" />
              </span>

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#46b9ff] sm:text-xs">
                Nexa Poker
              </span>
            </div>

            {/* =================================================
                HEADING
            ================================================= */}

            <h1
              className="
                mt-6
                whitespace-nowrap
                text-[2.65rem]
                font-bold
                leading-[1.05]
                tracking-[-0.04em]
                text-white
                sm:text-5xl
                md:text-[3.5rem]
                lg:text-[3.55rem]
                xl:text-[4rem]
              "
            >
              {page.Title || "Download Nexa Poker"}
            </h1>

            {/* Accent line */}

            <div className="mt-6 h-1 w-20 rounded-full bg-linear-to-r from-[#46b9ff] via-[#7c3aed] to-[#ff1473]" />

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            {page.Description && (
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                {page.Description}
              </p>
            )}

            {/* =================================================
                SUPPORTING FEATURES
            ================================================= */}

            <div className="mt-9 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {/* Easy Download */}

              <div
                className="
                  group flex items-center gap-3
                  rounded-2xl
                  border border-white/[0.07]
                  bg-white/2.5
                  px-4 py-3.5
                  transition-all duration-300
                  hover:border-[#46b9ff]/25
                  hover:bg-[#1877ff]/4
                "
              >
                <div
                  className="
                    flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-xl
                    border border-[#1877ff]/20
                    bg-[#1877ff]/10
                    text-[#46b9ff]
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                >
                  <ArrowDownToLine size={19} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">
                    Easy Download
                  </p>

                  <p className="mt-0.5 text-[11px] text-white/40">
                    Simple setup
                  </p>
                </div>
              </div>

              {/* Secure Access */}

              <div
                className="
                  group flex items-center gap-3
                  rounded-2xl
                  border border-white/[0.07]
                  bg-white/2.5
                  px-4 py-3.5
                  transition-all duration-300
                  hover:border-[#8b5cf6]/25
                  hover:bg-[#7c3aed]/4
                "
              >
                <div
                  className="
                    flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-xl
                    border border-[#8b5cf6]/20
                    bg-[#7c3aed]/10
                    text-[#a78bfa]
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                >
                  <ShieldCheck size={19} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">
                    Secure Access
                  </p>

                  <p className="mt-0.5 text-[11px] text-white/40">
                    Trusted platform
                  </p>
                </div>
              </div>

              {/* Ready to Play */}

              <div
                className="
                  group flex items-center gap-3
                  rounded-2xl
                  border border-white/[0.07]
                  bg-white/2.5
                  px-4 py-3.5
                  transition-all duration-300
                  hover:border-[#46b9ff]/25
                  hover:bg-[#46b9ff]/4
                "
              >
                <div
                  className="
                    flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-xl
                    border border-[#46b9ff]/20
                    bg-[#46b9ff]/10
                    text-[#46b9ff]
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                >
                  <Zap size={19} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">
                    Ready to Play
                  </p>

                  <p className="mt-0.5 text-[11px] text-white/40">
                    Get started fast
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                PLATFORM SUMMARY
            ================================================= */}

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-white/50">
                <span className="h-1.5 w-1.5 rounded-full bg-[#46b9ff] shadow-[0_0_8px_rgba(70,185,255,0.8)]" />

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
                  inset-[-18%]
                  rounded-full
                  bg-[radial-gradient(circle,rgba(24,119,255,0.18),rgba(124,58,237,0.1)_42%,transparent_72%)]
                  blur-3xl
                "
              />

              {/* Pink glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[5%]
                  top-[20%]
                  h-52
                  w-52
                  rounded-full
                  bg-[#ff1473]/10
                  blur-[100px]
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
                  object-contain
                  drop-shadow-[0_35px_70px_rgba(0,0,0,0.5)]
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
