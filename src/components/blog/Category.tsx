/**
 * External modules
 */
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import tw from "twin.macro";

/**
 * Internal modules
 */
import { selectedCategoryState } from "@/states/category";
import { usePreferColorScheme, type ColorSchemeProps } from "@/hooks/usePreferColorScheme";

const CategoryWrapper = styled.div<SpaceProps>`
  ${space}
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryItemWrapper = styled.div<{ selected: boolean; }>`
  ${tw`
    border
    rounded-2xl
    cursor-pointer
    px-6
    py-1
    transition-all
    border-zinc-200
    dark:border-zinc-800
    hover:border-zinc-700
    dark:hover:border-zinc-300
  `}

${({ selected }) => selected
    ? tw`
      bg-zinc-900
      dark:bg-zinc-200
      text-zinc-200
      dark:text-zinc-900
      dark:hover:text-zinc-950
    ` : tw`
      bg-zinc-50
      dark:bg-zinc-900
      text-zinc-800
      dark:text-zinc-300
      dark:hover:text-zinc-200
    `}
`;

const SerifSpan = styled.span`
  font-family: "Noto Serif KR", sans-serif;
  font-weight: 300;
  font-size: 12px;
`;

interface CategoryItemProps extends ColorSchemeProps {
  children: string;
  selected: boolean;
  onClick: () => void;
}

const CategoryItem = (props: CategoryItemProps) => {
  const { children, onClick, selected, ...styles } = props;
  return (
    <CategoryItemWrapper selected={selected} onClick={onClick} {...styles}>
      <SerifSpan>{children.toUpperCase()}</SerifSpan>
    </CategoryItemWrapper>
  );
};

interface CategoryProps extends SpaceProps {
  categories: string[];
  selectedIndex: number;
}

export const Category = (props: CategoryProps) => {
  const { categories, selectedIndex = 0, ...styles } = props;
  const { colorScheme } = usePreferColorScheme();
  const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryState);

  const handleCategorySelect = useCallback(
    (name: string, index: number) => () => {
      if (index === selectedCategory.index) return;
      setSelectedCategory({ name, index });
    },
    [selectedCategory, setSelectedCategory]
  );

  return (
    <CategoryWrapper className="max-md:px-4 max-md:space-x-2 space-x-4" {...styles}>
      <CategoryItem selected={selectedIndex === 0} colorScheme={colorScheme} onClick={handleCategorySelect("All", 0)}>
        All
      </CategoryItem>
      {categories.map((c, i) => (
        <CategoryItem key={c} selected={selectedIndex === i + 1} colorScheme={colorScheme} onClick={handleCategorySelect(c, i + 1)}>
          {c}
        </CategoryItem>
      ))}
    </CategoryWrapper>
  );
};
