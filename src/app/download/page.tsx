import type { Metadata } from "next";

import { getDownloadPage } from "@/lib/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import DownloadHero from "@/components/sections/download/DownloadHero";
import DownloadPlatforms from "@/components/sections/download/DownloadPlatforms";

export const metadata: Metadata = {
  title: "NexaPoker Download | Poker App & Software",
  description:
    "Download NexaPoker for your device and get started with online poker. Find NexaPoker downloads for desktop and mobile platforms and start playing poker online.",

  keywords: [
    "Nexa Poker",
    "NexaPoker",
    "Nexa Poker download",
    "Nexa Poker app download",
    "NexaPoker download",
    "online poker download",
    "poker app",
    "poker software",
    "play poker online",
  ],

  alternates: {
    canonical: "/download",
  },

  openGraph: {
    title: "NexaPoker Download | Poker App & Software",
    description:
      "Download NexaPoker for your device and get started with online poker. Find NexaPoker downloads for desktop and mobile platforms and start playing poker online.",
    url: "/download",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NexaPoker Download | Poker App & Software",
    description:
      "Download NexaPoker for your device and get started with online poker. Find NexaPoker downloads for desktop and mobile platforms and start playing poker online.",
  },
};

export default async function DownloadPage() {
  const page = await getDownloadPage();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050507] text-white">
        {/* =================================================
            HERO
        ================================================= */}

        <DownloadHero page={page} />

        {/* =================================================
            DOWNLOAD PLATFORMS
        ================================================= */}

        <DownloadPlatforms page={page} />
      </main>

      <Footer />
    </>
  );
}
