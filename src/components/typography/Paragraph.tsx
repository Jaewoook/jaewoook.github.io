/**
 * External modules
 */
import tw, { styled } from "twin.macro";

export const P = styled.p`
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 18px;
  ${tw`text-zinc-800`}
  `;

export const BlockQuote = styled.blockquote`
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 18px;
  background: #efefef;
  padding: 8px 16px;
  ${tw`text-zinc-800`}
  > p {
    margin-bottom: 0;
  }
`;
