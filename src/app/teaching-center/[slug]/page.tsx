// src/app/teaching-center/[slug]/page.tsx

/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getTeachingGuideBySlug, getTeachingGuides } from "@/lib/api";
import { getMediaUrl } from "@/lib/media";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import MarkdownContent from "@/components/content/MarkdownContent";
import OtherTeachingGuides from "@/components/sections/teaching/other-teaching-guides";

interface TeachingGuideDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Force the teaching guide detail page to render dynamically.
 *
 * This ensures updated Teaching Guide content from Strapi
 * can be fetched at runtime without requiring a new
 * frontend deployment.
 */
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: TeachingGuideDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const guide = await getTeachingGuideBySlug(slug);

  if (!guide) {
    return {
      title: "Teaching Guide Not Found | Nexa Poker",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${guide.Title} | Nexa Poker Teaching Center`;

  const description =
    `Learn ${guide.Title} with Nexa Poker. Explore practical poker guides, ` +
    "poker fundamentals, strategy, rules and tips to help improve your game.";

  const canonicalUrl = `/teaching-center/${guide.Slug}`;

  const ogImage = getMediaUrl(guide.Thumbnail, "large");

  return {
    title,
    description,

    keywords: [
      "Nexa Poker",
      "NexaPoker",
      "Nexa Poker Teaching Center",
      "learn poker",
      "how to play poker",
      "poker rules for beginners",
      "poker strategy for beginners",
      "how to improve at poker",
      "online poker tips",
      "poker fundamentals",
      "Texas Hold'em",
      guide.Title,
    ],

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type: "article",
      title,
      description,
      url: canonicalUrl,
      siteName: "Nexa Poker",
      images: ogImage
        ? [
            {
              url: ogImage,
              alt: guide.Thumbnail?.alternativeText || guide.Title,
            },
          ]
        : undefined,
    },

    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function TeachingGuideDetailPage({
  params,
}: TeachingGuideDetailPageProps) {
  const { slug } = await params;

  /* =========================================================
     LOAD CURRENT GUIDE + OTHER GUIDES
  ========================================================= */

  const [guide, allGuides] = await Promise.all([
    getTeachingGuideBySlug(slug),
    getTeachingGuides(),
  ]);

  if (!guide) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-x-hidden bg-[#050507] text-white">
        {/* =================================================
            HERO
        ================================================= */}

        <section className="relative overflow-hidden px-4 pb-12 pt-24 sm:px-6 sm:pb-14 sm:pt-28 md:pb-16 md:pt-32 lg:pt-36">
          {/* Background atmosphere */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-20%] top-[-20%] h-72 w-72 rounded-full bg-[#46b9ff]/4 blur-[100px] sm:right-[-10%] sm:h-105 sm:w-105 sm:blur-[140px]" />

            <div className="absolute bottom-[-30%] left-[-20%] h-64 w-64 rounded-full bg-[#ff1764]/3 blur-[100px] sm:left-[-10%] sm:h-96 sm:w-96 sm:blur-[140px]" />
          </div>

          <div className="container-nexa relative z-10">
            <Breadcrumbs
              items={[
                {
                  label: "Home",
                  href: "/",
                },
                {
                  label: "Teaching Center",
                  href: "/teaching-center",
                },
                {
                  label: guide.Title,
                },
              ]}
            />

            <div className="mt-6 w-full max-w-5xl sm:mt-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#46b9ff] sm:text-xs sm:tracking-[0.18em] md:text-sm">
                Teaching Center
              </p>

              <h1 className="mt-2.5 wrap-break-word text-2xl font-bold leading-[1.12] tracking-tight text-white sm:mt-3 sm:text-4xl md:text-5xl">
                {guide.Title}
              </h1>
            </div>
          </div>
        </section>

        {/* =================================================
            THUMBNAIL
        ================================================= */}

        {guide.Thumbnail && (
          <section className="relative overflow-hidden px-4 pb-12 sm:px-6 sm:pb-16">
            <div className="container-nexa">
              <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/3 sm:rounded-3xl lg:w-[60vw]">
                {(() => {
                  const imageUrl = getMediaUrl(guide.Thumbnail, "large");

                  if (!imageUrl) {
                    return null;
                  }

                  return (
                    <img
                      src={imageUrl}
                      alt={guide.Thumbnail.alternativeText || guide.Title}
                      className="block h-auto max-h-[60vh] w-full object-contain sm:max-h-[70vh]"
                    />
                  );
                })()}
              </div>
            </div>
          </section>
        )}

        {/* =================================================
            GUIDE CONTENT
        ================================================= */}

        {guide.Sections && guide.Sections.length > 0 && (
          <section className="relative overflow-hidden px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24">
            <div className="container-nexa">
              <div className="w-full max-w-6xl min-w-0">
                <div className="space-y-10 sm:space-y-14">
                  {guide.Sections.slice()
                    .sort(
                      (a, b) => (a.DisplayOrder ?? 0) - (b.DisplayOrder ?? 0),
                    )
                    .map((section, sectionIndex) => (
                      <section
                        key={section.id ?? sectionIndex}
                        className="border-t border-white/10 pt-8 first:border-t-0 first:pt-0 sm:pt-10"
                      >
                        {/* =================================================
                            SECTION HEADER
                        ================================================= */}

                        <div className="mb-6 sm:mb-8">
                          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#46b9ff] sm:text-xs sm:tracking-[0.16em]">
                            Section {sectionIndex + 1}
                          </p>

                          <h2 className="wrap-break-word text-xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
                            {section.Title}
                          </h2>
                        </div>

                        {/* =================================================
                            STEPS
                        ================================================= */}

                        {section.Steps && section.Steps.length > 0 && (
                          <div className="space-y-6 sm:space-y-10">
                            {section.Steps.slice()
                              .sort(
                                (a, b) =>
                                  (a.DisplayOrder ?? 0) - (b.DisplayOrder ?? 0),
                              )
                              .map((step, stepIndex) => {
                                const stepNumber =
                                  step.StepNumber || stepIndex + 1;

                                const stepImageUrl = getMediaUrl(
                                  step.Image,
                                  "large",
                                );

                                return (
                                  <article
                                    key={step.id ?? stepIndex}
                                    className="min-w-0 rounded-2xl border border-white/10 bg-white/3 p-4 sm:rounded-3xl sm:p-7"
                                  >
                                    {/* =================================================
                                          STEP HEADER
                                      ================================================= */}

                                    <div className="mb-5 flex min-w-0 items-start gap-3 sm:mb-6 sm:gap-4">
                                      <div className="flex h-8 min-w-8 shrink-0 items-center justify-center rounded-full border border-[#1877ff]/40 bg-[#1877ff]/10 text-xs font-bold text-[#46b9ff] sm:h-9 sm:min-w-9 sm:text-sm">
                                        {stepNumber}
                                      </div>

                                      <h3 className="min-w-0 pt-0.5 wrap-break-word text-base font-semibold leading-6 text-white sm:pt-1 sm:text-xl sm:leading-7">
                                        Step {stepNumber}
                                      </h3>
                                    </div>

                                    {/* =================================================
                                          STEP CONTENT
                                      ================================================= */}

                                    {step.Content && (
                                      <div className="w-full min-w-0 max-w-6xl overflow-x-auto">
                                        <MarkdownContent
                                          content={step.Content}
                                        />
                                      </div>
                                    )}

                                    {/* =================================================
                                          STEP IMAGE
                                      ================================================= */}

                                    {stepImageUrl && (
                                      <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-black/20 sm:mt-8 sm:rounded-2xl">
                                        <img
                                          src={stepImageUrl}
                                          alt={
                                            step.Image?.alternativeText ||
                                            `${guide.Title} - Step ${stepNumber}`
                                          }
                                          className="block h-auto max-h-[65vh] w-full object-contain sm:max-h-[75vh]"
                                        />
                                      </div>
                                    )}
                                  </article>
                                );
                              })}
                          </div>
                        )}
                      </section>
                    ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =================================================
            CTA
        ================================================= */}

        {guide.CTA?.Label && guide.CTA.URL && (
          <section className="relative overflow-hidden px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24">
            <div className="container-nexa">
              <div className="rounded-2xl border border-white/10 bg-white/3 p-5 sm:rounded-3xl sm:p-8">
                <a
                  href={guide.CTA.URL}
                  target={guide.CTA.OpenInNewTab ? "_blank" : undefined}
                  rel={
                    guide.CTA.OpenInNewTab ? "noopener noreferrer" : undefined
                  }
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#1877ff] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#46b9ff] sm:w-auto sm:px-6"
                >
                  {guide.CTA.Label}
                </a>
              </div>
            </div>
          </section>
        )}

        {/* =================================================
            OTHER TEACHING GUIDES
        ================================================= */}

        <OtherTeachingGuides guides={allGuides} currentSlug={guide.Slug} />
      </main>

      <Footer />
    </>
  );
}
