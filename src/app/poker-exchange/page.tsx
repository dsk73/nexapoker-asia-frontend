import type { Metadata } from "next";

import { getPokerExchangePage } from "@/lib/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Nexa Poker Poker Exchange | Online Poker Platform",

  description:
    "Explore Nexa Poker Poker Exchange and discover an online poker platform with poker games, competitive poker action, convenient account access and a connected poker community.",

  keywords: [
    "Nexa Poker",
    "NexaPoker",
    "Nexa Poker Poker Exchange",
    "NexaPoker Poker Exchange",
    "Poker Exchange",
    "online poker platform",
    "online poker games",
    "play poker online",
    "secure online poker platform",
    "competitive poker",
    "poker player community",
  ],

  alternates: {
    canonical: "/poker-exchange",
  },

  openGraph: {
    title: "Nexa Poker Poker Exchange | Online Poker Platform",
    description:
      "Explore Nexa Poker Poker Exchange and discover an online poker platform with poker games, competitive poker action, convenient account access and a connected poker community.",
    url: "/poker-exchange",
    siteName: "Nexa Poker",
    type: "website",
    images: [
      {
        url: "/images/nexapoker-logo.png",
        width: 1200,
        height: 630,
        alt: "Nexa Poker Poker Exchange | Online Poker Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexa Poker Poker Exchange | Online Poker Platform",
    description:
      "Explore Nexa Poker Poker Exchange and discover an online poker platform with poker games, competitive poker action, convenient account access and a connected poker community.",
    images: ["/images/nexapoker-logo.png"],
  },
};

export default async function PokerExchangePage() {
  const page = await getPokerExchangePage();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050507] text-white">
        {/* =================================================
            HERO
            ================================================= */}

        <section className="px-6 pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pt-36">
          <div className="container-nexa">
            <div className="max-w-5xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#46b9ff] sm:text-sm">
                Poker Exchange
              </p>

              <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {page.HeroTitle}
              </h1>

              <p className="mt-5 max-w-4xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                {page.HeroSubtitle}
              </p>
            </div>
          </div>
        </section>

        {/* =================================================
            INTRO
            ================================================= */}

        <section className="px-6 pb-14 sm:pb-16 lg:pb-20">
          <div className="container-nexa">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {page.IntroTitle}
              </h2>

              <div className="mt-5 text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                {page.IntroDescription}
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            KEY USPs
            ================================================= */}

        {page.Features?.length > 0 && (
          <section className="px-6 pb-20 sm:pb-24 lg:pb-28">
            <div className="container-nexa">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {page.Features.map((feature) => (
                  <article
                    key={feature.id ?? feature.Title}
                    className="rounded-3xl border border-white/10 bg-white/3 p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/5 sm:p-7"
                  >
                    <h3 className="text-lg font-semibold text-white sm:text-xl">
                      {feature.Title}
                    </h3>

                    <div className="mt-3 text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
                      {feature.Description}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =================================================
            CTA
            ================================================= */}

        {page.CTAButton?.Label && page.CTAButton?.URL && (
          <section className="px-6 pb-20 sm:pb-24 lg:pb-28">
            <div className="container-nexa">
              <div className="rounded-3xl border border-white/10 bg-white/3 px-6 py-12 text-center sm:px-10 sm:py-14">
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Ready to Play?
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
                  Join Nexa Poker and discover an engaging poker experience
                  built for players worldwide.
                </p>

                <a
                  href={page.CTAButton.URL}
                  target={page.CTAButton.OpenInNewTab ? "_blank" : undefined}
                  rel={
                    page.CTAButton.OpenInNewTab
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black! transition-all duration-300 hover:scale-105 hover:bg-white/90"
                >
                  {page.CTAButton.Label}
                </a>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
