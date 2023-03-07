/**
 * External modules
 */
import React from "react";
import styled from "styled-components";
import { width, height } from "styled-system";
import { BsImageFill } from "react-icons/bs";

/**
 * Type modules
 */
import type { WidthProps, HeightProps } from "styled-system";

const Wrapper = styled.div<WidthProps & HeightProps>`
  ${width}
  ${height}
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props extends WidthProps, HeightProps {
  className?: string;
  size?: number;
}

export const ImageFallback = (props: Props) => {
  const { className = "bg-zinc-500", size = 28, width, height } = props;
  return (
    <Wrapper className={className} width={width} height={height}>
      <BsImageFill size={size} />
    </Wrapper>
  );
};
