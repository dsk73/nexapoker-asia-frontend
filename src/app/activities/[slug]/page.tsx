// src/app/activities/[slug]/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getActivities, getActivityBySlug } from "@/lib/api";
import { getMediaUrl } from "@/lib/media";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import MarkdownContent from "@/components/content/MarkdownContent";
import OtherActivities from "@/components/sections/activities/other-activities";

interface ActivityDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Force the activity detail page to render dynamically.
 *
 * This ensures updated activity content from Strapi can be
 * fetched at runtime without requiring a new frontend deployment.
 */
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: ActivityDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const activity = await getActivityBySlug(slug);

  if (!activity) {
    return {
      title: "Activity Not Found | Nexa Poker",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${activity.Title} | Nexa Poker`;

  const description =
    activity.Summary ||
    `Explore ${activity.Title} on Nexa Poker for poker insights, strategy, tournaments and useful online poker content.`;

  const canonicalUrl = `/activities/${activity.Slug}`;

  const ogImage = getMediaUrl(activity.BannerImage, "large");

  return {
    title,
    description,

    keywords: [
      "Nexa Poker",
      "NexaPoker",
      "online poker",
      "poker activities",
      "poker strategy",
      "poker tournaments",
      "poker tips",
      ...(Array.isArray(activity.Tags)
        ? activity.Tags.filter((tag): tag is string => typeof tag === "string")
        : []),
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
      publishedTime: activity.PublishDate,
      images: ogImage
        ? [
            {
              url: ogImage,
              alt: activity.BannerImage?.alternativeText || activity.Title,
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

export default async function ActivityDetailPage({
  params,
}: ActivityDetailPageProps) {
  const { slug } = await params;

  /* =================================================
     FETCH CURRENT ACTIVITY + ALL ACTIVITIES
     ================================================= */

  const [activity, activities] = await Promise.all([
    getActivityBySlug(slug),
    getActivities(),
  ]);

  if (!activity) {
    notFound();
  }

  /* =================================================
     BANNER IMAGE
     ================================================= */

  const bannerImageUrl = getMediaUrl(activity.BannerImage, "large");

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-x-hidden bg-[#050507] text-white">
        {/* =================================================
            HERO + BANNER
            ================================================= */}

        <section className="relative overflow-hidden px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 md:pb-20 md:pt-32 lg:pt-36">
          {/* Background atmosphere */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-20%] top-[-20%] h-72 w-72 rounded-full bg-[#46b9ff]/4 blur-[100px] sm:right-[-10%] sm:h-105 sm:w-105 sm:blur-[140px]" />

            <div className="absolute bottom-[-25%] left-[-20%] h-64 w-64 rounded-full bg-[#ff1764]/3 blur-[100px] sm:left-[-10%] sm:h-96 sm:w-96 sm:blur-[140px]" />
          </div>

          <div className="container-nexa relative z-10">
            {/* =================================================
                BREADCRUMBS
                ================================================= */}

            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Activities", href: "/activities" },
                { label: activity.Title },
              ]}
            />

            {/* =================================================
                ARTICLE HEADER
                ================================================= */}

            <div className="mt-6 w-full sm:mt-8 md:mt-10">
              {/* Category */}

              {activity.category?.Name && (
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#46b9ff] sm:text-xs sm:tracking-[0.18em] md:text-sm">
                  {activity.category.Name}
                </p>
              )}

              {/* Title */}

              <h1 className="mt-2.5 w-full max-w-6xl wrap-break-word text-2xl font-bold leading-[1.12] tracking-tight text-white sm:mt-3 sm:text-4xl md:text-5xl">
                {activity.Title}
              </h1>

              {/* Summary */}

              {activity.Summary && (
                <p className="mt-4 w-full max-w-5xl text-[14px] leading-6 text-white/60 sm:mt-5 sm:text-lg sm:leading-8">
                  {activity.Summary}
                </p>
              )}

              {/* Meta */}

              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-white/40 sm:mt-5 sm:text-sm">
                {activity.PublishDate && (
                  <span className="whitespace-nowrap">
                    {activity.PublishDate}
                  </span>
                )}

                {activity.PublishDate && activity.ReadingTime && (
                  <span className="hidden h-1 w-1 shrink-0 rounded-full bg-white/20 sm:block" />
                )}

                {activity.ReadingTime && (
                  <span className="whitespace-nowrap">
                    {activity.ReadingTime} min read
                  </span>
                )}
              </div>
            </div>

            {/* =================================================
                BANNER IMAGE

                Left aligned with article content.
                Desktop width remains approximately 60vw.
                Mobile uses the full available width.
                ================================================= */}

            {bannerImageUrl && (
              <div className="mt-7 sm:mt-10 md:mt-12">
                <div className="relative aspect-4/3 w-full max-w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d14] shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:max-w-[60vw] sm:rounded-3xl">
                  <Image
                    src={bannerImageUrl}
                    alt={
                      activity.BannerImage?.alternativeText || activity.Title
                    }
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, 60vw"
                    className="object-cover"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#050507]/20 via-transparent to-transparent" />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* =================================================
            ARTICLE CONTENT
            ================================================= */}

        {activity.Content && (
          <section className="relative overflow-hidden px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24 lg:pb-28">
            <div className="container-nexa">
              <div className="w-full max-w-6xl min-w-0">
                <MarkdownContent content={activity.Content} />
              </div>
            </div>
          </section>
        )}

        {/* =================================================
            OTHER ACTIVITIES
            ================================================= */}

        <OtherActivities activities={activities} currentSlug={activity.Slug} />
      </main>

      <Footer />
    </>
  );
}
