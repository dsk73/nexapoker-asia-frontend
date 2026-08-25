import type { RegisterPage } from "@/types/pages";

interface RegisterCTAProps {
  page: RegisterPage;
}

export default function RegisterCTA({ page }: RegisterCTAProps) {
  if (!page.StepsTitle && !page.StepsDescription) {
    return null;
  }

  return (
    <section className="px-6 pb-20 sm:pb-24 lg:pb-28">
      <div className="container-nexa">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0d14] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          {/* =================================================
              BACKGROUND GLOW
          ================================================= */}

          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#1877ff]/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#46b9ff]/5 blur-3xl" />

          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="relative max-w-4xl">
            {page.StepsBadge && (
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#46b9ff] sm:text-sm">
                {page.StepsBadge}
              </p>
            )}

            {page.StepsTitle && (
              <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                {page.StepsTitle}
              </h2>
            )}

            {page.StepsDescription && (
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                {page.StepsDescription}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
