// src/components/sections/community/CommunityHero.tsx

import type { CommunityPage } from "@/types/pages";

interface CommunityHeroProps {
  page: CommunityPage;
}

export default function CommunityHero({ page }: CommunityHeroProps) {
  return (
    <section
      className="
        relative
        overflow-hidden
        px-6
        pb-16
        pt-28
        sm:pb-20
        sm:pt-32
        lg:pb-24
        lg:pt-36
      "
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}

        <div
          className="
            absolute
            left-[-15%]
            top-[5%]
            h-128
            w-lg
            rounded-full
            bg-[#1877ff]/10
            blur-[140px]
          "
        />

        {/* Purple glow */}

        <div
          className="
            absolute
            right-[-10%]
            top-[5%]
            h-152
            w-152
            rounded-full
            bg-[#7c3aed]/10
            blur-[150px]
          "
        />

        {/* Pink glow */}

        <div
          className="
            absolute
            right-[15%]
            bottom-[-25%]
            h-80
            w-80
            rounded-full
            bg-[#ff1473]/7
            blur-[130px]
          "
        />

        {/* Bottom blue glow */}

        <div
          className="
            absolute
            left-[30%]
            bottom-[-20%]
            h-72
            w-72
            rounded-full
            bg-[#46b9ff]/6
            blur-[120px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            bg-size-[70px_70px]
          "
        />

        {/* Right radial light */}

        <div
          className="
            absolute
            right-[-8%]
            top-1/2
            h-136
            w-136
            -translate-y-1/2
            rounded-full
            bg-[radial-gradient(circle,rgba(24,119,255,0.12),rgba(124,58,237,0.08)_42%,transparent_72%)]
            blur-2xl
          "
        />
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="container-nexa relative z-10">
        <div className="max-w-5xl">
          {/* =================================================
              EYEBROW
          ================================================= */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#46b9ff]/20
              bg-[#46b9ff]/5
              px-3.5
              py-2
              shadow-[0_0_30px_rgba(70,185,255,0.05)]
            "
          >
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-[#46b9ff]/50
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2
                  w-2
                  rounded-full
                  bg-[#46b9ff]
                  shadow-[0_0_12px_rgba(70,185,255,0.9)]
                "
              />
            </span>

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#46b9ff]
                sm:text-xs
              "
            >
              Community
            </span>
          </div>

          {/* =================================================
              TITLE
          ================================================= */}

          <h1
            className="
              mt-6
              whitespace-nowrap
              text-[2.75rem]
              font-bold
              leading-[1.05]
              tracking-[-0.035em]
              text-white
              sm:text-5xl
              md:text-[3.4rem]
              lg:text-[3.55rem]
              xl:text-[3.8rem]
            "
          >
            {page.HeroTitle}
          </h1>

          {/* =================================================
              ACCENT LINE
          ================================================= */}

          <div
            className="
              mt-6
              h-1
              w-20
              rounded-full
              bg-linear-to-r
              from-[#46b9ff]
              via-[#7c3aed]
              to-[#ff1473]
            "
          />

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          {page.HeroDescription && (
            <p
              className="
                mt-6
                max-w-4xl
                text-base
                leading-7
                text-white/55
                sm:text-lg
                sm:leading-8
              "
            >
              {page.HeroDescription}
            </p>
          )}

          {/* =================================================
              COMMUNITY HIGHLIGHTS
          ================================================= */}

          <div
            className="
              mt-9
              grid
              max-w-4xl
              grid-cols-1
              gap-3
              sm:grid-cols-3
            "
          >
            {/* Stay Connected */}

            <div
              className="
                group
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/2.5
                px-4
                py-3.5
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#46b9ff]/25
                hover:bg-[#1877ff]/4
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#1877ff]/20
                  bg-[#1877ff]/10
                  text-[#46b9ff]
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                <span className="text-lg">✦</span>
              </div>

              <div>
                <p className="text-xs font-semibold text-white">
                  Stay Connected
                </p>

                <p className="mt-0.5 text-[11px] text-white/40">
                  Keep up with Nexa Poker
                </p>
              </div>
            </div>

            {/* Community Updates */}

            <div
              className="
                group
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/2.5
                px-4
                py-3.5
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#7c3aed]/25
                hover:bg-[#7c3aed]/4
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#7c3aed]/20
                  bg-[#7c3aed]/10
                  text-[#a78bfa]
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                <span className="text-lg">◈</span>
              </div>

              <div>
                <p className="text-xs font-semibold text-white">
                  Community Updates
                </p>

                <p className="mt-0.5 text-[11px] text-white/40">
                  News, events and updates
                </p>
              </div>
            </div>

            {/* Player Community */}

            <div
              className="
                group
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/2.5
                px-4
                py-3.5
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#ff1473]/25
                hover:bg-[#ff1473]/4
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#ff1473]/20
                  bg-[#ff1473]/10
                  text-[#ff4b96]
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                <span className="text-lg">♠</span>
              </div>

              <div>
                <p className="text-xs font-semibold text-white">
                  Player Community
                </p>

                <p className="mt-0.5 text-[11px] text-white/40">
                  Connect with fellow players
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          BOTTOM ACCENT
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-px
          w-[70%]
          -translate-x-1/2
          bg-linear-to-r
          from-transparent
          via-[#1877ff]/20
          to-transparent
        "
      />
    </section>
  );
}
