"use client";

import Image, { ImageProps } from "next/image";
import { getBlurDataURL } from "@/data/blurData";

/**
 * OptimizedImage — drop-in replacement for next/image that automatically
 * applies blur placeholders for any image in the blur data map.
 * Also adds priority={true} when the `hero` prop is set.
 */
interface OptimizedImageProps extends Omit<ImageProps, "placeholder" | "blurDataURL"> {
  hero?: boolean;
}

export default function OptimizedImage({ hero, src, priority, ...props }: OptimizedImageProps) {
  const srcString = typeof src === "string" ? src : "";
  const blurDataURL = getBlurDataURL(srcString);
  const hasBlur = blurDataURL !== getBlurDataURL("__nonexistent__");

  // priority can come from the hero prop OR be passed directly
  const isPriority = hero || priority;

  return (
    <Image
      src={src}
      {...(hasBlur ? { placeholder: "blur" as const, blurDataURL } : {})}
      {...(isPriority ? { priority: true } : { loading: "lazy" })}
      {...props}
    />
  );
}
