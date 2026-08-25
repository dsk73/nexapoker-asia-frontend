import type { PokerExchangeArticle } from "@/types/content";

import PokerExchangeCard from "@/components/cards/PokerExchangeCard";

interface OtherPokerExchangeProps {
  articles: PokerExchangeArticle[];
  currentSlug: string;
}

export default function OtherPokerExchange({
  articles,
  currentSlug,
}: OtherPokerExchangeProps) {
  const otherArticles = articles.filter(
    (article) => article.Slug !== currentSlug,
  );

  if (otherArticles.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-white/8 px-6 py-16 sm:py-20 lg:py-24">
      <div className="container-nexa">
        {/* =================================================
            SECTION HEADING
            ================================================= */}

        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#46b9ff] sm:text-sm">
            Keep Exploring
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            More Poker Exchange
          </h2>

          <p className="mt-3 text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
            Explore more poker exchange articles, insights and updates from
            NexaPoker.
          </p>
        </div>

        {/* =================================================
            ARTICLE CARDS
            ================================================= */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherArticles.map((article) => (
            <PokerExchangeCard
              key={article.documentId ?? article.id}
              article={article}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
