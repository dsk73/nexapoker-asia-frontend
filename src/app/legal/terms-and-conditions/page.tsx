import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexaPoker Terms & Conditions | Online Poker Platform",
  description:
    "Read the NexaPoker Terms & Conditions covering account registration, platform usage, responsible play, payments, promotions, intellectual property and website access.",
  keywords: [
    "NexaPoker terms and conditions",
    "NexaPoker terms",
    "online poker terms",
    "poker platform terms",
    "NexaPoker rules",
    "NexaPoker account",
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
    title: "NexaPoker Terms & Conditions | Online Poker Platform",
    description:
      "Read the NexaPoker Terms & Conditions covering account registration, platform usage, responsible play, payments, promotions and website access.",
    url: "/legal/terms-and-conditions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaPoker Terms & Conditions | Online Poker Platform",
    description:
      "Read the NexaPoker Terms & Conditions covering account registration, platform usage, responsible play, payments, promotions and website access.",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="border-b border-white/10 bg-[#050507]">
        <div className="container-nexa px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/50">
              Legal
            </p>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Terms & Conditions
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/60 sm:text-lg">
              These Terms & Conditions explain the rules and conditions that
              apply when you access or use NexaPoker and its related services.
            </p>

            <p className="mt-4 text-sm text-white/40">
              Last updated: September 16, 2026
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <section>
        <div className="container-nexa px-5 py-14 sm:px-6 sm:py-16 lg:py-20">
          <article className="mx-auto max-w-4xl space-y-10 text-sm leading-7 text-white/65 sm:text-base">
            {/* =================================================
                1. ACCEPTANCE
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                1. Acceptance of These Terms
              </h2>

              <p>
                By accessing or using NexaPoker, you acknowledge that you have
                read, understood and agree to be bound by these Terms &
                Conditions. If you do not agree with these terms, you should not
                access or use the NexaPoker platform or related services.
              </p>

              <p className="mt-4">
                These Terms & Conditions apply to your use of the NexaPoker
                website, applications, software, content, features and related
                services, where applicable.
              </p>
            </section>

            {/* =================================================
                2. ELIGIBILITY
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                2. Eligibility
              </h2>

              <p>
                You are responsible for ensuring that you are legally permitted
                to access and use online poker services in the jurisdiction
                where you are located.
              </p>

              <p className="mt-4">
                You must provide accurate information during registration and
                maintain the accuracy of your account information. NexaPoker may
                require additional information or verification where necessary.
              </p>

              <p className="mt-4">
                You must not use the platform if doing so would violate any
                applicable law, regulation or restriction that applies to you.
              </p>
            </section>

            {/* =================================================
                3. ACCOUNT REGISTRATION
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                3. Account Registration
              </h2>

              <p>
                Certain NexaPoker services may require you to create an account.
                You are responsible for providing complete and accurate
                registration information.
              </p>

              <p className="mt-4">
                You are responsible for maintaining the confidentiality of your
                account credentials and for activities carried out through your
                account.
              </p>

              <p className="mt-4">
                You should contact the appropriate NexaPoker support channel if
                you believe that your account credentials have been compromised
                or that unauthorized activity has occurred.
              </p>
            </section>

            {/* =================================================
                4. PLATFORM USE
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                4. Use of the Platform
              </h2>

              <p>
                NexaPoker should be used only for lawful purposes and in
                accordance with these Terms & Conditions.
              </p>

              <p className="mt-4">
                You agree not to misuse the platform, interfere with its
                operation, attempt to gain unauthorized access to systems or
                accounts, or use automated methods to disrupt or manipulate the
                service.
              </p>

              <p className="mt-4">
                You must not use the platform to distribute malicious software,
                fraudulent content or material that could damage or interfere
                with the operation of NexaPoker or other users&apos; access to
                the service.
              </p>
            </section>

            {/* =================================================
                5. POKER PLAY
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                5. Poker Games and Play
              </h2>

              <p>
                NexaPoker provides access to online poker-related experiences,
                games and activities where available.
              </p>

              <p className="mt-4">
                Game availability, features, formats and participation
                requirements may change from time to time.
              </p>

              <p className="mt-4">
                Players are responsible for understanding the rules of the games
                they participate in and for making their own decisions during
                play.
              </p>
            </section>

            {/* =================================================
                6. RESPONSIBLE PLAY
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                6. Responsible Play
              </h2>

              <p>
                Poker should be treated as entertainment and played responsibly.
              </p>

              <p className="mt-4">
                You should only participate at a level that is appropriate for
                your personal circumstances. Never play with money you cannot
                afford to lose.
              </p>

              <p className="mt-4">
                If you believe that your gaming activity is becoming difficult
                to control, you should take a break and seek appropriate
                support.
              </p>
            </section>

            {/* =================================================
                7. PAYMENTS
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                7. Deposits, Withdrawals and Payments
              </h2>

              <p>
                Where payment or account balance features are available, users
                must follow the applicable instructions and requirements
                provided by NexaPoker.
              </p>

              <p className="mt-4">
                Payment methods, processing times, availability and applicable
                requirements may vary depending on the service and payment
                provider.
              </p>

              <p className="mt-4">
                You are responsible for ensuring that the payment information
                you provide is accurate and that you are authorized to use the
                selected payment method.
              </p>
            </section>

            {/* =================================================
                8. PROMOTIONS
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                8. Promotions and Bonuses
              </h2>

              <p>
                NexaPoker may offer promotional campaigns, bonuses or other
                promotional benefits from time to time.
              </p>

              <p className="mt-4">
                Promotional offers may have additional terms, eligibility
                requirements, expiration dates or participation conditions.
                Those conditions will apply to the relevant promotion.
              </p>

              <p className="mt-4">
                NexaPoker reserves the right to modify, suspend or discontinue a
                promotion where permitted by applicable requirements.
              </p>
            </section>

            {/* =================================================
                9. INTELLECTUAL PROPERTY
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                9. Intellectual Property
              </h2>

              <p>
                NexaPoker and its associated content, branding, logos, designs,
                text, graphics, software and other materials may be protected by
                intellectual property rights.
              </p>

              <p className="mt-4">
                You may not reproduce, modify, distribute, publicly display or
                otherwise use NexaPoker content without appropriate
                authorization, except where permitted by applicable law.
              </p>
            </section>

            {/* =================================================
                10. THIRD-PARTY SERVICES
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                10. Third-Party Services and Links
              </h2>

              <p>
                NexaPoker may provide links to or integrate with third-party
                websites, platforms, applications or services.
              </p>

              <p className="mt-4">
                Third-party services may operate under their own terms,
                conditions and privacy policies. NexaPoker is not responsible
                for the content, availability or policies of third-party
                services that are outside its control.
              </p>
            </section>

            {/* =================================================
                11. AVAILABILITY
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                11. Service Availability
              </h2>

              <p>
                NexaPoker aims to provide a reliable online poker experience,
                but continuous availability cannot be guaranteed.
              </p>

              <p className="mt-4">
                The platform may occasionally be unavailable because of
                maintenance, updates, technical issues, security measures or
                circumstances outside reasonable control.
              </p>
            </section>

            {/* =================================================
                12. SUSPENSION
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                12. Account Suspension or Termination
              </h2>

              <p>
                NexaPoker may restrict, suspend or terminate access to an
                account or service where there is a reasonable basis to believe
                that these Terms & Conditions have been violated or that the
                platform is being used unlawfully or improperly.
              </p>

              <p className="mt-4">
                Access may also be restricted where required for security,
                verification, regulatory or operational reasons.
              </p>
            </section>

            {/* =================================================
                13. USER RESPONSIBILITY
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                13. User Responsibility
              </h2>

              <p>
                You are responsible for your use of the NexaPoker platform and
                for complying with applicable laws and regulations.
              </p>

              <p className="mt-4">
                You are also responsible for reviewing these Terms & Conditions
                periodically to remain aware of any updates.
              </p>
            </section>

            {/* =================================================
                14. LIMITATION
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                14. Disclaimer
              </h2>

              <p>
                NexaPoker provides its website, software and related services on
                an as-available basis. While reasonable efforts may be made to
                maintain the platform, no guarantee is made that the service
                will always be uninterrupted, error-free or available in every
                location or on every device.
              </p>

              <p className="mt-4">
                Information provided through educational materials, guides,
                articles or other content is for general informational purposes
                and should not be treated as professional advice.
              </p>
            </section>

            {/* =================================================
                15. CHANGES
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                15. Changes to These Terms
              </h2>

              <p>
                NexaPoker may update these Terms & Conditions from time to time.
                Updated terms will be published on this page with a revised
                update date where appropriate.
              </p>

              <p className="mt-4">
                Your continued use of the platform after updated terms are
                published may be subject to the revised Terms & Conditions.
              </p>
            </section>

            {/* =================================================
                16. CONTACT
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                16. Contact
              </h2>

              <p>
                If you have questions about these Terms & Conditions or your use
                of NexaPoker, please contact NexaPoker through the official
                support or community channels provided on the website.
              </p>
            </section>

            {/* =================================================
                NOTICE
                ================================================= */}

            <section className="border-t border-white/10 pt-8">
              <p className="text-sm leading-6 text-white/40">
                This page provides general website terms and is intended as an
                initial website version. It should be reviewed and approved by
                the appropriate NexaPoker legal or compliance representative
                before being treated as the platform&apos;s final legal terms.
              </p>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
