// src/components/sections/JoinNexaPokerSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import type { JoinNexaPoker } from "@/types/pages";

import { getMediaUrl } from "@/lib/media";
import MarkdownContent from "@/components/content/MarkdownContent";

interface JoinNexaPokerSectionProps {
  data?: JoinNexaPoker | null;
}

export default function JoinNexaPokerSection({
  data,
}: JoinNexaPokerSectionProps) {
  if (!data) {
    return null;
  }

  const screenshotUrl = getMediaUrl(data.Screenshot, "large");

  const hasButton = Boolean(data.ButtonText && data.ButtonURL);

  const isExternalURL =
    data.ButtonURL?.startsWith("http://") ||
    data.ButtonURL?.startsWith("https://") ||
    data.ButtonURL?.startsWith("mailto:") ||
    data.ButtonURL?.startsWith("tel:");

  return (
    <motion.div
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
        amount: 0.12,
      }}
      transition={{
        duration: 0.6,
        delay: 0.08,
      }}
      className="group relative h-full min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#090c13] sm:rounded-3xl"
    >
      {/* =====================================================
          PANEL ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Pink glow */}

        <div className="absolute right-[-20%] top-[12%] h-64 w-64 rounded-full bg-[#ff1764]/10 blur-[100px] sm:right-[-15%] sm:top-[15%] sm:h-80 sm:w-80 sm:blur-[130px]" />

        {/* Blue glow */}

        <div className="absolute bottom-[-18%] left-[-20%] h-60 w-60 rounded-full bg-[#1877ff]/8 blur-[100px] sm:bottom-[-15%] sm:left-[-15%] sm:h-72 sm:w-72 sm:blur-[120px]" />

        {/* Top gradient */}

        <div className="absolute inset-x-0 top-0 h-36 bg-linear-to-b from-white/2.5 to-transparent sm:h-48" />
      </div>

      {/* =====================================================
          PANEL BORDER
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition-colors duration-500 group-hover:border-[#ff1764]/30 sm:rounded-3xl" />

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="relative z-10 flex h-full min-w-0 flex-col p-5 sm:p-7 lg:p-8">
        {/* =================================================
            TEXT CONTENT
            ================================================= */}

        <div className="relative z-20 min-w-0 max-w-xl">
          {/* Eyebrow */}

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#ff1764] sm:mb-3 sm:text-sm sm:tracking-[0.2em]">
            Nexa Poker
          </p>

          {/* Title */}

          <h3 className="max-w-xl wrap-break-word text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            {data.Title}
          </h3>

          {/* Description */}

          {data.Description && (
            <div className="mt-4 max-w-xl min-w-0 wrap-break-word text-sm leading-6 text-white/55 sm:mt-5 sm:text-base sm:leading-7">
              <MarkdownContent content={data.Description} />
            </div>
          )}

          {/* CTA */}

          {hasButton && data.ButtonURL && (
            <div className="mt-6 sm:mt-7">
              {isExternalURL || data.OpenInNewTab ? (
                <a
                  href={data.ButtonURL}
                  target={data.OpenInNewTab ? "_blank" : undefined}
                  rel={data.OpenInNewTab ? "noopener noreferrer" : undefined}
                  className="nexa-button-primary max-w-full"
                >
                  <span className="truncate">{data.ButtonText}</span>

                  <ChevronRight size={17} className="shrink-0" />
                </a>
              ) : (
                <Link
                  href={data.ButtonURL}
                  className="nexa-button-primary max-w-full"
                >
                  <span className="truncate">{data.ButtonText}</span>

                  <ChevronRight size={17} className="shrink-0" />
                </Link>
              )}
            </div>
          )}
        </div>

        {/* =================================================
            SCREENSHOT
            ================================================= */}

        {screenshotUrl && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="relative mt-6 flex min-w-0 flex-1 items-end justify-center sm:mt-7 lg:mt-5"
          >
            {/* Image glow */}

            <div className="pointer-events-none absolute bottom-[8%] right-[5%] h-36 w-36 rounded-full bg-[#1877ff]/15 blur-[65px] sm:right-[8%] sm:h-48 sm:w-48 sm:blur-[80px]" />

            <div className="pointer-events-none absolute bottom-[5%] left-[10%] h-32 w-32 rounded-full bg-[#ff1764]/10 blur-[55px] sm:left-[15%] sm:h-40 sm:w-40 sm:blur-[70px]" />

            <div className="relative w-full min-w-0 max-w-140 overflow-hidden rounded-xl border border-white/10 bg-[#050507] shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[1.01] sm:rounded-2xl sm:shadow-[0_25px_80px_rgba(0,0,0,0.5)]">
              <Image
                src={screenshotUrl}
                alt={`${data.Title} screenshot`}
                width={1200}
                height={900}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 560px"
                className="h-auto w-full object-contain"
              />

              {/* Image overlay */}

              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />

              {/* Bottom image accent */}

              <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-[#ff1764]/70 to-[#1877ff]/70" />
            </div>
          </motion.div>
        )}

        {!screenshotUrl && (
          <div className="mt-7 flex min-h-44 flex-1 items-center justify-center rounded-xl border border-dashed border-white/10 bg-[#050507] px-4 text-center text-sm text-white/30 sm:mt-8 sm:min-h-55 sm:rounded-2xl">
            Screenshot unavailable
          </div>
        )}
      </div>

      {/* =====================================================
          OUTER ACCENT
          ===================================================== */}

      <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-[#ff1764]/70 via-[#1877ff]/60 to-transparent opacity-70" />
    </motion.div>
  );
}
