import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";

import { themeState } from "../states/theme";
import type { ColorScheme } from "../states/theme";

export interface ColorSchemeProps {
  colorScheme: ColorScheme;
}

export const usePreferColorScheme = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const setColorScheme = useCallback(
    (colorScheme: ColorScheme) => {
      if (theme === colorScheme) {
        return;
      }

      // set global css variable
      if (colorScheme === "light") {
        document.documentElement.classList.remove("dark");
        document.documentElement.style.setProperty("--color", "light");
        document.querySelector('meta[name="theme-color"]')?.setAttribute("content", "#fafafa");
      } else {
        document.documentElement.classList.add("dark");
        document.documentElement.style.setProperty("--color", "dark");
        document.querySelector('meta[name="theme-color"]')?.setAttribute("content", "#171717");
      }
      setTheme(colorScheme);
      localStorage.setItem("theme", colorScheme);
    },
    [theme, setTheme]
  );

  useEffect(() => {
    const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    let storedTheme = localStorage.getItem("theme");

    // set default color scheme to localStorage
    if (storedTheme === null) {
      const colorScheme = colorSchemeQuery.matches ? "dark" : "light";
      setColorScheme(colorScheme);
    } else if (storedTheme === "dark") {
      setColorScheme("dark");
    } else {
      setColorScheme("light");
    }

  }, [setColorScheme]);

  return {
    colorScheme: theme,
    setColorScheme,
  };
};
