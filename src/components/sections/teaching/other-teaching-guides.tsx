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
    <section className="border-t border-white/10 px-6 py-20 sm:py-24 lg:py-28">
      <div className="container-nexa">
        {/* =================================================
            SECTION HEADER
            ================================================= */}

        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#46b9ff] sm:text-sm">
            Learning Center
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Other Teaching Guides
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
            Continue learning with more poker guides, strategies and practical
            resources from Nexa Poker.
          </p>
        </div>

        {/* =================================================
            GUIDE GRID
            ================================================= */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
