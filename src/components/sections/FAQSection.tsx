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
    <section className="relative overflow-hidden bg-[#050507] py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}

        <div className="absolute right-[-10%] top-[5%] h-105 w-105 rounded-full bg-[#1877ff]/6 blur-[140px]" />

        {/* Pink glow */}

        <div className="absolute bottom-[5%] left-[-10%] h-105 w-105 rounded-full bg-[#ff1764]/6 blur-[140px]" />
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
          className="mb-10 max-w-3xl sm:mb-12"
        >
          {/* Eyebrow */}

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff1764]">
            Nexa Poker
          </p>

          {/* Heading */}

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>

          {/* Description */}

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
            Find answers to common questions About Nexa Poker, getting started,
            playing online and more.
          </p>
        </motion.div>

        {/* =================================================
            FAQ LAYOUT
            ================================================= */}

        <div className="grid gap-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-8">
          {/* =================================================
              MOBILE CATEGORY NAVIGATION
              ================================================= */}

          <div className="overflow-x-auto lg:hidden">
            <div className="flex min-w-max gap-2 pb-2">
              {availableCategories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-300 ${
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
            className="rounded-2xl border border-white/10 bg-[#080b12] p-5 sm:p-6 lg:p-8"
          >
            {/* Category heading */}

            <div className="mb-6 sm:mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#46b9ff]">
                Nexa Poker FAQ
              </p>

              <h3 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
                {activeCategory}
              </h3>
            </div>

            {/* FAQ items */}

            <div className="space-y-4">
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
