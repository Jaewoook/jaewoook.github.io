/**
 * External modules
 */
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
  bgClassName?: string;
  size?: number;
  onClick?: () => void;
}

export const ImageFallback = (props: Props) => {
  const { bgClassName = "bg-zinc-500", className, size = 28, width, height, onClick } = props;
  return (
    <Wrapper className={`${bgClassName} ${className}`} width={width} height={height} onClick={onClick}>
      <BsImageFill size={size} />
    </Wrapper>
  );
};
