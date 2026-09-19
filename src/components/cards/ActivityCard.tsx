// src/components/cards/ActivityCard.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

import type { Activity } from "@/types/content";
import { getMediaUrl } from "@/lib/media";

interface ActivityCardProps {
  activity: Activity;
}

export default function ActivityCard({ activity }: ActivityCardProps) {
  const imageUrl = getMediaUrl(activity.Thumbnail, "medium");

  return (
    <article className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d14] transition-all duration-300 hover:-translate-y-1 hover:border-[#1877ff]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:rounded-3xl">
      {/* =====================================================
          IMAGE
          ===================================================== */}

      <Link
        href={`/activities/${activity.Slug}`}
        className="relative block aspect-16/10 w-full overflow-hidden bg-[#11151f]"
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={activity.Thumbnail?.alternativeText || activity.Title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-[#111827] via-[#0b1220] to-[#080a10]">
            <span className="text-4xl font-black text-white/10 sm:text-5xl">
              {activity.Title.charAt(0).toUpperCase()}
            </span>
          </div>
        )}

        {/* Dark image overlay */}

        <div className="absolute inset-0 bg-linear-to-t from-[#050507]/80 via-transparent to-transparent" />

        {/* Featured badge */}

        {activity.Featured && (
          <div className="absolute left-3 top-3 max-w-[calc(100%-1.5rem)] rounded-full border border-[#ff1764]/30 bg-[#ff1764]/90 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm sm:left-4 sm:top-4 sm:px-3 sm:text-[10px] sm:tracking-[0.14em]">
            Featured
          </div>
        )}

        {/* Hover arrow */}

        <div className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-4 sm:right-4 sm:h-10 sm:w-10">
          <ArrowUpRight size={17} className="sm:h-4.5 sm:w-4.5" />
        </div>
      </Link>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-6">
        {/* Meta */}

        <div className="mb-3 flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-white/40">
          {activity.category?.Name && (
            <>
              <span className="max-w-full wrap-break-word font-semibold uppercase tracking-widest text-[#46b9ff] sm:tracking-[0.12em]">
                {activity.category.Name}
              </span>

              {activity.ReadingTime && (
                <span className="h-1 w-1 shrink-0 rounded-full bg-white/20" />
              )}
            </>
          )}

          {activity.ReadingTime && (
            <span className="inline-flex shrink-0 items-center gap-1.5">
              <Clock size={13} />
              {activity.ReadingTime} min read
            </span>
          )}
        </div>

        {/* Title */}

        <Link href={`/activities/${activity.Slug}`} className="min-w-0">
          <h3 className="wrap-break-word text-lg font-bold leading-tight tracking-tight text-white transition-colors duration-200 group-hover:text-[#46b9ff] sm:text-2xl">
            {activity.Title}
          </h3>
        </Link>

        {/* Summary */}

        {activity.Summary && (
          <p className="mt-3 line-clamp-3 wrap-break-word text-sm leading-6 text-white/55">
            {activity.Summary}
          </p>
        )}

        {/* Bottom link */}

        <div className="mt-auto pt-5 sm:pt-6">
          <Link
            href={`/activities/${activity.Slug}`}
            className="inline-flex max-w-full items-center gap-2 text-sm font-semibold text-white transition-colors duration-200 hover:text-[#ff1764]"
          >
            <span>Read More</span>

            <ArrowUpRight
              size={16}
              className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
