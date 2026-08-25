import { getDownloadPage } from "@/lib/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import DownloadHero from "@/components/sections/download/DownloadHero";
import DownloadPlatforms from "@/components/sections/download/DownloadPlatforms";

export default async function DownloadPage() {
  const page = await getDownloadPage();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050507] text-white">
        {/* =================================================
            HERO
        ================================================= */}

        <DownloadHero page={page} />

        {/* =================================================
            DOWNLOAD PLATFORMS
        ================================================= */}

        <DownloadPlatforms page={page} />
      </main>

      <Footer />
    </>
  );
}