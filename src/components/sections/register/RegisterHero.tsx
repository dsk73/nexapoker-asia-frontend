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
    <section className="relative overflow-hidden px-6 pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-24 lg:pt-36">
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}

        <div className="absolute left-[-15%] top-[5%] h-128 w-lg rounded-full bg-[#1877ff]/10 blur-[140px]" />

        {/* Purple glow */}

        <div className="absolute right-[-8%] top-[5%] h-152 w-152 rounded-full bg-[#7c3aed]/12 blur-[150px]" />

        {/* Pink glow */}

        <div className="absolute right-[8%] bottom-[-20%] h-80 w-80 rounded-full bg-[#ff1473]/8 blur-[140px]" />

        {/* Lower blue glow */}

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

        {/* Right-side radial lighting */}

        <div
          className="
            absolute right-[-5%] top-1/2
            h-152 w-152
            -translate-y-1/2
            rounded-full
            bg-[radial-gradient(circle,rgba(24,119,255,0.15),rgba(124,58,237,0.08)_45%,transparent_72%)]
            blur-2xl
          "
        />
      </div>

      <div className="container-nexa relative z-10">
        {/* =================================================
            HERO GRID
            LEFT ~64% / RIGHT ~36%
        ================================================= */}

        <div className="grid items-center gap-8 lg:grid-cols-[7fr_4fr] lg:gap-6 xl:gap-8">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="relative z-20 min-w-0 max-w-4xl">
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
                text-[2.9rem]
                font-bold
                leading-[1.05]
                tracking-[-0.04em]
                text-white
                sm:text-5xl
                md:text-[3.6rem]
                lg:text-[3.45rem]
                xl:text-[3.95rem]
              "
            >
              {page.Title}
            </h1>

            {/* Accent */}

            <div className="mt-6 h-1 w-20 rounded-full bg-linear-to-r from-[#46b9ff] via-[#7c3aed] to-[#ff1473]" />

            {/* =================================================
                CONTENT FROM STRAPI
            ================================================= */}

            {page.Content && (
              <div
                className="
                  mt-6
                  max-w-2xl
                  text-base
                  leading-7
                  text-white/60
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

            <div className="mt-9 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {/* Quick Registration */}

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
                  <UserPlus size={19} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">
                    Quick Registration
                  </p>

                  <p className="mt-0.5 text-[11px] text-white/40">
                    Get started easily
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
                    Protected account
                  </p>
                </div>
              </div>

              {/* Community */}

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
                  <Users size={19} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">
                    Join the Community
                  </p>

                  <p className="mt-0.5 text-[11px] text-white/40">
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
                lg:justify-end
              "
            >
              {/* Ambient glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[-15%]
                  rounded-full
                  bg-[radial-gradient(circle,rgba(24,119,255,0.2),rgba(124,58,237,0.1)_42%,transparent_72%)]
                  blur-3xl
                "
              />

              {/* Pink glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[5%]
                  top-[18%]
                  h-52
                  w-52
                  rounded-full
                  bg-[#ff1473]/10
                  blur-[100px]
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
                  max-w-137.5
                  object-contain
                  drop-shadow-[0_35px_75px_rgba(0,0,0,0.55)]
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
                  h-20
                  w-[70%]
                  -translate-x-1/2
                  rounded-full
                  bg-[#1877ff]/15
                  blur-[60px]
                "
              />

              {/* Decorative icon */}

              <div
                className="
                  absolute
                  bottom-[8%]
                  right-0
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
