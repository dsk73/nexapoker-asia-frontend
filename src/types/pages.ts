// src/types/pages.ts

import type { StrapiMedia, SEO } from "./strapi";

/* =========================================================
   ABOUT FEATURE
========================================================= */

export interface AboutFeature {
  id?: number;

  Title: string;

  Description: string;

  Image?: StrapiMedia | null;

  DisplayOrder: number;

  Active: boolean;
}

/* =========================================================
   ABOUT PAGE
========================================================= */

export interface AboutPage {
  id?: number;

  documentId?: string;

  HeroTitle: string;

  HeroSubtitle: string;

  HeroBannerImage?: StrapiMedia | null;

  AboutTitle: string;

  AboutLogo?: StrapiMedia | null;

  AboutContent: string;

  SectionTitle: string;

  SectionContent: string;

  SectionImage?: StrapiMedia | null;

  Features: AboutFeature[];

  SEO?: SEO | null;

  createdAt?: string;

  updatedAt?: string;

  publishedAt?: string;
}

/* =========================================================
   COMMUNITY SOCIAL LINK
========================================================= */

export interface CommunitySocialLink {
  id?: number;

  Platform: string;

  URL: string;

  DisplayOrder: number;

  Active: boolean;

  Icon?: StrapiMedia | null;

  Label: string;
}

/* =========================================================
   COMMUNITY PAGE
========================================================= */

export interface CommunityPage {
  id?: number;

  documentId?: string;

  HeroTitle: string;

  HeroDescription: string;

  LINEID: string;

  LINEButtonText: string;

  LINEButtonURL: string;

  LINEImage?: StrapiMedia | null;

  BottomDescription: string;

  SocialLinks: CommunitySocialLink[];

  createdAt?: string;

  updatedAt?: string;

  publishedAt?: string;
}

/* =========================================================
   DOWNLOAD PAGE
========================================================= */

export interface DownloadPage {
  id?: number;

  documentId?: string;

  Title: string;

  BannerImage?: StrapiMedia | null;

  WindowsURL: string;

  MacURL: string;

  AndroidURL: string;

  IOSURL: string;

  APKURL: string;

  Description: string;

  SEO?: SEO | null;

  createdAt?: string;

  updatedAt?: string;

  publishedAt?: string;
}

/* =========================================================
   REGISTER STEP
========================================================= */

export interface RegisterStep {
  id?: number;

  Title: string;

  Description: string;

  Icon?: StrapiMedia | null;
}

/* =========================================================
   REGISTER PAGE
========================================================= */

export interface RegisterPage {
  id?: number;

  documentId?: string;

  Title: string;

  Content: string;

  Steps: RegisterStep[];

  BannerImage?: StrapiMedia | null;

  StepsBadge: string;

  StepsTitle: string;

  StepsDescription: string;

  SEO?: SEO | null;

  createdAt?: string;

  updatedAt?: string;

  publishedAt?: string;
}

/* =========================================================
   FAQ PAGE
========================================================= */

export interface FAQPage {
  id?: number;

  documentId?: string;

  HeroTitle: string;

  HeroDescription: string;

  SEO?: SEO | null;

  createdAt?: string;

  updatedAt?: string;

  publishedAt?: string;
}

/* =========================================================
   HOMEPAGE — WHY CHOOSE FEATURE
========================================================= */

export interface WhyChooseFeature {
  id?: number;

  Title: string;

  Description: string;

  Icon?: StrapiMedia | null;

  DisplayOrder?: number;

  Active?: boolean;
}

/* =========================================================
   HOMEPAGE — TRANSACTION VIDEO
========================================================= */

export interface TransactionVideo {
  id?: number;

  Title: string;

  Description?: string;

  Video?: StrapiMedia | null;

  DisplayOrder?: number;

  Active?: boolean;
}

/* =========================================================
   HOMEPAGE — JOIN NEXA POKER
========================================================= */

export interface JoinNexaPoker {
  id?: number;

  Title: string;

  Description: string;

  Screenshot?: StrapiMedia | null;

  ButtonText?: string;

  ButtonURL?: string;

  OpenInNewTab?: boolean;
}

/* =========================================================
   HOMEPAGE SETTINGS
========================================================= */

export interface HomepageSettings {
  id?: number;

  documentId?: string;

  HeroTitle: string;

  HeroSubtitle: string;

  ActivitiesTitle: string;

  ActivitiesSubtitle: string;

  AmbassadorTitle: string;

  AmbassadorSubtitle: string;

  PaymentTitle: string;

  PaymentSubtitle: string;

  FAQTitle: string;

  FAQSubtitle: string;

  /* =======================================================
     WHY CHOOSE NEXA POKER
  ======================================================= */

  WhyChooseTitle?: string;

  WhyChooseSubtitle?: string;

  WhyChooseFeatures?: WhyChooseFeature[];

  /* =======================================================
     DEPOSIT & WITHDRAWAL VIDEOS
  ======================================================= */

  TransactionVideos?: TransactionVideo[];

  /* =======================================================
     JOIN NEXA POKER
  ======================================================= */

  JoinNexaPoker?: JoinNexaPoker | null;

  SEO?: SEO | null;

  createdAt?: string;

  updatedAt?: string;

  publishedAt?: string;
}

/* =========================================================
   POKER EXCHANGE FEATURE
========================================================= */

export interface PokerExchangeFeature {
  id?: number;

  Title: string;

  Description: string;
}

/* =========================================================
   POKER EXCHANGE PAGE
========================================================= */

export interface PokerExchangePage {
  id?: number;

  documentId?: string;

  HeroTitle: string;

  HeroSubtitle: string;

  HeroImage?: StrapiMedia | null;

  IntroTitle: string;

  IntroDescription: string;

  Features: PokerExchangeFeature[];

  CTAButton?: {
    id?: number;

    Label: string;

    URL: string;

    OpenInNewTab: boolean;
  } | null;

  SEO?: SEO | null;

  createdAt?: string;

  updatedAt?: string;

  publishedAt?: string;
}
