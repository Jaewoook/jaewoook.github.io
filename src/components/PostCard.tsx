/**
 * External modules
 */
import React, { useCallback } from "react";
import { navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import tw, { styled } from "twin.macro";

/**
 * Internal modules
 */
import { ImageFallback } from "../components/ImageFallback";

/**
 * Type modules
 */
import type { IGatsbyImageData } from "gatsby-plugin-image";

const Wrapper = styled.div`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  ${tw`max-sm:min-w-full`}
  min-width: 440px;
  min-height: 250px;
  padding: 0 24px;
`;

interface Props {
  className?: string;
  title: string;
  date: string;
  secret: boolean;
  image?: IGatsbyImageData;
  excerpt: string;
  slug: string;
  category: string;
}

export const PostCard = (props: Props) => {
  const { className = "flex", title, date, secret, category, image, excerpt, slug } = props;

  // Do not display secret content in production mode
  if (process.env.NODE_ENV === "production" && secret) {
    return null;
  }

  const handleClick = useCallback(() => {
    navigate("/" + slug);
  }, [slug]);

  return (
    <Wrapper className={className} onClick={handleClick}>
      {image ? (
        <GatsbyImage
          className="shadow-zinc-600 shadow-md top-0 left-0 right-0 bottom-0 select-none"
          imgClassName="brightness-50"
          style={{ position: "absolute" }}
          alt={title}
          loading="eager"
          image={image}
        />
      ) : (
        <ImageFallback
          width="100%"
          height={250}
          className="shadow-zinc-600 shadow-md bg-zinc-500 absolute top-0 left-0 right-0 bottom-0 select-none"
        />
      )}
      <div className="z-10 flex flex-col items-center text-white">
        <span className="hover:text-amber-300">{category.toUpperCase()}</span>
        <div className="w-5 border-b-2"></div>
        <h3 className="mt-4 text-center break-keep text-2xl font-semibold">{title}</h3>
        <span className="mt-8 text-sm font-extralight">{date}</span>
      </div>
    </Wrapper>
  );
};
