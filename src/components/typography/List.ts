/**
 * External modules
 */
import tw, { styled } from "twin.macro";

export const OL = styled.ol`
  ${tw`text-zinc-700`}
  > li {
    list-style-type: decimal;
    list-style-position: inside;
    margin-bottom: 0.5em;
    word-wrap: break-word;
  }
  `;

export const UL = styled.ul`
  ${tw`text-zinc-700`}
  > li {
    list-style-type: square;
    list-style-position: inside;
    margin-bottom: 0.5em;
    word-wrap: break-word;
  }
`;
