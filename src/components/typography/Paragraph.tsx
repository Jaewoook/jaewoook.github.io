import styled from "styled-components";

export const P = styled.p`
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 18px;
`;

export const BlockQuote = styled.blockquote`
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 18px;
  background: #efefef;
  padding: 8px 16px;
  > p {
    margin-bottom: 0;
  }
`;
