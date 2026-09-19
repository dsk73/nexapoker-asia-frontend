// src/app/promotion/[slug]/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getFeaturedPromotionBySlug, getFeaturedPromotions } from "@/lib/api";
import { getMediaUrl } from "@/lib/media";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import PromotionContent from "@/components/sections/promotion/PromotionContent";
import RelatedPromotion from "@/components/sections/promotion/RelatedPromotion";

interface PromotionDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Force the promotion detail page to render dynamically.
 *
 * This ensures updated promotion content from Strapi can be
 * fetched at runtime without requiring a new frontend deployment.
 */
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: PromotionDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const promotion = await getFeaturedPromotionBySlug(slug);

  if (!promotion) {
    return {
      title: "Promotion Not Found | Nexa Poker",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${promotion.Title} | Nexa Poker`;

  const description =
    promotion.Description ||
    `Explore ${promotion.Title} on Nexa Poker for promotions, poker opportunities and rewards.`;

  const canonicalUrl = `/promotion/${promotion.Slug}`;

  const ogImage = getMediaUrl(promotion.Image, "large");

  return {
    title,
    description,

    keywords: [
      "Nexa Poker",
      "NexaPoker",
      "Nexa Poker promotions",
      "poker promotions",
      "online poker promotions",
      "poker rewards",
      promotion.Title,
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
              alt: promotion.Image?.alternativeText || promotion.Title,
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

export default async function PromotionDetailPage({
  params,
}: PromotionDetailPageProps) {
  const { slug } = await params;

  /* =================================================
     FETCH CURRENT PROMOTION + ALL PROMOTIONS
     ================================================= */

  const [promotion, promotions] = await Promise.all([
    getFeaturedPromotionBySlug(slug),
    getFeaturedPromotions(),
  ]);

  if (!promotion) {
    notFound();
  }

  /* =================================================
     PROMOTION IMAGE
     ================================================= */

  const promotionImageUrl = getMediaUrl(promotion.Image, "large");

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-x-hidden bg-[#050507] text-white">
        {/* =================================================
            HERO + PROMOTION IMAGE
            ================================================= */}

        <section className="relative overflow-hidden px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 md:pb-20 md:pt-32 lg:pt-36">
          {/* =================================================
              BACKGROUND ATMOSPHERE
          ================================================= */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-20%] top-[-10%] h-80 w-80 rounded-full bg-[#1877ff]/4 blur-[110px] sm:right-[-12%] sm:h-120 sm:w-120 sm:bg-[#1877ff]/5 sm:blur-[150px]" />

            <div className="absolute bottom-[-15%] left-[-20%] h-72 w-72 rounded-full bg-[#ff1764]/4 blur-[110px] sm:bottom-[-20%] sm:left-[-10%] sm:h-105 sm:w-105 sm:bg-[#ff1764]/5 sm:blur-[150px]" />
          </div>

          <div className="container-nexa relative z-10">
            {/* =================================================
                BREADCRUMBS
                ================================================= */}

            <Breadcrumbs
              items={[
                {
                  label: "Home",
                  href: "/",
                },
                {
                  label: "Promotions",
                  href: "/promotion",
                },
                {
                  label: promotion.Title,
                },
              ]}
            />

            {/* =================================================
                PROMOTION HEADER
                ================================================= */}

            <div className="mt-6 w-full sm:mt-8 md:mt-10">
              {/* =================================================
                  EYEBROW
                  ================================================= */}

              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#ff1764] sm:text-xs sm:tracking-[0.18em] md:text-sm">
                Nexa Poker
              </p>

              {/* =================================================
                  TITLE
                  ================================================= */}

              <h1 className="mt-2.5 w-full max-w-6xl wrap-break-word text-2xl font-bold leading-[1.12] tracking-tight text-white sm:mt-3 sm:text-4xl md:text-5xl">
                {promotion.Title}
              </h1>

              {/* =================================================
                  DESCRIPTION
                  ================================================= */}

              {promotion.Description && (
                <p className="mt-4 w-full max-w-5xl text-[14px] leading-6 text-white/60 sm:mt-5 sm:text-lg sm:leading-8">
                  {promotion.Description}
                </p>
              )}
            </div>

            {/* =================================================
                PROMOTION IMAGE

                Left aligned with promotion content.
                Desktop width remains controlled.
                Mobile uses full available width.
                ================================================= */}

            {promotionImageUrl && (
              <div className="mt-7 sm:mt-10 md:mt-12">
                <div className="relative aspect-4/3 w-full max-w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d14] shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:max-w-[40vw] sm:rounded-3xl">
                  <Image
                    src={promotionImageUrl}
                    alt={promotion.Image?.alternativeText || promotion.Title}
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#050507]/20 via-transparent to-transparent" />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* =================================================
            PROMOTION CONTENT
            ================================================= */}

        {promotion.Content && (
          <section className="relative overflow-hidden px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24 lg:pb-28">
            <div className="container-nexa">
              <div className="w-full max-w-6xl min-w-0">
                <PromotionContent content={promotion.Content} />
              </div>
            </div>
          </section>
        )}

        {/* =================================================
            RELATED PROMOTIONS
            ================================================= */}

        <RelatedPromotion
          promotions={promotions}
          currentSlug={promotion.Slug}
        />
      </main>

      <Footer />
    </>
  );
}
