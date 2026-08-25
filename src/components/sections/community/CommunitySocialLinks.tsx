/* eslint-disable @next/next/no-img-element */

import type { CommunityPage } from "@/types/pages";
import { getMediaUrl } from "@/lib/media";
import { STRAPI_URL } from "@/lib/strapi";

interface CommunitySocialLinksProps {
  page: CommunityPage;
}

export default function CommunitySocialLinks({
  page,
}: CommunitySocialLinksProps) {
  const socialLinks = (page.SocialLinks ?? [])
    .filter((link) => link.Active)
    .sort((a, b) => (a.DisplayOrder ?? 0) - (b.DisplayOrder ?? 0));

  if (socialLinks.length === 0) {
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
            Stay Connected
          </p>

          <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Join Our Community
          </h2>

          <p className="mt-4 text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            Follow NexaPoker across our social channels and stay connected with
            the latest poker news, updates and community activities.
          </p>
        </div>

        {/* =================================================
            SOCIAL LINKS
        ================================================= */}

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((link, index) => {
            const mediaUrl = getMediaUrl(link.Icon, "medium");

            const rawMediaUrl = link.Icon?.url
              ? link.Icon.url.startsWith("http")
                ? link.Icon.url
                : `${STRAPI_URL}${link.Icon.url}`
              : null;

            const iconUrl = mediaUrl || rawMediaUrl;

            return (
              <a
                key={link.id ?? `${link.Platform}-${index}`}
                href={link.URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-[#0a0d14] px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#1877ff]/35 hover:bg-[#0d111a] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:px-6 sm:py-6"
              >
                {/* =================================================
                    ICON
                ================================================= */}

                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/4">
                  {iconUrl ? (
                    <img
                      src={iconUrl}
                      alt={link.Icon?.alternativeText || link.Label}
                      className="block h-full w-full object-contain p-2.5"
                    />
                  ) : (
                    <span className="text-xl font-bold uppercase text-[#46b9ff]">
                      {link.Platform?.charAt(0) || "S"}
                    </span>
                  )}
                </div>

                {/* =================================================
                    PLATFORM + ID
                ================================================= */}

                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
                    {link.Platform}
                  </p>

                  <p className="mt-1 truncate text-base font-semibold text-white transition-colors duration-200 group-hover:text-[#46b9ff]">
                    {link.Label}
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
