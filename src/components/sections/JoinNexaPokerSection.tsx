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
    <section className="relative overflow-hidden bg-[#050507] py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Pink glow */}

        <div className="absolute left-[-12%] top-[20%] h-105 w-105 rounded-full bg-[#ff1764]/8 blur-[140px]" />

        {/* Blue glow */}

        <div className="absolute bottom-[-12%] right-[-8%] h-105 w-105 rounded-full bg-[#1877ff]/8 blur-[140px]" />
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="container-nexa relative z-10">
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.6,
          }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0d14]"
        >
          {/* =================================================
              CARD ATMOSPHERE
              ================================================= */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-30%] h-80 w-80 -translate-x-1/2 rounded-full bg-[#1877ff]/8 blur-[120px]" />

            <div className="absolute bottom-[-30%] left-[10%] h-72 w-72 rounded-full bg-[#ff1764]/7 blur-[120px]" />
          </div>

          {/* =================================================
              MAIN GRID
              ================================================= */}

          <div className="relative grid items-center lg:grid-cols-2">
            {/* =================================================
                CONTENT
                ================================================= */}

            <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              {/* Eyebrow */}

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff1764]">
                Nexa Poker
              </p>

              {/* Title */}

              <h2 className="max-w-xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {data.Title}
              </h2>

              {/* Description */}

              {data.Description && (
                <div className="mt-5 max-w-xl">
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
                      rel={
                        data.OpenInNewTab ? "noopener noreferrer" : undefined
                      }
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

            <div className="relative p-5 sm:p-7 lg:p-8">
              {screenshotUrl ? (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.97,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                  }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#050507] shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
                >
                  <Image
                    src={screenshotUrl}
                    alt={`${data.Title} screenshot`}
                    width={1200}
                    height={900}
                    className="h-auto w-full object-contain"
                  />

                  {/* Image overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/15 via-transparent to-transparent" />
                </motion.div>
              ) : (
                <div className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#050507] text-sm text-white/30">
                  Screenshot unavailable
                </div>
              )}
            </div>
          </div>

          {/* Bottom accent */}

          <div className="h-px w-full bg-linear-to-r from-[#ff1764]/60 via-[#1877ff]/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
