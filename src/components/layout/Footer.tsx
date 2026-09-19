// src/components/layout/Footer.tsx

"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Activities", href: "/activities" },
  { label: "Promotions", href: "/promotion" },
  // { label: "Teaching Center", href: "/teaching-center" },
  { label: "Poker Exchange", href: "/poker-exchange" },
];

const supportLinks = [
  { label: "FAQ", href: "/#faq" },
  { label: "Download", href: "/download" },
  { label: "Register", href: "/register" },
  { label: "Community", href: "/community" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/legal/terms-and-conditions" },
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Cookie Policy", href: "/legal/cookie-policy" },
];

const socialLinks = [
  {
    label: "Telegram Channel",
    href: "https://t.me/nexapoker",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nexapoker/",
  },
  {
    label: "Telegram Community",
    href: "https://t.me/NEXAPokerCommunity",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050507]">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}

        <div className="absolute right-[-8%] top-[-20%] h-120 w-120 rounded-full bg-[#1877ff]/6 blur-[140px]" />

        {/* Pink glow */}

        <div className="absolute bottom-[-25%] left-[-8%] h-120 w-120 rounded-full bg-[#ff1764]/6 blur-[140px]" />
      </div>

      {/* =====================================================
          MAIN FOOTER
          ===================================================== */}

      <div className="container-nexa relative z-10">
        <div className="py-12 sm:py-16 lg:py-20">
          {/* =================================================
              DESKTOP:
              5 columns
              1. Brand
              2. Explore
              3. Support
              4. Legal
              5. Social

              MOBILE:
              Brand above
              Explore | Support
              Legal  | Social
              ================================================= */}

          <div className="lg:grid lg:grid-cols-[1.45fr_1fr_1fr_1fr_1fr] lg:gap-8 xl:gap-10">
            {/* =================================================
                BRAND
                ================================================= */}

            <div className="max-w-sm lg:max-w-xs">
              {/* Logo / Brand */}

              <Link
                href="/"
                className="inline-flex items-center"
                aria-label="Nexa Poker Home"
              >
                <Image
                  src="/images/nexapoker-logo.png"
                  alt="Nexa Poker"
                  width={150}
                  height={50}
                  className="h-auto w-36 object-contain"
                />
              </Link>

              {/* Description */}

              <p className="mt-5 text-sm leading-6 text-white/55 sm:mt-6 sm:text-base">
                Your Nexa Poker journey starts here. Discover exciting games,
                improve your strategy and connect with poker players worldwide.
              </p>

              {/* CTA */}

              <Link
                href="/register"
                className="nexa-button-primary mt-6 inline-flex sm:mt-7"
              >
                Join Nexa Poker
                <ChevronRight size={17} />
              </Link>
            </div>

            {/* =================================================
                LINK COLUMNS
                ================================================= */}

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-9 sm:mt-12 sm:gap-x-10 lg:col-span-4 lg:mt-0 lg:grid-cols-4 lg:gap-8 xl:gap-10">
              {/* =================================================
                  NAVIGATION
                  ================================================= */}

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white sm:text-sm">
                  Explore
                </h3>

                <ul className="mt-4 space-y-3 sm:mt-5 sm:space-y-3.5">
                  {navigationLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm leading-6 text-white/55 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* =================================================
                  SUPPORT
                  ================================================= */}

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white sm:text-sm">
                  Support
                </h3>

                <ul className="mt-4 space-y-3 sm:mt-5 sm:space-y-3.5">
                  {supportLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm leading-6 text-white/55 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* =================================================
                  LEGAL
                  ================================================= */}

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white sm:text-sm">
                  Legal
                </h3>

                <ul className="mt-4 space-y-3 sm:mt-5 sm:space-y-3.5">
                  {legalLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm leading-6 text-white/55 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* =================================================
                  SOCIAL
                  ================================================= */}

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white sm:text-sm">
                  Social
                </h3>

                <ul className="mt-4 space-y-3 sm:mt-5 sm:space-y-3.5">
                  {socialLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm leading-6 text-white/55 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
            ===================================================== */}

        <div className="border-t border-white/10 py-5 sm:py-6">
          <div className="flex flex-col gap-2.5 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            {/* Copyright */}

            <p className="text-white/40">
              © {new Date().getFullYear()} Nexa Poker. All rights reserved.
            </p>

            {/* Brand statement */}

            <p className="text-white/40">Play. Compete. Improve.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
