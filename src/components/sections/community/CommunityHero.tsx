import type { CommunityPage } from "@/types/pages";

interface CommunityHeroProps {
  page: CommunityPage;
}

export default function CommunityHero({ page }: CommunityHeroProps) {
  return (
    <section className="px-6 pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pt-36">
      <div className="container-nexa">
        <div className="max-w-5xl">
          {/* =================================================
              EYEBROW
          ================================================= */}

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#46b9ff] sm:text-sm">
            Community
          </p>

          {/* =================================================
              TITLE
          ================================================= */}

          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {page.HeroTitle}
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          {page.HeroDescription && (
            <p className="mt-5 max-w-4xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              {page.HeroDescription}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
