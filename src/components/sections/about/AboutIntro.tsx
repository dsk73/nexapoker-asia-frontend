//src/components/sections/about/AboutIntro.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import type { AboutPage } from "@/types/pages";

import { getMediaUrl } from "@/lib/media";
import MarkdownContent from "@/components/content/MarkdownContent";

interface AboutIntroProps {
  page: AboutPage;
}

export default function AboutIntro({ page }: AboutIntroProps) {
  const logoUrl = getMediaUrl(page.AboutLogo, "medium");

  if (!page.AboutTitle && !page.AboutContent && !logoUrl) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#050507] px-4 py-14 sm:px-6 sm:py-18 lg:py-20">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}

        <div className="absolute right-[-20%] top-[10%] h-72 w-72 rounded-full bg-[#1877ff]/5 blur-[110px] sm:right-[-10%] sm:h-105 sm:w-105 sm:bg-[#1877ff]/6 sm:blur-[140px]" />

        {/* Pink glow */}

        <div className="absolute bottom-[-15%] left-[-20%] h-72 w-72 rounded-full bg-[#ff1764]/5 blur-[110px] sm:left-[-10%] sm:h-105 sm:w-105 sm:bg-[#ff1764]/6 sm:blur-[140px]" />

        {/* Center ambient light */}

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/3 blur-[130px] sm:h-96 sm:w-96" />
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="container-nexa relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="
            relative
            mx-auto
            max-w-5xl
            overflow-hidden
            rounded-3xl
            border
            border-white/8
            bg-[#0a0d14]/85
            shadow-[0_25px_80px_rgba(0,0,0,0.35)]
            backdrop-blur-xl
            sm:rounded-[28px]
          "
        >
          {/* =================================================
              CARD ACCENTS
          ================================================= */}

          {/* Top gradient line */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-8
              top-0
              h-px
              bg-linear-to-r
              from-transparent
              via-[#46b9ff]/45
              to-transparent
              sm:inset-x-12
            "
          />

          {/* Blue card glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-64
              w-64
              rounded-full
              bg-[#1877ff]/7
              blur-3xl
            "
          />

          {/* Pink card glow */}

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-20
              h-56
              w-56
              rounded-full
              bg-[#ff1764]/5
              blur-3xl
            "
          />

          {/* =================================================
              HEADER
              ================================================= */}

          <div className="relative z-10 px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-9">
            <div
              className={`
                flex
                flex-col
                gap-5
                ${
                  logoUrl && page.AboutTitle
                    ? "sm:flex-row sm:items-center sm:gap-7"
                    : ""
                }
              `}
            >
              {/* =================================================
                  LOGO
              ================================================= */}

              {logoUrl && (
                <div
                  className="
                    relative
                    flex
                    h-20
                    w-20
                    shrink-0
                    items-center
                    justify-center
                    self-center
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#11151f]
                    shadow-[0_15px_40px_rgba(0,0,0,0.3)]
                    sm:h-24
                    sm:w-24
                    sm:self-auto
                    lg:h-28
                    lg:w-28
                  "
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(70,185,255,0.08),transparent_70%)]" />

                  <Image
                    src={logoUrl}
                    alt={page.AboutTitle || "Nexa Poker"}
                    fill
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 112px"
                    className="relative z-10 object-contain p-3.5 sm:p-4 lg:p-5"
                  />
                </div>
              )}

              {/* =================================================
                  TITLE
              ================================================= */}

              {page.AboutTitle && (
                <div className="min-w-0 flex-1 text-center sm:text-left">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ff1764] sm:text-xs sm:tracking-[0.2em]">
                    Nexa Poker
                  </p>

                  <h2 className="max-w-4xl wrap-break-word text-2xl font-black leading-[1.1] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.7rem]">
                    {page.AboutTitle}
                  </h2>
                </div>
              )}
            </div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            {page.AboutContent && (
              <div className="relative mt-6 border-t border-white/8 pt-6 sm:mt-8 sm:pt-7 lg:mt-9 lg:pt-8">
                <div className="max-w-4xl text-[15px] leading-7 text-white/65 sm:text-base sm:leading-8 lg:text-lg">
                  <MarkdownContent content={page.AboutContent} />
                </div>
              </div>
            )}
          </div>

          {/* =================================================
              BOTTOM ACCENT
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-8
              right-8
              h-px
              bg-linear-to-r
              from-transparent
              via-[#1877ff]/20
              to-transparent
              sm:left-12
              sm:right-12
            "
          />
        </motion.div>
      </div>
    </section>
  );
}
