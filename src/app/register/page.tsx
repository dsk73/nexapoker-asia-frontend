// src/app/register/page.tsx

import type { Metadata } from "next";

import { getRegisterPage } from "@/lib/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import RegisterHero from "@/components/sections/register/RegisterHero";
import RegisterSteps from "@/components/sections/register/RegisterSteps";
import RegisterCTA from "@/components/sections/register/RegisterCTA";

/**
 * Force the page to render dynamically.
 *
 * This ensures updated Register Page content from Strapi
 * can be fetched at runtime without requiring a new
 * frontend deployment.
 */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Nexa Poker Registration | Join & Play Online Poker",

  description:
    "Join Nexa Poker and create your online poker account. Follow the registration steps, download the poker app and get ready to play poker online.",

  keywords: [
    "Nexa Poker",
    "NexaPoker",
    "Nexa Poker registration",
    "NexaPoker registration",
    "Nexa Poker register",
    "Nexa Poker sign up",
    "join Nexa Poker",
    "Nexa Poker account",
    "create Nexa Poker account",
    "poker registration",
    "online poker registration",
    "play poker online",
    "Nexa Poker bonus code",
    "NEXA40 bonus code",
  ],

  alternates: {
    canonical: "/register",
  },

  openGraph: {
    title: "Nexa Poker Registration | Join & Play Online Poker",
    description:
      "Join Nexa Poker and create your online poker account. Follow the registration steps, download the poker app and get ready to play poker online.",
    url: "/register",
    siteName: "Nexa Poker",
    type: "website",
    images: [
      {
        url: "/images/nexapoker-logo.png",
        width: 1200,
        height: 630,
        alt: "Nexa Poker Registration | Join & Play Online Poker",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexa Poker Registration | Join & Play Online Poker",
    description:
      "Join Nexa Poker and create your online poker account. Follow the registration steps, download the poker app and get ready to play poker online.",
    images: ["/images/nexapoker-logo.png"],
  },
};

export default async function RegisterPage() {
  const page = await getRegisterPage();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050507] text-white">
        {/* =================================================
            HERO
        ================================================= */}

        <RegisterHero page={page} />

        {/* =================================================
            REGISTRATION STEPS
        ================================================= */}

        <RegisterSteps page={page} />

        {/* =================================================
            CLOSING SECTION
        ================================================= */}

        <RegisterCTA page={page} />
      </main>

      <Footer />
    </>
  );
}
