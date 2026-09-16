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

export async function generateMetadata({
  params,
}: TeachingGuideDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const guide = await getTeachingGuideBySlug(slug);

  if (!guide) {
    return {
      title: "Teaching Guide Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${guide.Title} | NexaPoker Teaching Center`;

  const description =
    `Learn ${guide.Title} with NexaPoker. Explore practical poker guides, ` +
    "poker fundamentals, strategy and tips to help improve your game.";

  const canonicalUrl = `/teaching-center/${guide.Slug}`;

  const ogImage = getMediaUrl(guide.Thumbnail, "large");

  return {
    title,
    description,

    keywords: [
      "Nexa Poker",
      "NexaPoker",
      "learn poker",
      "how to play poker",
      "poker rules for beginners",
      "poker strategy for beginners",
      "online poker tips",
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
      siteName: "NexaPoker",
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

      <main className="min-h-screen bg-[#050507] text-white">
        {/* =================================================
            HERO
        ================================================= */}

        <section className="px-6 pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pt-36">
          <div className="container-nexa">
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

            <div className="mt-8 max-w-5xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#46b9ff] sm:text-sm">
                Teaching Center
              </p>

              <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {guide.Title}
              </h1>
            </div>
          </div>
        </section>

        {/* =================================================
            THUMBNAIL
        ================================================= */}

        {guide.Thumbnail && (
          <section className="px-6 pb-14 sm:pb-16">
            <div className="container-nexa">
              <div className="w-full overflow-hidden rounded-3xl border border-white/10 bg-white/3 lg:w-[60vw]">
                {(() => {
                  const imageUrl = getMediaUrl(guide.Thumbnail, "large");

                  if (!imageUrl) {
                    return null;
                  }

                  return (
                    <img
                      src={imageUrl}
                      alt={guide.Thumbnail.alternativeText || guide.Title}
                      className="block h-auto max-h-[70vh] w-full object-contain"
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
          <section className="px-6 pb-20 sm:pb-24">
            <div className="container-nexa">
              <div className="w-full max-w-6xl">
                <div className="space-y-14">
                  {guide.Sections.slice()
                    .sort(
                      (a, b) => (a.DisplayOrder ?? 0) - (b.DisplayOrder ?? 0),
                    )
                    .map((section, sectionIndex) => (
                      <section
                        key={section.id ?? sectionIndex}
                        className="border-t border-white/10 pt-10 first:border-t-0 first:pt-0"
                      >
                        {/* =================================================
                            SECTION HEADER
                        ================================================= */}

                        <div className="mb-8">
                          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#46b9ff]">
                            Section {sectionIndex + 1}
                          </p>

                          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                            {section.Title}
                          </h2>
                        </div>

                        {/* =================================================
                            STEPS
                        ================================================= */}

                        {section.Steps && section.Steps.length > 0 && (
                          <div className="space-y-10">
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
                                    className="rounded-3xl border border-white/10 bg-white/3 p-5 sm:p-7"
                                  >
                                    {/* =================================================
                                          STEP HEADER
                                      ================================================= */}

                                    <div className="mb-6 flex items-start gap-4">
                                      <div className="flex h-9 min-w-9 shrink-0 items-center justify-center rounded-full border border-[#1877ff]/40 bg-[#1877ff]/10 text-sm font-bold text-[#46b9ff]">
                                        {stepNumber}
                                      </div>

                                      <h3 className="pt-1 text-lg font-semibold leading-7 text-white sm:text-xl">
                                        Step {stepNumber}
                                      </h3>
                                    </div>

                                    {/* =================================================
                                          STEP CONTENT
                                      ================================================= */}

                                    {step.Content && (
                                      <div className="w-full max-w-6xl">
                                        <MarkdownContent
                                          content={step.Content}
                                        />
                                      </div>
                                    )}

                                    {/* =================================================
                                          STEP IMAGE
                                      ================================================= */}

                                    {stepImageUrl && (
                                      <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                                        <img
                                          src={stepImageUrl}
                                          alt={
                                            step.Image?.alternativeText ||
                                            `${guide.Title} - Step ${stepNumber}`
                                          }
                                          className="block h-auto max-h-[75vh] w-full object-contain"
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
          <section className="px-6 pb-20 sm:pb-24">
            <div className="container-nexa">
              <div className="rounded-3xl border border-white/10 bg-white/3 p-6 sm:p-8">
                <a
                  href={guide.CTA.URL}
                  target={guide.CTA.OpenInNewTab ? "_blank" : undefined}
                  rel={
                    guide.CTA.OpenInNewTab ? "noopener noreferrer" : undefined
                  }
                  className="inline-flex items-center justify-center rounded-full bg-[#1877ff] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#46b9ff]"
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
