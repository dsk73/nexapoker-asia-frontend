// src/components/sections/AmbassadorsSection.tsx

"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState, useSyncExternalStore } from "react";

import type { BrandAmbassador } from "@/types/content";

import AmbassadorCard from "@/components/cards/AmbassadorCard";

interface AmbassadorsSectionProps {
  ambassadors: BrandAmbassador[];
}

/* =========================================================
   RESPONSIVE BREAKPOINTS
========================================================= */

const subscribeToMediaQueries = (callback: () => void) => {
  const queries = [
    window.matchMedia("(min-width: 1280px)"),
    window.matchMedia("(min-width: 1024px)"),
    window.matchMedia("(min-width: 640px)"),
  ];

  queries.forEach((query) => {
    query.addEventListener("change", callback);
  });

  return () => {
    queries.forEach((query) => {
      query.removeEventListener("change", callback);
    });
  };
};

const getVisibleCount = () => {
  if (window.matchMedia("(min-width: 1280px)").matches) {
    return 4;
  }

  if (window.matchMedia("(min-width: 1024px)").matches) {
    return 3;
  }

  if (window.matchMedia("(min-width: 640px)").matches) {
    return 2;
  }

  return 1;
};

const getServerVisibleCount = () => 4;

/* =========================================================
   COMPONENT
========================================================= */

export default function AmbassadorsSection({
  ambassadors,
}: AmbassadorsSectionProps) {
  const visibleCount = useSyncExternalStore(
    subscribeToMediaQueries,
    getVisibleCount,
    getServerVisibleCount,
  );

  const [currentPage, setCurrentPage] = useState(0);

  /*
   * =========================================================
   * BUILD RESPONSIVE SLIDES
   * =========================================================
   */

  const slides = useMemo(() => {
    const groupedAmbassadors: BrandAmbassador[][] = [];

    for (let i = 0; i < ambassadors.length; i += visibleCount) {
      groupedAmbassadors.push(ambassadors.slice(i, i + visibleCount));
    }

    return groupedAmbassadors;
  }, [ambassadors, visibleCount]);

  /*
   * =========================================================
   * EMPTY STATE
   * =========================================================
   */

  if (!ambassadors.length) {
    return null;
  }

  /*
   * =========================================================
   * KEEP CURRENT PAGE WITHIN VALID RANGE
   * =========================================================
   */

  const safePage =
    slides.length > 0 ? Math.min(currentPage, slides.length - 1) : 0;

  const currentAmbassadors = slides[safePage] ?? [];

  const hasMultipleSlides = slides.length > 1;

  /*
   * =========================================================
   * NAVIGATION
   * =========================================================
   */

  const goToPrevious = () => {
    setCurrentPage((current) => {
      if (slides.length <= 1) {
        return 0;
      }

      return current === 0 ? slides.length - 1 : current - 1;
    });
  };

  const goToNext = () => {
    setCurrentPage((current) => {
      if (slides.length <= 1) {
        return 0;
      }

      return current === slides.length - 1 ? 0 : current + 1;
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#050507] px-4 py-14 sm:px-6 sm:py-20 lg:px-0 lg:py-28">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}

        <div className="absolute right-[-20%] top-[10%] h-72 w-72 rounded-full bg-[#1877ff]/6 blur-[110px] sm:right-[-10%] sm:h-105 sm:w-105 sm:blur-[140px]" />

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-9 max-w-3xl text-center sm:mb-12 sm:max-w-4xl"
        >
          {/* Eyebrow */}

          <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff1764] sm:mb-3 sm:text-sm">
            Nexa Poker
          </p>

          {/* Heading */}

          <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Meet Our Brand Ambassadors
          </h2>

          {/* Description */}

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:mt-5 sm:text-lg sm:leading-7">
            Meet the players and community members helping grow the Nexa Poker
            experience across world.
          </p>
        </motion.div>

        {/* =================================================
            AMBASSADOR CAROUSEL
            ================================================= */}

        <div className="relative px-1 sm:px-3 lg:px-0">
          {/* =================================================
              PREVIOUS BUTTON
              ================================================= */}

          {hasMultipleSlides && (
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous ambassadors"
              className="absolute -left-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0a0d14]/95 text-white shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-200 hover:border-[#1877ff]/40 hover:bg-[#111827] sm:-left-2 sm:h-11 sm:w-11 lg:-left-5"
            >
              <ChevronLeft size={19} />
            </button>
          )}

          {/* =================================================
              NEXT BUTTON
              ================================================= */}

          {hasMultipleSlides && (
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next ambassadors"
              className="absolute -right-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0a0d14]/95 text-white shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-200 hover:border-[#1877ff]/40 hover:bg-[#111827] sm:-right-2 sm:h-11 sm:w-11 lg:-right-5"
            >
              <ChevronRight size={19} />
            </button>
          )}

          {/* =================================================
              CURRENT SLIDE
              ================================================= */}

          <motion.div
            key={`${safePage}-${visibleCount}`}
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="grid min-w-0 grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4"
          >
            {currentAmbassadors.map((ambassador, index) => (
              <motion.div
                key={ambassador.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className="flex h-full min-w-0"
              >
                <AmbassadorCard ambassador={ambassador} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* =================================================
            SLIDE INDICATORS
            ================================================= */}

        {hasMultipleSlides && (
          <div className="mt-7 flex items-center justify-center gap-1.5 sm:mt-8 sm:gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentPage(index)}
                aria-label={`Show ambassador slide ${index + 1}`}
                aria-current={index === safePage ? "true" : undefined}
                className="group flex h-5 items-center"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    index === safePage
                      ? "w-7 bg-[#1877ff] sm:w-8"
                      : "w-2 bg-white/25 group-hover:bg-white/50"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}