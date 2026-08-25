const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

interface StrapiMedia {
  url?: string;
  alternativeText?: string | null;
  formats?: {
    thumbnail?: { url?: string };
    small?: { url?: string };
    medium?: { url?: string };
    large?: { url?: string };
  };
}

export function getMediaUrl(
  media: StrapiMedia | null | undefined,
  size: "thumbnail" | "small" | "medium" | "large" | "original" = "original",
) {
  if (!media) return null;

  const path =
    size !== "original" ? media.formats?.[size]?.url || media.url : media.url;

  if (!path) return null;

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${STRAPI_URL}${path}`;
}
