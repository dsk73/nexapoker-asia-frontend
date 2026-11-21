
"use client";

import { useState } from "react";
import Link from "next/link";
import type { ProductVariant } from "@/types/shop";
import { useCart } from "@/context/CartContext";
import {
  ShoppingCart,
  Check,
  PackageCheck,
  PackageX,
  Minus,
  Plus,
  Tag,
} from "lucide-react";

interface ProductVariantSelectorProps {
  variants: ProductVariant[];
  currency?: string;
  productId: string;
  slug: string;
  productName: string;
  image: string | null;
}

export default function ProductVariantSelector({
  variants,
  currency = "USD",
  productId,
  slug,
  productName,
  image,
}: ProductVariantSelectorProps) {
  const { addItem } = useCart();

  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const activeVariants = variants
    .filter((variant) => variant.Active)
    .sort((a, b) => (a.DisplayOrder ?? 0) - (b.DisplayOrder ?? 0));

  const [selectedVariantId, setSelectedVariantId] = useState<string>(
    String(activeVariants[0]?.documentId ?? activeVariants[0]?.id ?? "")
  );

  const selectedVariant = activeVariants.find(
    (variant) =>
      String(variant.documentId ?? variant.id) === selectedVariantId
  );

  if (!activeVariants.length || !selectedVariant) return null;

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(price);

  const isAvailable =
    selectedVariant.AllowBackorder ||
    !selectedVariant.TrackInventory ||
    (selectedVariant.StockQuantity ?? 0) > 0;

  const availableStock = selectedVariant.TrackInventory
    ? selectedVariant.StockQuantity ?? 0
    : null;

  const maxQuantity =
    availableStock !== null && !selectedVariant.AllowBackorder
      ? Math.max(1, availableStock)
      : 99;

  const hasDiscount =
    selectedVariant.CompareAtPrice != null &&
    selectedVariant.CompareAtPrice > selectedVariant.Price;

  const handleVariantChange = (variantId: string) => {
    setSelectedVariantId(variantId);
    setQuantity(1);
    setAdded(false);
  };

  const handleAddToCart = () => {
    if (!isAvailable || quantity < 1) return;

    for (let i = 0; i < quantity; i++) {
      addItem({
        productId,
        slug,
        name: productName,
        image,
        variantId: selectedVariantId,
        variantName: selectedVariant.VariantName,
        sku: selectedVariant.SKU,
        price: selectedVariant.Price,
        currency,
      });
    }

    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="mt-3 pt-0">
      {/* Section Heading */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-sm font-bold text-white sm:text-base">
            Choose Your Option
          </h2>
        </div>

        <span className="shrink-0 rounded-full border border-white/10 bg-white/4 px-2.5 py-1 text-[9px] font-semibold text-white/50 sm:text-[10px]">
          {activeVariants.length} OPTIONS
        </span>
      </div>

      {/* Variant Selection */}
      <div className="-mx-1 mt-4 overflow-x-auto px-1 pb-1 sm:overflow-visible">
        <div className="grid auto-cols-20.5 grid-flow-col gap-2 sm:auto-cols-auto sm:grid-flow-row sm:grid-cols-5">
          {activeVariants.map((variant) => {
            const variantId = String(variant.documentId ?? variant.id);
            const isSelected = selectedVariantId === variantId;

            const variantAvailable =
              variant.AllowBackorder ||
              !variant.TrackInventory ||
              (variant.StockQuantity ?? 0) > 0;

            const variantHasDiscount =
              variant.CompareAtPrice != null &&
              variant.CompareAtPrice > variant.Price;

            return (
              <button
                key={variantId}
                type="button"
                onClick={() => handleVariantChange(variantId)}
                aria-pressed={isSelected}
                disabled={!variantAvailable}
                className={`relative flex min-w-0 flex-col rounded-xl border px-2.5 py-2.5 text-left transition-all duration-200 sm:px-3 ${
                  isSelected
                    ? "border-[#ff1764] bg-[#ff1764]/9 shadow-[0_0_16px_rgba(255,23,100,0.08)]"
                    : "border-white/10 bg-[#0b0c10] hover:border-white/30 hover:bg-white/[0.035]"
                } ${
                  !variantAvailable
                    ? "cursor-not-allowed opacity-40"
                    : "cursor-pointer"
                }`}
              >
                <div className="flex items-center justify-between gap-1">
                  <span
                    className={`truncate text-xs font-bold sm:text-sm ${
                      isSelected ? "text-[#ff4b87]" : "text-white"
                    }`}
                  >
                    {variant.VariantName}
                  </span>

                  <span
                    className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      isSelected
                        ? "border-[#ff1764] bg-[#ff1764] text-white"
                        : "border-white/25 text-transparent"
                    }`}
                  >
                    {isSelected && <Check size={9} strokeWidth={3} />}
                  </span>
                </div>

                {variant.ColorName && (
                  <span className="mt-1.5 flex items-center gap-1.5 truncate text-[9px] text-white/45">
                    {variant.ColorCode && (
                      <span
                        className="h-2.5 w-2.5 shrink-0 rounded-full border border-white/20"
                        style={{ backgroundColor: variant.ColorCode }}
                      />
                    )}
                    {variant.ColorName}
                  </span>
                )}

                <div className="mt-2 flex flex-wrap items-center gap-1">
                  <span
                    className={`text-[11px] font-bold sm:text-xs ${
                      isSelected ? "text-[#ff4b87]" : "text-white"
                    }`}
                  >
                    {formatPrice(variant.Price)}
                  </span>

                  {variantHasDiscount && (
                    <span className="text-[9px] text-white/35 line-through">
                      {formatPrice(variant.CompareAtPrice!)}
                    </span>
                  )}
                </div>

                {!variantAvailable && (
                  <span className="mt-1 text-[8px] font-bold uppercase tracking-wider text-red-400">
                    Out of Stock
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Variant Summary */}
      <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-[#0b0c10]">
        <div className="flex items-center justify-between gap-3 px-3.5 py-3 sm:px-4">
          <div className="min-w-0">
            <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-white/40">
              Selected Option
            </p>
            <p className="mt-0.5 truncate text-sm font-bold text-white">
              {selectedVariant.VariantName}
            </p>
          </div>

          <div className="shrink-0 text-right">
            <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-white/40">
              Price
            </p>
            <div className="mt-0.5 flex items-center justify-end gap-2">
              <p className="text-base font-extrabold text-white sm:text-lg">
                {formatPrice(selectedVariant.Price)}
              </p>

              {hasDiscount && (
                <p className="text-[10px] text-white/35 line-through">
                  {formatPrice(selectedVariant.CompareAtPrice!)}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center border-t border-white/[0.07] px-3.5 py-2.5 sm:px-4">
          {isAvailable ? (
            <div className="flex items-center gap-2">
              <PackageCheck size={14} className="shrink-0 text-green-400" />
              <span className="text-[11px] font-medium text-green-400">
                {selectedVariant.AllowBackorder
                  ? "Available for backorder"
                  : !selectedVariant.TrackInventory
                    ? "Available"
                    : availableStock !== null && availableStock <= 5
                      ? `Only ${availableStock} left`
                      : "In Stock"}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <PackageX size={14} className="shrink-0 text-red-400" />
              <span className="text-[11px] font-medium text-red-400">
                Out of Stock
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Quantity Selector */}
      {isAvailable && (
        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold text-white sm:text-sm">
              Quantity
            </p>
            <p className="mt-0.5 text-[10px] text-white/40">
              Select how many you need.
            </p>
          </div>

          <div className="flex shrink-0 items-center rounded-full border border-white/10 bg-[#0b0c10] p-0.5">
            <button
              type="button"
              onClick={() => {
                setQuantity((current) => Math.max(1, current - 1));
                setAdded(false);
              }}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
              className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <Minus size={14} />
            </button>

            <span className="min-w-8 text-center text-xs font-bold text-white">
              {quantity}
            </span>

            <button
              type="button"
              onClick={() => {
                setQuantity((current) => Math.min(maxQuantity, current + 1));
                setAdded(false);
              }}
              disabled={quantity >= maxQuantity}
              aria-label="Increase quantity"
              className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Order Subtotal */}
      {isAvailable && quantity > 1 && (
        <div className="mt-3 flex items-center justify-between gap-2 rounded-lg border border-[#ff1764]/20 bg-[#ff1764]/5 px-3.5 py-2.5">
          <span className="flex items-center gap-2 text-[11px] text-white/60">
            <Tag size={13} className="text-[#ff4b87]" />
            Subtotal ({quantity} items)
          </span>

          <span className="text-sm font-bold text-white">
            {formatPrice(selectedVariant.Price * quantity)}
          </span>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-3">
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!isAvailable}
          className={`flex min-w-0 items-center justify-center gap-1.5 rounded-full px-3 py-3 text-xs font-bold text-white transition-all duration-300 sm:gap-2 sm:px-5 sm:py-3.5 sm:text-sm ${
            !isAvailable
              ? "cursor-not-allowed bg-white/10 text-white/35"
              : added
                ? "bg-green-600 hover:bg-green-700"
                : "bg-[#ff1764] shadow-[0_6px_20px_rgba(255,23,100,0.18)] hover:bg-[#c90046] hover:shadow-[0_6px_25px_rgba(255,23,100,0.28)]"
          }`}
        >
          {added ? (
            <Check size={16} className="shrink-0" />
          ) : (
            <ShoppingCart size={16} className="shrink-0" />
          )}

          <span className="truncate">
            {added
              ? "Added"
              : isAvailable
                ? "Add to Cart"
                : "Unavailable"}
          </span>
        </button>

        <Link
          href="/shop/cart"
          className="flex min-w-0 items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/[0.07] px-3 py-3 text-xs font-bold text-white transition-all duration-300 hover:border-[#ff1764]/60 hover:bg-white/12 sm:gap-2 sm:px-5 sm:py-3.5 sm:text-sm"
        >
          <span className="truncate">Go to Cart</span>
        </Link>
      </div>

      <p className="mt-2.5 text-center text-[9px] text-white/30 sm:text-[10px]">
        Your selected option will be added to your shopping cart.
      </p>
    </div>
  );
}
