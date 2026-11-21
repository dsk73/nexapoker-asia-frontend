import Image from "next/image";
import Link from "next/link";
import type { ShopCategory } from "@/types/shop";
import { getMediaUrl } from "@/lib/media";
import { ArrowUpRight } from "lucide-react";

interface ShopCategoriesProps {
  categories: ShopCategory[];
}

export default function ShopCategories({ categories }: ShopCategoriesProps) {
  const activeCategories = categories
    .filter((category) => category.Active)
    .sort((a, b) => (a.DisplayOrder ?? 0) - (b.DisplayOrder ?? 0));

  if (!activeCategories.length) return null;

  return (
    <section className="bg-[#050507] py-16 sm:py-20">
      <div className="container-nexa">
        <div className="mb-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#ff1764]">
            Explore the Store
          </p>
          <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {activeCategories.map((category) => {
            const image = getMediaUrl(category.Image, "medium");

            return (
              <Link
                key={category.documentId ?? category.id}
                href={`/shop/products?category=${encodeURIComponent(category.Slug)}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0c10]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  {image ? (
                    <Image
                      src={image}
                      alt={category.Name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs text-white/30">
                      Image coming soon
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4">
                    <div>
                      <h3 className="text-sm font-bold text-white sm:text-base">
                        {category.Name}
                      </h3>
                      {category.Description && (
                        <p className="mt-1 line-clamp-2 text-xs text-white/60">
                          {category.Description}
                        </p>
                      )}
                    </div>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ff1764] text-white transition-transform group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}