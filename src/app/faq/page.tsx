import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexaPoker FAQ | Online Poker Questions & Answers",
  description:
    "Find answers to common questions about NexaPoker, online poker games, registration, downloads, accounts, payments and getting started with poker.",

  keywords: [
    "Nexa Poker",
    "NexaPoker",
    "Nexa Poker FAQ",
    "NexaPoker FAQ",
    "online poker questions",
    "poker rules",
    "how to play poker",
    "poker registration",
    "poker download",
    "online poker games",
  ],

  alternates: {
    canonical: "/faq",
  },

  openGraph: {
    title: "NexaPoker FAQ | Online Poker Questions & Answers",
    description:
      "Find answers to common questions about NexaPoker, online poker games, registration, downloads, accounts, payments and getting started with poker.",
    url: "/faq",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NexaPoker FAQ | Online Poker Questions & Answers",
    description:
      "Find answers to common questions about NexaPoker, online poker games, registration, downloads, accounts, payments and getting started with poker.",
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
          Find answers to common questions about NexaPoker, poker games,
          accounts, payments and more.
        </p>
      </div>
    </main>
  );
}
