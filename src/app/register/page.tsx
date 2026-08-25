import { getRegisterPage } from "@/lib/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import RegisterHero from "@/components/sections/register/RegisterHero";
import RegisterSteps from "@/components/sections/register/RegisterSteps";
import RegisterCTA from "@/components/sections/register/RegisterCTA";

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
