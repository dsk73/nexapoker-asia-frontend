
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";

export type CartDisplayItem = {
  variantId: string;
  productId: string;
  slug: string;
  name: string;
  image?: string | null;
  variantName: string;
  sku: string;
  price: number;
  quantity: number;
};

type Props = {
  items: CartDisplayItem[];
  cartCount: number;
  subtotal: number;
  formatPrice: (price: number) => string;
  updateQuantity: (variantId: string, quantity: number) => void;
  removeItem: (variantId: string) => void;
  onCheckout: () => void;
};

export default function CartContent({
  items,
  cartCount,
  subtotal,
  formatPrice,
  updateQuantity,
  removeItem,
  onCheckout,
}: Props) {
  return (
    <main className="min-h-screen bg-[#050507] px-4 pb-20 pt-32 sm:px-6">
      <div className="container-nexa">
        {/* Continue Shopping */}
        <Link
          href="/shop"
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[#ff1764]"
        >
          <ArrowLeft size={17} />
          Continue Shopping
        </Link>

        {/* Page Heading */}
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff1764]">
            Your Selection
          </p>

          <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Shopping Cart
          </h1>

          <p className="mt-2 text-sm text-white/50">
            {cartCount} {cartCount === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        {/* Empty Cart */}
        {items.length === 0 ? (
          <div className="flex min-h-87.5 flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#0b0c10] px-6 text-center">
            <ShoppingBag size={48} className="text-[#ff1764]" />

            <h2 className="mt-6 text-xl font-bold text-white">
              Your cart is empty
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-white/50">
              Looks like you have not added anything to your cart yet.
              Explore our collection and find something you love.
            </p>

            <Link
              href="/shop"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#ff1764] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#c90046]"
            >
              Explore Shop
              <ArrowLeft size={16} className="rotate-180" />
            </Link>
          </div>
        ) : (
          /* Cart Items and Order Summary */
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            {/* Cart Items */}
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.variantId}
                  className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#0b0c10] p-4 sm:flex-row sm:items-center"
                >
                  {/* Product Image */}
                  <Link
                    href={`/shop/${item.slug}`}
                    className="relative h-28 w-full shrink-0 overflow-hidden rounded-xl bg-[#151519] sm:h-28 sm:w-28"
                  >
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="112px"
                        className="object-contain p-2"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-xs text-white/30">
                        No Image
                      </div>
                    )}
                  </Link>

                  {/* Product Details */}
                  <div className="min-w-0 flex-1">
                    <Link
                      href={`/shop/${item.slug}`}
                      className="text-base font-bold text-white transition-colors hover:text-[#ff1764]"
                    >
                      {item.name}
                    </Link>

                    <p className="mt-2 text-xs text-white/50">
                      Variant: {item.variantName}
                    </p>

                    <p className="mt-1 text-xs text-white/40">
                      SKU: {item.sku}
                    </p>

                    <p className="mt-3 text-sm font-bold text-[#ff1764]">
                      {formatPrice(item.price)}
                    </p>
                  </div>

                  {/* Quantity and Item Total */}
                  <div className="flex items-center justify-between gap-5 sm:flex-col sm:items-end">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 rounded-full border border-white/10 px-3 py-2">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.variantId,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                        className="text-white/60 transition-colors hover:text-[#ff1764] disabled:opacity-30"
                      >
                        <Minus size={15} />
                      </button>

                      <span className="min-w-5 text-center text-sm font-bold text-white">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.variantId,
                            item.quantity + 1
                          )
                        }
                        aria-label="Increase quantity"
                        className="text-white/60 transition-colors hover:text-[#ff1764]"
                      >
                        <Plus size={15} />
                      </button>
                    </div>

                    {/* Item Total and Remove */}
                    <div className="flex items-center gap-4">
                      <p className="text-sm font-bold text-white">
                        {formatPrice(item.price * item.quantity)}
                      </p>

                      <button
                        type="button"
                        onClick={() => removeItem(item.variantId)}
                        aria-label={`Remove ${item.name}`}
                        className="text-white/40 transition-colors hover:text-red-400"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <aside className="h-fit rounded-2xl border border-white/10 bg-[#0b0c10] p-6">
              <h2 className="text-lg font-bold text-white">
                Order Summary
              </h2>

              <div className="mt-6 flex justify-between text-sm text-white/60">
                <span>Subtotal ({cartCount} items)</span>
                <span>{formatPrice(subtotal)}</span>
              </div>

              <div className="mt-4 flex justify-between text-sm text-white/60">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>

              <div className="my-6 border-t border-white/10" />

              <div className="flex justify-between gap-3">
                <span className="font-bold text-white">Subtotal</span>

                <span className="text-lg font-black text-[#ff1764]">
                  {formatPrice(subtotal)}
                </span>
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                onClick={onCheckout}
                className="mt-7 w-full rounded-full bg-[#ff1764] px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-[#c90046]"
              >
                Continue to Checkout
              </button>

              <p className="mt-3 text-center text-xs leading-5 text-white/40">
                Submit your order request and our team will contact you with
                payment instructions.
              </p>

              <Link
                href="/shop"
                className="mt-5 block text-center text-sm font-semibold text-white/60 transition-colors hover:text-[#ff1764]"
              >
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
