
import Image from "next/image";
import Link from "next/link";
import type { ShopProduct } from "@/types/shop";
import { getMediaUrl } from "@/lib/media";
import { ArrowUpRight, ShoppingBag } from "lucide-react";

interface ShopProductCardProps {
  product: ShopProduct;
}

export default function ShopProductCard({ product }: ShopProductCardProps) {
  const image = getMediaUrl(product.Thumbnail, "medium");

  const currency = product.Currency || "USD";

  const formatPrice = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(amount);

  const hasDiscount =
    product.CompareAtPrice != null &&
    product.CompareAtPrice > product.BasePrice;

  const discountPercentage = hasDiscount
    ? Math.round(
        ((product.CompareAtPrice! - product.BasePrice) /
          product.CompareAtPrice!) *
          100
      )
    : 0;

  return (
    <Link
      href={`/shop/${product.Slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#0b0c10] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ff1764]/50 hover:shadow-[0_16px_40px_rgba(255,23,100,0.10)]"
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-linear-to-br from-[#17171d] to-[#0b0c10]">
        {image ? (
          <Image
            src={image}
            alt={product.Name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-white/25">
            <ShoppingBag size={34} strokeWidth={1.2} />
            <span className="text-xs">Image coming soon</span>
          </div>
        )}

        {/* Subtle image gradient */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-black/10 opacity-70" />

        {/* Product Badge */}
        {product.Badge && (
          <span className="absolute left-3 top-3 rounded-full border border-[#ff6b9b]/30 bg-[#ff1764] px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.14em] text-white shadow-lg shadow-[#ff1764]/20">
            {product.Badge}
          </span>
        )}

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/75 px-2.5 py-1.5 text-[9px] font-bold text-white backdrop-blur-md">
            -{discountPercentage}%
          </span>
        )}

        {/* View Product Button */}
        <span className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-black/75 text-white opacity-0 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={19} />
        </span>
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {product.shop_category?.Name && (
          <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#ff4b87] sm:text-[10px]">
            {product.shop_category.Name}
          </p>
        )}

        <h3 className="line-clamp-2 min-h-11 text-sm font-bold leading-5 text-white transition-colors duration-300 group-hover:text-[#ff4b87] sm:text-base">
          {product.Name}
        </h3>

        {/* Price and Action */}
        <div className="mt-auto flex items-end justify-between gap-2 border-t border-white/[0.07] pt-4">
          <div className="min-w-0">
            <p className="mb-1 text-[9px] font-medium uppercase tracking-wider text-white/35">
              Price
            </p>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="text-base font-extrabold tracking-tight text-white sm:text-lg">
                {formatPrice(product.BasePrice)}
              </span>

              {hasDiscount && (
                <span className="text-xs text-white/35 line-through">
                  {formatPrice(product.CompareAtPrice!)}
                </span>
              )}
            </div>
          </div>

          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#ff1764]/30 bg-[#ff1764]/10 text-[#ff4b87] transition-all duration-300 group-hover:border-[#ff1764] group-hover:bg-[#ff1764] group-hover:text-white">
            <ArrowUpRight size={17} />
          </span>
        </div>
      </div>
    </Link>
  );
}
