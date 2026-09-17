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

      <main className="min-h-screen bg-[#050507] text-white">
        {/* =================================================
            HERO + PROMOTION IMAGE
            ================================================= */}

        <section className="px-6 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pt-36">
          <div className="container-nexa">
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

            <div className="mt-8 w-full sm:mt-10">
              {/* =================================================
                  EYEBROW
                  ================================================= */}

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff1764] sm:text-sm">
                Nexa Poker
              </p>

              {/* =================================================
                  TITLE
                  ================================================= */}

              <h1 className="mt-3 w-full max-w-6xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {promotion.Title}
              </h1>

              {/* =================================================
                  DESCRIPTION
                  ================================================= */}

              {promotion.Description && (
                <p className="mt-5 w-full max-w-5xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                  {promotion.Description}
                </p>
              )}
            </div>

            {/* =================================================
                PROMOTION IMAGE

                Left aligned with promotion content.
                Desktop width: approximately 60vw.
                Aspect ratio: 4:3.
                ================================================= */}

            {promotionImageUrl && (
              <div className="mt-10 sm:mt-12">
                <div className="relative aspect-4/3 w-full max-w-[40vw] overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d14] sm:rounded-3xl">
                  <Image
                    src={promotionImageUrl}
                    alt={promotion.Image?.alternativeText || promotion.Title}
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* =================================================
            PROMOTION CONTENT
            ================================================= */}

        {promotion.Content && (
          <section className="px-6 pb-20 sm:pb-24 lg:pb-28">
            <div className="container-nexa">
              <div className="w-full max-w-6xl">
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
