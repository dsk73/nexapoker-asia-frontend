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

      <main className="min-h-screen bg-[#050507] text-white">
        {/* =================================================
            HERO + BANNER
            ================================================= */}

        <section className="px-6 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pt-36">
          <div className="container-nexa">
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

            <div className="mt-8 w-full sm:mt-10">
              {/* Category */}

              {activity.category?.Name && (
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#46b9ff] sm:text-sm">
                  {activity.category.Name}
                </p>
              )}

              {/* Title */}

              <h1 className="mt-3 w-full max-w-6xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {activity.Title}
              </h1>

              {/* Summary */}

              {activity.Summary && (
                <p className="mt-5 w-full max-w-5xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                  {activity.Summary}
                </p>
              )}

              {/* Meta */}

              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-white/40 sm:text-sm">
                {activity.PublishDate && <span>{activity.PublishDate}</span>}

                {activity.PublishDate && activity.ReadingTime && (
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                )}

                {activity.ReadingTime && (
                  <span>{activity.ReadingTime} min read</span>
                )}
              </div>
            </div>

            {/* =================================================
                BANNER IMAGE

                Left aligned with article content.
                Desktop width: approximately 60vw.
                Aspect ratio: 4:3.
                ================================================= */}

            {bannerImageUrl && (
              <div className="mt-10 sm:mt-12">
                <div className="relative aspect-4/3 w-full max-w-[60vw] overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d14] sm:rounded-3xl">
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
                </div>
              </div>
            )}
          </div>
        </section>

        {/* =================================================
            ARTICLE CONTENT
            ================================================= */}

        {activity.Content && (
          <section className="px-6 pb-20 sm:pb-24 lg:pb-28">
            <div className="container-nexa">
              <div className="w-full max-w-6xl">
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
