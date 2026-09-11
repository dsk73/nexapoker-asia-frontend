import { Send } from "lucide-react";

const socialLinks = [
  {
    platform: "Instagram",
    label: "@nexapoker",
    url: "https://www.instagram.com/nexapoker/",
    type: "instagram",
  },
  {
    platform: "Telegram",
    label: "NEXAPokerCommunity",
    url: "https://t.me/NEXAPokerCommunity",
    type: "telegram",
  },
];

export default function CommunitySocialLinks() {
  return (
    <section className="px-6 pb-20 sm:pb-24 lg:pb-28">
      <div className="container-nexa">
        {/* =================================================
            HEADER
        =================================================*/}

        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#46b9ff] sm:text-sm">
            Stay Connected
          </p>

          <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Join Our Community
          </h2>

          <p className="mt-4 text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            Follow NexaPoker and stay connected with the latest poker news,
            updates and community activities.
          </p>
        </div>

        {/* =================================================
            SOCIAL LINKS
        =================================================*/}

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow NexaPoker on ${link.platform}`}
              className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-[#0a0d14] px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#1877ff]/35 hover:bg-[#0d111a] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:px-6 sm:py-6"
            >
              {/* =================================================
                  ICON
              ================================================= */}

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/4">
                {link.type === "instagram" ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-white transition-colors duration-200 group-hover:text-[#46b9ff]"
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
                    className="text-white transition-colors duration-200 group-hover:text-[#46b9ff]"
                  />
                )}
              </div>

              {/* =================================================
                  PLATFORM + ID
              ================================================= */}

              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
                  {link.platform}
                </p>

                <p className="mt-1 truncate text-base font-semibold text-white transition-colors duration-200 group-hover:text-[#46b9ff]">
                  {link.label}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
