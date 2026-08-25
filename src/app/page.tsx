import {
  getActivities,
  getBrandAmbassadors,
  getFAQs,
  getHeroPromotionCard,
  getHeroSlides,
} from "@/lib/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/sections/HeroSection";
import AmbassadorsSection from "@/components/sections/AmbassadorsSection";
import ActivitiesSection from "@/components/sections/ActivitiesSection";
import FAQSection from "@/components/sections/FAQSection";

export default async function HomePage() {
  const [slides, promotionCard, ambassadors, activities, faqs] =
    await Promise.all([
      getHeroSlides(),
      getHeroPromotionCard(),
      getBrandAmbassadors(),
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
            BRAND AMBASSADORS
            ================================================= */}

        <AmbassadorsSection ambassadors={ambassadors} />

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
