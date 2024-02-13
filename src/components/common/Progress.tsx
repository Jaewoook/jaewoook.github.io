/**
 * External modules
 */
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  height: 6px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: flex-start;
  z-index: 10;
`;

const Indicator = styled.div<{ w: string; }>`
  width: 100%;
  margin-left: -100%;
  transform: translateX(${({ w }) => w});
  transition: transform 0.25s ease-out;
  height: 100%;
  mask: linear-gradient(#fff 0 0);
  &::before {
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
      <Indicator w={`${percent}%`} />
    </Wrapper>
  );
};
