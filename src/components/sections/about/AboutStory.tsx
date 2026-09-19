//src/components/sections/about/AboutStory.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import type { AboutPage } from "@/types/pages";

import { getMediaUrl } from "@/lib/media";
import MarkdownContent from "@/components/content/MarkdownContent";

interface AboutStoryProps {
  page: AboutPage;
}

export default function AboutStory({ page }: AboutStoryProps) {
  const imageUrl = getMediaUrl(page.SectionImage, "large");

  if (!page.SectionTitle && !page.SectionContent && !imageUrl) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#080b12] px-4 py-14 sm:px-6 sm:py-18 lg:py-20">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-[18%] h-72 w-72 rounded-full bg-[#1877ff]/5 blur-[110px] sm:-left-32 sm:h-105 sm:w-105 sm:bg-[#1877ff]/7 sm:blur-[140px]" />

        <div className="absolute -right-24 bottom-[8%] h-72 w-72 rounded-full bg-[#ff1764]/5 blur-[110px] sm:-right-32 sm:h-105 sm:w-105 sm:bg-[#ff1764]/7 sm:blur-[140px]" />
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="container-nexa relative z-10">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:gap-16">
          {/* =================================================
              IMAGE
              ================================================= */}

          {imageUrl && (
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="relative min-w-0"
            >
              {/* Image glow */}

              <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-linear-to-br from-[#1877ff]/12 via-transparent to-[#ff1764]/12 blur-2xl sm:-inset-4 sm:rounded-[30px] sm:bg-linear-to-br sm:from-[#1877ff]/15 sm:to-[#ff1764]/15" />

              {/* Image container */}

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d14] shadow-[0_25px_65px_rgba(0,0,0,0.45)] sm:rounded-[26px] sm:shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src={imageUrl}
                    alt={page.SectionTitle || "Nexa Poker"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                  />

                  {/* Image overlay */}

                  <div className="absolute inset-0 bg-linear-to-t from-[#050507]/50 via-transparent to-transparent" />

                  {/* Subtle top highlight */}

                  <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent sm:inset-x-8" />
                </div>
              </div>
            </motion.div>
          )}

          {/* =================================================
              CONTENT
              ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="min-w-0 max-w-2xl"
          >
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.17em] text-[#ff1764] sm:mb-3 sm:text-xs sm:tracking-[0.2em] md:text-sm">
              About Nexa Poker
            </p>

            {page.SectionTitle && (
              <h2 className="max-w-2xl wrap-break-word text-2xl font-black leading-[1.1] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.7rem] xl:text-5xl">
                {page.SectionTitle}
              </h2>
            )}

            {page.SectionContent && (
              <div className="mt-5 max-w-2xl text-[15px] leading-7 text-white/65 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
                <MarkdownContent content={page.SectionContent} />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
