/**
 * External modules
 */
import styled from "styled-components";
import tw from "twin.macro";

export const P = styled.p`
  ${tw`text-zinc-800 dark:text-zinc-200`}
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 18px;
`;

export const BlockQuote = styled.blockquote`
  ${tw`text-zinc-800 dark:text-zinc-200 dark:bg-neutral-800`}
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 18px;
  background: #efefef;
  padding: 8px 16px;
  > p {
    margin-bottom: 0;
  }
`;
