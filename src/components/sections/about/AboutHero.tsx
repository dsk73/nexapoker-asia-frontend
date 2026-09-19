//src/components/sections/about/AboutHero.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import type { AboutPage } from "@/types/pages";
import { getMediaUrl } from "@/lib/media";

interface AboutHeroProps {
  page: AboutPage;
}

export default function AboutHero({ page }: AboutHeroProps) {
  const imageUrl = getMediaUrl(page.HeroBannerImage, "large");

  return (
    <section className="relative min-h-90 overflow-hidden bg-[#050507] sm:min-h-100 lg:min-h-110">
      {/* =====================================================
          BACKGROUND IMAGE
          ===================================================== */}

      {imageUrl && (
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={page.HeroTitle || "About Nexa Poker"}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Overall dark overlay */}

          <div className="absolute inset-0 bg-black/65" />

          {/* Left-side gradient */}

          <div className="absolute inset-0 bg-linear-to-r from-black via-black/75 to-black/35" />

          {/* Bottom fade */}

          <div className="absolute inset-0 bg-linear-to-t from-[#050507] via-transparent to-black/20" />
        </div>
      )}

      {/* =====================================================
          ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-5 h-64 w-64 rounded-full bg-[#ff1764]/8 blur-[100px] sm:-left-20 sm:top-10 sm:h-80 sm:w-80 sm:bg-[#ff1764]/10 sm:blur-[120px]" />

        <div className="absolute right-[-10%] top-5 h-72 w-72 rounded-full bg-[#1877ff]/8 blur-[110px] sm:right-[-5%] sm:top-10 sm:h-100 sm:w-100 sm:bg-[#1877ff]/10 sm:blur-[140px]" />
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="container-nexa relative z-10 flex min-h-90 items-center py-16 sm:min-h-100 sm:py-20 lg:min-h-110 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#ff1764] sm:mb-4 sm:text-sm sm:tracking-[0.22em]">
            Nexa Poker
          </p>

          {/* Title */}

          {page.HeroTitle && (
            <h1 className="max-w-4xl text-3xl font-black leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.4rem] xl:text-[3.6rem]">
              {page.HeroTitle}
            </h1>
          )}

          {/* Subtitle */}

          {page.HeroSubtitle && (
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70 sm:mt-5 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
              {page.HeroSubtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
