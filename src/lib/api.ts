// src/lib/api.ts

import axios from "axios";

import type {
  AboutPage,
  Activity,
  BrandAmbassador,
  FAQ,
  HeroPromotionCard,
  HeroSlide,
  PaymentMethod,
  TeachingGuide,
} from "@/types/content";

import type {
  CommunityPage,
  DownloadPage,
  FAQPage,
  HomepageSettings,
  RegisterPage,
  PokerExchangePage,
} from "@/types/pages";

import type { StrapiCollectionResponse, StrapiResponse } from "@/types/strapi";

import { STRAPI_URL } from "./strapi";

const api = axios.create({
  baseURL: `${STRAPI_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

/* =========================================================
   HOMEPAGE
========================================================= */

export async function getHeroSlides(): Promise<HeroSlide[]> {
  const response = await api.get<StrapiCollectionResponse<HeroSlide>>(
    "/hero-slides?populate=*",
  );

  return response.data.data
    .filter((slide) => slide.Active)
    .sort((a, b) => a.DisplayOrder - b.DisplayOrder);
}

/* =========================================================
   HERO PROMOTION CARD
========================================================= */

export async function getHeroPromotionCard(): Promise<HeroPromotionCard | null> {
  const response = await api.get<StrapiResponse<HeroPromotionCard>>(
    "/hero-promotion-card?populate=*",
  );

  return response.data.data ?? null;
}

export async function getHomepageSettings(): Promise<HomepageSettings> {
  const response = await api.get<StrapiResponse<HomepageSettings>>(
    "/homepage-setting?populate=*",
  );

  return response.data.data;
}

/* =========================================================
   ACTIVITIES
========================================================= */

export async function getActivities(): Promise<Activity[]> {
  const response = await api.get<StrapiCollectionResponse<Activity>>(
    "/activities?populate=*",
  );

  return response.data.data
    .filter((activity) => activity.Active !== false)
    .sort((a, b) => (a.DisplayOrder ?? 0) - (b.DisplayOrder ?? 0));
}

export async function getActivityBySlug(
  slug: string,
): Promise<Activity | null> {
  const response = await api.get<StrapiCollectionResponse<Activity>>(
    `/activities?filters[Slug][$eq]=${encodeURIComponent(slug)}&populate=*`,
  );

  return response.data.data[0] ?? null;
}

/* =========================================================
   BRAND AMBASSADORS
========================================================= */

export async function getBrandAmbassadors(): Promise<BrandAmbassador[]> {
  const response = await api.get<StrapiCollectionResponse<BrandAmbassador>>(
    "/brand-ambassadors?populate=*",
  );

  return response.data.data
    .filter((ambassador) => ambassador.Active)
    .sort((a, b) => (a.DisplayOrder ?? 0) - (b.DisplayOrder ?? 0));
}

/* =========================================================
   PAYMENT METHODS
========================================================= */

export async function getPaymentMethods(): Promise<PaymentMethod[]> {
  const response = await api.get<StrapiCollectionResponse<PaymentMethod>>(
    "/payment-methods?populate=*",
  );

  return response.data.data
    .filter((method) => method.Active)
    .sort((a, b) => (a.DisplayOrder ?? 0) - (b.DisplayOrder ?? 0));
}

/* =========================================================
   FAQ
========================================================= */

export async function getFAQs(): Promise<FAQ[]> {
  const response =
    await api.get<StrapiCollectionResponse<FAQ>>("/faqs?populate=*");

  return response.data.data
    .filter((faq) => faq.Active)
    .sort((a, b) => (a.DisplayOrder ?? 0) - (b.DisplayOrder ?? 0));
}

/* =========================================================
   ABOUT
========================================================= */

export async function getAboutPage(): Promise<AboutPage> {
  const [pageResponse, featuresResponse] = await Promise.all([
    api.get<StrapiResponse<AboutPage>>("/about-page?populate=*"),

    api.get<StrapiResponse<AboutPage>>(
      "/about-page?populate[Features][populate]=*",
    ),
  ]);

  const page = pageResponse.data.data;
  const featuresPage = featuresResponse.data.data;

  return {
    ...page,
    Features: featuresPage?.Features ?? page.Features,
  };
}

/* =========================================================
   COMMUNITY
========================================================= */

export async function getCommunityPage(): Promise<CommunityPage> {
  const response = await api.get<StrapiResponse<CommunityPage>>(
    "/community-page?populate[SocialLinks][populate]=*",
  );

  return response.data.data;
}

/* =========================================================
   DOWNLOAD
========================================================= */

export async function getDownloadPage(): Promise<DownloadPage> {
  const response = await api.get<StrapiResponse<DownloadPage>>(
    "/download-page?populate=*",
  );

  return response.data.data;
}

/* =========================================================
   REGISTER
========================================================= */

export async function getRegisterPage(): Promise<RegisterPage> {
  const response = await api.get<StrapiResponse<RegisterPage>>(
    "/register-page?populate=*",
  );

  return response.data.data;
}

/* =========================================================
   FAQ PAGE
========================================================= */

export async function getFAQPage(): Promise<FAQPage> {
  const response = await api.get<StrapiResponse<FAQPage>>(
    "/faq-page?populate=*",
  );

  return response.data.data;
}

/* =========================================================
   POKER EXCHANGE
========================================================= */

/**
 * Get the Poker Exchange landing page.
 *
 * Populates:
 * - HeroImage
 * - Features
 * - CTAButton
 * - SEO
 */
export async function getPokerExchangePage(): Promise<PokerExchangePage> {
  const response = await api.get<StrapiResponse<PokerExchangePage>>(
    "/poker-exchange-page?populate=*",
  );

  return response.data.data;
}

/* =========================================================
   TEACHING CENTER
========================================================= */

/**
 * Strapi v5 does not accept some of the explicit media
 * populate syntax such as:
 *
 *   populate[Thumbnail]=*
 *
 * Therefore Teaching Guides are loaded in two passes:
 *
 * 1. populate=*
 *    Gives us root-level relations such as:
 *    - Thumbnail
 *    - CTA
 *    - MediaSection
 *    - Sections
 *
 * 2. Deep populate
 *    Gives us:
 *    - Sections
 *      - Steps
 *        - Image
 *    - MediaSection
 *      - Media
 *
 * The two responses are then merged.
 */

const TEACHING_GUIDES_DEEP_POPULATE =
  "/teaching-guides?populate[Sections][populate][Steps][populate]=*&populate[MediaSection][populate]=*";

/**
 * Merge the regular Teaching Guide response with
 * the deeply populated Sections/Steps response.
 */
function mergeTeachingGuideData(
  baseGuides: TeachingGuide[],
  deepGuides: TeachingGuide[],
): TeachingGuide[] {
  return baseGuides.map((baseGuide) => {
    const deepGuide = deepGuides.find(
      (guide) =>
        guide.documentId === baseGuide.documentId ||
        guide.Slug === baseGuide.Slug,
    );

    if (!deepGuide) {
      return baseGuide;
    }

    return {
      ...baseGuide,

      /*
       * Deep response contains the complete Sections tree:
       *
       * Sections
       *   └── Steps
       *       └── Image
       */
      Sections: deepGuide.Sections ?? baseGuide.Sections,

      /*
       * Deep response contains MediaSection.Media.
       */
      MediaSection: deepGuide.MediaSection ?? baseGuide.MediaSection,
    };
  });
}

/**
 * Get all Teaching Guides with complete nested content.
 */
export async function getTeachingGuides(): Promise<TeachingGuide[]> {
  const [baseResponse, deepResponse] = await Promise.all([
    /*
     * Root-level data:
     * - Thumbnail
     * - CTA
     * - Sections
     * - MediaSection
     */
    api.get<StrapiCollectionResponse<TeachingGuide>>(
      "/teaching-guides?populate=*",
    ),

    /*
     * Deep nested data:
     * - Sections -> Steps -> Image
     * - MediaSection -> Media
     */
    api.get<StrapiCollectionResponse<TeachingGuide>>(
      TEACHING_GUIDES_DEEP_POPULATE,
    ),
  ]);

  const baseGuides = baseResponse.data.data;
  const deepGuides = deepResponse.data.data;

  return mergeTeachingGuideData(baseGuides, deepGuides);
}

/**
 * Get one Teaching Guide by slug with complete nested content.
 */
export async function getTeachingGuideBySlug(
  slug: string,
): Promise<TeachingGuide | null> {
  const encodedSlug = encodeURIComponent(slug);

  const [baseResponse, deepResponse] = await Promise.all([
    /*
     * Root-level data:
     * - Thumbnail
     * - CTA
     * - Sections
     * - MediaSection
     */
    api.get<StrapiCollectionResponse<TeachingGuide>>(
      `/teaching-guides?filters[Slug][$eq]=${encodedSlug}&populate=*`,
    ),

    /*
     * Deep nested data:
     * - Sections -> Steps -> Image
     * - MediaSection -> Media
     */
    api.get<StrapiCollectionResponse<TeachingGuide>>(
      `/teaching-guides?filters[Slug][$eq]=${encodedSlug}&populate[Sections][populate][Steps][populate]=*&populate[MediaSection][populate]=*`,
    ),
  ]);

  const baseGuide = baseResponse.data.data[0];

  if (!baseGuide) {
    return null;
  }

  const deepGuide = deepResponse.data.data[0];

  if (!deepGuide) {
    return baseGuide;
  }

  return {
    ...baseGuide,

    /*
     * Use the deeply populated Sections so the detail
     * page receives every section and every step.
     */
    Sections: deepGuide.Sections ?? baseGuide.Sections,

    /*
     * Use the deeply populated MediaSection so the
     * Media object, including video files, is available.
     */
    MediaSection: deepGuide.MediaSection ?? baseGuide.MediaSection,
  };
}

/* =========================================================
   DEFAULT API
========================================================= */

export default api;
