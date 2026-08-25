import { getPokerExchangeArticles } from "@/lib/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PokerExchangeCard from "@/components/cards/PokerExchangeCard";

export default async function PokerExchangePage() {
  const articles = await getPokerExchangeArticles();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050507] text-white">
        {/* =================================================
            HERO
            ================================================= */}

        <section className="px-6 pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pt-36">
          <div className="container-nexa">
            <div className="max-w-5xl">
              {/* Eyebrow */}

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#46b9ff] sm:text-sm">
                Poker Exchange
              </p>

              {/* Title */}

              <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Poker Exchange
              </h1>

              {/* Description */}

              <p className="mt-5 max-w-4xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                Explore poker insights, strategies, news and useful information
                for players across South Asia.
              </p>
            </div>
          </div>
        </section>

        {/* =================================================
            ARTICLES
            ================================================= */}

        <section className="px-6 pb-20 sm:pb-24 lg:pb-28">
          <div className="container-nexa">
            {articles.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  <PokerExchangeCard
                    key={article.documentId ?? article.id}
                    article={article}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-white/10 bg-white/3 px-6 py-16 text-center">
                <p className="text-sm text-white/50">
                  No poker exchange articles are available yet.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
