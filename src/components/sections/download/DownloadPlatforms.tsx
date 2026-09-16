import { Apple, Smartphone, Monitor, TabletSmartphone } from "lucide-react";

import type { DownloadPage } from "@/types/pages";

interface DownloadPlatformsProps {
  page: DownloadPage;
}

interface DownloadOption {
  label: string;
  description: string;
  url: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
}

export default function DownloadPlatforms({ page }: DownloadPlatformsProps) {
  const platforms: DownloadOption[] = [
    {
      label: "Windows",
      description: "Download Nexa Poker for Windows",
      url: page.WindowsURL,
      icon: Monitor,
    },
    {
      label: "macOS",
      description: "Download Nexa Poker for Mac",
      url: page.MacURL,
      icon: Apple,
    },
    {
      label: "Android",
      description: "Download the Nexa Poker Android app",
      url: page.AndroidURL,
      icon: Smartphone,
    },
    {
      label: "iOS",
      description: "Download the Nexa Poker iOS app",
      url: page.IOSURL,
      icon: TabletSmartphone,
    },
  ].filter((platform) => Boolean(platform.url));

  if (platforms.length === 0) {
    return null;
  }

  return (
    <section className="px-6 pb-20 sm:pb-24 lg:pb-28">
      <div className="container-nexa">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#46b9ff] sm:text-sm">
            Choose Your Platform
          </p>

          <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Download Nexa Poker
          </h2>

          <p className="mt-4 text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            Choose the version that works best for your device and start playing
            Nexa Poker.
          </p>
        </div>

        {/* =================================================
            PLATFORM GRID
        ================================================= */}

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => {
            const Icon = platform.icon;

            return (
              <a
                key={platform.label}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-37.5 items-center gap-5 rounded-3xl border border-white/10 bg-[#0a0d14] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1877ff]/40 hover:bg-[#0d111a] hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              >
                {/* =================================================
                    ICON
                ================================================= */}

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/4 text-[#46b9ff] transition-all duration-300 group-hover:border-[#1877ff]/30 group-hover:bg-[#1877ff]/10">
                  <Icon size={26} strokeWidth={1.7} />
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
                    Platform
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-white transition-colors duration-200 group-hover:text-[#46b9ff]">
                    {platform.label}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-white/45">
                    {platform.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
