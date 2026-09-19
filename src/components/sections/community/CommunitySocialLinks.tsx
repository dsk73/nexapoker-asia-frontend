// src/components/sections/community/CommunitySocialLinks.tsx

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Send } from "lucide-react";

const socialLinks = [
  {
    platform: "Telegram Channel",
    label: "Nexa Poker",
    url: "https://t.me/nexapoker",
    type: "telegram",
    accent: "#229ED9",
  },
  {
    platform: "Instagram",
    label: "@nexapoker",
    url: "https://www.instagram.com/nexapoker",
    type: "instagram",
    accent: "#ff4b96",
  },
  {
    platform: "Telegram Community",
    label: "NEXA Poker Community",
    url: "https://t.me/NEXAPokerCommunity",
    type: "telegram-community",
    accent: "#46b9ff",
  },
];

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-7 w-7 sm:h-8 sm:w-8"
    >
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  );
}

function SocialIcon({
  type,
}: {
  type: "telegram" | "instagram" | "telegram-community";
}) {
  if (type === "instagram") {
    return <InstagramIcon />;
  }

  return (
    <Send className="h-7 w-7 -rotate-12 sm:h-8 sm:w-8" strokeWidth={1.8} />
  );
}

export default function CommunitySocialLinks() {
  return (
    <section className="relative overflow-hidden bg-[#050507] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-0 lg:py-24">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#229ED9]/5 blur-[110px] sm:-left-20 sm:h-96 sm:w-96" />

        <div className="absolute -right-30 top-1/3 h-80 w-80 rounded-full bg-[#7c3aed]/5 blur-[120px] sm:-right-25 sm:h-105 sm:w-105" />

        <div className="absolute -bottom-30 left-1/3 h-80 w-80 rounded-full bg-[#ff1670]/4 blur-[120px] sm:h-105 sm:w-105" />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 max-w-3xl sm:mb-12"
        >
          <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#31b7ff] sm:mb-4 sm:text-xs">
            Stay Connected
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Join Our Channels
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55 sm:mt-4 sm:text-base sm:leading-7 lg:text-lg">
            Follow Nexa Poker and stay connected with the latest poker news,
            updates and community activities.
          </p>
        </motion.div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              whileHover={{ y: -4 }}
              className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#090c12]/95 p-4 transition-all duration-300 hover:border-white/15 hover:bg-[#0c1017] sm:p-5 lg:p-6"
            >
              {/* Accent glow */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full opacity-[0.07] blur-3xl transition-opacity duration-300 group-hover:opacity-[0.14]"
                style={{
                  backgroundColor: social.accent,
                }}
              />

              {/* Top highlight */}
              <div
                className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-40"
                style={{
                  background: `linear-gradient(90deg, transparent, ${social.accent}, transparent)`,
                }}
              />

              {/* Card content */}
              <div className="relative flex min-w-0 items-center gap-4 sm:gap-5">
                {/* Platform logo */}
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border sm:h-16 sm:w-16"
                  style={{
                    color: social.accent,
                    borderColor: `${social.accent}35`,
                    backgroundColor: `${social.accent}0d`,
                    boxShadow: `0 0 28px ${social.accent}0d`,
                  }}
                >
                  <SocialIcon
                    type={
                      social.type as
                        | "telegram"
                        | "instagram"
                        | "telegram-community"
                    }
                  />
                </div>

                {/* Platform + Username */}
                <div className="min-w-0 flex-1">
                  <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40 sm:text-[11px]">
                    {social.platform}
                  </div>

                  <div className="wrap-break-word text-base font-bold leading-6 text-white sm:text-lg">
                    {social.label}
                  </div>
                </div>

                {/* Arrow */}
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-10 sm:w-10"
                  style={{
                    color: social.accent,
                    borderColor: `${social.accent}30`,
                    backgroundColor: `${social.accent}08`,
                  }}
                >
                  <ArrowUpRight
                    className="h-4 w-4 sm:h-4.5 sm:w-4.5"
                    strokeWidth={1.8}
                  />
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="pointer-events-none absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 opacity-0 transition-all duration-500 group-hover:w-2/3 group-hover:opacity-70"
                style={{
                  background: `linear-gradient(90deg, transparent, ${social.accent}, transparent)`,
                }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
