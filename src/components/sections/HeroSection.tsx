// src/components/sections/HeroSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import type { HeroPromotionCard, HeroSlide } from "@/types/content";

import { getMediaUrl } from "@/lib/media";

import HeroPromotionCardComponent from "@/components/sections/HeroPromotionCard";

interface HeroSectionProps {
  slides: HeroSlide[];
  promotionCard: HeroPromotionCard | null;
}

export default function HeroSection({
  slides,
  promotionCard,
}: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = slides[activeIndex];

  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  if (!activeSlide) {
    return null;
  }

  const desktopImage = getMediaUrl(activeSlide.DesktopImage, "large");
  const mobileImage = getMediaUrl(activeSlide.MobileImage, "large");

  return (
    <section className="relative overflow-hidden bg-[#050507] pt-20 sm:pt-22 lg:min-h-175 lg:pt-23">
      {/* =====================================================
          HERO SLIDE AREA
          ===================================================== */}

      <div className="relative overflow-hidden">
        {/* =====================================================
            BACKGROUND HERO IMAGE

            Desktop:
            - Uses DesktopImage

            Small screens:
            - Uses MobileImage
            ===================================================== */}

        <AnimatePresence mode="wait">
          {(desktopImage || mobileImage) && (
            <motion.div
              key={`background-${activeSlide.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              {/* Desktop background */}

              {desktopImage && (
                <Image
                  src={desktopImage}
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  className="hidden object-cover object-center lg:block"
                />
              )}

              {/* Mobile background */}

              {mobileImage && (
                <Image
                  src={mobileImage}
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center lg:hidden"
                />
              )}

              {/* Overall dark overlay */}

              <div className="absolute inset-0 bg-black/65" />

              {/* Left-side dark gradient */}

              <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/35" />

              {/* Bottom fade */}

              <div className="absolute inset-0 bg-linear-to-t from-[#050507] via-transparent to-black/20" />

              {/* Pink atmosphere */}

              <div className="absolute left-[-18%] top-[8%] h-72 w-72 rounded-full bg-[#ff1764]/10 blur-[110px] sm:left-[-8%] sm:h-105 sm:w-105 sm:blur-[130px]" />

              {/* Blue atmosphere */}

              <div className="absolute right-[-12%] top-[8%] h-80 w-80 rounded-full bg-[#1877ff]/10 blur-[120px] sm:right-[5%] sm:h-125 sm:w-125 sm:blur-[140px]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* =====================================================
            HERO CONTENT
            ===================================================== */}

        <div className="container-nexa relative z-10 flex min-h-135 items-center sm:min-h-145 lg:min-h-147.5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="grid w-full items-center gap-7 py-6 sm:gap-8 sm:py-4 lg:grid-cols-[0.95fr_1.05fr] lg:gap-4 lg:py-4"
            >
              {/* =================================================
                  LEFT CONTENT
                  ================================================= */}

              <div className="relative z-20 min-w-0 max-w-2xl lg:-translate-x-8 xl:-translate-x-12">
                {/* Title */}

                <h1 className="max-w-full wrap-break-word text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                  {activeSlide.Title}
                </h1>

                {/* Subtitle */}

                {activeSlide.Subtitle && (
                  <div className="mt-3 max-w-xl wrap-break-word text-lg font-semibold leading-7 text-[#1877ff] sm:mt-4 sm:text-2xl sm:leading-8">
                    {activeSlide.Subtitle.replace(/^##\s*/, "")}
                  </div>
                )}

                {/* Description */}

                {activeSlide.Description && (
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/70 sm:mt-4 sm:text-lg sm:leading-7">
                    {activeSlide.Description}
                  </p>
                )}

                {/* =================================================
                    STRAPI PRIMARY CTA ONLY
                    ================================================= */}

                {activeSlide.PrimaryButtonText &&
                  activeSlide.PrimaryButtonURL && (
                    <div className="mt-6 sm:mt-7">
                      <Link
                        href={activeSlide.PrimaryButtonURL}
                        className="nexa-button-primary max-w-full"
                      >
                        <span className="truncate">
                          {activeSlide.PrimaryButtonText}
                        </span>

                        <ChevronRight size={17} className="shrink-0" />
                      </Link>
                    </div>
                  )}
              </div>

              {/* =================================================
                  DESKTOP HERO PROMOTION CARD

                  Hidden on small screens.
                  Appears on the right over the hero image
                  on large screens.
                  ================================================= */}

              <div className="relative z-20 hidden items-center justify-center lg:flex lg:translate-x-14 xl:translate-x-28">
                {/* Blue glow */}

                <div className="pointer-events-none absolute right-0 top-1/2 h-95 w-95 -translate-y-1/2 rounded-full bg-[#1877ff]/15 blur-[120px]" />

                {/* Pink glow */}

                <div className="pointer-events-none absolute right-[10%] top-[45%] h-65 w-65 rounded-full bg-[#ff1764]/12 blur-[100px]" />

                {/* Promotion card */}

                <motion.div
                  key={`promotion-card-desktop-${activeSlide.id}`}
                  initial={{
                    opacity: 0,
                    scale: 0.96,
                    x: 25,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1,
                    ease: "easeOut",
                  }}
                  className="relative z-10 w-full max-w-115"
                >
                  <HeroPromotionCardComponent card={promotionCard} />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* =====================================================
            CAROUSEL INDICATORS

            These remain part of the hero slide area so that
            mobile users see them before the promotion card.
            ===================================================== */}

        {slides.length > 1 && (
          <div className="container-nexa relative z-30 pb-4 sm:pb-5 lg:absolute lg:bottom-5 lg:left-1/2 lg:-translate-x-1/2 lg:pb-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show slide ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className="group flex h-5 items-center"
                >
                  <span
                    className={`block h-1 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "w-8 bg-[#ff1764] sm:w-10"
                        : "w-4 bg-white/30 group-hover:bg-white/60 sm:w-5"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* =====================================================
          MOBILE HERO PROMOTION CARD

          Hidden on large screens.

          On small screens the promotion card is intentionally
          placed AFTER the hero image/content area so it does
          not cover the hero slide.
          ===================================================== */}

      <div className="relative z-20 px-4 pb-10 pt-5 sm:px-6 sm:pt-6 lg:hidden">
        <div className="mx-auto w-full max-w-115">
          <motion.div
            key={`promotion-card-mobile-${activeSlide.id}`}
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.05,
              ease: "easeOut",
            }}
          >
            <HeroPromotionCardComponent card={promotionCard} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
