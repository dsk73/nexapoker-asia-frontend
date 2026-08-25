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
    <section className="relative overflow-hidden bg-[#050507] py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}

        <div className="absolute right-[-10%] top-[5%] h-105 w-105 rounded-full bg-[#1877ff]/6 blur-[140px]" />

        {/* Pink glow */}

        <div className="absolute bottom-[-10%] left-[-10%] h-105 w-105 rounded-full bg-[#ff1764]/6 blur-[140px]" />

        {/* Center glow */}

        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1877ff]/3 blur-[130px]" />
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="container-nexa relative z-10">
        {/* =================================================
            SECTION HEADER
            ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14"
        >
          {/* Eyebrow */}

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff1764]">
            NexaPoker
          </p>

          {/* Heading */}

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Why Choose NexaPoker
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
            Discover what makes NexaPoker a growing destination for poker
            players and communities across South Asia.
          </p>
        </motion.div>

        {/* =================================================
            FEATURES GRID
            ================================================= */}

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id ?? `${feature.Title}-${index}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.08, 0.32),
              }}
              className="h-full"
            >
              <AboutFeatureCard feature={feature} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
