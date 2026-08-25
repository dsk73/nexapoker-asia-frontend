import type { StrapiImage } from "./strapi";

/* =========================================================
   SEO
========================================================= */

export interface SEO {
  id?: number;
  MetaTitle: string;
  MetaDescription: string;
  CanonicalURL: string;
  OGImage?: StrapiImage | null;
  Robots: string;
  Keywords: string;
}

/* =========================================================
   ABOUT FEATURE
========================================================= */

export interface AboutFeature {
  id?: number;
  Title: string;
  Description: string;
  Image?: StrapiImage | null;
  DisplayOrder: number;
  Active: boolean;
}

/* =========================================================
   ABOUT PAGE
========================================================= */

export interface AboutPage {
  id: number;
  documentId?: string;

  HeroTitle: string;
  HeroSubtitle: string;
  HeroBannerImage?: StrapiImage | null;

  AboutTitle: string;
  AboutLogo?: StrapiImage | null;
  AboutContent: string;

  SectionTitle: string;
  SectionContent: string;
  SectionImage?: StrapiImage | null;

  Features: AboutFeature[];

  SEO?: SEO | null;

  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

/* =========================================================
   HERO SLIDES
========================================================= */

export interface HeroSlide {
  id: number;
  documentId?: string;
  Title: string;
  Subtitle?: string;
  Description?: string;
  DesktopImage?: StrapiImage | null;
  MobileImage?: StrapiImage | null;
  PrimaryButtonText?: string;
  PrimaryButtonURL?: string;
  DisplayOrder: number;
  Active: boolean;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

/* =========================================================
   HERO PROMOTION CARD
========================================================= */

export interface HeroPromotionBenefit {
  id: number;
  Title: string;
  Description?: string;
  Icon?: StrapiImage | null;
}

export interface HeroPromotionCard {
  id: number;
  documentId?: string;
  CardTitle: string;
  Badge: string;
  ReferralCode: string;
  CommunityButtonText: string;
  CommunityButtonURL: string;
  Benefits?: HeroPromotionBenefit[];
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

/* =========================================================
   CATEGORY
========================================================= */

export interface Category {
  id: number;
  documentId?: string;
  Name: string;
  Slug: string;
  Color?: string;
  DisplayOrder?: number;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

/* =========================================================
   AMBASSADOR
========================================================= */

export interface BrandAmbassador {
  id: number;
  documentId?: string;
  Name: string;
  Photo?: StrapiImage | null;
  Description?: string;
  Position?: string;
  DisplayOrder?: number;
  Active: boolean;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

/* =========================================================
   FAQ
========================================================= */

export type FAQCategory = string;

export interface FAQ {
  id: number;
  documentId?: string;
  Question: string;
  Answer: string;
  DisplayOrder?: number;
  Active: boolean;
  Category?: FAQCategory;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

/* =========================================================
   PAYMENT METHOD
========================================================= */

export interface PaymentMethod {
  id: number;
  documentId?: string;
  Name: string;
  Logo?: StrapiImage | null;
  Description?: string;
  ProcessingTime?: string;
  SupportedCurrencies?: string[] | Record<string, unknown> | unknown;
  MinimumDeposit?: number;
  MaximumDeposit?: number;
  DisplayOrder?: number;
  Active: boolean;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

/* =========================================================
   ARTICLE / ACTIVITY SHARED FIELDS
========================================================= */

export interface ArticleBase {
  id: number;
  documentId?: string;
  Title: string;
  Slug: string;
  Summary?: string;
  Content?: string;
  Thumbnail?: StrapiImage | null;
  BannerImage?: StrapiImage | null;
  Gallery?: StrapiImage[];
  Featured?: boolean;
  PublishDate?: string;
  Tags?: string[] | Record<string, unknown> | unknown;
  ReadingTime?: number;
  DisplayOrder?: number;
  Active?: boolean;
  category?: Category | null;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

/* =========================================================
   POKER EXCHANGE ARTICLE
========================================================= */

export interface PokerExchangeArticle extends ArticleBase {
  Featured?: boolean;
  ReadingTime?: number;
}

/* =========================================================
   ACTIVITY
========================================================= */

export interface Activity extends ArticleBase {
  Featured?: boolean;
  ReadingTime?: number;
}

/* =========================================================
   TEACHING GUIDE STEP
========================================================= */

export interface TeachingGuideStep {
  id?: number;
  StepNumber: number;
  Content: string;
  Image?: StrapiImage | null;
  DisplayOrder?: number;
}

/* =========================================================
   TEACHING GUIDE SECTION
========================================================= */

export interface TeachingGuideSection {
  id?: number;
  Title: string;
  DisplayOrder?: number;
  Columns?: number;
  Steps?: TeachingGuideStep[];
}

/* =========================================================
   CTA BUTTON
========================================================= */

export interface CTAButton {
  id?: number;
  Label: string;
  URL: string;
  OpenInNewTab?: boolean;
}

/* =========================================================
   TEACHING GUIDE MEDIA
========================================================= */

export interface TeachingGuideMedia {
  id?: number;
  Title: string;
  Media?: StrapiImage | null;
}

/* =========================================================
   TEACHING GUIDE
========================================================= */

export interface TeachingGuide {
  id: number;
  documentId?: string;
  Title: string;
  Slug: string;
  Thumbnail?: StrapiImage | null;
  Sections?: TeachingGuideSection[];
  CTA?: CTAButton | null;
  MediaSection?: TeachingGuideMedia[];
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}
