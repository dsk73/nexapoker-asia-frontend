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
    <section className="relative overflow-hidden bg-[#080b12] py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-[20%] h-105 w-105 rounded-full bg-[#1877ff]/7 blur-[140px]" />

        <div className="absolute -right-32 bottom-[10%] h-105 w-105 rounded-full bg-[#ff1764]/7 blur-[140px]" />
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="container-nexa relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-20">
          {/* =================================================
              IMAGE
              ================================================= */}

          {imageUrl && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="relative"
            >
              <div className="pointer-events-none absolute -inset-4 rounded-[30px] bg-linear-to-br from-[#1877ff]/15 via-transparent to-[#ff1764]/15 blur-2xl" />

              <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#0a0d14] shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src={imageUrl}
                    alt={page.SectionTitle || "Nexa Poker"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#050507]/45 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          )}

          {/* =================================================
              CONTENT
              ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="max-w-2xl"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff1764]">
              About Nexa Poker
            </p>

            {page.SectionTitle && (
              <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {page.SectionTitle}
              </h2>
            )}

            {page.SectionContent && (
              <div className="mt-6">
                <MarkdownContent content={page.SectionContent} />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
