
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  getShopProductBySlug,
  getShopProducts,
} from "@/lib/api";
import { getMediaUrl } from "@/lib/media";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import ProductVariantSelector from "@/components/shop/ProductVariantSelector";
import ProductGallery, {
  type ProductGalleryImage,
} from "@/components/shop/ProductGallery";
import ShopFeaturedProducts from "@/components/shop/ShopFeaturedProducts";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

const formatPrice = (amount: number, currency = "USD") =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(amount);

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getShopProductBySlug(slug);

  if (!product || !product.Active) {
    return {
      title: "Product Not Found | Nexa Poker",
      robots: { index: false, follow: false },
    };
  }

  const thumbnailUrl = getMediaUrl(product.Thumbnail, "large");

  return {
    title: `${product.Name} | Nexa Poker Shop`,
    description:
      product.ShortDescription ||
      `Explore ${product.Name} at the Nexa Poker Shop.`,
    openGraph: {
      title: `${product.Name} | Nexa Poker Shop`,
      description:
        product.ShortDescription ||
        `Explore ${product.Name} at the Nexa Poker Shop.`,
      images: thumbnailUrl ? [thumbnailUrl] : undefined,
      type: "website",
    },
  };
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const [product, allProducts] = await Promise.all([
    getShopProductBySlug(slug),
    getShopProducts(),
  ]);

  if (!product || !product.Active) {
    notFound();
  }

  const currency = product.Currency || "USD";

  // Featured products, excluding the current product.
  const featuredProducts = allProducts.filter(
    (item) =>
      item.Active &&
      item.Featured &&
      item.Slug !== product.Slug
  );

  // Sort gallery images.
  const gallery = (product.Gallery ?? [])
    .filter((item) => item.Image)
    .sort(
      (a, b) => (a.DisplayOrder ?? 0) - (b.DisplayOrder ?? 0)
    );

  // Primary image.
  const primaryGalleryImage = getMediaUrl(
    gallery[0]?.Image,
    "large"
  );

  const thumbnailImage = getMediaUrl(
    product.Thumbnail,
    "large"
  );

  const mainImage = primaryGalleryImage || thumbnailImage;

  // Interactive gallery images.
  const galleryImages: ProductGalleryImage[] = [];

  if (mainImage) {
    galleryImages.push({
      id: "primary",
      src: mainImage,
      alt:
        (primaryGalleryImage
          ? gallery[0]?.AlternativeText || gallery[0]?.Label
          : null) || product.Name,
    });
  }

  gallery.forEach((item, index) => {
    if (index === 0 && primaryGalleryImage) {
      return;
    }

    const src = getMediaUrl(item.Image, "medium");

    if (!src || src === mainImage) {
      return;
    }

    galleryImages.push({
      id: item.id,
      src,
      alt:
        item.AlternativeText ||
        item.Label ||
        product.Name,
    });
  });

  // Active variants.
  const variants = (product.product_variants ?? [])
    .filter((variant) => variant.Active)
    .sort(
      (a, b) => (a.DisplayOrder ?? 0) - (b.DisplayOrder ?? 0)
    );

  // Discount.
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
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050507] pb-10 pt-24 sm:pt-26 lg:pb-14 lg:pt-28">
        <div className="container-nexa">

          {/* Top Navigation */}
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 sm:mb-4">
            <Link
              href="/shop"
              className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#18181d] px-3 py-1.5 text-[10px] font-semibold text-white/75 transition-all hover:border-white/20 hover:bg-[#25252c] hover:text-white sm:text-xs"
            >
              <ArrowLeft
                size={13}
                className="transition-transform group-hover:-translate-x-1"
              />
              Back to Shop
            </Link>

            <Link
              href="/shop/products"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#18181d] px-3 py-1.5 text-[10px] font-semibold text-white/75 transition-all hover:border-white/20 hover:bg-[#25252c] hover:text-white sm:text-xs"
            >
              Explore All Products
              <ArrowRight size={12} />
            </Link>
          </div>

          {/* Product Layout: 40% Gallery / 60% Information */}
          <div className="grid items-start gap-5 lg:grid-cols-[2fr_3fr] lg:gap-6 xl:gap-8">

            {/* Left: Product Gallery (40%) */}
            <div className="min-w-0 lg:sticky lg:top-24 lg:mx-auto lg:w-full lg:max-w-120">
              <ProductGallery
                images={galleryImages}
                productName={product.Name}
                badge={product.Badge}
                discountPercentage={discountPercentage}
              />
            </div>

            {/* Right: Product Information (60%) */}
            <div className="min-w-0 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7.5rem)] lg:overflow-y-auto lg:overscroll-contain lg:pr-1.5 lg:scrollbar-thin lg:scrollbar-track-transparent lg:scrollbar-thumb-white/15">

              {/* Category */}
              {product.shop_category?.Name && (
                <span className="inline-flex rounded-full border border-[#ff1764]/20 bg-[#ff1764]/8 px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.13em] text-[#ff4b87] sm:text-[9px]">
                  {product.shop_category.Name}
                </span>
              )}

              {/* Product Name */}
              <h1 className="mt-2 text-lg font-extrabold leading-tight tracking-tight text-white sm:text-xl lg:text-[clamp(1.4rem,1.8vw,1.7rem)]">
                {product.Name}
              </h1>

              {/* Short Description */}
              {product.ShortDescription && (
                <p className="mt-1 max-w-xl text-[10px] leading-4 text-white/50 sm:text-[11px] sm:leading-5">
                  {product.ShortDescription}
                </p>
              )}

              {/* Product Price */}
              <div className="mt-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 pb-1">
                <span className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                  {formatPrice(product.BasePrice, currency)}
                </span>

                {hasDiscount && (
                  <>
                    <span className="text-[11px] text-white/35 line-through sm:text-xs">
                      {formatPrice(
                        product.CompareAtPrice!,
                        currency
                      )}
                    </span>

                    <span className="rounded-full bg-[#ff1764]/10 px-2 py-0.5 text-[8px] font-bold text-[#ff6b9b]">
                      {discountPercentage}% OFF
                    </span>
                  </>
                )}
              </div>

              {/* Variants and Cart */}
              {variants.length > 0 ? (
                <ProductVariantSelector
                  variants={variants}
                  currency={currency}
                  productId={String(
                    product.documentId ?? product.id
                  )}
                  slug={product.Slug}
                  productName={product.Name}
                  image={mainImage}
                />
              ) : (
                <div className="mt-3 rounded-lg border border-white/10 bg-[#0b0c10] p-3">
                  <p className="text-xs font-semibold text-white">
                    Product options currently unavailable
                  </p>
                  <p className="mt-1 text-[10px] leading-4 text-white/45">
                    Please check back later for available product options.
                  </p>
                </div>
              )}

              {/* Product Details */}
              {product.Description && (
                <section className="mt-4 border-t border-white/10 pt-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3.5 w-1 rounded-full bg-[#ff1764]" />
                    <h2 className="text-xs font-bold text-white sm:text-sm">
                      Product Details
                    </h2>
                  </div>

                  <div className="mt-2 whitespace-pre-line text-[10px] leading-4.5 text-white/55 sm:text-[11px] sm:leading-5">
                    {product.Description}
                  </div>
                </section>
              )}

              {/* Bottom Navigation */}
              <div className="mt-4 border-t border-white/[0.07] pt-3">
                <Link
                  href="/shop/products"
                  className="group inline-flex items-center gap-1.5 text-[10px] font-semibold text-white/45 transition-colors hover:text-[#ff4b87] sm:text-[11px]"
                >
                  <ArrowLeft
                    size={12}
                    className="transition-transform group-hover:-translate-x-1"
                  />
                  Continue Exploring Products
                </Link>
              </div>
            </div>
          </div>

          {/* More Featured Products */}
          {featuredProducts.length > 0 && (
            <section className="mt-10 border-t border-white/8 pt-7 sm:mt-14 sm:pt-9 lg:mt-16">
              <ShopFeaturedProducts
                products={featuredProducts}
                title="More Picks You'll Love"
              />
            </section>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
