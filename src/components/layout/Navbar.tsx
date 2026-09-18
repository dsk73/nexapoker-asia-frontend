"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "About", href: "/about" },
    { label: "Activities", href: "/activities" },
    { label: "Promotions", href: "/promotion" },
    // { label: "Teaching Center", href: "/teaching-center" },
    { label: "Poker Exchange", href: "/poker-exchange" },
    { label: "Community", href: "/community" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-white/8 bg-black/75 backdrop-blur-xl">
        <div className="container-nexa flex h-19 items-center justify-between">
          {/* =================================================
              LOGO
              ================================================= */}

          <Link
            href="/"
            className="flex items-center"
            aria-label="Nexa Poker home"
          >
            <Image
              src="/images/nexapoker-logo.png"
              alt="Nexa Poker"
              width={190}
              height={55}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
              ================================================= */}

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/70 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* =================================================
              DESKTOP ACTIONS
              ================================================= */}

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/download" className="nexa-button-secondary">
              Download
            </Link>

            <Link href="/register" className="nexa-button-primary">
              Join Nexa Poker
            </Link>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
              ================================================= */}

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* =================================================
          MOBILE NAVIGATION
          ================================================= */}

      {open && (
        <div className="border-b border-white/10 bg-[#08090c]/98 lg:hidden">
          <nav className="container-nexa flex flex-col py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/6 py-4 text-sm font-medium text-white/75 last:border-0"
              >
                {link.label}
              </Link>
            ))}

            <div className="flex gap-3 pt-5">
              <Link
                href="/download"
                onClick={() => setOpen(false)}
                className="nexa-button-secondary flex-1"
              >
                Download
              </Link>

              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="nexa-button-primary flex-1"
              >
                Join Nexa Poker
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
