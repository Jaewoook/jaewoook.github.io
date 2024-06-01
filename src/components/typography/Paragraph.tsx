/**
 * External modules
 */
import styled from "styled-components";
import tw from "twin.macro";

export const P = styled.p`
  ${tw`text-zinc-800 dark:text-zinc-200`}
  font-size: 18px;
  line-height: 32px;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export const Span = styled(P).attrs({ as: "span" })``;

export const Extra = styled(Span)`
  ${tw`text-zinc-600 dark:text-zinc-400 font-light`}
`;

export const BlockQuote = styled.blockquote`
  ${tw`text-zinc-800 dark:text-zinc-200 dark:bg-neutral-800`}
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 18px;
  background: #efefef;
  padding: 8px 16px;
  > p {
    margin-top: 0.375em;
    margin-bottom: 0.375em;
  }
`;
