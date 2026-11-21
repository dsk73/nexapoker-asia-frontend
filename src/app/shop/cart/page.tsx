
"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";

export default function CartPage() {
  const {
    items,
    cartCount,
    subtotal,
    isLoaded,
    updateQuantity,
    removeItem,
  } = useCart();

  const currency = items[0]?.currency || "USD";

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(price);

  if (!isLoaded) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-[70vh] items-center justify-center bg-[#050507] pt-28">
          <p className="text-sm text-white/50">Loading your cart...</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050507] px-4 pb-20 pt-32 sm:px-6">
        <div className="container-nexa">
          <Link
            href="/shop"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[#ff1764]"
          >
            <ArrowLeft size={17} />
            Continue Shopping
          </Link>

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

          {items.length === 0 ? (
            <div className="flex min-h-[350px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#0b0c10] px-6 text-center">
              <ShoppingBag size={48} className="text-[#ff1764]" />

              <h2 className="mt-6 text-xl font-bold text-white">
                Your cart is empty
              </h2>

              <p className="mt-2 max-w-sm text-sm leading-6 text-white/50">
                Looks like you haven&apos;t added anything to your cart yet.
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
            <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.variantId}
                    className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#0b0c10] p-4 sm:flex-row sm:items-center"
                  >
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

                    <div className="flex items-center justify-between gap-5 sm:flex-col sm:items-end">
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
                            updateQuantity(item.variantId, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                          className="text-white/60 transition-colors hover:text-[#ff1764]"
                        >
                          <Plus size={15} />
                        </button>
                      </div>

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

                <button
                  type="button"
                  disabled
                  className="mt-7 w-full cursor-not-allowed rounded-full bg-[#ff1764] px-6 py-4 text-sm font-bold text-white opacity-50"
                >
                  Checkout Coming Soon
                </button>

                <p className="mt-3 text-center text-xs leading-5 text-white/40">
                  Checkout will be available once the order and payment
                  process is connected.
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

      <Footer />
    </>
  );
}
