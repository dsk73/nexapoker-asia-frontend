"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Activities", href: "/activities" },
  // { label: "Teaching Center", href: "/teaching-center" },
  { label: "Poker Exchange", href: "/poker-exchange" },
  { label: "Community", href: "/community" },
];

const supportLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Download", href: "/download" },
  { label: "Register", href: "/register" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/legal/terms-and-conditions" },
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Cookie Policy", href: "/legal/cookie-policy" },
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

        <div className="absolute bottom-[-25%] left-[-8%]h-120 w-120 rounded-full bg-[#ff1764]/6 blur-[140px]" />
      </div>

      {/* =====================================================
          MAIN FOOTER
          ===================================================== */}

      <div className="container-nexa relative z-10">
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10 lg:py-20">
          {/* =================================================
              BRAND
              ================================================= */}

          <div className="max-w-sm">
            {/* Logo / Brand */}

            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="NexaPoker Home"
            >
              <Image
                src="/images/nexapoker-logo.png"
                alt="NexaPoker"
                width={150}
                height={50}
                className="h-auto w-36 object-contain"
              />
            </Link>

            {/* Description */}

            <p className="mt-6 text-sm leading-6 text-white/55 sm:text-base">
              Your next poker journey starts here. Discover exciting games,
              improve your strategy and connect with poker players worldwide.
            </p>

            {/* CTA */}

            <Link
              href="/register"
              className="nexa-button-primary mt-7 inline-flex"
            >
              Join NexaPoker
              <ChevronRight size={17} />
            </Link>
          </div>

          {/* =================================================
              NAVIGATION
              ================================================= */}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Explore
            </h3>

            <ul className="mt-5 space-y-3.5">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition-colors duration-200 hover:text-white"
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
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Support
            </h3>

            <ul className="mt-5 space-y-3.5">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition-colors duration-200 hover:text-white"
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
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Legal
            </h3>

            <ul className="mt-5 space-y-3.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
            ===================================================== */}

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
            {/* Copyright */}

            <p className="text-white/40">
              © {new Date().getFullYear()} NexaPoker. All rights reserved.
            </p>

            {/* Brand statement */}

            <p className="text-white/40">Play. Compete. Improve.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
