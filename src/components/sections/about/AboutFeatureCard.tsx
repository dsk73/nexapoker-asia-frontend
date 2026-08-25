"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import type { AboutFeature } from "@/types/pages";

import { getMediaUrl } from "@/lib/media";
import MarkdownContent from "@/components/content/MarkdownContent";

interface AboutFeatureCardProps {
  feature: AboutFeature;
  index?: number;
}

export default function AboutFeatureCard({
  feature,
  index = 0,
}: AboutFeatureCardProps) {
  const imageUrl = getMediaUrl(feature.Image, "medium");

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.08, 0.3),
        ease: "easeOut",
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0a0d14] transition-all duration-300 hover:-translate-y-1 hover:border-[#1877ff]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
    >
      {/* =====================================================
          IMAGE
          ===================================================== */}

      <div className="relative aspect-16/10 w-full shrink-0 overflow-hidden bg-[#11151f]">
        {imageUrl ? (
          <>
            <Image
              src={imageUrl}
              alt={feature.Title || "NexaPoker feature"}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#050507]/70 via-transparent to-transparent" />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-[#111827] via-[#0b1220] to-[#080a10]">
            <span className="text-6xl font-black text-white/10">
              {feature.Title?.charAt(0).toUpperCase() || "N"}
            </span>
          </div>
        )}
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Accent */}

        <div className="mb-4 h-1 w-10 shrink-0 rounded-full bg-[#1877ff] transition-all duration-300 group-hover:w-16" />

        {/* Title */}

        <h3 className="text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl">
          {feature.Title}
        </h3>

        {/* Description */}

        {feature.Description && (
          <div className="mt-3 text-sm leading-6 text-white/55">
            <MarkdownContent content={feature.Description} />
          </div>
        )}
      </div>
    </motion.article>
  );
}
