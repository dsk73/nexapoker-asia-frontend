"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { TeachingGuide } from "@/types/content";
import { getMediaUrl } from "@/lib/media";

interface TeachingGuideCardProps {
  guide: TeachingGuide;
}

export default function TeachingGuideCard({ guide }: TeachingGuideCardProps) {
  const imageUrl = getMediaUrl(guide.Thumbnail, "medium");

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0a0d14] transition-all duration-300 hover:-translate-y-1 hover:border-[#1877ff]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      {/* =====================================================
          IMAGE
          ===================================================== */}

      <Link
        href={`/teaching-center/${guide.Slug}`}
        className="relative block aspect-16/10 w-full overflow-hidden bg-[#11151f]"
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={guide.Thumbnail?.alternativeText || guide.Title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-[#111827] via-[#0b1220] to-[#080a10]">
            <span className="text-5xl font-black text-white/10">
              {guide.Title.charAt(0).toUpperCase()}
            </span>
          </div>
        )}

        {/* Dark image overlay */}

        <div className="absolute inset-0 bg-linear-to-t from-[#050507]/80 via-transparent to-transparent" />

        {/* Hover arrow */}

        <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </div>
      </Link>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* =================================================
            TITLE
            ================================================= */}

        <Link href={`/teaching-center/${guide.Slug}`}>
          <h3 className="text-xl font-bold leading-tight tracking-tight text-white transition-colors duration-200 group-hover:text-[#46b9ff] sm:text-2xl">
            {guide.Title}
          </h3>
        </Link>

        {/* =================================================
            SECTION COUNT
            ================================================= */}

        {guide.Sections && guide.Sections.length > 0 && (
          <p className="mt-3 text-sm leading-6 text-white/45">
            {guide.Sections.length}{" "}
            {guide.Sections.length === 1 ? "section" : "sections"} available
          </p>
        )}

        {/* =================================================
            BOTTOM LINK
            ================================================= */}

        <div className="mt-auto pt-6">
          <Link
            href={`/teaching-center/${guide.Slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-200 hover:text-[#ff1764]"
          >
            View Guide
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
