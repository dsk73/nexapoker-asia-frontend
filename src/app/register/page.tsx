import type { Metadata } from "next";

import { getRegisterPage } from "@/lib/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import RegisterHero from "@/components/sections/register/RegisterHero";
import RegisterSteps from "@/components/sections/register/RegisterSteps";
import LuckySpinSection from "@/components/sections/register/LuckySpinSection";
// import RegisterCTA from "@/components/sections/register/RegisterCTA";

export const dynamic = "force-dynamic";

const pageTitle = "Nexa Poker Registration | Join & Play Online Poker";

const pageDescription =
  "Register with Nexa Poker and create your online poker account. Follow the registration guide, download the app and discover the Nexa Poker Lucky Spin campaign.";

const socialImage = "/images/nexapoker-logo.png";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

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
    "Nexa Poker Lucky Spin",
    "Nexa Poker rewards",
  ],

  alternates: {
    canonical: "/register",
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
    title: pageTitle,
    description: pageDescription,
    url: "/register",
    siteName: "Nexa Poker",
    type: "website",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Nexa Poker registration and Lucky Spin rewards",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [socialImage],
  },
};

export default async function RegisterPage() {
  const page = await getRegisterPage();

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-x-clip bg-[#050507] text-white">
        <RegisterHero page={page} />

        <LuckySpinSection />

        <RegisterSteps page={page} />

        {/* <RegisterCTA page={page} /> */}
      </main>

      <Footer />
    </>
  );
}
