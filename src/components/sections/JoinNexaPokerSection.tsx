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
      className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#090c13]"
    >
      {/* =====================================================
          PANEL ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Pink glow */}

        <div className="absolute right-[-15%] top-[15%] h-80 w-80 rounded-full bg-[#ff1764]/10 blur-[130px]" />

        {/* Blue glow */}

        <div className="absolute bottom-[-15%] left-[-15%] h-72 w-72 rounded-full bg-[#1877ff]/8 blur-[120px]" />

        {/* Top gradient */}

        <div className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-white/2.5 to-transparent" />
      </div>

      {/* =====================================================
          PANEL BORDER
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition-colors duration-500 group-hover:border-[#ff1764]/30" />

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="relative z-10 flex h-full flex-col p-6 sm:p-7 lg:p-8">
        {/* =================================================
            TEXT CONTENT
            ================================================= */}

        <div className="relative z-20 max-w-xl">
          {/* Eyebrow */}

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff1764] sm:text-sm">
            Nexa Poker
          </p>

          {/* Title */}

          <h3 className="max-w-xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            {data.Title}
          </h3>

          {/* Description */}

          {data.Description && (
            <div className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              <MarkdownContent content={data.Description} />
            </div>
          )}

          {/* CTA */}

          {hasButton && data.ButtonURL && (
            <div className="mt-7">
              {isExternalURL || data.OpenInNewTab ? (
                <a
                  href={data.ButtonURL}
                  target={data.OpenInNewTab ? "_blank" : undefined}
                  rel={data.OpenInNewTab ? "noopener noreferrer" : undefined}
                  className="nexa-button-primary"
                >
                  {data.ButtonText}

                  <ChevronRight size={17} />
                </a>
              ) : (
                <Link href={data.ButtonURL} className="nexa-button-primary">
                  {data.ButtonText}

                  <ChevronRight size={17} />
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
            className="relative mt-7 flex flex-1 items-end justify-center lg:mt-5"
          >
            {/* Image glow */}

            <div className="pointer-events-none absolute bottom-[8%] right-[8%] h-48 w-48 rounded-full bg-[#1877ff]/15 blur-[80px]" />

            <div className="pointer-events-none absolute bottom-[5%] left-[15%] h-40 w-40 rounded-full bg-[#ff1764]/10 blur-[70px]" />

            <div className="relative w-full max-w-140 overflow-hidden rounded-2xl border border-white/10 bg-[#050507] shadow-[0_25px_80px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[1.01]">
              <Image
                src={screenshotUrl}
                alt={`${data.Title} screenshot`}
                width={1200}
                height={900}
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
          <div className="mt-8 flex min-h-55 flex-1 items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#050507] text-sm text-white/30">
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
