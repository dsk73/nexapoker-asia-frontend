// src/app/faq/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexa Poker FAQ | Online Poker Questions & Answers",

  description:
    "Find answers to frequently asked questions about Nexa Poker, online poker, account registration, downloads, poker games, payments and getting started.",

  keywords: [
    "Nexa Poker",
    "NexaPoker",
    "Nexa Poker FAQ",
    "poker FAQ",
    "online poker questions",
    "poker rules",
    "how to play poker",
    "poker registration",
    "poker download",
    "online poker games",
    "poker account",
    "poker payments",
  ],

  alternates: {
    canonical: "/faq",
  },

  openGraph: {
    title: "Nexa Poker FAQ | Online Poker Questions & Answers",
    description:
      "Find answers to frequently asked questions about Nexa Poker, online poker, account registration, downloads, poker games, payments and getting started.",
    url: "/faq",
    siteName: "Nexa Poker",
    type: "website",
    images: [
      {
        url: "/images/nexapoker-logo.png",
        width: 1200,
        height: 630,
        alt: "Nexa Poker FAQ | Online Poker Questions & Answers",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexa Poker FAQ | Online Poker Questions & Answers",
    description:
      "Find answers to frequently asked questions about Nexa Poker, online poker, account registration, downloads, poker games, payments and getting started.",
    images: ["/images/nexapoker-logo.png"],
  },
};

export default function FAQPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:py-20 md:py-24 lg:py-28">
        {/* Background atmosphere */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-[-20%] h-80 w-80 rounded-full bg-[#1877ff]/8 blur-[120px] sm:h-100 sm:w-100" />

          <div className="absolute right-[-10%] top-[25%] h-72 w-72 rounded-full bg-[#ff1764]/6 blur-[120px] sm:h-96 sm:w-96" />
        </div>

        <div className="container-nexa relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 sm:text-sm">
            Help Center
          </p>

          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:mt-4 sm:text-5xl md:text-6xl">
            Frequently Asked Questions
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/60 sm:mt-5 sm:text-base sm:leading-7 md:text-lg">
            Find answers to common questions about Nexa Poker, poker games,
            accounts, payments and more.
          </p>
        </div>
      </section>
    </main>
  );
}
