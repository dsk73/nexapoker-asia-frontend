
"use client";

import { useMemo, useState } from "react";
import type { ShopCategory, ShopProduct } from "@/types/shop";
import ShopProductCard from "./ShopProductCard";
import { Search, SlidersHorizontal } from "lucide-react";

interface ShopProductListingProps {
  products: ShopProduct[];
  categories: ShopCategory[];
  initialCategory?: string;
}

export default function ShopProductListing({
  products,
  categories,
  initialCategory = "all",
}: ShopProductListingProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => product.Active);

    if (selectedCategory !== "all") {
      result = result.filter(
        (product) => product.shop_category?.Slug === selectedCategory
      );
    }

    if (search.trim()) {
      const term = search.toLowerCase();

      result = result.filter(
        (product) =>
          product.Name.toLowerCase().includes(term) ||
          product.ShortDescription?.toLowerCase().includes(term) ||
          product.ProductCode.toLowerCase().includes(term)
      );
    }

    if (sortBy === "price-low") {
      result.sort((a, b) => a.BasePrice - b.BasePrice);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.BasePrice - a.BasePrice);
    } else if (sortBy === "name") {
      result.sort((a, b) => a.Name.localeCompare(b.Name));
    } else {
      result.sort(
        (a, b) =>
          Number(b.Featured) - Number(a.Featured) ||
          (a.DisplayOrder ?? 0) - (b.DisplayOrder ?? 0)
      );
    }

    return result;
  }, [products, selectedCategory, search, sortBy]);

  const activeCategories = categories
    .filter((category) => category.Active)
    .sort((a, b) => (a.DisplayOrder ?? 0) - (b.DisplayOrder ?? 0));

  return (
    <section className="bg-[#050507] py-12 sm:py-16">
      <div className="container-nexa">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff1764]">
            The Official Collection
          </p>

          <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Explore All Products
          </h1>

          <p className="mt-3 text-sm text-white/50">
            Discover the Nexa Poker collection of apparel, accessories and
            exclusive poker merchandise.
          </p>
        </div>

        {/* Category filters */}
        <div className="mb-7 flex gap-2 overflow-x-auto pb-2">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`shrink-0 rounded-full border px-5 py-2.5 text-xs font-bold transition ${
              selectedCategory === "all"
                ? "border-[#ff1764] bg-[#ff1764] text-white"
                : "border-white/10 bg-[#0b0c10] text-white/60 hover:border-[#ff1764]/50"
            }`}
          >
            All Products
          </button>

          {activeCategories.map((category) => (
            <button
              key={category.documentId ?? category.id}
              type="button"
              onClick={() => setSelectedCategory(category.Slug)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-xs font-bold transition ${
                selectedCategory === category.Slug
                  ? "border-[#ff1764] bg-[#ff1764] text-white"
                  : "border-white/10 bg-[#0b0c10] text-white/60 hover:border-[#ff1764]/50"
              }`}
            >
              {category.Name}
            </button>
          ))}
        </div>

        {/* Search and sorting */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-sm">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35"
            />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products..."
              className="h-12 w-full rounded-full border border-white/10 bg-[#0b0c10] pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#ff1764]/60"
            />
          </div>

          <div className="flex items-center gap-3">
            <SlidersHorizontal size={17} className="text-white/50" />

            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="h-12 flex-1 rounded-full border border-white/10 bg-[#0b0c10] px-4 text-sm text-white outline-none focus:border-[#ff1764]/60 sm:flex-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-5 text-xs text-white/45">
          Showing {filteredProducts.length} of {products.length} products
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ShopProductCard
                key={product.documentId ?? product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#0b0c10] px-6 text-center">
            <Search size={36} className="text-white/30" />

            <h2 className="mt-5 text-lg font-bold text-white">
              No products found
            </h2>

            <p className="mt-2 text-sm text-white/45">
              Try another search or select a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("all");
              }}
              className="mt-5 text-sm font-bold text-[#ff1764] hover:text-white"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
