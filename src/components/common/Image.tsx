/**
 * External modules
 */
import { GatsbyImage } from "gatsby-plugin-image";
import type { GatsbyImageProps, IGatsbyImageData } from "gatsby-plugin-image";

/**
 * Internal modules
 */
import { ImageFallback } from "./ImageFallback";

interface Props extends Omit<GatsbyImageProps, "image"> {
  image?: IGatsbyImageData;
  onClick?: () => void;
  fallbackWidth?: string | number;
  fallbackHeight?: string | number;
}

export const Image = (props: Props) => {
  const { alt, className, fallbackWidth = "100%", fallbackHeight = "100%", image, onClick, ...rest } = props;

  return image ? (
    <GatsbyImage className={className} image={image} alt={alt} onClick={onClick} {...rest} />
  ) : (
    <ImageFallback className={className} width={fallbackWidth} height={fallbackHeight} onClick={onClick} />
  );
};
