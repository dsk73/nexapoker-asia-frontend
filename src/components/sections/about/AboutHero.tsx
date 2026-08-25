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
    <section className="relative min-h-105 overflow-hidden bg-[#050507] sm:min-h-120 lg:min-h-135">
      {/* =====================================================
          BACKGROUND IMAGE
          ===================================================== */}

      {imageUrl && (
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={page.HeroTitle || "About NexaPoker"}
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
        <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-[#ff1764]/10 blur-[120px]" />

        <div className="absolute right-[-5%] top-10 h-100 w-100 rounded-full bg-[#1877ff]/10 blur-[140px]" />
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="container-nexa relative z-10 flex min-h-105 items-center py-20 sm:min-h-120 sm:py-24 lg:min-h-135 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#ff1764] sm:text-base">
            NexaPoker
          </p>

          {/* Title */}

          {page.HeroTitle && (
            <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              {page.HeroTitle}
            </h1>
          )}

          {/* Subtitle */}

          {page.HeroSubtitle && (
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg lg:text-xl">
              {page.HeroSubtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
