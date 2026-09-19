// src/components/sections/download/DownloadPlatforms.tsx

import {
  Apple,
  ArrowUpRight,
  Monitor,
  Smartphone,
  TabletSmartphone,
} from "lucide-react";

import type { DownloadPage } from "@/types/pages";

interface DownloadPlatformsProps {
  page: DownloadPage;
}

interface DownloadOption {
  label: string;
  description: string;
  url: string;
  icon: React.ComponentType<{
    size?: number;
    strokeWidth?: number;
  }>;
  badge: string;
}

export default function DownloadPlatforms({ page }: DownloadPlatformsProps) {
  const platforms: DownloadOption[] = [
    {
      label: "Windows",
      description: "Download Nexa Poker for Windows",
      url: page.WindowsURL,
      icon: Monitor,
      badge: "Desktop",
    },
    {
      label: "macOS",
      description: "Download Nexa Poker for Mac",
      url: page.MacURL,
      icon: Apple,
      badge: "Desktop",
    },
    {
      label: "Android",
      description: "Download the Nexa Poker Android app",
      url: page.AndroidURL,
      icon: Smartphone,
      badge: "Mobile",
    },
    {
      label: "iOS",
      description: "Download the Nexa Poker iOS app",
      url: page.IOSURL,
      icon: TabletSmartphone,
      badge: "Mobile",
    },
  ].filter((platform) => Boolean(platform.url));

  if (platforms.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-2 sm:px-6 sm:pb-20 sm:pt-4 md:pb-24 md:pt-6 lg:pb-28 lg:pt-8">
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[12%] h-60 w-60 rounded-full bg-[#1877ff]/5 blur-[100px] sm:left-[8%] sm:h-72 sm:w-72 sm:blur-[120px]" />

        <div className="absolute right-[-15%] top-[30%] h-64 w-64 rounded-full bg-[#7c3aed]/5 blur-[110px] sm:right-[5%] sm:h-80 sm:w-80 sm:blur-[130px]" />
      </div>

      <div className="container-nexa relative z-10">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Choose Your Device
          </h2>

          <p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/55 sm:mt-4 sm:text-lg sm:leading-8">
            Select the version that works best for your device and start playing
            Nexa Poker.
          </p>
        </div>

        {/* =================================================
            PLATFORM GRID
        ================================================= */}

        <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-8 sm:gap-5 lg:grid-cols-2">
          {platforms.map((platform) => {
            const Icon = platform.icon;

            return (
              <a
                key={platform.label}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/8
                  bg-[#0a0d14]
                  p-4
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:border-[#1877ff]/40
                  hover:bg-[#0d111a]
                  hover:shadow-[0_25px_70px_rgba(0,0,0,0.4)]
                  sm:rounded-[1.75rem]
                  sm:p-6
                  md:p-7
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
                    h-32
                    w-32
                    rounded-full
                    bg-[#1877ff]/7
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:bg-[#1877ff]/14
                    sm:h-40
                    sm:w-40
                  "
                />

                {/* Top highlight */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-6
                    top-0
                    h-px
                    bg-linear-to-r
                    from-transparent
                    via-[#46b9ff]/40
                    to-transparent
                    opacity-60
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                    sm:inset-x-8
                  "
                />

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="relative flex min-w-0 items-center gap-3 sm:gap-5 md:gap-6">
                  {/* Platform Icon */}

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/9
                      bg-white/[0.035]
                      text-[#46b9ff]
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                      transition-all
                      duration-300
                      group-hover:border-[#1877ff]/35
                      group-hover:bg-[#1877ff]/10
                      group-hover:shadow-[0_0_30px_rgba(24,119,255,0.12)]
                      sm:h-16
                      sm:w-16
                      sm:rounded-2xl
                      md:h-18
                      md:w-18
                    "
                  >
                    <Icon size={24} strokeWidth={1.65} />
                  </div>

                  {/* Platform Information */}

                  <div className="min-w-0 flex-1">
                    <div className="flex min-w-0 flex-wrap items-center gap-2">
                      <h3
                        className="
                          text-lg
                          font-semibold
                          tracking-tight
                          text-white
                          transition-colors
                          duration-200
                          group-hover:text-[#46b9ff]
                          sm:text-xl
                        "
                      >
                        {platform.label}
                      </h3>

                      <span
                        className="
                          shrink-0
                          rounded-full
                          border
                          border-white/8
                          bg-white/[0.035]
                          px-2
                          py-0.5
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-widest
                          text-white/35
                          sm:px-2.5
                          sm:py-1
                          sm:text-[10px]
                          sm:tracking-[0.12em]
                        "
                      >
                        {platform.badge}
                      </span>
                    </div>

                    <p className="mt-1 text-xs leading-5 text-white/45 sm:mt-1.5 sm:text-sm sm:leading-6 md:text-[15px]">
                      {platform.description}
                    </p>
                  </div>

                  {/* Arrow */}

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/8
                      bg-white/2.5
                      text-white/35
                      transition-all
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:border-[#1877ff]/30
                      group-hover:bg-[#1877ff]/10
                      group-hover:text-[#46b9ff]
                      sm:h-10
                      sm:w-10
                    "
                  >
                    <ArrowUpRight size={17} strokeWidth={1.8} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
