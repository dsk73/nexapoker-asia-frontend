// src/app/legal/cookie-policy/page.tsx

import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Nexa Poker Cookie Policy | Cookies & Website Usage",
  description:
    "Learn how Nexa Poker may use cookies and similar technologies to support website functionality, improve performance, understand usage and enhance your experience.",
  keywords: [
    "Nexa Poker cookie policy",
    "Nexa Poker cookies",
    "online poker cookie policy",
    "Nexa Poker website cookies",
    "Nexa Poker privacy",
    "website cookies",
    "cookie policy",
  ],
  alternates: {
    canonical: "/legal/cookie-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Nexa Poker Cookie Policy | Cookies & Website Usage",
    description:
      "Learn how Nexa Poker may use cookies and similar technologies to support website functionality, improve performance and understand website usage.",
    url: "/legal/cookie-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexa Poker Cookie Policy | Cookies & Website Usage",
    description:
      "Learn how Nexa Poker may use cookies and similar technologies across the website.",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#050507] text-white">
      <Navbar />

      <main>
        {/* =====================================================
            HERO
            ===================================================== */}

        <section className="relative overflow-hidden border-b border-white/10 bg-[#050507]">
          {/* Background atmosphere */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-10%] top-[-35%] h-125 w-125 rounded-full bg-[#1877ff]/10 blur-[140px]" />

            <div className="absolute right-[-8%] top-[-25%] h-112.5 w-112.5 rounded-full bg-[#8b2cff]/10 blur-[140px]" />

            <div className="absolute bottom-[-45%] left-1/2 h-100 w-150 -translate-x-1/2 rounded-full bg-[#ff1764]/5 blur-[140px]" />
          </div>

          {/* Subtle grid */}

          <div
            className="
              pointer-events-none absolute inset-0 opacity-[0.025]
              bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
              bg-size-[64px_64px]
            "
          />

          <div className="container-nexa relative z-10 px-5 py-20 sm:px-6 sm:py-24 lg:py-28">
            <div className="max-w-5xl">
              {/* Eyebrow */}

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1877ff] shadow-[0_0_10px_rgba(24,119,255,0.8)]" />

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                  Legal
                </span>
              </div>

              {/* Heading */}

              <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                Cookie Policy
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                This Cookie Policy explains how Nexa Poker may use cookies and
                similar technologies when you visit or interact with our
                website.
              </p>

              {/* Updated date */}

              <div className="mt-8 inline-flex items-center rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3">
                <span className="mr-2 text-xs uppercase tracking-[0.14em] text-white/35">
                  Last updated
                </span>

                <span className="text-sm font-medium text-white/70">
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
            <div className="absolute left-[-15%] top-[10%] h-125 w-125 rounded-full bg-[#1877ff]/2.5 blur-[130px]" />

            <div className="absolute right-[-15%] top-[45%] h-125 w-125 rounded-full bg-[#ff1764]/2.5 blur-[130px]" />
          </div>

          <div className="container-nexa relative z-10 px-5 py-14 sm:px-6 sm:py-18 lg:py-24">
            <article className="mx-auto max-w-6xl">
              {/* Intro */}

              <div className="mb-12 max-w-4xl">
                <p className="text-base leading-8 text-white/60 sm:text-lg">
                  Please read this Cookie Policy carefully to understand how
                  cookies and similar technologies may be used when interacting
                  with Nexa Poker.
                </p>
              </div>

              <div className="space-y-5">
                {/* =================================================
                    1. WHAT ARE COOKIES
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-6 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-5 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    1. What Are Cookies?
                  </h2>

                  <div className="space-y-4">
                    <p>
                      Cookies are small text files that may be stored on your
                      device when you visit a website. They allow websites to
                      remember information about your visit and can help provide
                      certain functionality.
                    </p>

                    <p>
                      Similar technologies, such as pixels, local storage and
                      other identifiers, may also be used for purposes similar
                      to cookies.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    2. HOW WE USE COOKIES
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-6 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-5 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    2. How Nexa Poker May Use Cookies
                  </h2>

                  <div className="space-y-4">
                    <p>
                      Nexa Poker may use cookies and similar technologies to
                      support website functionality, understand how visitors
                      interact with the website, improve performance and provide
                      a more convenient user experience.
                    </p>

                    <p>
                      The specific technologies used may change as the website,
                      services and technical requirements evolve.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    3. TYPES OF COOKIES
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-6 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-6 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    3. Types of Cookies
                  </h2>

                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Essential */}

                    <div className="rounded-xl border border-white/[0.07] bg-black/20 p-5">
                      <h3 className="font-semibold text-white">
                        Essential Cookies
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-white/55">
                        These cookies may be necessary for core website
                        functionality, security and the operation of certain
                        features. Without them, some parts of the website may
                        not function correctly.
                      </p>
                    </div>

                    {/* Functional */}

                    <div className="rounded-xl border border-white/[0.07] bg-black/20 p-5">
                      <h3 className="font-semibold text-white">
                        Functional Cookies
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-white/55">
                        Functional cookies may help remember preferences or
                        settings and support features designed to improve the
                        user experience.
                      </p>
                    </div>

                    {/* Analytics */}

                    <div className="rounded-xl border border-white/[0.07] bg-black/20 p-5">
                      <h3 className="font-semibold text-white">
                        Analytics Cookies
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-white/55">
                        Analytics technologies may help us understand how
                        visitors use the website, which pages are viewed and how
                        the website performs. This information can be used to
                        improve the website and its content.
                      </p>
                    </div>

                    {/* Preference */}

                    <div className="rounded-xl border border-white/[0.07] bg-black/20 p-5">
                      <h3 className="font-semibold text-white">
                        Preference Cookies
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-white/55">
                        Preference technologies may remember choices made during
                        website visits so that certain settings can be retained
                        when you return.
                      </p>
                    </div>
                  </div>
                </section>

                {/* =================================================
                    4. THIRD PARTY
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-6 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-5 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    4. Third-Party Technologies
                  </h2>

                  <div className="space-y-4">
                    <p>
                      Some website functions may rely on third-party services.
                      These services may use their own cookies or similar
                      technologies to provide functionality, security, analytics
                      or other services.
                    </p>

                    <p>
                      Third-party providers may have their own privacy and
                      cookie policies. Nexa Poker does not control the cookie
                      practices of independent third-party services.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    5. COOKIE CONTROL
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-6 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-5 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    5. Managing Cookies
                  </h2>

                  <div className="space-y-4">
                    <p>
                      Most modern web browsers allow you to view, block, delete
                      or otherwise manage cookies through browser settings.
                    </p>

                    <p>
                      If you choose to disable certain cookies, some website
                      features may not function as intended or your preferences
                      may not be retained.
                    </p>

                    <p>
                      Browser settings and cookie controls vary between browsers
                      and devices. Refer to your browser&apos;s settings or help
                      documentation for information about available options.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    6. COOKIE DURATION
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-6 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-5 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    6. How Long Cookies May Remain
                  </h2>

                  <div className="space-y-4">
                    <p>
                      Some cookies may remain on your device only for the
                      duration of your browsing session. Others may remain for a
                      longer period until they expire or are deleted.
                    </p>

                    <p>
                      The duration of a cookie depends on its purpose and how it
                      is configured.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    7. WEBSITE PERFORMANCE
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-6 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-5 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    7. Cookies and Website Performance
                  </h2>

                  <div className="space-y-4">
                    <p>
                      Information collected through cookies or similar
                      technologies may help Nexa Poker understand website
                      performance and identify areas where the user experience
                      can be improved.
                    </p>

                    <p>
                      This may include information about pages visited, general
                      interaction with website features and technical
                      performance.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    8. PRIVACY
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-6 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-5 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    8. Cookies and Personal Information
                  </h2>

                  <div className="space-y-4">
                    <p>
                      Depending on how particular cookies or technologies are
                      configured, information associated with them may be
                      capable of being linked to other information.
                    </p>

                    <p>
                      The handling of personal information is described in more
                      detail in the Nexa Poker Privacy Policy.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    9. POLICY CHANGES
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-6 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-5 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    9. Changes to This Cookie Policy
                  </h2>

                  <div className="space-y-4">
                    <p>
                      Nexa Poker may update this Cookie Policy when our website,
                      services, technologies or applicable requirements change.
                    </p>

                    <p>
                      Any updated version will be published on this page with a
                      revised update date where appropriate.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    10. CONTACT
                    ================================================= */}

                <section className="rounded-2xl border border-white/8 bg-white/2.5 p-6 transition-colors duration-300 hover:border-white/13 sm:p-8 lg:p-9">
                  <h2 className="mb-5 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    10. Contact
                  </h2>

                  <p>
                    If you have questions about this Cookie Policy or how
                    cookies are used on the Nexa Poker website, please contact
                    Nexa Poker through the official support or community
                    channels provided on the website.
                  </p>
                </section>

                {/* =================================================
                    LEGAL NOTICE
                    ================================================= */}

                <section className="mt-8 rounded-2xl border border-[#1877ff]/15 bg-[#1877ff]/[0.035] p-6 sm:p-8">
                  <div className="flex gap-4">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#1877ff] shadow-[0_0_12px_rgba(24,119,255,0.8)]" />

                    <p className="text-sm leading-7 text-white/40">
                      This page provides general information about cookies and
                      is intended as an initial website version. It should be
                      reviewed and approved by the appropriate Nexa Poker legal
                      or compliance representative before being treated as the
                      platform&apos;s final Cookie Policy.
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
