// src/components/sections/teaching-center/OtherTeachingGuides.tsx

"use client";

import type { TeachingGuide } from "@/types/content";

import TeachingGuideCard from "@/components/cards/TeachingGuideCard";

interface OtherTeachingGuidesProps {
  guides: TeachingGuide[];
  currentSlug?: string;
}

export default function OtherTeachingGuides({
  guides,
  currentSlug,
}: OtherTeachingGuidesProps) {
  const otherGuides = guides.filter((guide) => guide.Slug !== currentSlug);

  if (otherGuides.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden border-t border-white/10 px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
      {/* =================================================
          BACKGROUND ATMOSPHERE
          ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-20%] top-[-20%] h-64 w-64 rounded-full bg-[#46b9ff]/4 blur-[100px] sm:left-[-10%] sm:h-96 sm:w-96 sm:blur-[140px]" />

        <div className="absolute bottom-[-20%] right-[-15%] h-64 w-64 rounded-full bg-[#ff1764]/3 blur-[100px] sm:h-96 sm:w-96 sm:blur-[140px]" />
      </div>

      <div className="container-nexa relative z-10">
        {/* =================================================
            SECTION HEADER
            ================================================= */}

        <div className="mb-8 w-full max-w-2xl sm:mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#46b9ff] sm:text-xs sm:tracking-[0.2em] md:text-sm">
            Learning Center
          </p>

          <h2 className="mt-2.5 wrap-break-word text-2xl font-bold leading-tight tracking-tight text-white sm:mt-3 sm:text-4xl lg:text-5xl">
            Other Teaching Guides
          </h2>

          <p className="mt-3 max-w-xl text-[14px] leading-6 text-white/55 sm:mt-4 sm:text-base sm:leading-7">
            Continue learning with more poker guides, strategies and practical
            resources from Nexa Poker.
          </p>
        </div>

        {/* =================================================
            GUIDE GRID
            ================================================= */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {otherGuides.map((guide) => (
            <TeachingGuideCard
              key={guide.documentId ?? guide.id}
              guide={guide}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
