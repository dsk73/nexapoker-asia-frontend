// src/app/community/page.tsx

import type { Metadata } from "next";

import { getCommunityPage } from "@/lib/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CommunityHero from "@/components/sections/community/CommunityHero";
import CommunityCTA from "@/components/sections/community/CommunityCTA";
import CommunitySocialLinks from "@/components/sections/community/CommunitySocialLinks";

/**
 * Force the page to render dynamically.
 *
 * This ensures updated Community Page content from Strapi
 * can be fetched at runtime without requiring a new
 * frontend deployment.
 */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Nexa Poker Community | Connect with Poker Players",

  description:
    "Join the Nexa Poker community, connect with poker players, follow updates and stay connected with the latest online poker activities and events.",

  keywords: [
    "Nexa Poker",
    "NexaPoker",
    "Nexa Poker community",
    "poker community",
    "online poker community",
    "poker player community",
    "online poker",
    "poker players",
    "Nexa Poker channel",
    "Nexa Poker Telegram",
  ],

  alternates: {
    canonical: "/community",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Nexa Poker Community | Connect with Poker Players",

    description:
      "Join the Nexa Poker community, connect with poker players, follow updates and stay connected with the latest online poker activities and events.",

    url: "/community",

    siteName: "Nexa Poker",

    type: "website",

    images: [
      {
        url: "/images/nexapoker-logo.png",
        width: 1200,
        height: 630,
        alt: "Nexa Poker Community",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Nexa Poker Community | Connect with Poker Players",

    description:
      "Join the Nexa Poker community, connect with poker players, follow updates and stay connected with the latest online poker activities and events.",

    images: ["/images/nexapoker-logo.png"],
  },
};

export default async function CommunityPage() {
  const page = await getCommunityPage();

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-x-hidden bg-[#050507] text-white">
        {/* =================================================
            COMMUNITY HERO
        ================================================= */}

        <CommunityHero page={page} />

        {/* =================================================
            OFFICIAL COMMUNITY CTA
        ================================================= */}

        <CommunityCTA page={page} />

        {/* =================================================
            SOCIAL CHANNELS
        ================================================= */}

        <CommunitySocialLinks />
      </main>

      <Footer />
    </>
  );
}
