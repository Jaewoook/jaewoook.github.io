/**
 * External modules
 */
import styled from "styled-components";

/**
 * Internal modules
 */
import { P } from "../typography/Paragraph";

const Figcaption = styled(P).attrs({ as: "figcaption" })`
  font-style: italic;
  text-align: center;
  font-size: 14px;
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
