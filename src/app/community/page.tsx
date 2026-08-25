import { getCommunityPage } from "@/lib/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CommunityHero from "@/components/sections/community/CommunityHero";
import CommunitySocialLinks from "@/components/sections/community/CommunitySocialLinks";
import CommunityCTA from "@/components/sections/community/CommunityCTA";

export default async function CommunityPage() {
  const page = await getCommunityPage();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050507] text-white">
        {/* =================================================
            HERO
        ================================================= */}

        <CommunityHero page={page} />

        {/* =================================================
            CTA
        ================================================= */}

        <CommunityCTA page={page} />

        {/* =================================================
            SOCIAL LINKS
        ================================================= */}

        <CommunitySocialLinks page={page} />
      </main>

      <Footer />
    </>
  );
}
