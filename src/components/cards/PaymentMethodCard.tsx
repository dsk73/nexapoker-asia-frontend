// src/components/cards/FAQItem.tsx

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import type { FAQ } from "@/types/content";

interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <article
      className={`min-w-0 overflow-hidden rounded-xl border transition-all duration-300 sm:rounded-2xl ${
        isOpen
          ? "border-[#1877ff]/40 bg-[#0d111c]"
          : "border-white/10 bg-[#0a0d14] hover:border-white/20"
      }`}
    >
      {/* =====================================================
          QUESTION
          ===================================================== */}

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full min-w-0 items-start justify-between gap-3 px-4 py-4 text-left sm:items-center sm:gap-5 sm:px-6 sm:py-6"
      >
        <span className="min-w-0 wrap-break-word text-sm font-semibold leading-6 text-white sm:text-lg sm:leading-7">
          {faq.Question}
        </span>

        <span
          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:mt-0 sm:h-9 sm:w-9 ${
            isOpen
              ? "border-[#1877ff]/40 bg-[#1877ff]/10 text-[#46b9ff]"
              : "border-white/10 bg-white/3 text-white/60"
          }`}
        >
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
          >
            <ChevronDown size={17} className="sm:h-4.5 sm:w-4.5" />
          </motion.span>
        </span>
      </button>

      {/* =====================================================
          ANSWER
          ===================================================== */}

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              height: {
                duration: 0.3,
                ease: "easeOut",
              },
              opacity: {
                duration: 0.2,
              },
            }}
          >
            <div className="min-w-0 border-t border-white/10 px-4 pb-4 pt-3.5 sm:px-6 sm:pb-6 sm:pt-4">
              <p className="max-w-3xl wrap-break-word text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
                {faq.Answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
