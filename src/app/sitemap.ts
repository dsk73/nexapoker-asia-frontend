import type { MetadataRoute } from "next";

import { getActivities, getTeachingGuides } from "@/lib/api";

const BASE_URL = "https://nexapoker-asia.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [activities, teachingGuides] = await Promise.all([
    getActivities(),
    getTeachingGuides(),
  ]);

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/activities`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/community`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/download`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/faq`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/poker-exchange`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/register`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/teaching-center`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const activityPages: MetadataRoute.Sitemap = activities
    .filter((activity) => activity.Slug)
    .map((activity) => ({
      url: `${BASE_URL}/activities/${activity.Slug}`,
      lastModified: activity.updatedAt
        ? new Date(activity.updatedAt)
        : undefined,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  const teachingGuidePages: MetadataRoute.Sitemap = teachingGuides
    .filter((guide) => guide.Slug)
    .map((guide) => ({
      url: `${BASE_URL}/teaching-center/${guide.Slug}`,
      lastModified: guide.updatedAt ? new Date(guide.updatedAt) : undefined,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [...staticPages, ...activityPages, ...teachingGuidePages];
}
