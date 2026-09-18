// src/components/sections/community/CommunitySocialLinks.tsx

import { Send } from "lucide-react";

const socialLinks = [
  {
    platform: "Instagram",
    label: "nexapoker",
    url: "https://www.instagram.com/NexaPoker/",
    type: "instagram",
  },
  {
    platform: "Telegram",
    label: "Nexa Poker",
    url: "https://t.me/nexapoker",
    type: "telegram",
  },
];

export default function CommunitySocialLinks() {
  return (
    <section
      className="
        relative
        overflow-hidden
        px-6
        pb-20
        pt-4
        sm:pb-24
        sm:pt-6
        lg:pb-28
        lg:pt-8
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
            left-[-10%]
            top-[15%]
            h-72
            w-72
            rounded-full
            bg-[#1877ff]/6
            blur-[120px]
          "
        />

        {/* Purple glow */}

        <div
          className="
            absolute
            right-[-8%]
            top-[20%]
            h-80
            w-80
            rounded-full
            bg-[#7c3aed]/6
            blur-[130px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            bg-size-[70px_70px]
          "
        />
      </div>

      <div className="container-nexa relative z-10">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="max-w-4xl">
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#46b9ff]
              sm:text-sm
            "
          >
            Stay Connected
          </p>

          <h2
            className="
              mt-3
              whitespace-nowrap
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-white
              sm:text-4xl
            "
          >
            Join Our Channel
          </h2>

          <p
            className="
              mt-4
              max-w-4xl
              text-base
              leading-7
              text-white/55
              sm:text-lg
              sm:leading-8
            "
          >
            Follow Nexa Poker and stay connected with the latest poker news,
            updates and community activities.
          </p>
        </div>

        {/* =================================================
            SOCIAL LINKS
        ================================================= */}

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow Nexa Poker on ${link.platform}`}
              className="
                group
                relative
                flex
                items-center
                gap-5
                overflow-hidden
                rounded-[1.75rem]
                border
                border-white/8
                bg-[#0a0d14]
                px-5
                py-5
                transition-all
                duration-300
                ease-out
                hover:-translate-y-1
                hover:border-[#1877ff]/35
                hover:bg-[#0d111a]
                hover:shadow-[0_25px_65px_rgba(0,0,0,0.38)]
                sm:px-6
                sm:py-6
              "
            >
              {/* =================================================
                  CARD GLOW
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-40
                  w-40
                  rounded-full
                  bg-[#1877ff]/7
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-[#1877ff]/14
                "
              />

              {/* =================================================
                  TOP HIGHLIGHT
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-8
                  top-0
                  h-px
                  bg-linear-to-r
                  from-transparent
                  via-[#46b9ff]/35
                  to-transparent
                  opacity-60
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              {/* =================================================
                  ICON
              ================================================= */}

              <div
                className="
                  relative
                  flex
                  h-16
                  w-16
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/9
                  bg-white/[0.035]
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                  transition-all
                  duration-300
                  group-hover:border-[#1877ff]/30
                  group-hover:bg-[#1877ff]/10
                  group-hover:shadow-[0_0_30px_rgba(24,119,255,0.12)]
                  sm:h-18
                  sm:w-18
                "
              >
                {link.type === "instagram" ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="
                      h-7
                      w-7
                      text-white
                      transition-all
                      duration-300
                      group-hover:scale-105
                      group-hover:text-[#46b9ff]
                    "
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />

                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                ) : (
                  <Send
                    size={30}
                    strokeWidth={1.8}
                    className="
                      text-white
                      transition-all
                      duration-300
                      group-hover:scale-105
                      group-hover:-rotate-3
                      group-hover:text-[#46b9ff]
                    "
                  />
                )}
              </div>

              {/* =================================================
                  PLATFORM + ID
              ================================================= */}

              <div className="relative min-w-0 flex-1">
                <p
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-white/40
                  "
                >
                  {link.platform}
                </p>

                <p
                  className="
                    mt-1
                    truncate
                    text-base
                    font-semibold
                    text-white
                    transition-colors
                    duration-200
                    group-hover:text-[#46b9ff]
                  "
                >
                  {link.label}
                </p>
              </div>

              {/* =================================================
                  ARROW
              ================================================= */}

              <div
                className="
                  relative
                  hidden
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/8
                  bg-white/2.5
                  text-white/30
                  transition-all
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:border-[#1877ff]/30
                  group-hover:bg-[#1877ff]/10
                  group-hover:text-[#46b9ff]
                  sm:flex
                "
              >
                <span className="text-lg leading-none">↗</span>
              </div>

              {/* =================================================
                  BOTTOM ACCENT
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-8
                  right-8
                  h-px
                  bg-linear-to-r
                  from-transparent
                  via-[#46b9ff]/25
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
