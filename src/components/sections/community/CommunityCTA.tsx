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
        px-6
        pb-20
        pt-21
        sm:pb-24
        sm:pt-25
        lg:pb-28
        lg:pt-29
      "
    >
      <div className="container-nexa">
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-[#0a0d14]
          "
        >
          {/* =================================================
              BACKGROUND GLOW
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              h-72
              w-72
              rounded-full
              bg-[#1877ff]/10
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              -left-32
              h-72
              w-72
              rounded-full
              bg-[#ff1764]/5
              blur-3xl
            "
          />

          {/* =================================================
              CONTENT
          ================================================= */}

          <div
            className="
              relative
              flex
              flex-col
              gap-8
              p-6
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
                  h-20
                  w-20
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  sm:h-24
                  sm:w-24
                "
              >
                <Image
                  src={imageUrl}
                  alt={
                    page.LINEImage?.alternativeText || "Nexa Poker Community"
                  }
                  width={page.LINEImage?.width || 200}
                  height={page.LINEImage?.height || 200}
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
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#46b9ff]
                "
              >
                Official Community
              </p>

              <h2
                className="
                  mt-2
                  text-2xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-white
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

                  <p className="mt-1 text-sm font-semibold text-white">
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
                    w-full
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#1877ff]
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-200
                    hover:bg-[#46b9ff]
                    hover:shadow-[0_10px_35px_rgba(24,119,255,0.25)]
                  "
                >
                  {page.LINEButtonText}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
