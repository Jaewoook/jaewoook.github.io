/**
 * External modules
 */
import { atom } from "recoil";

export type ColorScheme = "light" | "dark";

export const themeState = atom<ColorScheme>({
  key: "theme",
  default: "light",
});
