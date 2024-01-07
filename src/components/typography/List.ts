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
  ${tw`text-zinc-700 dark:text-zinc-300`}
  padding-top: 0.5em;
  padding-inline-start: 1.125em;
  & > li {
    list-style-type: decimal;
    margin-bottom: 0.25em;
    word-wrap: break-word;
    word-break: keep-all;
  }
`;

export const UL = styled.ul<SpaceProps>`
  ${space}
  ${tw`text-zinc-700 dark:text-zinc-300`}
  padding-top: 0.5em;
  padding-inline-start: 1.125em;
  & > li {
    list-style-type: disc;
    margin-bottom: 0.25em;
    word-wrap: break-word;
    word-break: keep-all;
  }
`;
