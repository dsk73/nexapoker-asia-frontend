"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import type { HomepagePopup as HomepagePopupType } from "@/types/content";
import { getMediaUrl } from "@/lib/media";

interface HomepagePopupProps {
  popup: HomepagePopupType | null;
}

const STORAGE_KEY = "nexa-homepage-popup-last-shown";

export default function HomepagePopup({ popup }: HomepagePopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  /* =========================================================
     CHECK WHETHER POPUP SHOULD BE SHOWN
  ========================================================= */

  useEffect(() => {
    if (!popup?.Active || !popup.Image) {
      return;
    }

    const resetTime = Math.max(Number(popup.ResetTime) || 0, 0);
    const now = Date.now();

    let lastShown = 0;

    try {
      const storedValue = window.localStorage.getItem(STORAGE_KEY);

      if (storedValue) {
        const parsedValue = Number(storedValue);

        if (Number.isFinite(parsedValue)) {
          lastShown = parsedValue;
        }
      }
    } catch {
      // localStorage may be unavailable.
      lastShown = 0;
    }

    const resetTimeMs = resetTime * 1000;
    const elapsedTime = now - lastShown;

    /*
     * Show popup when:
     *
     * 1. It has never been shown before.
     * 2. ResetTime has elapsed since the previous display.
     */
    const shouldShow = !lastShown || elapsedTime >= resetTimeMs;

    if (!shouldShow) {
      return;
    }

    /*
     * Schedule the state update asynchronously.
     *
     * This avoids React 19's warning about calling setState
     * synchronously inside an effect.
     */
    const timer = window.setTimeout(() => {
      setIsOpen(true);

      try {
        window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
      } catch {
        // Ignore localStorage errors.
      }
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, [popup]);

  /* =========================================================
     CLOSE POPUP
  ========================================================= */

  const closePopup = () => {
    setIsOpen(false);
  };

  /* =========================================================
     ESCAPE KEY + BODY SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  /* =========================================================
     IMAGE URL
  ========================================================= */

  const imageUrl = popup?.Image ? getMediaUrl(popup.Image, "large") : null;

  /* =========================================================
     SAFETY CHECK
  ========================================================= */

  if (!popup?.Active || !imageUrl) {
    return null;
  }

  /* =========================================================
     LINK HANDLING
  ========================================================= */

  const popupLink = popup.Link?.trim() || "";

  const isExternalLink =
    popupLink.startsWith("http://") || popupLink.startsWith("https://");

  /* =========================================================
     POPUP
  ========================================================= */

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-x-0 bottom-0 top-19 z-40 flex items-center justify-center overflow-y-auto px-4 py-6 sm:px-6 sm:py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Nexa Poker promotion"
        >
          {/* =================================================
              BACKDROP
          ================================================= */}

          <motion.button
            type="button"
            aria-label="Close promotion"
            className="absolute inset-0 cursor-default bg-black/80 backdrop-blur-md"
            onClick={closePopup}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* =================================================
              SUBTLE BACKGROUND GLOW
          ================================================= */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1877ff]/10 blur-[100px] sm:h-96 sm:w-96 sm:bg-[#1877ff]/12 sm:blur-[130px]" />

            <div className="absolute left-[15%] top-[20%] h-32 w-32 rounded-full bg-[#ff1764]/8 blur-[80px] sm:h-52 sm:w-52 sm:bg-[#ff1764]/10 sm:blur-[110px]" />

            <div className="absolute bottom-[15%] right-[15%] h-32 w-32 rounded-full bg-[#7c3aed]/8 blur-[80px] sm:h-52 sm:w-52 sm:bg-[#7c3aed]/10 sm:blur-[110px]" />
          </div>

          {/* =================================================
              POPUP CONTAINER
          ================================================= */}

          <motion.div
            className="relative z-10 w-full max-w-120"
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 16,
              scale: 0.97,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(event) => event.stopPropagation()}
          >
            {/* =================================================
                OUTER GLOW
            ================================================= */}

            <div className="pointer-events-none absolute -inset-px rounded-[22px] bg-linear-to-br from-[#1877ff]/30 via-transparent to-[#ff1764]/30 opacity-80 blur-[1px] sm:rounded-3xl" />

            {/* =================================================
                IMAGE CARD
            ================================================= */}

            <div className="relative overflow-hidden rounded-[20px] border border-white/15 bg-[#08090d] shadow-[0_25px_80px_rgba(0,0,0,0.7)] sm:rounded-[22px]">
              {/* =================================================
                  CLOSE BUTTON
              ================================================= */}

              <button
                type="button"
                onClick={closePopup}
                aria-label="Close promotion"
                className="absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/85 shadow-lg backdrop-blur-md transition-all duration-200 hover:border-white/40 hover:bg-black/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/40 sm:right-4 sm:top-4 sm:h-10 sm:w-10"
              >
                <X size={19} strokeWidth={2} aria-hidden="true" />
              </button>

              {/* =================================================
                  PROMOTION IMAGE
              ================================================= */}

              {popupLink ? (
                <a
                  href={popupLink}
                  target={isExternalLink ? "_blank" : undefined}
                  rel={isExternalLink ? "noopener noreferrer" : undefined}
                  aria-label="View Nexa Poker promotion"
                  className="group relative block"
                  onClick={closePopup}
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-[#0a0d14]">
                    <Image
                      src={imageUrl}
                      alt={
                        popup.Image?.alternativeText || "Nexa Poker promotion"
                      }
                      fill
                      priority
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                      sizes="(max-width: 640px) calc(100vw - 32px), 480px"
                    />

                    {/* Very subtle hover effect */}
                    <div className="pointer-events-none absolute inset-0 bg-white/0 transition-colors duration-300 group-hover:bg-white/2.5" />
                  </div>
                </a>
              ) : (
                <div className="relative aspect-square w-full overflow-hidden bg-[#0a0d14]">
                  <Image
                    src={imageUrl}
                    alt={popup.Image?.alternativeText || "Nexa Poker promotion"}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 640px) calc(100vw - 32px), 480px"
                  />
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
