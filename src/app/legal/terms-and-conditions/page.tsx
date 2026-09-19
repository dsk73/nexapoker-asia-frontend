// src/app/legal/terms-and-conditions/page.tsx

import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Nexa Poker Terms & Conditions | Online Poker Platform",
  description:
    "Read the Nexa Poker Terms & Conditions covering account registration, platform usage, responsible play, payments, promotions, intellectual property and website access.",
  keywords: [
    "Nexa Poker terms and conditions",
    "Nexa Poker terms",
    "online poker terms",
    "poker platform terms",
    "Nexa Poker rules",
    "Nexa Poker account",
    "online poker platform",
  ],
  alternates: {
    canonical: "/legal/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Nexa Poker Terms & Conditions | Online Poker Platform",
    description:
      "Read the Nexa Poker Terms & Conditions covering account registration, platform usage, responsible play, payments, promotions and website access.",
    url: "/legal/terms-and-conditions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexa Poker Terms & Conditions | Online Poker Platform",
    description:
      "Read the Nexa Poker Terms & Conditions covering account registration, platform usage, responsible play, payments, promotions and website access.",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050507] text-white">
      <Navbar />

      <main>
        {/* =====================================================
            HERO
            ===================================================== */}

        <section className="relative overflow-hidden border-b border-white/10 bg-[#050507]">
          {/* Background atmosphere */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-25%] top-[-30%] h-80 w-80 rounded-full bg-[#1877ff]/10 blur-[110px] sm:left-[-10%] sm:h-125 sm:w-125 sm:blur-[140px]" />

            <div className="absolute right-[-20%] top-[-20%] h-72 w-72 rounded-full bg-[#8b2cff]/10 blur-[110px] sm:right-[-8%] sm:h-112.5 sm:w-112.5 sm:blur-[140px]" />

            <div className="absolute bottom-[-35%] left-1/2 h-80 w-105 -translate-x-1/2 rounded-full bg-[#ff1764]/5 blur-[110px] sm:bottom-[-45%] sm:h-100 sm:w-150 sm:blur-[140px]" />
          </div>

          {/* Subtle grid */}

          <div
            className="
              pointer-events-none absolute inset-0 opacity-[0.025]
              bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
              bg-size-[64px_64px]
            "
          />

          {/* Extra top spacing prevents the fixed mobile navbar from
              overlapping the Legal badge. Desktop spacing remains unchanged. */}
          <div className="container-nexa relative z-10 px-4 pb-16 pt-28 sm:px-6 sm:py-20 md:py-24 lg:py-28">
            <div className="max-w-5xl">
              {/* Eyebrow */}

              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3 py-2 sm:mb-6 sm:px-4">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#1877ff] shadow-[0_0_10px_rgba(24,119,255,0.8)]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55 sm:text-xs sm:tracking-[0.18em]">
                  Legal
                </span>
              </div>

              {/* Heading */}

              <h1 className="max-w-4xl wrap-break-word text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                Terms & Conditions
              </h1>

              <p className="mt-5 max-w-3xl text-[14px] leading-6 text-white/60 sm:mt-6 sm:text-lg sm:leading-8">
                These Terms & Conditions explain the rules and conditions that
                apply when you access or use Nexa Poker and its related
                services.
              </p>

              {/* Updated date */}

              <div className="mt-6 inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2.5 sm:mt-8 sm:px-4 sm:py-3">
                <span className="text-[10px] uppercase tracking-[0.12em] text-white/35 sm:text-xs sm:tracking-[0.14em]">
                  Last updated
                </span>

                <span className="text-xs font-medium text-white/70 sm:text-sm">
                  September 16, 2026
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTENT
            ===================================================== */}

        <section className="relative overflow-hidden">
          {/* Background glow */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-20%] top-[10%] h-80 w-80 rounded-full bg-[#1877ff]/2.5 blur-[110px] sm:left-[-15%] sm:h-125 sm:w-125 sm:blur-[130px]" />

            <div className="absolute right-[-20%] top-[45%] h-80 w-80 rounded-full bg-[#ff1764]/2.5 blur-[110px] sm:right-[-15%] sm:h-125 sm:w-125 sm:blur-[130px]" />
          </div>

          <div className="container-nexa relative z-10 px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
            <article className="mx-auto w-full max-w-6xl">
              {/* Intro */}

              <div className="mb-9 max-w-4xl sm:mb-12">
                <p className="text-[14px] leading-7 text-white/60 sm:text-lg sm:leading-8">
                  Please read these terms carefully before using Nexa Poker.
                  They outline the responsibilities of users and the conditions
                  that apply to access and use of the platform.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-5">
                {/* =================================================
                    1. ACCEPTANCE
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    1. Acceptance of These Terms
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      By accessing or using Nexa Poker, you acknowledge that you
                      have read, understood and agree to be bound by these Terms
                      & Conditions. If you do not agree with these terms, you
                      should not access or use the Nexa Poker platform or
                      related services.
                    </p>

                    <p>
                      These Terms & Conditions apply to your use of the Nexa
                      Poker website, applications, software, content, features
                      and related services, where applicable.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    2. ELIGIBILITY
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    2. Eligibility
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      You are responsible for ensuring that you are legally
                      permitted to access and use online poker services in the
                      jurisdiction where you are located.
                    </p>

                    <p>
                      You must provide accurate information during registration
                      and maintain the accuracy of your account information.
                      Nexa Poker may require additional information or
                      verification where necessary.
                    </p>

                    <p>
                      You must not use the platform if doing so would violate
                      any applicable law, regulation or restriction that applies
                      to you.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    3. ACCOUNT REGISTRATION
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    3. Account Registration
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      Certain Nexa Poker services may require you to create an
                      account. You are responsible for providing complete and
                      accurate registration information.
                    </p>

                    <p>
                      You are responsible for maintaining the confidentiality of
                      your account credentials and for activities carried out
                      through your account.
                    </p>

                    <p>
                      You should contact the appropriate Nexa Poker support
                      channel if you believe that your account credentials have
                      been compromised or that unauthorized activity has
                      occurred.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    4. PLATFORM USE
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    4. Use of the Platform
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      Nexa Poker should be used only for lawful purposes and in
                      accordance with these Terms & Conditions.
                    </p>

                    <p>
                      You agree not to misuse the platform, interfere with its
                      operation, attempt to gain unauthorized access to systems
                      or accounts, or use automated methods to disrupt or
                      manipulate the service.
                    </p>

                    <p>
                      You must not use the platform to distribute malicious
                      software, fraudulent content or material that could damage
                      or interfere with the operation of Nexa Poker or other
                      users&apos; access to the service.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    5. POKER PLAY
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    5. Poker Games and Play
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      Nexa Poker provides access to online poker-related
                      experiences, games and activities where available.
                    </p>

                    <p>
                      Game availability, features, formats and participation
                      requirements may change from time to time.
                    </p>

                    <p>
                      Players are responsible for understanding the rules of the
                      games they participate in and for making their own
                      decisions during play.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    6. RESPONSIBLE PLAY
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    6. Responsible Play
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      Poker should be treated as entertainment and played
                      responsibly.
                    </p>

                    <p>
                      You should only participate at a level that is appropriate
                      for your personal circumstances. Never play with money you
                      cannot afford to lose.
                    </p>

                    <p>
                      If you believe that your gaming activity is becoming
                      difficult to control, you should take a break and seek
                      appropriate support.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    7. PAYMENTS
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    7. Deposits, Withdrawals and Payments
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      Where payment or account balance features are available,
                      users must follow the applicable instructions and
                      requirements provided by Nexa Poker.
                    </p>

                    <p>
                      Payment methods, processing times, availability and
                      applicable requirements may vary depending on the service
                      and payment provider.
                    </p>

                    <p>
                      You are responsible for ensuring that the payment
                      information you provide is accurate and that you are
                      authorized to use the selected payment method.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    8. PROMOTIONS
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    8. Promotions and Bonuses
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      Nexa Poker may offer promotional campaigns, bonuses or
                      other promotional benefits from time to time.
                    </p>

                    <p>
                      Promotional offers may have additional terms, eligibility
                      requirements, expiration dates or participation
                      conditions. Those conditions will apply to the relevant
                      promotion.
                    </p>

                    <p>
                      Nexa Poker reserves the right to modify, suspend or
                      discontinue a promotion where permitted by applicable
                      requirements.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    9. INTELLECTUAL PROPERTY
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    9. Intellectual Property
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      Nexa Poker and its associated content, branding, logos,
                      designs, text, graphics, software and other materials may
                      be protected by intellectual property rights.
                    </p>

                    <p>
                      You may not reproduce, modify, distribute, publicly
                      display or otherwise use Nexa Poker content without
                      appropriate authorization, except where permitted by
                      applicable law.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    10. THIRD-PARTY SERVICES
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    10. Third-Party Services and Links
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      Nexa Poker may provide links to or integrate with
                      third-party websites, platforms, applications or services.
                    </p>

                    <p>
                      Third-party services may operate under their own terms,
                      conditions and privacy policies. Nexa Poker is not
                      responsible for the content, availability or policies of
                      third-party services that are outside its control.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    11. AVAILABILITY
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    11. Service Availability
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      Nexa Poker aims to provide a reliable online poker
                      experience, but continuous availability cannot be
                      guaranteed.
                    </p>

                    <p>
                      The platform may occasionally be unavailable because of
                      maintenance, updates, technical issues, security measures
                      or circumstances outside reasonable control.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    12. SUSPENSION
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    12. Account Suspension or Termination
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      Nexa Poker may restrict, suspend or terminate access to an
                      account or service where there is a reasonable basis to
                      believe that these Terms & Conditions have been violated
                      or that the platform is being used unlawfully or
                      improperly.
                    </p>

                    <p>
                      Access may also be restricted where required for security,
                      verification, regulatory or operational reasons.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    13. USER RESPONSIBILITY
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    13. User Responsibility
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      You are responsible for your use of the Nexa Poker
                      platform and for complying with applicable laws and
                      regulations.
                    </p>

                    <p>
                      You are also responsible for reviewing these Terms &
                      Conditions periodically to remain aware of any updates.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    14. DISCLAIMER
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    14. Disclaimer
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      Nexa Poker provides its website, software and related
                      services on an as-available basis. While reasonable
                      efforts may be made to maintain the platform, no guarantee
                      is made that the service will always be uninterrupted,
                      error-free or available in every location or on every
                      device.
                    </p>

                    <p>
                      Information provided through educational materials,
                      guides, articles or other content is for general
                      informational purposes and should not be treated as
                      professional advice.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    15. CHANGES
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    15. Changes to These Terms
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      Nexa Poker may update these Terms & Conditions from time
                      to time. Updated terms will be published on this page with
                      a revised update date where appropriate.
                    </p>

                    <p>
                      Your continued use of the platform after updated terms are
                      published may be subject to the revised Terms &
                      Conditions.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    16. CONTACT
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    16. Contact
                  </h2>

                  <p className="text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    If you have questions about these Terms & Conditions or your
                    use of Nexa Poker, please contact Nexa Poker through the
                    official support or community channels provided on the
                    website.
                  </p>
                </section>

                {/* =================================================
                    LEGAL NOTICE
                    ================================================= */}

                <section className="mt-6 rounded-2xl border border-[#1877ff]/15 bg-[#1877ff]/[0.035] p-5 sm:mt-8 sm:p-8">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1877ff] shadow-[0_0_12px_rgba(24,119,255,0.8)]" />

                    <p className="text-[13px] leading-6 text-white/45 sm:text-sm sm:leading-7">
                      This page provides general website terms and is intended
                      as an initial website version. It should be reviewed and
                      approved by the appropriate Nexa Poker legal or compliance
                      representative before being treated as the platform&apos;s
                      final legal terms.
                    </p>
                  </div>
                </section>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
