/**
 * External modules
 */
import React, { useCallback } from "react";
import { navigate } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

/**
 * Internal modules
 */
import { ImageFallback } from "../components/ImageFallback";

/**
 * Type modules
 */
import type { IGatsbyImageData } from "gatsby-plugin-image";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  min-width: 440px;
  min-height: 250px;
  padding: 0 24px;
`;

interface Props {
  title: string;
  date: string;
  secret: boolean;
  image?: IGatsbyImageData;
  excerpt: string;
  slug: string;
}

export const PostCard = (props: Props) => {
  const { title, date, secret, image, excerpt, slug } = props;

  // Do not display secret content in production mode
  if (process.env.NODE_ENV === "production" && secret) {
    return null;
  }

  const handleClick = useCallback(() => {
    navigate("/" + slug);
  }, [slug]);

  return (
    <Wrapper onClick={handleClick}>
      {image ? (
        <GatsbyImage className="shadow-zinc-600 shadow-md absolute top-0 left-0 right-0 bottom-0" imgClassName="brightness-50" alt={title} image={image} />
      ) : (
        <ImageFallback width="100%" height={250} className="shadow-zinc-600 shadow-md bg-zinc-500 absolute top-0 left-0 right-0 bottom-0" />
      )}
      <div className="z-10 flex flex-col items-center">
        <h3 className="text-center break-keep text-white mt-4 text-2xl font-semibold">{title}</h3>
        <span className="text-white">{date}</span>
      </div>
    </Wrapper>
  );
};
