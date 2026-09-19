// src/components/sections/activities/OtherActivities.tsx

import type { Activity } from "@/types/content";

import ActivityCard from "@/components/cards/ActivityCard";

interface OtherActivitiesProps {
  activities: Activity[];
  currentSlug: string;
}

export default function OtherActivities({
  activities,
  currentSlug,
}: OtherActivitiesProps) {
  const otherActivities = activities.filter(
    (activity) => activity.Slug !== currentSlug,
  );

  if (otherActivities.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden border-t border-white/8 px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
      {/* =================================================
          BACKGROUND ATMOSPHERE
          ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-20%] top-[-20%] h-64 w-64 rounded-full bg-[#46b9ff]/4 blur-[100px] sm:left-[-10%] sm:h-96 sm:w-96 sm:blur-[130px]" />

        <div className="absolute bottom-[-20%] right-[-15%] h-64 w-64 rounded-full bg-[#ff1764]/3 blur-[100px] sm:h-96 sm:w-96 sm:blur-[130px]" />
      </div>

      <div className="container-nexa relative z-10">
        {/* =================================================
            SECTION HEADING
            ================================================= */}

        <div className="mb-8 w-full max-w-2xl sm:mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#46b9ff] sm:text-xs sm:tracking-[0.18em] md:text-sm">
            Keep Exploring
          </p>

          <h2 className="mt-2.5 wrap-break-word text-2xl font-bold leading-tight tracking-tight text-white sm:mt-3 sm:text-3xl md:text-4xl">
            More Poker Activities
          </h2>

          <p className="mt-3 max-w-xl text-[14px] leading-6 text-white/50 sm:text-base sm:leading-7">
            Discover more activities, events and experiences from Nexa Poker.
          </p>
        </div>

        {/* =================================================
            ACTIVITY CARDS
            ================================================= */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {otherActivities.map((activity) => (
            <ActivityCard
              key={activity.documentId ?? activity.id}
              activity={activity}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
