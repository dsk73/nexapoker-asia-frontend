// src/app/poker-exchange/page.tsx

import type { Metadata } from "next";
import Image from "next/image";

import { getPokerExchangePage } from "@/lib/api";
import { getMediaUrl } from "@/lib/media";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Force the page to render dynamically.
 *
 * This ensures updated Poker Exchange content from Strapi
 * can be fetched at runtime without requiring a new
 * frontend deployment.
 */
export const dynamic = "force-dynamic";

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

  const heroImageUrl = getMediaUrl(page.HeroImage, "large");

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050507] text-white">
        {/* =================================================
            HERO
        ================================================= */}

        <section className="relative overflow-hidden px-6 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
          {/* =================================================
              BACKGROUND
          ================================================= */}

          <div className="pointer-events-none absolute inset-0">
            {/* Blue glow */}

            <div className="absolute left-[-15%] top-[5%] h-120 w-120 rounded-full bg-[#1877ff]/10 blur-[140px]" />

            {/* Purple glow */}

            <div className="absolute right-[-10%] top-0 h-152 w-152 rounded-full bg-[#7c3aed]/10 blur-[150px]" />

            {/* Pink glow */}

            <div className="absolute bottom-[-25%] right-[15%] h-72 w-72 rounded-full bg-[#ff1473]/7 blur-[130px]" />

            {/* Grid */}

            <div
              className="
                absolute inset-0
                opacity-[0.025]
                bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
                bg-size-[70px_70px]
              "
            />

            {/* Right-side lighting */}

            <div
              className="
                absolute right-[-5%] top-1/2
                h-152 w-152
                -translate-y-1/2
                rounded-full
                bg-[radial-gradient(circle,rgba(24,119,255,0.14),rgba(124,58,237,0.08)_45%,transparent_72%)]
                blur-2xl
              "
            />
          </div>

          <div className="container-nexa relative z-10">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 xl:gap-12">
              {/* =================================================
                  HERO CONTENT
              ================================================= */}

              <div className="relative z-20 min-w-0">
                {/* Eyebrow */}

                <div className="inline-flex items-center gap-2 rounded-full border border-[#46b9ff]/20 bg-[#46b9ff]/5 px-3.5 py-2 shadow-[0_0_30px_rgba(70,185,255,0.05)]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#46b9ff]/60" />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#46b9ff] shadow-[0_0_12px_rgba(70,185,255,0.9)]" />
                  </span>

                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#46b9ff] sm:text-xs">
                    Poker Exchange
                  </span>
                </div>

                {/* Title */}

                <h1
                  className="
                    mt-6
                    text-[2.55rem]
                    font-bold
                    leading-[1.05]
                    tracking-[-0.04em]
                    text-white
                    sm:text-5xl
                    md:text-[3.5rem]
                    lg:whitespace-nowrap
                    lg:text-[3.25rem]
                    xl:text-[3.8rem]
                  "
                >
                  {page.HeroTitle}
                </h1>

                {/* Accent */}

                <div className="mt-6 h-1 w-20 rounded-full bg-linear-to-r from-[#46b9ff] via-[#7c3aed] to-[#ff1473]" />

                {/* Subtitle */}

                {page.HeroSubtitle && (
                  <p
                    className="
                      mt-6
                      max-w-2xl
                      text-base
                      leading-7
                      text-white/60
                      sm:text-lg
                      sm:leading-8
                    "
                  >
                    {page.HeroSubtitle}
                  </p>
                )}
              </div>

              {/* =================================================
                  HERO IMAGE
              ================================================= */}

              {heroImageUrl && (
                <div
                  className="
                    relative
                    flex
                    min-w-0
                    items-center
                    justify-center
                    lg:justify-end
                  "
                >
                  {/* Ambient glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-[-15%]
                      rounded-full
                      bg-[radial-gradient(circle,rgba(24,119,255,0.18),rgba(124,58,237,0.1)_45%,transparent_72%)]
                      blur-3xl
                    "
                  />

                  {/* Pink glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      right-[8%]
                      top-[15%]
                      h-48
                      w-48
                      rounded-full
                      bg-[#ff1473]/10
                      blur-[100px]
                    "
                  />

                  <Image
                    src={heroImageUrl}
                    alt={
                      page.HeroImage?.alternativeText ||
                      page.HeroTitle ||
                      "Nexa Poker Poker Exchange"
                    }
                    width={page.HeroImage?.width || 1200}
                    height={page.HeroImage?.height || 800}
                    className="
                      relative
                      z-10
                      h-auto
                      w-full
                      max-w-140
                      object-contain
                      drop-shadow-[0_35px_75px_rgba(0,0,0,0.55)]
                    "
                    priority
                  />

                  {/* Bottom ambient glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-[5%]
                      left-1/2
                      z-0
                      h-20
                      w-[70%]
                      -translate-x-1/2
                      rounded-full
                      bg-[#1877ff]/15
                      blur-[60px]
                    "
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* =================================================
            INTRO
        ================================================= */}

        <section className="relative overflow-hidden px-6 pb-14 pt-8 sm:pb-16 sm:pt-10 lg:pb-20 lg:pt-12">
          <div className="container-nexa relative z-10">
            <div className="max-w-5xl">
              {/* Eyebrow */}

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#46b9ff] sm:text-sm">
                Why Choose Nexa Poker
              </p>

              {/* Title */}

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {page.IntroTitle}
              </h2>

              {/* Description */}

              {page.IntroDescription && (
                <div className="mt-5 max-w-5xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                  {page.IntroDescription}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* =================================================
            KEY USPs
        ================================================= */}

        {page.Features?.length > 0 && (
          <section className="relative overflow-hidden px-6 pb-20 sm:pb-24 lg:pb-28">
            <div className="pointer-events-none absolute inset-0">
              {/* Blue ambient glow */}

              <div className="absolute left-[-12%] top-[15%] h-80 w-80 rounded-full bg-[#1877ff]/6 blur-[120px]" />

              {/* Pink ambient glow */}

              <div className="absolute right-[-10%] top-[30%] h-96 w-96 rounded-full bg-[#ff1473]/6 blur-[140px]" />
            </div>

            <div className="container-nexa relative z-10">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {page.Features.map((feature, index) => {
                  /*
                   * Reference-style card treatment:
                   * Blue cards on even positions,
                   * pink cards on alternating positions.
                   */
                  const isPink = index % 2 === 1;

                  const accent = isPink
                    ? {
                        color: "#ff1473",
                        border: "hover:border-[#ff1473]/35",
                        glow: "bg-[#ff1473]/8",
                        hoverGlow: "group-hover:bg-[#ff1473]/14",
                        text: "group-hover:text-[#ff5a9b]",
                      }
                    : {
                        color: "#1877ff",
                        border: "hover:border-[#1877ff]/35",
                        glow: "bg-[#1877ff]/8",
                        hoverGlow: "group-hover:bg-[#1877ff]/14",
                        text: "group-hover:text-[#46b9ff]",
                      };

                  return (
                    <article
                      key={feature.id ?? feature.Title}
                      className={`
                        group
                        relative
                        min-h-58.75
                        overflow-hidden
                        rounded-3xl
                        border
                        border-white/8
                        bg-[#090c13]
                        p-6
                        transition-all
                        duration-300
                        ease-out
                        hover:-translate-y-1
                        ${accent.border}
                        hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)]
                        sm:p-7
                      `}
                    >
                      {/* =================================================
                          TOP BORDER
                      ================================================= */}

                      <div
                        className="absolute left-8 right-8 top-0 h-px opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          backgroundColor: accent.color,
                        }}
                      />

                      {/* =================================================
                          LEFT ACCENT
                      ================================================= */}

                      <div
                        className="absolute left-0 top-7 h-10 w-0.75 rounded-r-full"
                        style={{
                          backgroundColor: accent.color,
                          boxShadow: `0 0 14px ${accent.color}66`,
                        }}
                      />

                      {/* =================================================
                          CARD GLOW
                      ================================================= */}

                      <div
                        className={`
                          pointer-events-none
                          absolute
                          -right-20
                          -top-20
                          h-48
                          w-48
                          rounded-full
                          blur-3xl
                          transition-all
                          duration-500
                          ${accent.glow}
                          ${accent.hoverGlow}
                        `}
                      />

                      {/* =================================================
                          CONTENT
                      ================================================= */}

                      <div className="relative z-10 pr-4">
                        <h3
                          className={`
                            text-xl
                            font-semibold
                            leading-tight
                            tracking-tight
                            text-white
                            transition-colors
                            duration-200
                            ${accent.text}
                          `}
                        >
                          {feature.Title}
                        </h3>

                        {feature.Description && (
                          <div className="mt-5 text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
                            {feature.Description}
                          </div>
                        )}
                      </div>

                      {/* =================================================
                          POKER CHIP DECORATION
                      ================================================= */}

                      <div
                        className="pointer-events-none absolute -bottom-8 -right-8 h-28 w-28 rounded-full border opacity-40 transition-all duration-300 group-hover:scale-105 group-hover:opacity-60"
                        style={{
                          borderColor: accent.color,
                          boxShadow: `0 0 0 1px ${accent.color}22 inset`,
                        }}
                      >
                        <div
                          className="absolute inset-3 rounded-full border"
                          style={{
                            borderColor: `${accent.color}88`,
                          }}
                        />

                        <div
                          className="absolute inset-6 rounded-full border"
                          style={{
                            borderColor: `${accent.color}66`,
                          }}
                        />

                        {/* Chip notch */}

                        <div
                          className="absolute left-1/2 top-0 h-3 w-0.5 -translate-x-1/2"
                          style={{
                            backgroundColor: accent.color,
                          }}
                        />

                        <div
                          className="absolute bottom-0 left-1/2 h-3 w-0.5 -translate-x-1/2"
                          style={{
                            backgroundColor: accent.color,
                          }}
                        />

                        <div
                          className="absolute left-0 top-1/2 h-0.5 w-3 -translate-y-1/2"
                          style={{
                            backgroundColor: accent.color,
                          }}
                        />

                        <div
                          className="absolute right-0 top-1/2 h-0.5 w-3 -translate-y-1/2"
                          style={{
                            backgroundColor: accent.color,
                          }}
                        />

                        {/* Spade */}

                        <span
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg opacity-70"
                          style={{
                            color: accent.color,
                          }}
                        >
                          ♠
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* =================================================
            CTA
        ================================================= */}

        {page.CTAButton?.Label && page.CTAButton?.URL && (
          <section className="relative overflow-hidden px-6 pb-16 pt-2 sm:pb-20 lg:pb-24">
            <div className="container-nexa">
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/8
                  bg-[#0a0d14]
                  px-6
                  py-8
                  text-center
                  shadow-[0_25px_70px_rgba(0,0,0,0.3)]
                  sm:px-10
                  sm:py-9
                "
              >
                {/* =================================================
                    BACKGROUND GLOWS
                ================================================= */}

                <div className="pointer-events-none absolute -left-24 -top-24 h-52 w-52 rounded-full bg-[#1877ff]/9 blur-3xl" />

                <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-[#7c3aed]/9 blur-3xl" />

                <div className="pointer-events-none absolute bottom-[-30%] left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#ff1473]/6 blur-3xl" />

                {/* Top gradient line */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-12
                    top-0
                    h-px
                    bg-linear-to-r
                    from-transparent
                    via-[#46b9ff]/40
                    to-transparent
                  "
                />

                {/* =================================================
                    CTA CONTENT
                ================================================= */}

                <div className="relative z-10">
                  <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
                    Ready to Play?
                  </h2>

                  <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
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
                    className="
                      relative
                      z-10
                      mt-5
                      inline-flex
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      px-7
                      py-3
                      text-sm
                      font-semibold
                      text-[#050507]!
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-white/90
                      hover:shadow-[0_12px_35px_rgba(255,255,255,0.12)]
                    "
                  >
                    <span className="relative z-10 text-[#050507]!">
                      {page.CTAButton.Label}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
