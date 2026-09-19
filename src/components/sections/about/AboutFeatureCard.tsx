//src/components/sections/about/AboutFeatureCard.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import type { AboutFeature } from "@/types/pages";

import { getMediaUrl } from "@/lib/media";
import MarkdownContent from "@/components/content/MarkdownContent";

interface AboutFeatureCardProps {
  feature: AboutFeature;
  index?: number;
}

export default function AboutFeatureCard({
  feature,
  index = 0,
}: AboutFeatureCardProps) {
  const imageUrl = getMediaUrl(feature.Image, "medium");

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.08, 0.3),
        ease: "easeOut",
      }}
      className="
        group
        relative
        flex
        h-full
        min-w-0
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-white/8
        bg-[#0a0d14]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#1877ff]/30
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        sm:rounded-3xl
      "
    >
      {/* =====================================================
          IMAGE
          ===================================================== */}

      <div className="relative aspect-16/10 w-full shrink-0 overflow-hidden bg-[#11151f]">
        {imageUrl ? (
          <>
            <Image
              src={imageUrl}
              alt={feature.Title || "Nexa Poker feature"}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#050507]/75 via-transparent to-transparent" />

            {/* Subtle top highlight */}

            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent sm:inset-x-8" />
          </>
        ) : (
          <div className="relative flex h-full w-full items-center justify-center bg-linear-to-br from-[#111827] via-[#0b1220] to-[#080a10]">
            <span className="text-5xl font-black text-white/10 sm:text-6xl">
              {feature.Title?.charAt(0).toUpperCase() || "N"}
            </span>

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(24,119,255,0.08),transparent_65%)]" />
          </div>
        )}
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-6">
        {/* Accent */}

        <div className="mb-3 h-0.75 w-9 shrink-0 rounded-full bg-[#1877ff] transition-all duration-300 group-hover:w-14 sm:mb-4 sm:h-1 sm:w-10 sm:group-hover:w-16" />

        {/* Title */}

        <h3 className="wrap-break-word text-lg font-bold leading-tight tracking-tight text-white sm:text-xl lg:text-2xl">
          {feature.Title}
        </h3>

        {/* Description */}

        {feature.Description && (
          <div className="mt-2.5 text-[13px] leading-6 text-white/55 sm:mt-3 sm:text-sm sm:leading-6">
            <MarkdownContent content={feature.Description} />
          </div>
        )}
      </div>

      {/* =====================================================
          CARD ACCENTS
          ===================================================== */}

      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#1877ff]/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="pointer-events-none absolute bottom-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-[#1877ff]/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:left-8 sm:right-8" />
    </motion.article>
  );
}
