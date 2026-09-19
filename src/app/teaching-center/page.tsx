// src/app/teaching-center/page.tsx

import type { Metadata } from "next";

import { getTeachingGuides } from "@/lib/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TeachingGuideCard from "@/components/cards/TeachingGuideCard";

/**
 * Force the page to render dynamically.
 *
 * This ensures updated Teaching Center content from Strapi
 * can be fetched at runtime without requiring a new
 * frontend deployment.
 */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Poker Teaching Center | Learn Online Poker | Nexa Poker",

  description:
    "Learn how to play poker with Nexa Poker teaching guides covering poker fundamentals, Texas Hold'em, poker rules, poker strategy and practical tips for improving your game.",

  keywords: [
    "Nexa Poker",
    "NexaPoker",
    "Nexa Poker Teaching Center",
    "how to play poker",
    "poker rules for beginners",
    "poker strategy for beginners",
    "how to improve at poker",
    "online poker tips",
    "poker fundamentals",
    "Texas Hold'em",
    "learn poker",
    "online poker strategy",
    "poker tips",
  ],

  alternates: {
    canonical: "/teaching-center",
  },

  openGraph: {
    title: "Poker Teaching Center | Learn Online Poker | Nexa Poker",
    description:
      "Learn how to play poker with Nexa Poker teaching guides covering poker fundamentals, Texas Hold'em, poker rules, poker strategy and practical tips for improving your game.",
    url: "/teaching-center",
    siteName: "Nexa Poker",
    type: "website",
    images: [
      {
        url: "/images/nexapoker-logo.png",
        width: 1200,
        height: 630,
        alt: "Nexa Poker Poker Teaching Center | Learn Online Poker",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Poker Teaching Center | Learn Online Poker | Nexa Poker",
    description:
      "Learn how to play poker with Nexa Poker teaching guides covering poker fundamentals, Texas Hold'em, poker rules, poker strategy and practical tips for improving your game.",
    images: ["/images/nexapoker-logo.png"],
  },
};

export default async function TeachingCenterPage() {
  const guides = await getTeachingGuides();

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-x-hidden bg-[#050507] text-white">
        {/* =================================================
            HERO
            ================================================= */}

        <section className="relative overflow-hidden px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 md:pb-20 md:pt-32 lg:pt-36">
          {/* Background atmosphere */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-20%] top-[-20%] h-72 w-72 rounded-full bg-[#46b9ff]/4 blur-[100px] sm:right-[-10%] sm:h-105 sm:w-105 sm:blur-[140px]" />

            <div className="absolute bottom-[-30%] left-[-20%] h-64 w-64 rounded-full bg-[#ff1764]/3 blur-[100px] sm:left-[-10%] sm:h-96 sm:w-96 sm:blur-[140px]" />
          </div>

          <div className="container-nexa relative z-10">
            <div className="w-full max-w-5xl">
              {/* Eyebrow */}

              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#46b9ff] sm:text-xs sm:tracking-[0.18em] md:text-sm">
                Learning Center
              </p>

              {/* Title */}

              <h1 className="mt-2.5 wrap-break-word text-3xl font-bold leading-[1.1] tracking-tight text-white sm:mt-3 sm:text-4xl md:text-5xl">
                Learn Poker. Improve Your Game.
              </h1>

              {/* Description */}

              <p className="mt-4 max-w-4xl text-[14px] leading-6 text-white/60 sm:mt-5 sm:text-lg sm:leading-8">
                Learn poker fundamentals, understand Texas Hold&apos;em, sharpen
                your strategy and become a more confident player.
              </p>
            </div>
          </div>
        </section>

        {/* =================================================
            TEACHING GUIDES
            ================================================= */}

        <section className="relative overflow-hidden px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24 lg:pb-28">
          <div className="container-nexa relative z-10">
            {guides.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {guides.map((guide) => (
                  <TeachingGuideCard
                    key={guide.documentId ?? guide.id}
                    guide={guide}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-white/10 bg-white/3 px-5 py-12 text-center sm:rounded-3xl sm:px-6 sm:py-16">
                <p className="text-[14px] leading-6 text-white/50 sm:text-sm">
                  No teaching guides are available yet.
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
