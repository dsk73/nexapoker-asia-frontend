// src/components/sections/register/RegisterHero.tsx

import Image from "next/image";
import { ShieldCheck, UserPlus, Users, Zap } from "lucide-react";

import type { RegisterPage } from "@/types/pages";
import { getMediaUrl } from "@/lib/media";

interface RegisterHeroProps {
  page: RegisterPage;
}

export default function RegisterHero({ page }: RegisterHeroProps) {
  const imageUrl = getMediaUrl(page.BannerImage, "large");

  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 md:pb-24 md:pt-32 lg:pb-24 lg:pt-36">
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}

        <div className="absolute left-[-25%] top-[5%] h-80 w-80 rounded-full bg-[#1877ff]/10 blur-[110px] sm:left-[-15%] sm:h-128 sm:w-lg sm:blur-[140px]" />

        {/* Purple glow */}

        <div className="absolute right-[-20%] top-[5%] h-96 w-96 rounded-full bg-[#7c3aed]/10 blur-[120px] sm:right-[-8%] sm:h-152 sm:w-152 sm:blur-[150px]" />

        {/* Pink glow */}

        <div className="absolute bottom-[-15%] right-[-10%] h-64 w-64 rounded-full bg-[#ff1473]/7 blur-[110px] sm:right-[8%] sm:h-80 sm:w-80 sm:bg-[#ff1473]/8 sm:blur-[140px]" />

        {/* Lower blue glow */}

        <div className="absolute bottom-[-15%] left-[25%] h-60 w-60 rounded-full bg-[#46b9ff]/5 blur-[100px] sm:left-[35%] sm:h-72 sm:w-72 sm:bg-[#46b9ff]/6 sm:blur-[120px]" />

        {/* Grid */}

        <div
          className="
            absolute inset-0
            opacity-[0.02]
            bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            bg-size-[55px_55px]
            sm:bg-size-[70px_70px]
            sm:opacity-[0.028]
          "
        />

        {/* Right-side radial lighting */}

        <div
          className="
            absolute
            right-[-20%]
            top-[45%]
            h-96
            w-96
            -translate-y-1/2
            rounded-full
            bg-[radial-gradient(circle,rgba(24,119,255,0.12),rgba(124,58,237,0.06)_45%,transparent_72%)]
            blur-2xl
            sm:right-[-5%]
            sm:h-152
            sm:w-152
          "
        />
      </div>

      <div className="container-nexa relative z-10">
        {/* =================================================
            HERO GRID
            STACKED ON MOBILE
            LEFT ~64% / RIGHT ~36% ON DESKTOP
        ================================================= */}

        <div className="grid items-center gap-8 lg:grid-cols-[7fr_4fr] lg:gap-6 xl:gap-8">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="relative z-20 min-w-0 max-w-4xl">
            {/* Eyebrow */}

            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#46b9ff]/20 bg-[#46b9ff]/5 px-3 py-1.5 shadow-[0_0_30px_rgba(70,185,255,0.05)] sm:px-3.5 sm:py-2">
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
                text-[2.35rem]
                font-bold
                leading-[1.05]
                tracking-[-0.04em]
                text-white
                sm:mt-6
                sm:text-5xl
                md:text-[3.6rem]
                lg:whitespace-nowrap
                lg:text-[3.45rem]
                xl:text-[3.95rem]
              "
            >
              {page.Title}
            </h1>

            {/* Accent */}

            <div className="mt-5 h-1 w-16 rounded-full bg-linear-to-r from-[#46b9ff] via-[#7c3aed] to-[#ff1473] sm:mt-6 sm:w-20" />

            {/* =================================================
                CONTENT FROM STRAPI
            ================================================= */}

            {page.Content && (
              <div
                className="
                  mt-5
                  max-w-2xl
                  text-[15px]
                  leading-7
                  text-white/60
                  sm:mt-6
                  sm:text-lg
                  sm:leading-8
                "
              >
                {page.Content}
              </div>
            )}

            {/* =================================================
                SUPPORTING FEATURES
            ================================================= */}

            <div className="mt-7 grid max-w-2xl grid-cols-1 gap-3 sm:mt-9 sm:grid-cols-3">
              {/* Quick Registration */}

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
                  <UserPlus size={18} strokeWidth={1.8} />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-white">
                    Quick Registration
                  </p>

                  <p className="mt-0.5 truncate text-[11px] text-white/40">
                    Get started easily
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
                  <ShieldCheck size={18} strokeWidth={1.8} />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-white">
                    Secure Access
                  </p>

                  <p className="mt-0.5 truncate text-[11px] text-white/40">
                    Protected account
                  </p>
                </div>
              </div>

              {/* Community */}

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
                  <Users size={18} strokeWidth={1.8} />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-white">
                    Join the Community
                  </p>

                  <p className="mt-0.5 truncate text-[11px] text-white/40">
                    Connect with players
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT IMAGE
              TRANSPARENT PNG
          ================================================= */}

          {imageUrl && (
            <div
              className="
                relative
                flex
                min-w-0
                items-center
                justify-center
                pt-4
                lg:justify-end
                lg:pt-0
              "
            >
              {/* Ambient glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[-10%]
                  rounded-full
                  bg-[radial-gradient(circle,rgba(24,119,255,0.18),rgba(124,58,237,0.08)_42%,transparent_72%)]
                  blur-3xl
                  sm:inset-[-15%]
                "
              />

              {/* Pink glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[5%]
                  top-[18%]
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
                  TRANSPARENT PNG
              ================================================= */}

              <Image
                src={imageUrl}
                alt={
                  page.BannerImage?.alternativeText ||
                  page.Title ||
                  "Create your Nexa Poker account"
                }
                width={page.BannerImage?.width || 1200}
                height={page.BannerImage?.height || 800}
                className="
                  relative
                  z-10
                  h-auto
                  w-full
                  max-w-[320px]
                  object-contain
                  drop-shadow-[0_25px_55px_rgba(0,0,0,0.5)]
                  sm:max-w-107.5
                  md:max-w-125
                  lg:max-w-137.5
                  xl:max-w-145
                  lg:drop-shadow-[0_35px_75px_rgba(0,0,0,0.55)]
                "
                priority
              />

              {/* Bottom ambient glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[5%]
                  left-1/2
                  z-0
                  h-16
                  w-[65%]
                  -translate-x-1/2
                  rounded-full
                  bg-[#1877ff]/12
                  blur-[50px]
                  sm:h-20
                  sm:w-[70%]
                  sm:bg-[#1877ff]/15
                  sm:blur-[60px]
                "
              />

              {/* Decorative icon */}

              <div
                className="
                  absolute
                  bottom-[8%]
                  right-[2%]
                  z-20
                  hidden
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border border-white/10
                  bg-[#0b0d13]/90
                  text-[#46b9ff]
                  shadow-[0_12px_35px_rgba(0,0,0,0.4)]
                  backdrop-blur-xl
                  lg:flex
                "
              >
                <Zap size={18} strokeWidth={1.8} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
