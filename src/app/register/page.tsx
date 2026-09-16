import type { Metadata } from "next";

import { getRegisterPage } from "@/lib/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import RegisterHero from "@/components/sections/register/RegisterHero";
import RegisterSteps from "@/components/sections/register/RegisterSteps";
import RegisterCTA from "@/components/sections/register/RegisterCTA";

export const metadata: Metadata = {
  title: "NexaPoker Registration | Create Your Poker Account",
  description:
    "Register with NexaPoker and create your poker account. Follow the simple registration steps and get ready to play poker online with NexaPoker.",

  keywords: [
    "Nexa Poker",
    "NexaPoker",
    "Nexa Poker registration",
    "NexaPoker registration",
    "Nexa Poker account",
    "create NexaPoker account",
    "poker registration",
    "online poker registration",
    "play poker online",
    "NexaPoker sign up",
  ],

  alternates: {
    canonical: "/register",
  },

  openGraph: {
    title: "NexaPoker Registration | Create Your Poker Account",
    description:
      "Register with NexaPoker and create your poker account. Follow the simple registration steps and get ready to play poker online with NexaPoker.",
    url: "/register",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NexaPoker Registration | Create Your Poker Account",
    description:
      "Register with NexaPoker and create your poker account. Follow the simple registration steps and get ready to play poker online with NexaPoker.",
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
