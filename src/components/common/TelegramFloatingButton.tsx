"use client";

import { Send } from "lucide-react";

const TELEGRAM_URL = "https://t.me/NEXAPokerCommunity";

export default function TelegramFloatingButton() {
  return (
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Join Nexa Poker on Telegram"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-[0_8px_30px_rgba(34,158,217,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_35px_rgba(34,158,217,0.5)] sm:bottom-7 sm:right-7"
    >
      <Send
        size={24}
        strokeWidth={2.3}
        className="-translate-x-0.5 translate-y-0.5"
      />
    </a>
  );
}
