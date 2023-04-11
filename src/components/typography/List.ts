/**
 * External modules
 */
import styled from "styled-components";
import { space } from "styled-system";
import tw from "twin.macro";

/**
 * Type modules
 */
import type { SpaceProps } from "styled-system";

export const OL = styled.ol<SpaceProps>`
  ${space}
  ${tw`text-zinc-700`}
  padding-top: 0.5em;
  padding-left: 24px;
  > li {
    list-style-type: decimal;
    list-style-position: inside;
    margin-bottom: 0.5em;
    word-wrap: break-word;
    word-break: keep-all;
  }
  `;

export const UL = styled.ul<SpaceProps>`
  ${space}
  ${tw`text-zinc-700`}
  padding-top: 0.5em;
  padding-left: 24px;
  > li {
    list-style-type: disc;
    list-style-position: inside;
    margin-bottom: 0.5em;
    word-wrap: break-word;
    word-break: keep-all;
  }
`;
