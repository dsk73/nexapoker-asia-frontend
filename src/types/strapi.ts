export interface StrapiMediaFormat {
  name?: string;
  hash?: string;
  ext?: string;
  mime?: string;
  path?: string | null;
  width?: number;
  height?: number;
  size?: number;
  sizeInBytes?: number;
  url: string;
}

export interface StrapiMedia {
  id: number;
  documentId?: string;

  name: string;
  alternativeText?: string | null;
  caption?: string | null;

  focalPoint?: {
    x?: number;
    y?: number;
  } | null;

  width: number;
  height: number;

  formats?: {
    thumbnail?: StrapiMediaFormat;
    small?: StrapiMediaFormat;
    medium?: StrapiMediaFormat;
    large?: StrapiMediaFormat;
  };

  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  url: string;

  previewUrl?: string | null;
  provider?: string;
  provider_metadata?: unknown;

  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

/*
 * Backward-compatible alias.
 *
 * Existing content types use StrapiImage,
 * while newer types use StrapiMedia.
 */
export type StrapiImage = StrapiMedia;

export interface SEO {
  id?: number;

  MetaTitle: string;
  MetaDescription: string;
  CanonicalURL: string;

  OGImage?: StrapiMedia | null;

  Robots: string;
  Keywords: string;
}

export interface StrapiCollectionResponse<T> {
  data: T[];

  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiResponse<T> {
  data: T;

  meta: Record<string, unknown>;
}
