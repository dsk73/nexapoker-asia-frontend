// src/components/sections/WhyChooseNexaPokerSection.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import type { WhyChooseFeature } from "@/types/pages";

import { getMediaUrl } from "@/lib/media";

interface WhyChooseNexaPokerSectionProps {
  title?: string;
  subtitle?: string;
  features?: WhyChooseFeature[];
}

export default function WhyChooseNexaPokerSection({
  title = "Why Choose Nexa Poker",
  subtitle,
  features = [],
}: WhyChooseNexaPokerSectionProps) {
  const activeFeatures = [...features]
    .filter((feature) => feature.Active !== false)
    .sort(
      (a, b) =>
        (a.DisplayOrder ?? Number.MAX_SAFE_INTEGER) -
        (b.DisplayOrder ?? Number.MAX_SAFE_INTEGER),
    );

  if (!activeFeatures.length) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#050507] py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}

        <div className="absolute left-[-10%] top-[10%] h-105 w-105 rounded-full bg-[#1877ff]/8 blur-[140px]" />

        {/* Pink glow */}

        <div className="absolute bottom-[-10%] right-[-8%] h-105 w-105 rounded-full bg-[#ff1764]/8 blur-[140px]" />

        {/* Center glow */}

        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1877ff]/4 blur-[130px]" />
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="container-nexa relative z-10">
        {/* =================================================
            SECTION HEADER
            ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff1764]">
            Nexa Poker
          </p>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* =================================================
            FEATURES GRID
            ================================================= */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activeFeatures.map((feature, index) => {
            const iconUrl = getMediaUrl(feature.Icon, "medium");

            return (
              <motion.article
                key={feature.id ?? `${feature.Title}-${index}`}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.08, 0.4),
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d14] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1877ff]/30 hover:bg-[#0d111c] sm:p-7"
              >
                {/* Card glow */}

                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#1877ff]/8 blur-[60px] transition-opacity duration-300 group-hover:bg-[#1877ff]/15" />

                {/* Icon */}

                <div className="relative mb-6 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  {iconUrl ? (
                    <Image
                      src={iconUrl}
                      alt={feature.Title}
                      width={56}
                      height={56}
                      className="h-full w-full object-contain p-2"
                    />
                  ) : (
                    <span className="text-xl font-black text-[#ff1764]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  )}
                </div>

                {/* Content */}

                <div className="relative">
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {feature.Title}
                  </h3>

                  {feature.Description && (
                    <p className="mt-3 text-sm leading-7 text-white/55 sm:text-base">
                      {feature.Description}
                    </p>
                  )}
                </div>

                {/* Bottom accent */}

                <div className="absolute bottom-0 left-0 h-px w-0 bg-linear-to-r from-[#ff1764] to-[#1877ff] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}