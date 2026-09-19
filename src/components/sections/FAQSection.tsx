// src/components/sections/FAQSection.tsx

"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import type { FAQ } from "@/types/content";

import FAQItem from "@/components/cards/FAQItem";

interface FAQSectionProps {
  faqs: FAQ[];
}

const FAQ_CATEGORIES = [
  "Account",
  "Registration",
  "KYC",
  "Deposit",
  "Withdrawal",
  "Poker",
  "Promotions",
  "Technical",
  "Other",
] as const;

type FAQCategory = (typeof FAQ_CATEGORIES)[number];

export default function FAQSection({ faqs }: FAQSectionProps) {
  /*
   * Keep the category order controlled by the enum above.
   * Empty categories are automatically hidden.
   */
  const availableCategories = FAQ_CATEGORIES.filter((category) =>
    faqs.some((faq) => faq.Category === category),
  );

  const [activeCategory, setActiveCategory] = useState<FAQCategory>(
    availableCategories[0] ?? "Account",
  );

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs.length || !availableCategories.length) {
    return null;
  }

  const categoryFAQs = faqs.filter((faq) => faq.Category === activeCategory);

  const handleCategoryChange = (category: FAQCategory) => {
    setActiveCategory(category);
    setOpenIndex(null);
  };

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative scroll-mt-24 overflow-hidden bg-[#050507] px-4 py-14 sm:px-6 sm:py-20 lg:px-0 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}

        <div className="absolute right-[-20%] top-[5%] h-72 w-72 rounded-full bg-[#1877ff]/6 blur-[110px] sm:right-[-10%] sm:h-105 sm:w-105 sm:blur-[140px]" />

        {/* Pink glow */}

        <div className="absolute bottom-[5%] left-[-20%] h-72 w-72 rounded-full bg-[#ff1764]/6 blur-[110px] sm:left-[-10%] sm:h-105 sm:w-105 sm:blur-[140px]" />
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="container-nexa relative z-10">
        {/* =================================================
            SECTION HEADER
            ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-8 max-w-3xl sm:mb-10 lg:mb-12"
        >
          {/* Eyebrow */}

          <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff1764] sm:mb-3 sm:text-sm">
            Nexa Poker
          </p>

          {/* Heading */}

          <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>

          {/* Description */}

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:mt-5 sm:text-lg sm:leading-7">
            Find answers to common questions about Nexa Poker, getting started,
            playing online and more.
          </p>
        </motion.div>

        {/* =================================================
            FAQ LAYOUT
            ================================================= */}

        <div className="grid min-w-0 gap-5 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-8">
          {/* =================================================
              MOBILE CATEGORY NAVIGATION
              ================================================= */}

          <div className="min-w-0 overflow-x-auto lg:hidden">
            <div className="flex w-max min-w-full gap-2 pb-2">
              {availableCategories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    className={`shrink-0 rounded-xl border px-3.5 py-2.5 text-xs font-semibold transition-all duration-300 sm:px-4 sm:py-3 sm:text-sm ${
                      isActive
                        ? "border-[#ff1764]/40 bg-[#ff1764] text-white shadow-[0_10px_30px_rgba(255,23,100,0.18)]"
                        : "border-white/10 bg-[#0a0d14] text-white/60 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* =================================================
              DESKTOP CATEGORY SIDEBAR
              ================================================= */}

          <aside className="hidden rounded-2xl border border-white/10 bg-[#0a0d14] p-3 lg:block">
            <div className="space-y-1">
              {availableCategories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    className={`w-full rounded-xl px-5 py-4 text-left text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-[#ff1764] text-white shadow-[0_10px_30px_rgba(255,23,100,0.18)]"
                        : "text-white/60 hover:bg-white/4 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* =================================================
              FAQ CONTENT
              ================================================= */}

          <motion.div
            key={activeCategory}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="min-w-0 rounded-2xl border border-white/10 bg-[#080b12] p-4 sm:p-6 lg:p-8"
          >
            {/* Category heading */}

            <div className="mb-5 sm:mb-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#46b9ff] sm:text-xs">
                Nexa Poker FAQ
              </p>

              <h3 className="mt-1.5 text-2xl font-black leading-tight tracking-tight text-white sm:mt-2 sm:text-3xl">
                {activeCategory}
              </h3>
            </div>

            {/* FAQ items */}

            <div className="space-y-3 sm:space-y-4">
              {categoryFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: Math.min(index * 0.05, 0.25),
                  }}
                  className="min-w-0"
                >
                  <FAQItem
                    faq={faq}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
