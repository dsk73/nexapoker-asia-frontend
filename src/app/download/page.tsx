// src/app/download/page.tsx

import type { Metadata } from "next";

import { getDownloadPage } from "@/lib/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import DownloadHero from "@/components/sections/download/DownloadHero";
import DownloadPlatforms from "@/components/sections/download/DownloadPlatforms";

/**
 * Force the page to render dynamically.
 *
 * This ensures updated Download content from Strapi
 * can be fetched at runtime without requiring a new
 * frontend deployment.
 */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Nexa Poker Download | Poker App & Software",

  description:
    "Download Nexa Poker for your device and start playing online poker. Get the Nexa Poker app and software for supported desktop and mobile platforms.",

  keywords: [
    "Nexa Poker",
    "NexaPoker",
    "Nexa Poker download",
    "Nexa Poker app download",
    "Nexa Poker app",
    "NexaPoker download",
    "online poker download",
    "online poker app",
    "poker app",
    "poker software",
    "play poker online",
  ],

  alternates: {
    canonical: "/download",
  },

  openGraph: {
    title: "Nexa Poker Download | Poker App & Software",
    description:
      "Download Nexa Poker for your device and start playing online poker. Get the Nexa Poker app and software for supported desktop and mobile platforms.",
    url: "/download",
    siteName: "Nexa Poker",
    type: "website",
    images: [
      {
        url: "/images/nexapoker-logo.png",
        width: 1200,
        height: 630,
        alt: "Nexa Poker Download | Poker App & Software",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexa Poker Download | Poker App & Software",
    description:
      "Download Nexa Poker for your device and start playing online poker. Get the Nexa Poker app and software for supported desktop and mobile platforms.",
    images: ["/images/nexapoker-logo.png"],
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
