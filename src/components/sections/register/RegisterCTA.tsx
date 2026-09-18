import type { RegisterPage } from "@/types/pages";

interface RegisterCTAProps {
  page: RegisterPage;
}

export default function RegisterCTA({ page }: RegisterCTAProps) {
  if (!page.StepsTitle && !page.StepsDescription) {
    return null;
  }

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-4 sm:pb-24 sm:pt-6 lg:pb-28 lg:pt-8">
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#1877ff]/6 blur-[120px]" />

        <div className="absolute right-[10%] top-1/3 h-72 w-72 rounded-full bg-[#7c3aed]/6 blur-[130px]" />
      </div>

      <div className="container-nexa relative z-10">
        {/* =================================================
            CTA PANEL
        ================================================= */}

        <div
          className="
            relative
            overflow-hidden
            rounded-4xl
            border border-white/8
            bg-[#0a0d14]
            px-7
            py-9
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
              inset-x-10
              top-0
              h-px
              bg-linear-to-r
              from-transparent
              via-[#46b9ff]/45
              to-transparent
            "
          />

          {/* Blue glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-64
              w-64
              rounded-full
              bg-[#1877ff]/8
              blur-3xl
            "
          />

          {/* Pink glow */}

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              left-[35%]
              h-56
              w-56
              rounded-full
              bg-[#ff1473]/5
              blur-3xl
            "
          />

          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="relative z-10 max-w-5xl">
            {page.StepsBadge && (
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#46b9ff] sm:text-sm">
                {page.StepsBadge}
              </p>
            )}

            {page.StepsTitle && (
              <h2
                className="
                  mt-3
                  whitespace-nowrap
                  text-2xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-white
                  sm:text-3xl
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
                  text-sm
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
              left-8
              right-8
              h-px
              bg-linear-to-r
              from-transparent
              via-[#1877ff]/20
              to-transparent
            "
          />
        </div>
      </div>
    </section>
  );
}
