import type { ShopProduct } from "@/types/shop";
import ShopProductCard from "./ShopProductCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ShopFeaturedProductsProps {
  products: ShopProduct[];
  title?: string;
}

export default function ShopFeaturedProducts({
  products,
  title = "Featured Products",
}: ShopFeaturedProductsProps) {
  const featuredProducts = products
    .filter((product) => product.Active && product.Featured)
    .sort((a, b) => (a.DisplayOrder ?? 0) - (b.DisplayOrder ?? 0));

  if (!featuredProducts.length) return null;

  return (
    <section className="bg-[#050507] py-16 sm:py-20">
      <div className="container-nexa">
        <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#ff1764]">
              The Nexa Collection
            </p>
            <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">
              {title}
            </h2>
          </div>

          <Link
            href="/shop/products"
            className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold text-white/70 transition-colors hover:text-[#ff1764] sm:text-sm"
          >
            View All
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {featuredProducts.slice(0, 4).map((product) => (
            <ShopProductCard key={product.documentId ?? product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}