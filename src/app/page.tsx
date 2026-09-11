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
