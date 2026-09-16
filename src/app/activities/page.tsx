import type { Metadata } from "next";

import { getActivities } from "@/lib/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import ActivityCard from "@/components/cards/ActivityCard";

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

      <main className="min-h-screen bg-[#050507] text-white">
        {/* =================================================
            PAGE HERO
            ================================================= */}

        <section className="border-b border-white/8 px-6 pb-16 pt-32 sm:pb-20 sm:pt-36">
          <div className="container-nexa">
            <Breadcrumbs
              items={[{ label: "Home", href: "/" }, { label: "Activities" }]}
            />

            <div className="mt-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#46b9ff]">
                NexaPoker
              </p>

              <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Poker Activities
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
                Discover poker activities, tournaments, events and experiences
                available for players worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* =================================================
            ACTIVITIES GRID
            ================================================= */}

        <section className="px-6 py-16 sm:py-20 lg:py-24">
          <div className="container-nexa">
            {activities.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {activities.map((activity) => (
                  <ActivityCard
                    key={activity.documentId ?? activity.id}
                    activity={activity}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-white/10 bg-[#0a0d14] px-6 py-16 text-center">
                <h2 className="text-2xl font-bold text-white">
                  No activities available
                </h2>

                <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/50">
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
