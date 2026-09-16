// src/components/ui/Image.tsx

import NextImage, { type ImageProps as NextImageProps } from "next/image";

interface ImageComponentProps extends Omit<NextImageProps, "alt"> {
  alt?: string;
  fallback?: React.ReactNode;
}

export default function Image({
  alt = "",
  fallback,
  ...props
}: ImageComponentProps) {
  if (!props.src && fallback) {
    return <>{fallback}</>;
  }

  return <NextImage {...props} alt={alt} />;
}
