/* eslint-disable @next/next/no-img-element */

import { notFound } from "next/navigation";

import {
  getPokerExchangeArticleBySlug,
  getPokerExchangeArticles,
} from "@/lib/api";

import { getMediaUrl } from "@/lib/media";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import MarkdownContent from "@/components/content/MarkdownContent";
import OtherPokerExchange from "@/components/sections/poker-exchange/other-poker-exchange";

interface PokerExchangeDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PokerExchangeDetailPage({
  params,
}: PokerExchangeDetailPageProps) {
  const { slug } = await params;

  const article = await getPokerExchangeArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articles = await getPokerExchangeArticles();

  const bannerImageUrl = getMediaUrl(article.BannerImage, "large");

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050507] text-white">
        {/* =================================================
            ARTICLE HEADER
            ================================================= */}

        <section className="px-6 pb-10 pt-28 sm:pb-12 sm:pt-32 lg:pt-36">
          <div className="container-nexa">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Poker Exchange", href: "/poker-exchange" },
                { label: article.Title },
              ]}
            />

            <div className="mt-8 max-w-6xl">
              {/* Category */}

              {article.category?.Name && (
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#46b9ff] sm:text-sm">
                  {article.category.Name}
                </p>
              )}

              {/* Title */}

              <h1 className="mt-3 max-w-5xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {article.Title}
              </h1>

              {/* Summary */}

              {article.Summary && (
                <p className="mt-5 max-w-5xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                  {article.Summary}
                </p>
              )}

              {/* Meta */}

              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/40">
                {article.PublishDate && <span>{article.PublishDate}</span>}

                {article.ReadingTime && (
                  <>
                    <span className="h-1 w-1 rounded-full bg-white/20" />

                    <span>{article.ReadingTime} min read</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            BANNER IMAGE
            ================================================= */}

        {bannerImageUrl && (
          <section className="px-6 pb-12">
            <div className="container-nexa">
              <div className="w-full max-w-[60vw] overflow-hidden rounded-3xl border border-white/10 bg-white/3">
                <img
                  src={bannerImageUrl}
                  alt={article.BannerImage?.alternativeText || article.Title}
                  className="block h-auto w-full object-contain"
                />
              </div>
            </div>
          </section>
        )}

        {/* =================================================
            CONTENT
            ================================================= */}

        {article.Content && (
          <section className="px-6 pb-20 sm:pb-24 lg:pb-28">
            <div className="container-nexa">
              <div className="max-w-6xl">
                <MarkdownContent
                  content={article.Content}
                  className="max-w-none text-base leading-8 sm:text-lg sm:leading-8"
                />
              </div>
            </div>
          </section>
        )}

        {/* =================================================
            OTHER POKER EXCHANGE
            ================================================= */}

        <OtherPokerExchange articles={articles} currentSlug={article.Slug} />
      </main>

      <Footer />
    </>
  );
}
