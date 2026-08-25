import { getTeachingGuides } from "@/lib/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TeachingGuideCard from "@/components/cards/TeachingGuideCard";

export default async function TeachingCenterPage() {
  const guides = await getTeachingGuides();

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
                Learning Center
              </p>

              {/* Title */}

              <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Learn Poker. Improve Your Game.
              </h1>

              {/* Description */}

              <p className="mt-5 max-w-4xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                Learn poker fundamentals, understand Texas Hold&apos;em, sharpen
                your strategy and become a more confident player.
              </p>
            </div>
          </div>
        </section>

        {/* =================================================
            TEACHING GUIDES
            ================================================= */}

        <section className="px-6 pb-20 sm:pb-24 lg:pb-28">
          <div className="container-nexa">
            {guides.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {guides.map((guide) => (
                  <TeachingGuideCard
                    key={guide.documentId ?? guide.id}
                    guide={guide}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-white/10 bg-white/3 px-6 py-16 text-center">
                <p className="text-sm text-white/50">
                  No teaching guides are available yet.
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
