// src/components/common/TelegramFloatingButton.tsx

"use client";

import Image from "next/image";
import { Send } from "lucide-react";

const TELEGRAM_URL = "https://t.me/nexapoker";

export default function TelegramFloatingButton() {
  return (
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Join Our Telegram Channel"
      className="
        group fixed bottom-4 right-4 z-50
        flex items-center gap-2.5
        overflow-hidden
        rounded-full
        border border-white/15
        bg-[#10121a]/95
        px-2.5 py-2
        text-white
        shadow-[0_10px_40px_rgba(34,158,217,0.22)]
        backdrop-blur-xl
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:border-[#229ED9]/50
        hover:bg-[#141923]
        hover:shadow-[0_14px_45px_rgba(34,158,217,0.42)]
        active:scale-[0.97]
        sm:bottom-6 sm:right-6 sm:gap-3 sm:px-3 sm:py-2.5
        lg:bottom-7 lg:right-7
      "
    >
      {/* Hover shimmer */}

      <span
        className="
          pointer-events-none absolute inset-0
          -translate-x-full
          bg-linear-to-r
          from-transparent via-white/10 to-transparent
          transition-transform duration-700
          group-hover:translate-x-full
        "
      />

      {/* Nexa Poker Logo */}

      <span
        className="
          relative flex h-9 w-9 shrink-0
          items-center justify-center
          overflow-hidden rounded-full
          border border-white/10
          bg-[#08090d]
          transition-transform duration-300
          group-hover:scale-105
          sm:h-10 sm:w-10
        "
      >
        <Image
          src="/images/nexapoker-icon.png"
          alt="Nexa Poker"
          width={40}
          height={40}
          className="h-7 w-7 object-contain sm:h-8 sm:w-8"
        />
      </span>

      {/* Text */}

      <span className="relative hidden min-w-0 pr-1 sm:block">
        <span className="block text-[10px] font-medium uppercase tracking-[0.12em] text-white/45 sm:text-[11px] sm:tracking-[0.14em]">
          Stay Connected
        </span>

        <span className="block max-w-48 truncate text-xs font-semibold leading-5 text-white sm:text-sm">
          Join Our Telegram Channel
        </span>
      </span>

      {/* Telegram Icon */}

      <span
        className="
          relative flex h-9 w-9 shrink-0
          items-center justify-center
          rounded-full
          bg-[#229ED9]
          text-white
          shadow-[0_6px_20px_rgba(34,158,217,0.35)]
          transition-all duration-300
          group-hover:scale-110
          group-hover:rotate-3
          group-hover:shadow-[0_8px_25px_rgba(34,158,217,0.55)]
          sm:h-10 sm:w-10
        "
      >
        <Send
          size={18}
          strokeWidth={2.4}
          className="
            -translate-x-0.5 translate-y-0.5
            transition-transform duration-300
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
            sm:h-4.75 sm:w-4.75
          "
        />
      </span>
    </a>
  );
}
