import { useCallback } from "react";
import { navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { twMerge } from "tailwind-merge";

import { ImageFallback } from "../common/ImageFallback";

import type { IGatsbyImageData } from "gatsby-plugin-image";

interface Props {
  className?: string;
  title: string;
  secret: boolean;
  image?: IGatsbyImageData;
  excerpt: string;
  slug: string;
  category: string;
}

export const PostCard = (props: Props) => {
  const { className = "flex", title, secret, category, image, slug } = props;

  const handleClick = useCallback(() => {
    navigate("/" + slug);
  }, [slug]);

  // Do not display secret content in production mode
  // if (process.env.NODE_ENV === "production" && secret) {
  if (secret) {
    return null;
  }

  return (
    <div
      className={twMerge(
        "flex min-h-[120px] cursor-pointer flex-col overflow-hidden rounded-xl bg-white",
        className
      )}
      onClick={handleClick}
    >
      {image ? (
        <GatsbyImage className="h-full max-h-72 min-h-48 w-full" alt={title} image={image} />
      ) : (
        <ImageFallback width="100%" height="12rem" className="select-none bg-zinc-500" />
      )}
      <div className="flex flex-col px-4 pb-3 pt-4 text-black">
        <span className="text-xs text-green-800">{category.toUpperCase()}</span>
        <div className="w-6 border-b-2 border-neutral-300"></div>
        <h3 className="mt-2 break-keep text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};
