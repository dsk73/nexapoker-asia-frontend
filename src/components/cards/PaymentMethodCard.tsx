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
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
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
        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6 sm:py-6"
      >
        <span className="text-base font-semibold leading-6 text-white sm:text-lg">
          {faq.Question}
        </span>

        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
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
            <ChevronDown size={18} />
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
            <div className="border-t border-white/10 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
              <p className="max-w-3xl text-sm leading-7 text-white/55 sm:text-base">
                {faq.Answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
