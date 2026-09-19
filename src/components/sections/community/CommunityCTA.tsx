// src/components/sections/community/CommunityCTA.tsx

import Image from "next/image";

import type { CommunityPage } from "@/types/pages";
import { getMediaUrl } from "@/lib/media";

interface CommunityCTAProps {
  page: CommunityPage;
}

export default function CommunityCTA({ page }: CommunityCTAProps) {
  const imageUrl = getMediaUrl(page.LINEImage, "medium");

  if (
    !imageUrl &&
    !page.LINEID &&
    !page.LINEButtonText &&
    !page.BottomDescription
  ) {
    return null;
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        px-4
        pb-16
        pt-18
        sm:px-6
        sm:pb-24
        sm:pt-22
        lg:px-0
        lg:pb-28
        lg:pt-26
      "
    >
      <div className="container-nexa min-w-0">
        <div
          className="
            relative
            min-w-0
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-[#0a0d14]
            sm:rounded-3xl
          "
        >
          {/* =================================================
              BACKGROUND GLOW
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-56
              w-56
              rounded-full
              bg-[#1877ff]/10
              blur-[90px]
              sm:-right-32
              sm:-top-32
              sm:h-72
              sm:w-72
              sm:blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-24
              h-56
              w-56
              rounded-full
              bg-[#ff1764]/5
              blur-[90px]
              sm:-bottom-32
              sm:-left-32
              sm:h-72
              sm:w-72
              sm:blur-3xl
            "
          />

          {/* =================================================
              CONTENT
          ================================================= */}

          <div
            className="
              relative
              flex
              min-w-0
              flex-col
              gap-6
              p-5
              sm:gap-8
              sm:p-8
              lg:flex-row
              lg:items-center
              lg:gap-10
              lg:p-10
            "
          >
            {/* =================================================
                TELEGRAM IMAGE
            ================================================= */}

            {imageUrl && (
              <div
                className="
                  flex
                  h-18
                  w-18
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  sm:h-24
                  sm:w-24
                  sm:rounded-2xl
                "
              >
                <Image
                  src={imageUrl}
                  alt={
                    page.LINEImage?.alternativeText || "Nexa Poker Community"
                  }
                  width={page.LINEImage?.width || 200}
                  height={page.LINEImage?.height || 200}
                  sizes="96px"
                  className="h-full w-full object-contain p-2"
                />
              </div>
            )}

            {/* =================================================
                MAIN CONTENT
            ================================================= */}

            <div className="min-w-0 flex-1">
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#46b9ff]
                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Official Community
              </p>

              <h2
                className="
                  mt-1.5
                  wrap-break-word
                  text-2xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-white
                  sm:mt-2
                  sm:text-3xl
                "
              >
                Connect with Nexa Poker
              </h2>

              {page.BottomDescription && (
                <p
                  className="
                    mt-3
                    max-w-4xl
                    wrap-break-word
                    text-sm
                    leading-6
                    text-white/55
                    sm:text-base
                    sm:leading-7
                  "
                >
                  {page.BottomDescription}
                </p>
              )}
            </div>

            {/* =================================================
                TELEGRAM ID + BUTTON
            ================================================= */}

            <div
              className="
                flex
                w-full
                min-w-0
                shrink-0
                flex-col
                gap-3
                sm:w-auto
                sm:min-w-55
              "
            >
              {page.LINEID && (
                <div
                  className="
                    min-w-0
                    rounded-xl
                    border
                    border-[#1877ff]/30
                    bg-[#1877ff]/5
                    px-4
                    py-3
                  "
                >
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-[#46b9ff]
                    "
                  >
                    Telegram ID
                  </p>

                  <p className="mt-1 break-all text-sm font-semibold text-white">
                    {page.LINEID}
                  </p>
                </div>
              )}

              {page.LINEButtonText && page.LINEButtonURL && (
                <a
                  href={page.LINEButtonURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    min-h-11
                    w-full
                    max-w-full
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#1877ff]
                    px-5
                    py-3
                    text-center
                    text-sm
                    font-semibold
                    leading-5
                    text-white
                    transition-all
                    duration-200
                    hover:bg-[#46b9ff]
                    hover:shadow-[0_10px_35px_rgba(24,119,255,0.25)]
                    sm:px-6
                  "
                >
                  <span className="wrap-break-word">{page.LINEButtonText}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
