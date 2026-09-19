// src/app/legal/privacy-policy/page.tsx

import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Nexa Poker Privacy Policy | Your Privacy & Data",
  description:
    "Read the Nexa Poker Privacy Policy to understand how account information, personal data and website usage information may be collected, used, protected and managed.",
  keywords: [
    "Nexa Poker privacy policy",
    "Nexa Poker privacy",
    "Nexa Poker data protection",
    "online poker privacy policy",
    "poker platform privacy",
    "Nexa Poker account privacy",
    "personal data protection",
  ],
  alternates: {
    canonical: "/legal/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Nexa Poker Privacy Policy | Your Privacy & Data",
    description:
      "Read the Nexa Poker Privacy Policy to understand how personal information and website usage data may be collected, used and protected.",
    url: "/legal/privacy-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexa Poker Privacy Policy | Your Privacy & Data",
    description:
      "Learn how Nexa Poker handles personal information, account data and website usage information.",
  },
};

export default function PrivacyPolicyPage() {
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

          {/* Extra mobile top spacing keeps the Legal badge below the fixed Navbar. */}

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
                Privacy Policy
              </h1>

              <p className="mt-5 max-w-3xl text-[14px] leading-6 text-white/60 sm:mt-6 sm:text-lg sm:leading-8">
                This Privacy Policy explains how Nexa Poker may collect, use,
                protect and manage information when you access or use our
                website and related services.
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
          {/* Background atmosphere */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-20%] top-[10%] h-80 w-80 rounded-full bg-[#1877ff]/2.5 blur-[110px] sm:left-[-15%] sm:h-125 sm:w-125 sm:blur-[130px]" />

            <div className="absolute right-[-20%] top-[45%] h-80 w-80 rounded-full bg-[#ff1764]/2.5 blur-[110px] sm:right-[-15%] sm:h-125 sm:w-125 sm:blur-[130px]" />
          </div>

          <div className="container-nexa relative z-10 px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
            <article className="mx-auto w-full max-w-6xl">
              {/* Intro */}

              <div className="mb-9 max-w-4xl sm:mb-12">
                <p className="text-[14px] leading-7 text-white/60 sm:text-lg sm:leading-8">
                  Please read this Privacy Policy carefully to understand how
                  information may be handled when using Nexa Poker and its
                  related services.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-5">
                {/* =================================================
                    1. INTRODUCTION
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    1. Introduction
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      Nexa Poker respects your privacy and is committed to
                      handling personal information responsibly. This Privacy
                      Policy describes the types of information that may be
                      collected when you use the Nexa Poker website,
                      applications and related services.
                    </p>

                    <p>
                      By accessing or using Nexa Poker, you acknowledge that you
                      have read this Privacy Policy and understand how
                      information may be handled as described below.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    2. INFORMATION WE MAY COLLECT
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    2. Information We May Collect
                  </h2>

                  <p className="text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    Depending on how you use Nexa Poker, we may collect
                    information that you provide directly, information generated
                    through your use of the platform and technical information
                    associated with your device or browser.
                  </p>

                  <div className="mt-5 grid gap-4 sm:mt-7 sm:grid-cols-2 sm:gap-5">
                    {/* Account Information */}

                    <div className="rounded-xl border border-white/[0.07] bg-black/20 p-4 sm:p-5">
                      <h3 className="text-base font-semibold leading-6 text-white sm:text-lg">
                        Account Information
                      </h3>

                      <p className="mt-2 text-[13px] leading-6 text-white/55 sm:text-sm">
                        When you create or maintain an account, information such
                        as your name, date of birth, email address and other
                        registration details may be collected.
                      </p>
                    </div>

                    {/* Transaction Information */}

                    <div className="rounded-xl border border-white/[0.07] bg-black/20 p-4 sm:p-5">
                      <h3 className="text-base font-semibold leading-6 text-white sm:text-lg">
                        Transaction Information
                      </h3>

                      <p className="mt-2 text-[13px] leading-6 text-white/55 sm:text-sm">
                        Where payment, deposit or withdrawal services are
                        available, information associated with transactions may
                        be processed as necessary to provide those services.
                      </p>
                    </div>

                    {/* Technical Information */}

                    <div className="rounded-xl border border-white/[0.07] bg-black/20 p-4 sm:p-5">
                      <h3 className="text-base font-semibold leading-6 text-white sm:text-lg">
                        Technical Information
                      </h3>

                      <p className="mt-2 text-[13px] leading-6 text-white/55 sm:text-sm">
                        Technical information may include details such as
                        browser type, device information, operating system, IP
                        address and other technical data generated when
                        interacting with the website or services.
                      </p>
                    </div>

                    {/* Communications */}

                    <div className="rounded-xl border border-white/[0.07] bg-black/20 p-4 sm:p-5">
                      <h3 className="text-base font-semibold leading-6 text-white sm:text-lg">
                        Communications
                      </h3>

                      <p className="mt-2 text-[13px] leading-6 text-white/55 sm:text-sm">
                        If you contact Nexa Poker through available support or
                        community channels, information contained in your
                        communication may be used to respond to your request.
                      </p>
                    </div>
                  </div>
                </section>

                {/* =================================================
                    3. HOW INFORMATION IS USED
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    3. How Information May Be Used
                  </h2>

                  <p className="text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    Information may be used for purposes such as providing and
                    maintaining Nexa Poker services, managing accounts,
                    responding to support requests and improving the website and
                    user experience.
                  </p>

                  <ul className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2">
                    <li className="rounded-lg border border-white/6 bg-black/15 px-4 py-3 text-[13px] leading-6 text-white/60 sm:text-sm">
                      Creating and managing user accounts.
                    </li>

                    <li className="rounded-lg border border-white/6 bg-black/15 px-4 py-3 text-[13px] leading-6 text-white/60 sm:text-sm">
                      Providing requested services and platform features.
                    </li>

                    <li className="rounded-lg border border-white/6 bg-black/15 px-4 py-3 text-[13px] leading-6 text-white/60 sm:text-sm">
                      Processing applicable transactions.
                    </li>

                    <li className="rounded-lg border border-white/6 bg-black/15 px-4 py-3 text-[13px] leading-6 text-white/60 sm:text-sm">
                      Communicating important account or service information.
                    </li>

                    <li className="rounded-lg border border-white/6 bg-black/15 px-4 py-3 text-[13px] leading-6 text-white/60 sm:text-sm">
                      Providing customer or technical support.
                    </li>

                    <li className="rounded-lg border border-white/6 bg-black/15 px-4 py-3 text-[13px] leading-6 text-white/60 sm:text-sm">
                      Maintaining platform security and preventing misuse.
                    </li>

                    <li className="rounded-lg border border-white/6 bg-black/15 px-4 py-3 text-[13px] leading-6 text-white/60 sm:text-sm">
                      Understanding website usage and improving our services.
                    </li>

                    <li className="rounded-lg border border-white/6 bg-black/15 px-4 py-3 text-[13px] leading-6 text-white/60 sm:text-sm">
                      Complying with applicable legal or regulatory
                      requirements.
                    </li>
                  </ul>
                </section>

                {/* =================================================
                    4. LEGAL BASIS
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    4. How We May Process Information
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      Personal information may be processed where necessary to
                      provide requested services, manage an account, maintain
                      security, comply with applicable requirements or pursue
                      other legitimate operational purposes.
                    </p>

                    <p>
                      Where consent is required for a particular use of
                      information, the applicable consent may be requested
                      through the relevant service or communication.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    5. INFORMATION SHARING
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    5. Sharing of Information
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      Nexa Poker does not treat personal information as
                      something to be shared indiscriminately. Information may
                      be disclosed where reasonably necessary to provide
                      services, operate the platform, process transactions,
                      maintain security or comply with applicable legal
                      requirements.
                    </p>

                    <p>
                      Service providers and technology partners may process
                      certain information on behalf of Nexa Poker where required
                      to support website, hosting, payment, security, analytics
                      or other operational functions.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    6. THIRD-PARTY SERVICES
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    6. Third-Party Services and Links
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      Nexa Poker may provide links to third-party websites,
                      applications, platforms or services. These third parties
                      may collect and process information under their own
                      privacy policies.
                    </p>

                    <p>
                      Nexa Poker does not control the privacy practices of
                      third-party services. You should review the applicable
                      privacy policies before providing personal information to
                      those services.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    7. DATA SECURITY
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    7. Data Security
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      Nexa Poker takes reasonable measures designed to protect
                      information against unauthorized access, misuse,
                      alteration, disclosure or loss.
                    </p>

                    <p>
                      However, no method of transmitting or storing information
                      electronically can be guaranteed to be completely secure.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    8. DATA RETENTION
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    8. Data Retention
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      Personal information may be retained for as long as
                      reasonably necessary to provide services, maintain account
                      records, resolve disputes, enforce applicable agreements,
                      maintain security or comply with legal and regulatory
                      obligations.
                    </p>

                    <p>
                      Retention periods may vary depending on the type of
                      information and the purpose for which it was collected.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    9. YOUR INFORMATION
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    9. Your Information and Privacy Choices
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      Depending on applicable law, you may have rights relating
                      to your personal information, including rights to request
                      access, correction, deletion or other forms of control
                      over your data.
                    </p>

                    <p>
                      The availability and scope of these rights may depend on
                      your circumstances and the laws that apply to the relevant
                      processing activity.
                    </p>

                    <p>
                      Requests relating to personal information should be
                      submitted through the appropriate official Nexa Poker
                      support channel.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    10. CHILDREN
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    10. Children&apos;s Privacy
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      Nexa Poker services are not intended for individuals who
                      are not legally permitted to use online poker services.
                    </p>

                    <p>
                      Nexa Poker does not knowingly seek to collect personal
                      information from individuals who are not eligible to use
                      the applicable services.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    11. COOKIES
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    11. Cookies and Similar Technologies
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      Nexa Poker may use cookies and similar technologies to
                      support website functionality, understand website usage,
                      improve performance and provide a better user experience.
                    </p>

                    <p>
                      For more information about how cookies may be used, please
                      review the Nexa Poker Cookie Policy.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    12. INTERNATIONAL DATA
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    12. Data Transfers
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      Depending on the services used and the technology
                      providers involved, information may be processed or stored
                      in locations outside the place where you access Nexa
                      Poker.
                    </p>

                    <p>
                      Where applicable, reasonable measures may be taken to
                      ensure that information is handled in accordance with
                      relevant legal and security requirements.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    13. POLICY CHANGES
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    13. Changes to This Privacy Policy
                  </h2>

                  <div className="space-y-4 text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    <p>
                      Nexa Poker may update this Privacy Policy from time to
                      time to reflect changes to our services, technology,
                      operational practices or applicable requirements.
                    </p>

                    <p>
                      When changes are made, the updated version will be
                      published on this page together with a revised update date
                      where appropriate.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    14. CONTACT
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-5 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-2xl">
                    14. Contact
                  </h2>

                  <p className="text-[14px] leading-7 text-white/60 sm:text-base sm:leading-8">
                    If you have questions about this Privacy Policy or how Nexa
                    Poker handles personal information, please contact Nexa
                    Poker through the official support or community channels
                    provided on the website.
                  </p>
                </section>

                {/* =================================================
                    LEGAL NOTICE
                    ================================================= */}

                <section className="mt-6 rounded-2xl border border-[#1877ff]/15 bg-[#1877ff]/[0.035] p-5 sm:mt-8 sm:p-8">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1877ff] shadow-[0_0_12px_rgba(24,119,255,0.8)]" />

                    <p className="text-[13px] leading-6 text-white/40 sm:text-sm sm:leading-7">
                      This page provides general privacy information and is
                      intended as an initial website version. It should be
                      reviewed and approved by the appropriate Nexa Poker legal
                      or compliance representative before being treated as the
                      platform&apos;s final Privacy Policy.
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
