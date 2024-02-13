import styled from "styled-components";

import { usePreferColorScheme } from "@/hooks/usePreferColorScheme";
import type { ColorSchemeProps } from "@/hooks/usePreferColorScheme";


const TagSpan = styled.span<ColorSchemeProps>`
  color: ${({ colorScheme }) => colorScheme === "light" ? "rgb(82 82 91)" : "#d4d4d8"};
  font-weight: 300;
  margin-right: 8px;
  padding: 8px 12px;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    padding: 1px;
    border-radius: 4px;
    background: linear-gradient(to right, #9c20aa, #fb3570);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

interface TagsProps {
  tags: Readonly<(string | null)[] | null | undefined>;
}

export const Tags = (props: TagsProps) => {
  const { colorScheme } = usePreferColorScheme();

  if (!props.tags) return null;

  return (
    <div className="flex flex-wrap items-center">
      {props.tags.map((tag) => (
        <TagSpan key={tag} className="max-sm:mt-2" colorScheme={colorScheme}>
          {tag}
        </TagSpan>
      ))}
    </div>
  );
};
