//src/components/sections/about/AboutFeatures.tsx

"use client";

import { motion } from "framer-motion";

import type { AboutPage } from "@/types/pages";

import AboutFeatureCard from "@/components/sections/about/AboutFeatureCard";

interface AboutFeaturesProps {
  page: AboutPage;
}

export default function AboutFeatures({ page }: AboutFeaturesProps) {
  const features = [...(page.Features ?? [])]
    .filter((feature) => feature.Active !== false)
    .sort((a, b) => (a.DisplayOrder ?? 0) - (b.DisplayOrder ?? 0));

  if (!features.length) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#050507] px-4 py-14 sm:px-6 sm:py-18 lg:py-20">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}

        <div className="absolute right-[-20%] top-[5%] h-72 w-72 rounded-full bg-[#1877ff]/5 blur-[110px] sm:right-[-10%] sm:h-105 sm:w-105 sm:bg-[#1877ff]/6 sm:blur-[140px]" />

        {/* Pink glow */}

        <div className="absolute bottom-[-15%] left-[-20%] h-72 w-72 rounded-full bg-[#ff1764]/5 blur-[110px] sm:bottom-[-10%] sm:left-[-10%] sm:h-105 sm:w-105 sm:bg-[#ff1764]/6 sm:blur-[140px]" />

        {/* Center glow */}

        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1877ff]/2.5 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="container-nexa relative z-10">
        {/* =================================================
            SECTION HEADER
            ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mx-auto mb-8 max-w-3xl text-center sm:mb-12"
        >
          {/* Eyebrow */}

          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.17em] text-[#ff1764] sm:mb-3 sm:text-xs sm:tracking-[0.2em] md:text-sm">
            Nexa Poker
          </p>

          {/* Heading */}

          <h2 className="text-2xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Why Choose Nexa Poker
          </h2>

          {/* Description */}

          <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-6 text-white/55 sm:mt-5 sm:text-lg sm:leading-7">
            Discover what makes Nexa Poker a growing destination for poker
            players and communities worldwide.
          </p>
        </motion.div>

        {/* =================================================
            FEATURES GRID
            ================================================= */}

        <div className="grid grid-cols-1 items-stretch gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id ?? `${feature.Title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.08, 0.32),
              }}
              className="min-w-0"
            >
              <AboutFeatureCard feature={feature} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
