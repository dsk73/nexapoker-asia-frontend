
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ShopHero from "@/components/shop/ShopHero";
import ShopCategories from "@/components/shop/ShopCategories";
import ShopFeaturedProducts from "@/components/shop/ShopFeaturedProducts";
import ShopPromoBanner from "@/components/shop/ShopPromoBanner";

import {
  getShopProducts,
  getShopCategories,
  getShopPageSetting,
  getShopSettings,
} from "@/lib/api";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getShopPageSetting();
  const seo = settings?.SEO;

  return {
    title: seo?.MetaTitle || "Nexa Poker Shop",
    description:
      seo?.MetaDescription ||
      "Explore exclusive Nexa Poker merchandise, apparel and accessories.",
    keywords: seo?.Keywords,
    alternates: seo?.CanonicalURL
      ? { canonical: seo.CanonicalURL }
      : undefined,
    robots: seo?.Robots || "index, follow",
    openGraph: {
      title: seo?.MetaTitle || "Nexa Poker Shop",
      description: seo?.MetaDescription || "Explore the Nexa Poker Shop.",
      images: seo?.OGImage?.url ? [seo.OGImage.url] : undefined,
    },
  };
}

export default async function ShopPage() {
  const [products, categories, pageSettings, shopSettings] =
    await Promise.all([
      getShopProducts(),
      getShopCategories(),
      getShopPageSetting(),
      getShopSettings(),
    ]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050507]">
        {!shopSettings?.ShopActive ? (
          <section className="container-nexa flex min-h-[60vh] items-center justify-center pt-28 text-center">
            <div>
              <h1 className="text-3xl font-black text-white">
                Shop Coming Soon
              </h1>
              <p className="mt-3 text-sm text-white/60">
                Our store is currently unavailable. Please check back soon.
              </p>
            </div>
          </section>
        ) : pageSettings ? (
          <>
            {/* Hero section with benefit cards */}
            <ShopHero settings={pageSettings} />

            {/* Featured products */}
            <ShopFeaturedProducts
              products={products}
              title={pageSettings.FeaturedSectionTitle || "Featured Products"}
            />

            {/* Categories moved below featured products */}
            <ShopCategories categories={categories} />

            {/* Promotional banner at the bottom */}
            <ShopPromoBanner settings={pageSettings} />
          </>
        ) : (
          <section className="container-nexa flex min-h-[60vh] items-center justify-center pt-28 text-center">
            <p className="text-white/60">
              Shop content is currently unavailable.
            </p>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
