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
    <section className="relative overflow-hidden bg-[#050507] pt-22 lg:min-h-175 lg:pt-23">
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

              <div className="absolute left-[-8%] top-[8%] h-105 w-105 rounded-full bg-[#ff1764]/10 blur-[130px]" />

              {/* Blue atmosphere */}

              <div className="absolute right-[5%] top-[8%] h-125 w-125 rounded-full bg-[#1877ff]/10 blur-[140px]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* =====================================================
            HERO CONTENT
            ===================================================== */}

        <div className="container-nexa relative z-10 flex min-h-145 items-center lg:min-h-147.5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="grid w-full items-center gap-8 py-4 lg:grid-cols-[0.95fr_1.05fr] lg:gap-4 lg:py-4"
            >
              {/* =================================================
                  LEFT CONTENT
                  ================================================= */}

              <div className="relative z-20 max-w-2xl lg:-translate-x-8 xl:-translate-x-12">
                {/* Title */}

                <h1 className="max-w-2xl text-4xl font-black leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                  {activeSlide.Title}
                </h1>

                {/* Subtitle */}

                {activeSlide.Subtitle && (
                  <div className="mt-4 text-xl font-semibold text-[#1877ff] sm:text-2xl">
                    {activeSlide.Subtitle.replace(/^##\s*/, "")}
                  </div>
                )}

                {/* Description */}

                {activeSlide.Description && (
                  <p className="mt-4 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                    {activeSlide.Description}
                  </p>
                )}

                {/* =================================================
                    STRAPI PRIMARY CTA ONLY
                    ================================================= */}

                {activeSlide.PrimaryButtonText &&
                  activeSlide.PrimaryButtonURL && (
                    <div className="mt-7">
                      <Link
                        href={activeSlide.PrimaryButtonURL}
                        className="nexa-button-primary"
                      >
                        {activeSlide.PrimaryButtonText}

                        <ChevronRight size={17} />
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
          <div className="container-nexa relative z-30 pb-5 lg:absolute lg:bottom-5 lg:left-1/2 lg:-translate-x-1/2 lg:pb-0">
            <div className="flex items-center gap-2">
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
                        ? "w-10 bg-[#ff1764]"
                        : "w-5 bg-white/30 group-hover:bg-white/60"
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

      <div className="relative z-20 px-4 pb-10 pt-6 lg:hidden sm:px-6">
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
