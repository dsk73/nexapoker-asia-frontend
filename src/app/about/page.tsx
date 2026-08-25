import { getAboutPage } from "@/lib/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AboutHero from "@/components/sections/about/AboutHero";
import AboutIntro from "@/components/sections/about/AboutIntro";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutFeatures from "@/components/sections/about/AboutFeatures";

export default async function AboutPage() {
  const page = await getAboutPage();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050507]">
        {/* =================================================
            HERO
            ================================================= */}

        <AboutHero page={page} />

        {/* =================================================
            INTRO
            ================================================= */}

        <AboutIntro page={page} />

        {/* =================================================
            STORY
            ================================================= */}

        <AboutStory page={page} />

        {/* =================================================
            FEATURES
            ================================================= */}

        <AboutFeatures page={page} />
      </main>

      <Footer />
    </>
  );
}
