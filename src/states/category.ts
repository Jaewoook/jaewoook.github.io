/**
 * External modules
 */
import { atom } from "recoil";

interface Category {
  name: string;
  index: number;
}

export const selectedCategoryState = atom<Category>({
  key: "selectedCategory",
  default: {
    name: "All",
    index: 0,
  },
});
