/**
 * External modules
 */
import styled from "styled-components";

/**
 * Internal modules
 */
import { P } from "../typography/Paragraph";

const MermaidParagraph = styled(P).attrs({ as: "div", className: "mermaid-container" })`
  user-select: none;

  & svg {
    margin: auto;
    /* line-height: 20px; */
  }
`;

export const Mermaid = ({ children }: React.PropsWithChildren) => {
  return (
    <MermaidParagraph>
      {children}
    </MermaidParagraph>
  )
};
