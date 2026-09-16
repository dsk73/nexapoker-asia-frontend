import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexaPoker Privacy Policy | Your Privacy & Data",
  description:
    "Read the NexaPoker Privacy Policy to understand how account information, personal data and website usage information may be collected, used, protected and managed.",
  keywords: [
    "NexaPoker privacy policy",
    "NexaPoker privacy",
    "NexaPoker data protection",
    "online poker privacy policy",
    "poker platform privacy",
    "NexaPoker account privacy",
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
    title: "NexaPoker Privacy Policy | Your Privacy & Data",
    description:
      "Read the NexaPoker Privacy Policy to understand how personal information and website usage data may be collected, used and protected.",
    url: "/legal/privacy-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaPoker Privacy Policy | Your Privacy & Data",
    description:
      "Learn how NexaPoker handles personal information, account data and website usage information.",
  },
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/60 sm:text-lg">
              This Privacy Policy explains how NexaPoker may collect, use,
              protect and manage information when you access or use our website
              and related services.
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
                1. INTRODUCTION
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                1. Introduction
              </h2>

              <p>
                NexaPoker respects your privacy and is committed to handling
                personal information responsibly. This Privacy Policy describes
                the types of information that may be collected when you use the
                NexaPoker website, applications and related services.
              </p>

              <p className="mt-4">
                By accessing or using NexaPoker, you acknowledge that you have
                read this Privacy Policy and understand how information may be
                handled as described below.
              </p>
            </section>

            {/* =================================================
                2. INFORMATION WE MAY COLLECT
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                2. Information We May Collect
              </h2>

              <p>
                Depending on how you use NexaPoker, we may collect information
                that you provide directly, information generated through your
                use of the platform and technical information associated with
                your device or browser.
              </p>

              <div className="mt-5 space-y-4">
                <div>
                  <h3 className="font-semibold text-white">
                    Account Information
                  </h3>

                  <p className="mt-2">
                    When you create or maintain an account, information such as
                    your name, date of birth, email address and other
                    registration details may be collected.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Transaction Information
                  </h3>

                  <p className="mt-2">
                    Where payment, deposit or withdrawal services are available,
                    information associated with transactions may be processed as
                    necessary to provide those services.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Technical Information
                  </h3>

                  <p className="mt-2">
                    Technical information may include details such as browser
                    type, device information, operating system, IP address and
                    other technical data generated when interacting with the
                    website or services.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-white">Communications</h3>

                  <p className="mt-2">
                    If you contact NexaPoker through available support or
                    community channels, information contained in your
                    communication may be used to respond to your request.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                3. HOW INFORMATION IS USED
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                3. How Information May Be Used
              </h2>

              <p>
                Information may be used for purposes such as providing and
                maintaining NexaPoker services, managing accounts, responding to
                support requests and improving the website and user experience.
              </p>

              <ul className="mt-5 list-disc space-y-2 pl-6">
                <li>Creating and managing user accounts.</li>
                <li>Providing requested services and platform features.</li>
                <li>Processing applicable transactions.</li>
                <li>Communicating important account or service information.</li>
                <li>Providing customer or technical support.</li>
                <li>Maintaining platform security and preventing misuse.</li>
                <li>Understanding website usage and improving our services.</li>
                <li>
                  Complying with applicable legal or regulatory requirements.
                </li>
              </ul>
            </section>

            {/* =================================================
                4. LEGAL BASIS
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                4. How We May Process Information
              </h2>

              <p>
                Personal information may be processed where necessary to provide
                requested services, manage an account, maintain security, comply
                with applicable requirements or pursue other legitimate
                operational purposes.
              </p>

              <p className="mt-4">
                Where consent is required for a particular use of information,
                the applicable consent may be requested through the relevant
                service or communication.
              </p>
            </section>

            {/* =================================================
                5. INFORMATION SHARING
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                5. Sharing of Information
              </h2>

              <p>
                NexaPoker does not treat personal information as something to be
                shared indiscriminately. Information may be disclosed where
                reasonably necessary to provide services, operate the platform,
                process transactions, maintain security or comply with
                applicable legal requirements.
              </p>

              <p className="mt-4">
                Service providers and technology partners may process certain
                information on behalf of NexaPoker where required to support
                website, hosting, payment, security, analytics or other
                operational functions.
              </p>
            </section>

            {/* =================================================
                6. THIRD-PARTY SERVICES
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                6. Third-Party Services and Links
              </h2>

              <p>
                NexaPoker may provide links to third-party websites,
                applications, platforms or services. These third parties may
                collect and process information under their own privacy
                policies.
              </p>

              <p className="mt-4">
                NexaPoker does not control the privacy practices of third-party
                services. You should review the applicable privacy policies
                before providing personal information to those services.
              </p>
            </section>

            {/* =================================================
                7. DATA SECURITY
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                7. Data Security
              </h2>

              <p>
                NexaPoker takes reasonable measures designed to protect
                information against unauthorized access, misuse, alteration,
                disclosure or loss.
              </p>

              <p className="mt-4">
                However, no method of transmitting or storing information
                electronically can be guaranteed to be completely secure.
              </p>
            </section>

            {/* =================================================
                8. DATA RETENTION
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                8. Data Retention
              </h2>

              <p>
                Personal information may be retained for as long as reasonably
                necessary to provide services, maintain account records, resolve
                disputes, enforce applicable agreements, maintain security or
                comply with legal and regulatory obligations.
              </p>

              <p className="mt-4">
                Retention periods may vary depending on the type of information
                and the purpose for which it was collected.
              </p>
            </section>

            {/* =================================================
                9. YOUR INFORMATION
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                9. Your Information and Privacy Choices
              </h2>

              <p>
                Depending on applicable law, you may have rights relating to
                your personal information, including rights to request access,
                correction, deletion or other forms of control over your data.
              </p>

              <p className="mt-4">
                The availability and scope of these rights may depend on your
                circumstances and the laws that apply to the relevant processing
                activity.
              </p>

              <p className="mt-4">
                Requests relating to personal information should be submitted
                through the appropriate official NexaPoker support channel.
              </p>
            </section>

            {/* =================================================
                10. CHILDREN
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                10. Children&apos;s Privacy
              </h2>

              <p>
                NexaPoker services are not intended for individuals who are not
                legally permitted to use online poker services.
              </p>

              <p className="mt-4">
                NexaPoker does not knowingly seek to collect personal
                information from individuals who are not eligible to use the
                applicable services.
              </p>
            </section>

            {/* =================================================
                11. COOKIES
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                11. Cookies and Similar Technologies
              </h2>

              <p>
                NexaPoker may use cookies and similar technologies to support
                website functionality, understand website usage, improve
                performance and provide a better user experience.
              </p>

              <p className="mt-4">
                For more information about how cookies may be used, please
                review the NexaPoker Cookie Policy.
              </p>
            </section>

            {/* =================================================
                12. INTERNATIONAL DATA
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                12. Data Transfers
              </h2>

              <p>
                Depending on the services used and the technology providers
                involved, information may be processed or stored in locations
                outside the place where you access NexaPoker.
              </p>

              <p className="mt-4">
                Where applicable, reasonable measures may be taken to ensure
                that information is handled in accordance with relevant legal
                and security requirements.
              </p>
            </section>

            {/* =================================================
                13. POLICY CHANGES
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                13. Changes to This Privacy Policy
              </h2>

              <p>
                NexaPoker may update this Privacy Policy from time to time to
                reflect changes to our services, technology, operational
                practices or applicable requirements.
              </p>

              <p className="mt-4">
                When changes are made, the updated version will be published on
                this page together with a revised update date where appropriate.
              </p>
            </section>

            {/* =================================================
                14. CONTACT
                ================================================= */}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
                14. Contact
              </h2>

              <p>
                If you have questions about this Privacy Policy or how NexaPoker
                handles personal information, please contact NexaPoker through
                the official support or community channels provided on the
                website.
              </p>
            </section>

            {/* =================================================
                NOTICE
                ================================================= */}

            <section className="border-t border-white/10 pt-8">
              <p className="text-sm leading-6 text-white/40">
                This page provides general privacy information and is intended
                as an initial website version. It should be reviewed and
                approved by the appropriate NexaPoker legal or compliance
                representative before being treated as the platform&apos;s final
                Privacy Policy.
              </p>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
