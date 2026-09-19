//src/components/sections/register/RegisterSteps.tsx

import type { RegisterPage } from "@/types/pages";

interface RegisterStepsProps {
  page: RegisterPage;
}

export default function RegisterSteps({ page }: RegisterStepsProps) {
  const steps = page.Steps ?? [];

  if (steps.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-5 sm:px-6 sm:pb-20 sm:pt-8 md:pb-24 lg:pb-28 lg:pt-10">
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}

        <div className="absolute left-[-25%] top-[15%] h-64 w-64 rounded-full bg-[#1877ff]/6 blur-[100px] sm:left-[-12%] sm:h-80 sm:w-80 sm:bg-[#1877ff]/7 sm:blur-[120px]" />

        {/* Purple glow */}

        <div className="absolute right-[-20%] top-[35%] h-72 w-72 rounded-full bg-[#7c3aed]/5 blur-[110px] sm:right-[-8%] sm:h-96 sm:w-96 sm:bg-[#7c3aed]/6 sm:blur-[140px]" />

        {/* Grid */}

        <div
          className="
            absolute inset-0
            opacity-[0.014]
            bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            bg-size-[55px_55px]
            sm:bg-size-[70px_70px]
            sm:opacity-[0.018]
          "
        />
      </div>

      <div id="get-started" className="container-nexa relative z-10">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="max-w-4xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#46b9ff] sm:text-xs sm:tracking-[0.18em] md:text-sm">
            {page.StepsBadge || "How It Works"}
          </p>

          <h2
            className="
              mt-2
              max-w-full
              text-2xl
              font-bold
              leading-tight
              tracking-tight
              text-white
              sm:mt-3
              sm:text-4xl
              lg:whitespace-nowrap
              lg:text-[2.75rem]
              xl:text-5xl
            "
          >
            {page.StepsTitle || "Create Your Nexa Poker Account"}
          </h2>

          {page.StepsDescription && (
            <p
              className="
                mt-3
                max-w-3xl
                text-sm
                leading-6
                text-white/55
                sm:mt-4
                sm:text-lg
                sm:leading-8
                lg:whitespace-nowrap
              "
            >
              {page.StepsDescription}
            </p>
          )}
        </div>

        {/* =================================================
            STEPS GRID
        ================================================= */}

        <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:mt-10">
          {steps.map((step, index) => {
            const isPink = index % 2 === 1;

            return (
              <article
                key={step.id ?? `${step.Title}-${index}`}
                className={`
                  group relative min-h-40 overflow-hidden
                  rounded-2xl
                  border
                  bg-[#0a0d14]
                  px-5
                  py-6
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:bg-[#0d111a]
                  hover:shadow-[0_25px_65px_rgba(0,0,0,0.4)]
                  sm:min-h-47.5
                  sm:rounded-3xl
                  sm:px-8
                  sm:py-8
                  ${
                    isPink
                      ? "border-[#ff1473]/20 hover:border-[#ff1473]/40"
                      : "border-[#1877ff]/20 hover:border-[#1877ff]/40"
                  }
                `}
              >
                {/* =================================================
                    LEFT ACCENT
                ================================================= */}

                <div
                  className={`
                    absolute
                    bottom-6
                    left-0
                    top-6
                    w-0.75
                    rounded-r-full
                    sm:bottom-7
                    sm:top-7
                    ${
                      isPink
                        ? "bg-[#ff1473] shadow-[0_0_14px_rgba(255,20,115,0.45)]"
                        : "bg-[#1877ff] shadow-[0_0_14px_rgba(24,119,255,0.45)]"
                    }
                  `}
                />

                {/* =================================================
                    CARD GLOW
                ================================================= */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-36
                    w-36
                    rounded-full
                    blur-3xl
                    opacity-35
                    transition-opacity
                    duration-500
                    group-hover:opacity-70
                    sm:h-44
                    sm:w-44
                    ${isPink ? "bg-[#ff1473]/8" : "bg-[#1877ff]/8"}
                  `}
                />

                {/* =================================================
                    TOP HIGHLIGHT
                ================================================= */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    inset-x-5
                    top-0
                    h-px
                    bg-linear-to-r
                    from-transparent
                    ${isPink ? "via-[#ff1473]/40" : "via-[#46b9ff]/40"}
                    to-transparent
                    opacity-70
                    sm:inset-x-8
                  `}
                />

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="relative z-10 max-w-[82%] sm:max-w-[85%]">
                  <h3
                    className={`
                      text-lg
                      font-semibold
                      leading-tight
                      tracking-tight
                      text-white
                      transition-colors
                      duration-200
                      sm:text-[1.35rem]
                      ${
                        isPink
                          ? "group-hover:text-[#ff4a91]"
                          : "group-hover:text-[#46b9ff]"
                      }
                    `}
                  >
                    {step.Title}
                  </h3>

                  {step.Description && (
                    <p className="mt-3 text-[13px] leading-6 text-white/50 sm:mt-4 sm:text-base sm:leading-7">
                      {step.Description}
                    </p>
                  )}
                </div>

                {/* =================================================
                    DECORATIVE POKER CHIP
                ================================================= */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    -bottom-9
                    -right-9
                    h-24
                    w-24
                    rounded-full
                    border
                    opacity-40
                    transition-all
                    duration-500
                    group-hover:scale-105
                    group-hover:opacity-75
                    sm:-bottom-10
                    sm:-right-10
                    sm:h-28
                    sm:w-28
                    sm:opacity-50
                    ${isPink ? "border-[#ff1473]/30" : "border-[#1877ff]/30"}
                  `}
                >
                  <div
                    className={`
                      absolute
                      inset-2
                      rounded-full
                      border
                      ${isPink ? "border-[#ff1473]/20" : "border-[#1877ff]/20"}
                    `}
                  />

                  <div
                    className={`
                      absolute
                      inset-5
                      rounded-full
                      border
                      ${isPink ? "border-[#ff1473]/20" : "border-[#1877ff]/20"}
                    `}
                  />

                  <div
                    className={`
                      absolute
                      left-1/2
                      top-0
                      h-3
                      w-px
                      -translate-x-1/2
                      ${isPink ? "bg-[#ff1473]/35" : "bg-[#1877ff]/35"}
                    `}
                  />

                  <div
                    className={`
                      absolute
                      bottom-0
                      left-1/2
                      h-3
                      w-px
                      -translate-x-1/2
                      ${isPink ? "bg-[#ff1473]/35" : "bg-[#1877ff]/35"}
                    `}
                  />

                  <div
                    className={`
                      absolute
                      left-0
                      top-1/2
                      h-px
                      w-3
                      -translate-y-1/2
                      ${isPink ? "bg-[#ff1473]/35" : "bg-[#1877ff]/35"}
                    `}
                  />

                  <div
                    className={`
                      absolute
                      right-0
                      top-1/2
                      h-px
                      w-3
                      -translate-y-1/2
                      ${isPink ? "bg-[#ff1473]/35" : "bg-[#1877ff]/35"}
                    `}
                  />

                  <div
                    className={`
                      absolute
                      left-1/2
                      top-1/2
                      h-5
                      w-5
                      -translate-x-1/2
                      -translate-y-1/2
                      rotate-45
                      ${isPink ? "bg-[#ff1473]/15" : "bg-[#1877ff]/15"}
                    `}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
