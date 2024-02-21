/**
 * External modules
 */
import styled from "styled-components";
import tw from "twin.macro";

/**
 * Internal modules
 */
import { P } from "../typography/Paragraph";

const Figcaption = styled(P).attrs({ as: "figcaption" })`
  ${tw`text-zinc-600 dark:text-zinc-400`}
  font-style: italic;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
`;

interface Props {
  caption?: string;
}

export const FigureImage = ({ caption, children }: React.PropsWithChildren<Props>) => {
  return (
    <figure>
      {children}
      <Figcaption>{caption}</Figcaption>
    </figure>
  )
};
