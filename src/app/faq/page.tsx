import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexa Poker FAQ | Online Poker Questions & Answers",

  description:
    "Find answers to frequently asked questions about Nexa Poker, online poker, account registration, downloads, poker games, payments and getting started.",

  keywords: [
    "Nexa Poker",
    "NexaPoker",
    "Nexa Poker FAQ",
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
    <main className="min-h-screen bg-black px-6 py-32 text-white">
      <div className="container-nexa">
        <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
          Help Center
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Frequently Asked Questions
        </h1>

        <p className="mt-5 max-w-2xl text-white/60">
          Find answers to common questions about Nexa Poker, poker games,
          accounts, payments and more.
        </p>
      </div>
    </main>
  );
}
