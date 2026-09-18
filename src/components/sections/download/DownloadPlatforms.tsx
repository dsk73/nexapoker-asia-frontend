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
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
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
    <section className="relative overflow-hidden px-6 pb-20 pt-4 sm:pb-24 sm:pt-6 lg:pb-28 lg:pt-8">
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[15%] h-72 w-72 rounded-full bg-[#1877ff]/5 blur-[120px]" />

        <div className="absolute right-[5%] top-[25%] h-80 w-80 rounded-full bg-[#7c3aed]/5 blur-[130px]" />
      </div>

      <div className="container-nexa relative z-10">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Choose Your Device
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            Select the version that works best for your device and start playing
            Nexa Poker.
          </p>
        </div>

        {/* =================================================
            PLATFORM GRID
        ================================================= */}

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {platforms.map((platform) => {
            const Icon = platform.icon;

            return (
              <a
                key={platform.label}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group relative overflow-hidden
                  rounded-[1.75rem]
                  border border-white/8
                  bg-[#0a0d14]
                  p-6
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:border-[#1877ff]/40
                  hover:bg-[#0d111a]
                  hover:shadow-[0_25px_70px_rgba(0,0,0,0.4)]
                  sm:p-7
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

                {/* Top highlight */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-8
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
                  "
                />

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="relative flex items-center gap-5 sm:gap-6">
                  {/* Platform Icon */}

                  <div
                    className="
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
                      text-[#46b9ff]
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                      transition-all
                      duration-300
                      group-hover:border-[#1877ff]/35
                      group-hover:bg-[#1877ff]/10
                      group-hover:shadow-[0_0_30px_rgba(24,119,255,0.12)]
                      sm:h-18
                      sm:w-18
                    "
                  >
                    <Icon size={28} strokeWidth={1.65} />
                  </div>

                  {/* Platform Information */}

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3
                        className="
                          text-xl
                          font-semibold
                          tracking-tight
                          text-white
                          transition-colors
                          duration-200
                          group-hover:text-[#46b9ff]
                        "
                      >
                        {platform.label}
                      </h3>

                      <span
                        className="
                          rounded-full
                          border
                          border-white/8
                          bg-white/[0.035]
                          px-2.5
                          py-1
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.12em]
                          text-white/35
                        "
                      >
                        {platform.badge}
                      </span>
                    </div>

                    <p className="mt-1.5 text-sm leading-6 text-white/45 sm:text-[15px]">
                      {platform.description}
                    </p>
                  </div>

                  {/* Arrow */}

                  <div
                    className="
                      flex
                      h-10
                      w-10
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
                    "
                  >
                    <ArrowUpRight size={18} strokeWidth={1.8} />
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
