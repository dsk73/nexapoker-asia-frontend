// src/app/page.tsx

import type { Metadata } from "next";

import {
  getActivities,
  getFAQs,
  getHeroPromotionCard,
  getHeroSlides,
  getHomepageSettings,
} from "@/lib/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/sections/HeroSection";
import ActivitiesSection from "@/components/sections/ActivitiesSection";
import WhyChooseNexaPokerSection from "@/components/sections/WhyChooseNexaPokerSection";
import TransactionVideosSection from "@/components/sections/TransactionVideosSection";
import JoinNexaPokerSection from "@/components/sections/JoinNexaPokerSection";
import FAQSection from "@/components/sections/FAQSection";

/**
 * Force the homepage to render dynamically.
 *
 * This ensures content fetched from Strapi is requested at runtime
 * instead of relying on a previously generated static page.
 *
 * Result:
 * - Strapi content changes can appear without a frontend deployment.
 * - Homepage remains server-rendered.
 */
export const dynamic = "force-dynamic";

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
  const [slides, promotionCard, activities, faqs, homepageSettings] =
    await Promise.all([
      getHeroSlides(),
      getHeroPromotionCard(),
      getActivities(),
      getFAQs(),
      getHomepageSettings(),
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
            WHY CHOOSE NEXA POKER
            ================================================= */}

        <WhyChooseNexaPokerSection
          title={homepageSettings?.WhyChooseTitle}
          subtitle={homepageSettings?.WhyChooseSubtitle}
          features={homepageSettings?.WhyChooseFeatures}
        />

        {/* =================================================
            DEPOSIT & WITHDRAWAL VIDEOS
            ================================================= */}

        <TransactionVideosSection
          videos={homepageSettings?.TransactionVideos}
        />

        {/* =================================================
            JOIN NEXA POKER
            ================================================= */}

        <JoinNexaPokerSection data={homepageSettings?.JoinNexaPoker} />

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
