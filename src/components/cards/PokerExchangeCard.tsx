"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

import type { PokerExchangeArticle } from "@/types/content";
import { getMediaUrl } from "@/lib/media";

interface PokerExchangeCardProps {
  article: PokerExchangeArticle;
}

export default function PokerExchangeCard({ article }: PokerExchangeCardProps) {
  const imageUrl = getMediaUrl(article.Thumbnail, "medium");

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0a0d14] transition-all duration-300 hover:-translate-y-1 hover:border-[#1877ff]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      {/* =====================================================
          IMAGE
          ===================================================== */}

      <Link
        href={`/poker-exchange/${article.Slug}`}
        className="relative block aspect-16/10 w-full overflow-hidden bg-[#11151f]"
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={article.Thumbnail?.alternativeText || article.Title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-[#111827] via-[#0b1220] to-[#080a10]">
            <span className="text-5xl font-black text-white/10">
              {article.Title.charAt(0).toUpperCase()}
            </span>
          </div>
        )}

        {/* Dark image overlay */}

        <div className="absolute inset-0 bg-linear-to-t from-[#050507]/80 via-transparent to-transparent" />

        {/* Featured badge */}

        {article.Featured && (
          <div className="absolute left-4 top-4 rounded-full border border-[#ff1764]/30 bg-[#ff1764]/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
            Featured
          </div>
        )}

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
            META
            ================================================= */}

        <div className="mb-3 flex items-center gap-3 text-xs text-white/40">
          {article.category?.Name && (
            <>
              <span className="font-semibold uppercase tracking-[0.12em] text-[#46b9ff]">
                {article.category.Name}
              </span>

              {article.ReadingTime && (
                <span className="h-1 w-1 rounded-full bg-white/20" />
              )}
            </>
          )}

          {article.ReadingTime && (
            <span className="inline-flex items-center gap-1.5">
              <Clock size={13} />
              {article.ReadingTime} min read
            </span>
          )}
        </div>

        {/* =================================================
            TITLE
            ================================================= */}

        <Link href={`/poker-exchange/${article.Slug}`}>
          <h3 className="text-xl font-bold leading-tight tracking-tight text-white transition-colors duration-200 group-hover:text-[#46b9ff] sm:text-2xl">
            {article.Title}
          </h3>
        </Link>

        {/* =================================================
            SUMMARY
            ================================================= */}

        {article.Summary && (
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/55">
            {article.Summary}
          </p>
        )}

        {/* =================================================
            BOTTOM LINK
            ================================================= */}

        <div className="mt-auto pt-6">
          <Link
            href={`/poker-exchange/${article.Slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-200 hover:text-[#ff1764]"
          >
            Read More
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
