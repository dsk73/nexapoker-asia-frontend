
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ShopProductListing from "@/components/shop/ShopProductListing";
import {
  getShopProducts,
  getShopCategories,
  getShopSettings,
} from "@/lib/api";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Shop All Products | Nexa Poker",
  description:
    "Explore the complete Nexa Poker collection of apparel, accessories and exclusive poker merchandise.",
};

interface ProductsPageProps {
  searchParams: Promise<{
    category?: string;
  }>;
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const { category } = await searchParams;

  const [products, categories, shopSettings] = await Promise.all([
    getShopProducts(),
    getShopCategories(),
    getShopSettings(),
  ]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050507] pt-28">
        {!shopSettings?.ShopActive ? (
          <section className="container-nexa flex min-h-[60vh] items-center justify-center text-center">
            <div>
              <h1 className="text-3xl font-black text-white">
                Shop Coming Soon
              </h1>
              <p className="mt-3 text-sm text-white/60">
                Our store is currently unavailable. Please check back soon.
              </p>
              <Link
                href="/shop"
                className="mt-6 inline-block text-sm font-bold text-[#ff1764]"
              >
                Back to Shop
              </Link>
            </div>
          </section>
        ) : (
          <ShopProductListing
            products={products}
            categories={categories}
            initialCategory={category || "all"}
          />
        )}
      </main>

      <Footer />
    </>
  );
}
