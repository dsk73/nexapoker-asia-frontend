import type { Metadata } from "next";

import { getAboutPage } from "@/lib/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AboutHero from "@/components/sections/about/AboutHero";
import AboutIntro from "@/components/sections/about/AboutIntro";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutFeatures from "@/components/sections/about/AboutFeatures";

export const metadata: Metadata = {
  title: "About NexaPoker | Online Poker Platform",
  description:
    "Learn about NexaPoker, an international online poker platform built for players worldwide. Discover our poker community, gaming experience and approach to online poker.",

  keywords: [
    "Nexa Poker",
    "NexaPoker",
    "Nexa Poker online",
    "online poker platform",
    "international poker platform",
    "poker community",
    "online poker",
    "poker players worldwide",
  ],

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About NexaPoker | Online Poker Platform",
    description:
      "Learn about NexaPoker, an international online poker platform built for players worldwide. Discover our poker community, gaming experience and approach to online poker.",
    url: "/about",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About NexaPoker | Online Poker Platform",
    description:
      "Learn about NexaPoker, an international online poker platform built for players worldwide. Discover our poker community, gaming experience and approach to online poker.",
  },
};

export default async function AboutPage() {
  const page = await getAboutPage();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050507]">
        {/* =================================================
            HERO
            ================================================= */}

        <AboutHero page={page} />

        {/* =================================================
            INTRO
            ================================================= */}

        <AboutIntro page={page} />

        {/* =================================================
            STORY
            ================================================= */}

        <AboutStory page={page} />

        {/* =================================================
            FEATURES
            ================================================= */}

        <AboutFeatures page={page} />
      </main>

      <Footer />
    </>
  );
}
