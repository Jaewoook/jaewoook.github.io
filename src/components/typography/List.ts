import styled from "styled-components";

export const OL = styled.ol`
  > li {
    list-style-type: decimal;
    list-style-position: inside;
    margin-bottom: 0.5em;
    word-wrap: break-word;
  }
  `;

export const UL = styled.ul`
  > li {
    list-style-type: square;
    list-style-position: inside;
    margin-bottom: 0.5em;
    word-wrap: break-word;
  }
`;
