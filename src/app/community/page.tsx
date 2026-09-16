import type { Metadata } from "next";

import { getCommunityPage } from "@/lib/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CommunityHero from "@/components/sections/community/CommunityHero";
import CommunitySocialLinks from "@/components/sections/community/CommunitySocialLinks";
import CommunityCTA from "@/components/sections/community/CommunityCTA";

export const metadata: Metadata = {
  title: "Nexa Poker Community | Online Poker Community",

  description:
    "Join the Nexa Poker community and connect with poker players worldwide. Stay connected with online poker activities, updates, events and opportunities to play poker online.",

  keywords: [
    "Nexa Poker",
    "NexaPoker",
    "Nexa Poker community",
    "poker community",
    "online poker community",
    "poker player community",
    "online poker",
    "poker players worldwide",
    "Nexa Poker community worldwide",
  ],

  alternates: {
    canonical: "/community",
  },

  openGraph: {
    title: "Nexa Poker Community | Online Poker Community",
    description:
      "Join the Nexa Poker community and connect with poker players worldwide. Stay connected with online poker activities, updates, events and opportunities to play poker online.",
    url: "/community",
    siteName: "Nexa Poker",
    type: "website",
    images: [
      {
        url: "/images/nexapoker-logo.png",
        width: 1200,
        height: 630,
        alt: "Nexa Poker Community | Online Poker Community",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexa Poker Community | Online Poker Community",
    description:
      "Join the Nexa Poker community and connect with poker players worldwide. Stay connected with online poker activities, updates, events and opportunities to play poker online.",
    images: ["/images/nexapoker-logo.png"],
  },
};

export default async function CommunityPage() {
  const page = await getCommunityPage();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050507] text-white">
        {/* =================================================
            HERO
        =================================================*/}

        <CommunityHero page={page} />

        {/* =================================================
            CTA
        =================================================*/}

        <CommunityCTA page={page} />

        {/* =================================================
            SOCIAL LINKS
        =================================================*/}

        <CommunitySocialLinks />
      </main>

      <Footer />
    </>
  );
}
