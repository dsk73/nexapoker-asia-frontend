import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import TelegramFloatingButton from "@/components/common/TelegramFloatingButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexapoker-asia.com"),

  title: {
    default: "NexaPoker | Play Poker Online",
    template: "%s | NexaPoker",
  },

  description:
    "Play poker online with NexaPoker. Explore online poker games, connect with poker players worldwide, and enjoy a convenient international poker platform.",

  keywords: [
    "Nexa Poker",
    "NexaPoker",
    "Nexa Poker online",
    "online poker",
    "play poker online",
    "online poker games",
    "online poker platform",
    "international poker platform",
    "poker player community",
  ],

  alternates: {
    canonical: "https://nexapoker-asia.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://nexapoker-asia.com",
    siteName: "NexaPoker",
    title: "NexaPoker | Play Poker Online",
    description:
      "Play poker online with NexaPoker. Explore online poker games, connect with poker players worldwide, and enjoy a convenient international poker platform.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "NexaPoker | Play Poker Online",
    description:
      "Play poker online with NexaPoker. Explore online poker games, connect with poker players worldwide, and enjoy a convenient international poker platform.",
  },

  applicationName: "NexaPoker",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <TelegramFloatingButton />
      </body>
    </html>
  );
}