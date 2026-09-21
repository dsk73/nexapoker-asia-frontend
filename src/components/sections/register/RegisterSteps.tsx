// src/components/sections/register/RegisterSteps.tsx

"use client";

import Image from "next/image";
import { Download, Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";

import type { RegisterPage } from "@/types/pages";

import { getMediaUrl } from "@/lib/media";

interface RegisterStepsProps {
  page: RegisterPage;
}

export default function RegisterSteps({ page }: RegisterStepsProps) {
  const steps = page.Steps ?? [];

  const [fullscreenImage, setFullscreenImage] = useState<{
    url: string;
    alt: string;
  } | null>(null);

  useEffect(() => {
    if (!fullscreenImage) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFullscreenImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [fullscreenImage]);

  if (steps.length === 0) {
    return null;
  }

  const handleDownload = async (url: string, index: number) => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Unable to download image");
      }

      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `nexa-poker-registration-step-${index + 1}.png`;
      document.body.appendChild(link);
      link.click();
      link.remove();

      URL.revokeObjectURL(blobUrl);
    } catch {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <section className="relative overflow-hidden px-4 pb-16 pt-5 sm:px-6 sm:pb-20 sm:pt-8 md:pb-24 lg:px-0 lg:pb-28 lg:pt-10">
        {/* =========================================================
            BACKGROUND
        ========================================================= */}

        <div className="pointer-events-none absolute inset-0">
          {/* Blue glow */}
          <div className="absolute left-[-28%] top-[12%] h-56 w-56 rounded-full bg-[#1877ff]/6 blur-[90px] sm:left-[-12%] sm:h-80 sm:w-80 sm:bg-[#1877ff]/7 sm:blur-[120px]" />

          {/* Purple glow */}
          <div className="absolute right-[-25%] top-[35%] h-64 w-64 rounded-full bg-[#7c3aed]/5 blur-[100px] sm:right-[-8%] sm:h-96 sm:w-96 sm:bg-[#7c3aed]/6 sm:blur-[140px]" />

          {/* Subtle grid */}
          <div
            className="
              absolute inset-0
              bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
              bg-size-[52px_52px]
              opacity-[0.012]
              sm:bg-size-[70px_70px]
              sm:opacity-[0.018]
            "
          />
        </div>

        <div id="get-started" className="container-nexa relative z-10 min-w-0">
          {/* =========================================================
              HEADER
          ========================================================= */}

          <div className="max-w-4xl min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#46b9ff] sm:text-xs sm:tracking-[0.18em] md:text-sm">
              {page.StepsBadge || "How It Works"}
            </p>

            <h2
              className="
                mt-2
                max-w-full
                wrap-break-word
                text-2xl
                font-bold
                leading-[1.15]
                tracking-tight
                text-white
                sm:mt-3
                sm:text-4xl
                sm:leading-tight
                lg:text-[2.75rem]
                xl:text-5xl
              "
            >
              {page.StepsTitle || "Create Your Nexa Poker Account"}
            </h2>

            {page.StepsDescription && (
              <p
                className="
                  mt-3
                  max-w-3xl
                  wrap-break-word
                  text-sm
                  leading-6
                  text-white/55
                  sm:mt-4
                  sm:text-lg
                  sm:leading-8
                "
              >
                {page.StepsDescription}
              </p>
            )}
          </div>

          {/* =========================================================
              STEPS GRID

              Mobile  → 1 column
              Tablet  → 2 columns
              Desktop → 4 columns
          ========================================================= */}

          <div
            className="
              mt-8
              grid
              grid-cols-1
              gap-5
              sm:mt-10
              sm:grid-cols-2
              sm:gap-6
              lg:mt-12
              lg:grid-cols-4
              lg:gap-5
              xl:gap-6
            "
          >
            {steps.map((step, index) => {
              const isPink = index % 2 === 1;
              const imageUrl = step.Icon ? getMediaUrl(step.Icon) : null;

              return (
                <article
                  key={step.id ?? `${step.Title}-${index}`}
                  className={`
                    group
                    relative
                    min-w-0
                    overflow-hidden
                    rounded-2xl
                    border
                    bg-[#0a0d14]
                    transition-all
                    duration-300
                    ease-out
                    hover:-translate-y-1
                    hover:bg-[#0d111a]
                    hover:shadow-[0_25px_65px_rgba(0,0,0,0.4)]
                    sm:rounded-3xl
                    ${
                      isPink
                        ? "border-[#ff1473]/20 hover:border-[#ff1473]/40"
                        : "border-[#1877ff]/20 hover:border-[#1877ff]/40"
                    }
                  `}
                >
                  {/* =====================================================
                      LEFT ACCENT
                  ===================================================== */}

                  <div
                    className={`
                      absolute
                      bottom-5
                      left-0
                      top-5
                      z-20
                      w-0.75
                      rounded-r-full
                      sm:bottom-7
                      sm:top-7
                      ${
                        isPink
                          ? "bg-[#ff1473] shadow-[0_0_14px_rgba(255,20,115,0.45)]"
                          : "bg-[#1877ff] shadow-[0_0_14px_rgba(24,119,255,0.45)]"
                      }
                    `}
                  />

                  {/* =====================================================
                      CARD GLOW
                  ===================================================== */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-32
                      w-32
                      rounded-full
                      blur-3xl
                      opacity-25
                      transition-opacity
                      duration-500
                      group-hover:opacity-70
                      sm:h-44
                      sm:w-44
                      ${isPink ? "bg-[#ff1473]/8" : "bg-[#1877ff]/8"}
                    `}
                  />

                  {/* =====================================================
                      TOP HIGHLIGHT
                  ===================================================== */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      inset-x-4
                      top-0
                      z-20
                      h-px
                      bg-linear-to-r
                      from-transparent
                      to-transparent
                      opacity-70
                      sm:inset-x-6
                      ${isPink ? "via-[#ff1473]/40" : "via-[#46b9ff]/40"}
                    `}
                  />

                  {/* =====================================================
                      IMAGE
                      Strapi field: Icon
                      Ratio: 9:16
                  ===================================================== */}

                  <div className="relative z-10 w-full p-3 sm:p-4">
                    <div
                      className={`
                        group/image
                        relative
                        aspect-9/16
                        w-full
                        overflow-hidden
                        rounded-xl
                        border
                        bg-[#06080d]
                        shadow-[0_18px_45px_rgba(0,0,0,0.35)]
                        sm:rounded-2xl
                        ${
                          isPink ? "border-[#ff1473]/20" : "border-[#1877ff]/20"
                        }
                      `}
                    >
                      {imageUrl ? (
                        <>
                          <Image
                            src={imageUrl}
                            alt={
                              step.Icon?.alternativeText ||
                              step.Title ||
                              `Registration step ${index + 1}`
                            }
                            fill
                            priority={index === 0}
                            className="
                              object-cover
                              object-center
                              transition-transform
                              duration-700
                              ease-out
                              group-hover:scale-[1.025]
                            "
                            sizes="
                              (max-width: 639px) calc(100vw - 56px),
                              (max-width: 1023px) calc((100vw - 72px) / 2),
                              (max-width: 1279px) calc((100vw - 100px) / 4),
                              300px
                            "
                          />

                          {/* Image overlay */}
                          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-black/10" />

                          {/* =================================================
                              IMAGE ACTIONS
                          ================================================= */}

                          <div className="absolute bottom-2.5 right-2.5 z-30 flex items-center gap-1.5 sm:bottom-3 sm:right-3 sm:gap-2">
                            {/* Fullscreen */}
                            <button
                              type="button"
                              onClick={() =>
                                setFullscreenImage({
                                  url: imageUrl,
                                  alt:
                                    step.Icon?.alternativeText ||
                                    step.Title ||
                                    `Registration step ${index + 1}`,
                                })
                              }
                              aria-label={`View ${step.Title || `step ${index + 1}`} in fullscreen`}
                              title="View fullscreen"
                              className="
                                flex
                                h-8
                                w-8
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/20
                                bg-black/65
                                text-white
                                shadow-lg
                                backdrop-blur-md
                                transition
                                hover:scale-105
                                hover:bg-black/85
                                active:scale-95
                                sm:h-9
                                sm:w-9
                              "
                            >
                              <Maximize2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                            </button>

                            {/* Download */}
                            <button
                              type="button"
                              onClick={() => handleDownload(imageUrl, index)}
                              aria-label={`Download ${step.Title || `step ${index + 1}`} image`}
                              title="Download image"
                              className="
                                flex
                                h-8
                                w-8
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/20
                                bg-black/65
                                text-white
                                shadow-lg
                                backdrop-blur-md
                                transition
                                hover:scale-105
                                hover:bg-black/85
                                active:scale-95
                                sm:h-9
                                sm:w-9
                              "
                            >
                              <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                            </button>
                          </div>

                          {/* =================================================
                              STEP NUMBER
                          ================================================= */}

                          <div
                            className={`
                              absolute
                              left-2.5
                              top-2.5
                              z-30
                              flex
                              h-8
                              min-w-8
                              items-center
                              justify-center
                              rounded-full
                              border
                              px-2
                              text-[10px]
                              font-bold
                              text-white
                              shadow-[0_8px_25px_rgba(0,0,0,0.3)]
                              backdrop-blur-md
                              sm:left-3
                              sm:top-3
                              sm:h-9
                              sm:min-w-9
                              sm:text-xs
                              ${
                                isPink
                                  ? "border-[#ff1473]/40 bg-[#ff1473]/80"
                                  : "border-[#1877ff]/40 bg-[#1877ff]/80"
                              }
                            `}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </div>
                        </>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-white/5 via-white/2 to-transparent px-5 text-center">
                          <span className="text-xs text-white/30">
                            Step {index + 1}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* =====================================================
                      CONTENT
                  ===================================================== */}

                  <div className="relative z-10 min-w-0 px-4 pb-5 pt-1 sm:px-5 sm:pb-6">
                    <h3
                      className={`
                        min-w-0
                        wrap-break-word
                        text-base
                        font-semibold
                        leading-tight
                        tracking-tight
                        text-white
                        transition-colors
                        duration-200
                        sm:text-lg
                        ${
                          isPink
                            ? "group-hover:text-[#ff4a91]"
                            : "group-hover:text-[#46b9ff]"
                        }
                      `}
                    >
                      {step.Title}
                    </h3>

                    {step.Description && (
                      <p
                        className="
                          mt-2.5
                          wrap-break-word
                          text-[12px]
                          leading-5
                          text-white/50
                          sm:mt-3
                          sm:text-sm
                          sm:leading-6
                        "
                      >
                        {step.Description}
                      </p>
                    )}
                  </div>

                  {/* =====================================================
                      DECORATIVE POKER CHIP
                  ===================================================== */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      -bottom-7
                      -right-7
                      h-18
                      w-18
                      rounded-full
                      border
                      opacity-25
                      transition-all
                      duration-500
                      group-hover:scale-105
                      group-hover:opacity-60
                      sm:-bottom-9
                      sm:-right-9
                      sm:h-24
                      sm:w-24
                      sm:opacity-40
                      ${isPink ? "border-[#ff1473]/30" : "border-[#1877ff]/30"}
                    `}
                  >
                    <div
                      className={`
                        absolute
                        inset-2
                        rounded-full
                        border
                        ${
                          isPink ? "border-[#ff1473]/20" : "border-[#1877ff]/20"
                        }
                      `}
                    />

                    <div
                      className={`
                        absolute
                        inset-5
                        rounded-full
                        border
                        ${
                          isPink ? "border-[#ff1473]/20" : "border-[#1877ff]/20"
                        }
                      `}
                    />

                    {/* Top */}
                    <div
                      className={`
                        absolute
                        left-1/2
                        top-0
                        h-2.5
                        w-px
                        -translate-x-1/2
                        ${isPink ? "bg-[#ff1473]/35" : "bg-[#1877ff]/35"}
                      `}
                    />

                    {/* Bottom */}
                    <div
                      className={`
                        absolute
                        bottom-0
                        left-1/2
                        h-2.5
                        w-px
                        -translate-x-1/2
                        ${isPink ? "bg-[#ff1473]/35" : "bg-[#1877ff]/35"}
                      `}
                    />

                    {/* Left */}
                    <div
                      className={`
                        absolute
                        left-0
                        top-1/2
                        h-px
                        w-2.5
                        -translate-y-1/2
                        ${isPink ? "bg-[#ff1473]/35" : "bg-[#1877ff]/35"}
                      `}
                    />

                    {/* Right */}
                    <div
                      className={`
                        absolute
                        right-0
                        top-1/2
                        h-px
                        w-2.5
                        -translate-y-1/2
                        ${isPink ? "bg-[#ff1473]/35" : "bg-[#1877ff]/35"}
                      `}
                    />

                    {/* Center */}
                    <div
                      className={`
                        absolute
                        left-1/2
                        top-1/2
                        h-4
                        w-4
                        -translate-x-1/2
                        -translate-y-1/2
                        rotate-45
                        ${isPink ? "bg-[#ff1473]/15" : "bg-[#1877ff]/15"}
                      `}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===========================================================
          FULLSCREEN IMAGE VIEWER
      =========================================================== */}

      {fullscreenImage && (
        <div
          className="
            fixed
            inset-0
            z-9999
            flex
            min-h-dvh
            items-center
            justify-center
            bg-black/95
            p-3
            backdrop-blur-md
            sm:p-6
          "
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen image viewer"
          onClick={() => setFullscreenImage(null)}
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setFullscreenImage(null)}
            aria-label="Close fullscreen image"
            title="Close"
            className="
              absolute
              right-3
              top-3
              z-50
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-black/70
              text-white
              shadow-xl
              backdrop-blur-md
              transition
              hover:bg-black
              active:scale-95
              sm:right-5
              sm:top-5
            "
          >
            <X className="h-5 w-5" />
          </button>

          {/* Download in fullscreen */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handleDownload(
                fullscreenImage.url,
                steps.findIndex(
                  (step) =>
                    step.Icon && getMediaUrl(step.Icon) === fullscreenImage.url,
                ),
              );
            }}
            aria-label="Download image"
            title="Download image"
            className="
              absolute
              bottom-4
              right-3
              z-50
              flex
              h-10
              items-center
              gap-2
              rounded-full
              border
              border-white/15
              bg-black/70
              px-4
              text-sm
              font-medium
              text-white
              shadow-xl
              backdrop-blur-md
              transition
              hover:bg-black
              active:scale-95
              sm:bottom-6
              sm:right-6
            "
          >
            <Download className="h-4 w-4" />
            <span>Download</span>
          </button>

          {/* 9:16 image */}
          <div
            className="
              relative
              flex
              h-[calc(100dvh-24px)]
              w-[min(calc((100dvh-24px)*9/16),calc(100dvw-24px))]
              max-h-dvh
              max-w-dvw
              items-center
              justify-center
              sm:h-[calc(100dvh-48px)]
              sm:w-[min(calc((100dvh-48px)*9/16),calc(100dvw-48px))]
            "
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={fullscreenImage.url}
              alt={fullscreenImage.alt}
              fill
              priority
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
