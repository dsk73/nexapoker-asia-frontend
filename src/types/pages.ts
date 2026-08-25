import type { StrapiMedia, SEO } from "./strapi";

export interface AboutFeature {
  id?: number;
  Title: string;
  Description: string;
  Image?: StrapiMedia | null;
  DisplayOrder: number;
  Active: boolean;
}

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

export interface CommunitySocialLink {
  id?: number;
  Platform: string;
  URL: string;
  DisplayOrder: number;
  Active: boolean;
  Icon?: StrapiMedia | null;
  Label: string;
}

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

  SEO?: SEO | null;

  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}
