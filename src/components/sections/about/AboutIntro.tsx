"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import type { AboutPage } from "@/types/pages";

import { getMediaUrl } from "@/lib/media";
import MarkdownContent from "@/components/content/MarkdownContent";

interface AboutIntroProps {
  page: AboutPage;
}

export default function AboutIntro({ page }: AboutIntroProps) {
  const logoUrl = getMediaUrl(page.AboutLogo, "medium");

  if (!page.AboutTitle && !page.AboutContent && !logoUrl) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#050507] py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[15%] h-105 w-105 rounded-full bg-[#1877ff]/6 blur-[140px]" />

        <div className="absolute bottom-[-10%] left-[-10%] h-105 w-105 rounded-full bg-[#ff1764]/6 blur-[140px]" />
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="container-nexa relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mx-auto max-w-5xl rounded-[28px] border border-white/10 bg-[#0a0d14]/80 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8 lg:p-12"
        >
          {/* =================================================
              TITLE + LOGO ROW
              ================================================= */}

          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
            {/* Logo */}

            {logoUrl && (
              <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#11151f] shadow-[0_15px_40px_rgba(0,0,0,0.3)] sm:h-28 sm:w-28">
                <Image
                  src={logoUrl}
                  alt={page.AboutTitle || "NexaPoker"}
                  fill
                  sizes="112px"
                  className="object-contain p-4"
                />
              </div>
            )}

            {/* Title */}

            {page.AboutTitle && (
              <div className="min-w-0 flex-1 text-center sm:text-left">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff1764]">
                  NexaPoker
                </p>

                <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {page.AboutTitle}
                </h2>
              </div>
            )}
          </div>

          {/* =================================================
              DESCRIPTION
              ================================================= */}

          {page.AboutContent && (
            <div className="mt-8 border-t border-white/10 pt-7 sm:mt-10 sm:pt-8">
              <div className="max-w-4xl">
                <MarkdownContent content={page.AboutContent} />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
