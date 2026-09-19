// src/components/sections/WhyChooseNexaPokerSection.tsx

"use client";

import { motion } from "framer-motion";

import type { WhyChooseFeature } from "@/types/pages";

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
    <section className="relative overflow-hidden bg-[#050507] px-4 py-14 sm:px-6 sm:py-20 lg:px-0 lg:py-28">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}

        <div className="absolute left-[-18%] top-[10%] h-72 w-72 rounded-full bg-[#1877ff]/8 blur-[110px] sm:left-[-10%] sm:h-105 sm:w-105 sm:blur-[140px]" />

        {/* Pink glow */}

        <div className="absolute bottom-[-12%] right-[-18%] h-72 w-72 rounded-full bg-[#ff1764]/8 blur-[110px] sm:bottom-[-10%] sm:right-[-8%] sm:h-105 sm:w-105 sm:blur-[140px]" />

        {/* Center glow */}

        <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1877ff]/4 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="container-nexa relative z-10 min-w-0">
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
          className="mx-auto mb-9 max-w-4xl text-center sm:mb-14"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#ff1764] sm:mb-3 sm:text-sm sm:tracking-[0.2em]">
            Nexa Poker
          </p>

          <h2 className="wrap-break-word text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          {subtitle && (
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-white/55 sm:mt-4 sm:text-lg sm:leading-7">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* =================================================
            FEATURES GRID
            ================================================= */}

        <div className="grid min-w-0 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {activeFeatures.map((feature, index) => {
            const isPink = index % 3 === 1;

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
                className="group relative min-h-48 min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#090c13] p-5 transition-all duration-500 hover:-translate-y-1.5 hover:bg-[#0c1019] sm:min-h-55 sm:p-7"
              >
                {/* =================================================
                    CARD BORDER GLOW
                    ================================================= */}

                <div
                  className={`pointer-events-none absolute inset-0 rounded-2xl border opacity-40 transition-all duration-500 group-hover:opacity-100 ${
                    isPink
                      ? "border-[#ff1764]/40 group-hover:border-[#ff1764]/70"
                      : "border-[#1877ff]/40 group-hover:border-[#1877ff]/70"
                  }`}
                />

                {/* =================================================
                    CARD BACKGROUND GRADIENT
                    ================================================= */}

                <div
                  className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                    isPink
                      ? "bg-[radial-gradient(circle_at_85%_10%,rgba(255,23,100,0.15),transparent_48%)]"
                      : "bg-[radial-gradient(circle_at_85%_10%,rgba(24,119,255,0.15),transparent_48%)]"
                  }`}
                />

                {/* =================================================
                    TOP ACCENT
                    ================================================= */}

                <div
                  className={`absolute left-5 right-5 top-0 h-px sm:left-7 sm:right-7 ${
                    isPink
                      ? "bg-linear-to-r from-transparent via-[#ff1764]/70 to-transparent"
                      : "bg-linear-to-r from-transparent via-[#1877ff]/70 to-transparent"
                  }`}
                />

                {/* =================================================
                    TOP RIGHT GLOW
                    ================================================= */}

                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full blur-[60px] transition-all duration-500 sm:h-40 sm:w-40 sm:blur-[70px] ${
                    isPink
                      ? "bg-[#ff1764]/8 group-hover:bg-[#ff1764]/18"
                      : "bg-[#1877ff]/8 group-hover:bg-[#1877ff]/18"
                  }`}
                />

                {/* =================================================
                    CONTENT
                    ================================================= */}

                <div className="relative z-10 min-w-0">
                  {/* Title */}

                  <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                    <span
                      className={`mt-0.5 h-7 w-0.75 shrink-0 rounded-full sm:h-8 ${
                        isPink
                          ? "bg-linear-to-b from-[#ff1764] via-[#ff1764]/80 to-transparent"
                          : "bg-linear-to-b from-[#1877ff] via-[#1877ff]/80 to-transparent"
                      }`}
                    />

                    <h3 className="min-w-0 wrap-break-word text-lg font-bold leading-tight tracking-tight text-white sm:text-[21px]">
                      {feature.Title}
                    </h3>
                  </div>

                  {/* Description */}

                  {feature.Description && (
                    <p className="mt-4 max-w-[94%] wrap-break-word text-sm leading-6 text-white/50 transition-colors duration-300 group-hover:text-white/65 sm:mt-5 sm:text-base sm:leading-7">
                      {feature.Description}
                    </p>
                  )}
                </div>

                {/* =================================================
                    BOTTOM RIGHT POKER CHIP
                    ================================================= */}

                <div
                  className={`pointer-events-none absolute -bottom-10 -right-7 h-24 w-24 rounded-full border opacity-30 transition-all duration-500 group-hover:scale-105 group-hover:opacity-50 sm:-bottom-12 sm:-right-8 sm:h-28 sm:w-28 ${
                    isPink ? "border-[#ff1764]" : "border-[#1877ff]"
                  }`}
                >
                  <div
                    className={`absolute inset-2 rounded-full border ${
                      isPink ? "border-[#ff1764]/60" : "border-[#1877ff]/60"
                    }`}
                  />

                  <div
                    className={`absolute inset-5 flex items-center justify-center rounded-full border sm:inset-6 ${
                      isPink ? "border-[#ff1764]/40" : "border-[#1877ff]/40"
                    }`}
                  >
                    {/* Spade */}

                    <span
                      className={`translate-y-1 text-2xl font-black sm:text-3xl ${
                        isPink ? "text-[#ff1764]/40" : "text-[#1877ff]/40"
                      }`}
                    >
                      ♠
                    </span>
                  </div>

                  {/* Chip markings */}

                  <div
                    className={`absolute left-1/2 top-0 h-2.5 w-1 -translate-x-1/2 sm:h-3 ${
                      isPink ? "bg-[#ff1764]/50" : "bg-[#1877ff]/50"
                    }`}
                  />

                  <div
                    className={`absolute bottom-0 left-1/2 h-2.5 w-1 -translate-x-1/2 sm:h-3 ${
                      isPink ? "bg-[#ff1764]/50" : "bg-[#1877ff]/50"
                    }`}
                  />

                  <div
                    className={`absolute left-0 top-1/2 h-1 w-2.5 -translate-y-1/2 sm:w-3 ${
                      isPink ? "bg-[#ff1764]/50" : "bg-[#1877ff]/50"
                    }`}
                  />

                  <div
                    className={`absolute right-0 top-1/2 h-1 w-2.5 -translate-y-1/2 sm:w-3 ${
                      isPink ? "bg-[#ff1764]/50" : "bg-[#1877ff]/50"
                    }`}
                  />
                </div>

                {/* =================================================
                    BOTTOM ACCENT
                    ================================================= */}

                <div
                  className={`absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full ${
                    isPink
                      ? "bg-linear-to-r from-[#ff1764] via-[#ff1764]/60 to-transparent"
                      : "bg-linear-to-r from-[#1877ff] via-[#1877ff]/60 to-transparent"
                  }`}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
