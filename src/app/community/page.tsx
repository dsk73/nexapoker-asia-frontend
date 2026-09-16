import type { Metadata } from "next";

import { getCommunityPage } from "@/lib/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CommunityHero from "@/components/sections/community/CommunityHero";
import CommunitySocialLinks from "@/components/sections/community/CommunitySocialLinks";
import CommunityCTA from "@/components/sections/community/CommunityCTA";

export const metadata: Metadata = {
  title: "NexaPoker Community | Online Poker Community",
  description:
    "Join the NexaPoker community and connect with poker players worldwide. Stay updated with poker news, activities, events and opportunities to play online poker.",

  keywords: [
    "Nexa Poker",
    "NexaPoker",
    "Nexa Poker community",
    "poker community",
    "online poker community",
    "poker player community",
    "online poker",
    "poker players worldwide",
  ],

  alternates: {
    canonical: "/community",
  },

  openGraph: {
    title: "NexaPoker Community | Online Poker Community",
    description:
      "Join the NexaPoker community and connect with poker players worldwide. Stay updated with poker news, activities, events and opportunities to play online poker.",
    url: "/community",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NexaPoker Community | Online Poker Community",
    description:
      "Join the NexaPoker community and connect with poker players worldwide. Stay updated with poker news, activities, events and opportunities to play online poker.",
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
