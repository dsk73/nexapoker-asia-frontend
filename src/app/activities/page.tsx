// src/app/activities/page.tsx

import type { Metadata } from "next";

import { getActivities } from "@/lib/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import ActivityCard from "@/components/cards/ActivityCard";

/**
 * Force the page to render dynamically.
 *
 * This ensures updated Activities content from Strapi
 * can be fetched at runtime without requiring a new
 * frontend deployment.
 */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Poker Activities & Tournaments | Nexa Poker",

  description:
    "Discover poker activities, tournaments, events and competitive poker action with Nexa Poker. Explore online poker games, poker strategy content and activities for players worldwide.",

  keywords: [
    "Nexa Poker",
    "NexaPoker",
    "poker activities",
    "online poker games",
    "poker tournaments",
    "poker events",
    "competitive poker",
    "poker strategy",
    "poker games and tournaments",
  ],

  alternates: {
    canonical: "/activities",
  },

  openGraph: {
    title: "Poker Activities & Tournaments | Nexa Poker",
    description:
      "Discover poker activities, tournaments, events and competitive poker action with Nexa Poker. Explore online poker games, poker strategy content and activities for players worldwide.",
    url: "/activities",
    siteName: "Nexa Poker",
    type: "website",
    images: [
      {
        url: "/images/nexapoker-logo.png",
        width: 1200,
        height: 630,
        alt: "Nexa Poker | Poker Activities & Tournaments",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Poker Activities & Tournaments | Nexa Poker",
    description:
      "Discover poker activities, tournaments, events and competitive poker action with Nexa Poker. Explore online poker games, poker strategy content and activities for players worldwide.",
    images: ["/images/nexapoker-logo.png"],
  },
};

export default async function ActivitiesPage() {
  const activities = await getActivities();

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-x-hidden bg-[#050507] text-white">
        {/* =================================================
            PAGE HERO
            ================================================= */}

        <section className="relative overflow-hidden border-b border-white/8 px-4 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-28 md:pt-32 lg:pb-24 lg:pt-36">
          {/* Background atmosphere */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-20%] top-[-25%] h-72 w-72 rounded-full bg-[#46b9ff]/4 blur-[100px] sm:right-[-10%] sm:h-105 sm:w-105 sm:blur-[140px]" />
            <div className="absolute bottom-[-30%] left-[-20%] h-64 w-64 rounded-full bg-[#ff1764]/3 blur-[100px] sm:left-[-10%] sm:h-96 sm:w-96 sm:blur-[140px]" />
          </div>

          <div className="container-nexa relative z-10">
            <Breadcrumbs
              items={[{ label: "Home", href: "/" }, { label: "Activities" }]}
            />

            <div className="mt-7 w-full max-w-3xl sm:mt-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#46b9ff] sm:text-xs sm:tracking-[0.2em] md:text-sm">
                Nexa Poker
              </p>

              <h1 className="mt-2.5 wrap-break-word text-3xl font-black leading-[1.08] tracking-tight text-white sm:mt-4 sm:text-5xl md:text-6xl">
                Poker Activities
              </h1>

              <p className="mt-4 max-w-2xl text-[14px] leading-6 text-white/55 sm:mt-5 sm:text-lg sm:leading-8">
                Discover poker activities, tournaments, events and experiences
                available for players worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* =================================================
            ACTIVITIES GRID
            ================================================= */}

        <section className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
          <div className="container-nexa relative z-10">
            {activities.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {activities.map((activity) => (
                  <ActivityCard
                    key={activity.documentId ?? activity.id}
                    activity={activity}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-white/10 bg-[#0a0d14] px-5 py-12 text-center sm:rounded-3xl sm:px-6 sm:py-16">
                <h2 className="text-xl font-bold leading-tight text-white sm:text-2xl">
                  No activities available
                </h2>

                <p className="mx-auto mt-3 max-w-lg text-[14px] leading-6 text-white/50 sm:text-sm sm:leading-6">
                  There are currently no poker activities available. Please
                  check back again soon.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
