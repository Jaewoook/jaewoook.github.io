/**
 * External modules
 */
import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

/**
 * Internal modules
 */
import { selectedCategoryState } from "../states/category";

const CategoryWrapper = styled.div<SpaceProps>`
  ${space}
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SerifSpan = styled.span`
  font-family: "Noto Serif KR", sans-serif;
  font-weight: 300;
`;

interface CategoryItemProps {
  children: string;
  selected: boolean;
  onClick: () => void;
}

const CategoryItem = (props: CategoryItemProps) => {
  const { children, onClick, selected, ...styles } = props;
  return (
    <div
      className={"border rounded-2xl cursor-pointer px-6 py-1 transition-all hover:border-black " + (selected ? "bg-black text-white" : "bg-white text-black")}
      onClick={onClick}
      {...styles}
    >
      <SerifSpan>{children.toUpperCase()}</SerifSpan>
    </div>
  );
};

interface CategoryProps extends SpaceProps {
  categories: string[];
  selectedIndex: number;
}

export const Category = (props: CategoryProps) => {
  const { categories, selectedIndex = 0, ...styles } = props;
  const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryState);

  const handleCategorySelect = useCallback(
    (name: string, index: number) => () => {
      if (index === selectedCategory.index) return;
      setSelectedCategory({ name, index });
    },
    [selectedCategory]
  );

  return (
    <CategoryWrapper className="max-md:px-4 max-md:space-x-2 space-x-4" {...styles}>
      <CategoryItem selected={selectedIndex === 0} onClick={handleCategorySelect("All", 0)}>
        All
      </CategoryItem>
      {categories.map((c, i) => (
        <CategoryItem key={c} selected={selectedIndex === i + 1} onClick={handleCategorySelect(c, i + 1)}>
          {c}
        </CategoryItem>
      ))}
    </CategoryWrapper>
  );
};
