/* eslint-disable @next/next/no-img-element */

import type { RegisterPage } from "@/types/pages";
import { getMediaUrl } from "@/lib/media";
import { STRAPI_URL } from "@/lib/strapi";

interface RegisterStepsProps {
  page: RegisterPage;
}

export default function RegisterSteps({ page }: RegisterStepsProps) {
  const steps = page.Steps ?? [];

  if (steps.length === 0) {
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
            {page.StepsBadge || "How It Works"}
          </p>

          <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            {page.StepsTitle || "Create Your NexaPoker Account"}
          </h2>

          {page.StepsDescription && (
            <p className="mt-4 text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              {page.StepsDescription}
            </p>
          )}
        </div>

        {/* =================================================
            STEPS
        ================================================= */}

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {steps.map((step, index) => {
            const iconUrl = getMediaUrl(step.Icon, "medium");

            const rawIconUrl = step.Icon?.url
              ? step.Icon.url.startsWith("http")
                ? step.Icon.url
                : `${STRAPI_URL}${step.Icon.url}`
              : null;

            const finalIconUrl = iconUrl || rawIconUrl;

            return (
              <article
                key={step.id ?? `${step.Title}-${index}`}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0d14] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1877ff]/35 hover:bg-[#0d111a] hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              >
                {/* =================================================
                    STEP NUMBER
                ================================================= */}

                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#1877ff]/20 bg-[#1877ff]/10 text-sm font-bold text-[#46b9ff]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* =================================================
                      ICON
                  ================================================= */}

                  {finalIconUrl && (
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/4">
                      <img
                        src={finalIconUrl}
                        alt={step.Icon?.alternativeText || step.Title}
                        className="block h-full w-full object-contain p-2"
                      />
                    </div>
                  )}
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="mt-7">
                  <h3 className="text-xl font-semibold leading-tight text-white transition-colors duration-200 group-hover:text-[#46b9ff]">
                    {step.Title}
                  </h3>

                  {step.Description && (
                    <p className="mt-3 text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
                      {step.Description}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
