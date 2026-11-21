
import type { StrapiMedia } from "./strapi";

export interface ShopCategory {
  id: number;
  documentId?: string;
  Name: string;
  Slug: string;
  Description?: string;
  DisplayOrder?: number;
  Featured?: boolean;
  Active: boolean;
  Image?: StrapiMedia | null;
  Icon?: StrapiMedia | null;
}

export interface ShopProductImage {
  id: number;
  Label?: string;
  AlternativeText?: string;
  DisplayOrder?: number;
  IsPrimary?: boolean;
  Image?: StrapiMedia | null;
}

export interface ShopProductView {
  id: number;
  ViewName: string;
  Label?: string;
  DisplayOrder?: number;
  Image?: StrapiMedia | null;
}

export interface ProductVariant {
  id: number;
  documentId?: string;
  VariantName: string;
  SKU: string;
  Size?: string;
  ColorName?: string | null;
  ColorCode?: string | null;
  Price: number;
  CompareAtPrice?: number | null;
  StockQuantity?: number;
  TrackInventory: boolean;
  AllowBackorder: boolean;
  Active: boolean;
  DisplayOrder?: number;
  VariantImage?: StrapiMedia | null;
}

export interface ShopProduct {
  id: number;
  documentId?: string;
  Name: string;
  Slug: string;
  ProductCode: string;
  ShortDescription?: string;
  Description?: string;
  BasePrice: number;
  CompareAtPrice?: number | null;
  Currency: string;
  ProductType: string;
  Badge?: string;
  Featured: boolean;
  Active: boolean;
  TrackInventory: boolean;
  AllowBackorder: boolean;
  ManufacturingDays?: number;
  ShippingDays?: number;
  Weight?: number;
  Length?: number;
  Width?: number;
  Height?: number;
  DimensionsUnit?: string;
  WeightUnit?: string;
  DisplayOrder?: number;
  shop_category?: ShopCategory | null;
  Thumbnail?: StrapiMedia | null;
  Gallery?: ShopProductImage[];
  ProductViews?: ShopProductView[];
  product_variants?: ProductVariant[];
}

export interface ShopBenefit {
  id: number;
  Title: string;
  Description?: string;
  Icon?: StrapiMedia | null;
  DisplayOrder?: number;
  Active: boolean;
}

export interface ShopPageSetting {
  id: number;
  documentId?: string;
  HeroBadge?: string;
  HeroTitle?: string;
  HeroHighlight?: string;
  HeroDescription?: string;
  HeroImage?: StrapiMedia | null;
  HeroMobileImage?: StrapiMedia | null;
  HeroButtonText?: string;
  HeroButtonLink?: string;
  Benefits?: ShopBenefit[];
  FeaturedSectionTitle?: string;
  PromotionalBannerTitle?: string;
  PromotionalBannerHighlight?: string;
  PromotionalBannerDescription?: string;
  PromotionalBannerImage?: StrapiMedia | null;
  PromotionalBannerButtonText?: string;
  PromotionalBannerButtonLink?: string;
  NewsletterTitle?: string;
  NewsletterDescription?: string;
  NewsletterActive: boolean;
  SEO?: {
    id?: number;
    MetaTitle?: string;
    MetaDescription?: string;
    CanonicalURL?: string;
    Robots?: string;
    Keywords?: string;
    OGImage?: StrapiMedia | null;
  } | null;
}

export interface ShopSettings {
  id: number;
  documentId?: string;
  ShopActive: boolean;
  Currency: string;
  DefaultShippingCost: number;
  FreeShippingThreshold?: number | null;
  MinimumOrderAmount?: number | null;
  MaximumOrderQuantity?: number | null;
  ShippingInformation?: string;
  ReturnsInformation?: string;
  SupportTelegramLink?: string;
  SupportEmail?: string;
  OrderConfirmationMessage?: string;
}
