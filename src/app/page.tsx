import type { Metadata } from "next";

import {
  getActivities,
  getFAQs,
  getHeroPromotionCard,
  getHeroSlides,
} from "@/lib/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/sections/HeroSection";
import ActivitiesSection from "@/components/sections/ActivitiesSection";
import FAQSection from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "Nexa Poker | Play Poker Online",

  description:
    "Play poker online with Nexa Poker. Explore online poker games, discover exciting activities, connect with poker players worldwide, and enjoy a convenient international poker platform.",

  keywords: [
    "Nexa Poker",
    "NexaPoker",
    "Nexa Poker online",
    "Nexa Poker download",
    "Nexa Poker community",
    "Nexa Poker registration",
    "online poker",
    "play poker online",
    "online poker games",
    "online poker platform",
    "international poker platform",
    "poker player community",
  ],

  alternates: {
    canonical: "/",
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
    type: "website",
    url: "/",
    siteName: "Nexa Poker",
    title: "Nexa Poker | Play Poker Online",
    description:
      "Play poker online with Nexa Poker. Explore online poker games, discover exciting activities, connect with poker players worldwide, and enjoy a convenient international poker platform.",
    images: [
      {
        url: "/images/nexapoker-logo.png",
        width: 1200,
        height: 630,
        alt: "Nexa Poker | Play Poker Online",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexa Poker | Play Poker Online",
    description:
      "Play poker online with Nexa Poker. Explore online poker games, discover exciting activities, connect with poker players worldwide, and enjoy a convenient international poker platform.",
    images: ["/images/nexapoker-logo.png"],
  },
};

export default async function HomePage() {
  const [slides, promotionCard, activities, faqs] = await Promise.all([
    getHeroSlides(),
    getHeroPromotionCard(),
    getActivities(),
    getFAQs(),
  ]);

  return (
    <>
      <Navbar />

      <main>
        {/* =================================================
            HERO
            ================================================= */}

        <HeroSection slides={slides} promotionCard={promotionCard} />

        {/* =================================================
            ACTIVITIES
            ================================================= */}

        <ActivitiesSection activities={activities} />

        {/* =================================================
            FAQ
            ================================================= */}

        <FAQSection faqs={faqs} />
      </main>

      {/* =================================================
          FOOTER
          ================================================= */}

      <Footer />
    </>
  );
}
