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
    <section className="relative overflow-hidden px-6 pb-20 pt-6 sm:pb-24 sm:pt-8 lg:pb-28 lg:pt-10">
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}

        <div className="absolute left-[-12%] top-[15%] h-80 w-80 rounded-full bg-[#1877ff]/7 blur-[120px]" />

        {/* Purple glow */}

        <div className="absolute right-[-8%] top-[35%] h-96 w-96 rounded-full bg-[#7c3aed]/6 blur-[140px]" />

        {/* Grid */}

        <div
          className="
            absolute inset-0
            opacity-[0.018]
            bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            bg-size-[70px_70px]
          "
        />
      </div>

      <div id="get-started" className="container-nexa relative z-10">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="max-w-none">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#46b9ff] sm:text-sm">
            {page.StepsBadge || "How It Works"}
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
              lg:text-[2.75rem]
              xl:text-5xl
            "
          >
            {page.StepsTitle || "Create Your Nexa Poker Account"}
          </h2>

          {page.StepsDescription && (
            <p
              className="
                mt-4
                whitespace-nowrap
                text-base
                leading-7
                text-white/55
                sm:text-lg
                sm:leading-8
              "
            >
              {page.StepsDescription}
            </p>
          )}
        </div>

        {/* =================================================
            STEPS GRID
        ================================================= */}

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {steps.map((step, index) => {
            const isPink = index % 2 === 1;

            return (
              <article
                key={step.id ?? `${step.Title}-${index}`}
                className={`
                  group relative overflow-hidden
                  min-h-45
                  rounded-3xl
                  border
                  bg-[#0a0d14]
                  px-7
                  py-7
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:bg-[#0d111a]
                  hover:shadow-[0_25px_65px_rgba(0,0,0,0.4)]
                  sm:min-h-47.5
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
                    bottom-7
                    left-0
                    top-7
                    w-0.75
                    rounded-r-full
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
                    h-44
                    w-44
                    rounded-full
                    blur-3xl
                    opacity-40
                    transition-opacity
                    duration-500
                    group-hover:opacity-70
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
                    inset-x-8
                    top-0
                    h-px
                    bg-linear-to-r
                    from-transparent
                    ${isPink ? "via-[#ff1473]/40" : "via-[#46b9ff]/40"}
                    to-transparent
                    opacity-70
                  `}
                />

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="relative z-10 max-w-[85%]">
                  <h3
                    className={`
                      text-xl
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
                    <p className="mt-4 text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
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
                    -bottom-10
                    -right-10
                    h-28
                    w-28
                    rounded-full
                    border
                    opacity-50
                    transition-all
                    duration-500
                    group-hover:scale-105
                    group-hover:opacity-75
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
