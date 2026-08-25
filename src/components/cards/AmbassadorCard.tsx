"use client";

import Image from "next/image";

import type { BrandAmbassador } from "@/types/content";
import { getMediaUrl } from "@/lib/media";

interface AmbassadorCardProps {
  ambassador: BrandAmbassador;
}

export default function AmbassadorCard({ ambassador }: AmbassadorCardProps) {
  const imageUrl = getMediaUrl(ambassador.Photo, "medium");

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0a0d14] transition-all duration-300 hover:-translate-y-1 hover:border-[#1877ff]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      {/* =====================================================
          IMAGE
          ===================================================== */}

      <div className="relative aspect-4/5 w-full shrink-0 overflow-hidden bg-[#11151f]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={ambassador.Name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-[#111827] via-[#0b1220] to-[#080a10]">
            <span className="text-6xl font-black text-white/10">
              {ambassador.Name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}

        {/* Image overlay */}

        <div className="absolute inset-0 bg-linear-to-t from-[#050507] via-transparent to-transparent opacity-80" />

        {/* Pink atmosphere */}

        <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#ff1764]/20 blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Blue atmosphere */}

        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#1877ff]/15 blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* =====================================================
          CONTENT

          Fixed position area keeps all names aligned even
          when one ambassador has a longer position.
          ===================================================== */}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Position */}

        <div className="min-h-10">
          {ambassador.Position && (
            <p className="text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-[#46b9ff]">
              {ambassador.Position}
            </p>
          )}
        </div>

        {/* Name */}

        <h3 className="mt-1 text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl">
          {ambassador.Name}
        </h3>

        {/* Description */}

        {ambassador.Description && (
          <p className="mt-3 text-sm leading-6 text-white/55">
            {ambassador.Description}
          </p>
        )}
      </div>
    </article>
  );
}
