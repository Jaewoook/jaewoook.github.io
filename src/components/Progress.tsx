/**
 * External modules
 */
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { width } from "styled-system";

/**
 * Type modules
 */
import type { WidthProps } from "styled-system";

const Wrapper = styled.div`
  position: sticky;
  height: 4px;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Indicator = styled.div<WidthProps>`
  ${width}
  height: 100%;
  mask: linear-gradient(#fff 0 0);
  ::before {
    content: "";
    position: absolute;
    background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const Progress = () => {
  const [percent, setPercent] = useState(0);

  const handleScrollEvent = useCallback(() => {
    const el = document.documentElement;
    setPercent(Math.min(el.scrollTop / (el.scrollHeight - window.screen.height) * 100, 100));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <Wrapper>
      <Indicator width={`${percent}%`} />
    </Wrapper>
  );
};
