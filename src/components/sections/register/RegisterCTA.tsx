//src/components/sections/register/RegisterCTA.tsx

import type { RegisterPage } from "@/types/pages";

interface RegisterCTAProps {
  page: RegisterPage;
}

export default function RegisterCTA({ page }: RegisterCTAProps) {
  if (!page.StepsTitle && !page.StepsDescription) {
    return null;
  }

  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-3 sm:px-6 sm:pb-20 sm:pt-6 md:pb-24 lg:pb-28 lg:pt-8">
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-[#1877ff]/5 blur-[100px] sm:left-[15%] sm:h-64 sm:w-64 sm:bg-[#1877ff]/6 sm:blur-[120px]" />

        <div className="absolute right-[-5%] top-1/3 h-60 w-60 rounded-full bg-[#7c3aed]/5 blur-[110px] sm:right-[10%] sm:h-72 sm:w-72 sm:bg-[#7c3aed]/6 sm:blur-[130px]" />
      </div>

      <div className="container-nexa relative z-10">
        {/* =================================================
            CTA PANEL
        ================================================= */}

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border border-white/8
            bg-[#0a0d14]
            px-5
            py-7
            sm:rounded-4xl
            sm:px-10
            sm:py-10
            lg:px-14
            lg:py-12
          "
        >
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
              via-[#46b9ff]/45
              to-transparent
              sm:inset-x-10
            "
          />

          {/* Blue glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-52
              w-52
              rounded-full
              bg-[#1877ff]/7
              blur-3xl
              sm:-right-20
              sm:-top-20
              sm:h-64
              sm:w-64
              sm:bg-[#1877ff]/8
            "
          />

          {/* Pink glow */}

          <div
            className="
              pointer-events-none
              absolute
              -bottom-20
              left-[25%]
              h-48
              w-48
              rounded-full
              bg-[#ff1473]/5
              blur-3xl
              sm:-bottom-24
              sm:left-[35%]
              sm:h-56
              sm:w-56
            "
          />

          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="relative z-10 max-w-5xl">
            {page.StepsBadge && (
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#46b9ff] sm:text-xs sm:tracking-[0.18em] md:text-sm">
                {page.StepsBadge}
              </p>
            )}

            {page.StepsTitle && (
              <h2
                className="
                  mt-2
                  max-w-full
                  text-xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-white
                  sm:mt-3
                  sm:text-3xl
                  lg:whitespace-nowrap
                  lg:text-4xl
                "
              >
                {page.StepsTitle}
              </h2>
            )}

            {page.StepsDescription && (
              <p
                className="
                  mt-3
                  max-w-4xl
                  text-[13px]
                  leading-6
                  text-white/50
                  sm:text-base
                  sm:leading-7
                "
              >
                {page.StepsDescription}
              </p>
            )}
          </div>

          {/* =================================================
              DECORATIVE ACCENT
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-5
              right-5
              h-px
              bg-linear-to-r
              from-transparent
              via-[#1877ff]/20
              to-transparent
              sm:left-8
              sm:right-8
            "
          />
        </div>
      </div>
    </section>
  );
}
