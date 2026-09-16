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
  title: "NexaPoker | Play Poker Online",
  description:
    "Play poker online with NexaPoker. Explore online poker games, discover exciting activities, connect with poker players worldwide, and enjoy a convenient international poker platform.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NexaPoker | Play Poker Online",
    description:
      "Play poker online with NexaPoker. Explore online poker games, discover exciting activities, connect with poker players worldwide, and enjoy a convenient international poker platform.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaPoker | Play Poker Online",
    description:
      "Play poker online with NexaPoker. Explore online poker games, discover exciting activities, connect with poker players worldwide, and enjoy a convenient international poker platform.",
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
