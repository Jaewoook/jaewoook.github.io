import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";

import { themeState } from "../states/theme";
import type { ColorScheme } from "../states/theme";

export interface ColorSchemeProps {
  colorScheme: ColorScheme;
}

export const usePreferColorScheme = () => {
  const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useRecoilState(themeState);

  const setColorScheme = useCallback((colorScheme: ColorScheme) => {
    if (theme === colorScheme) {
      return;
    }

    if (colorScheme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty("--color", "light");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty("--color", "dark");
    }
    setTheme(colorScheme);
    localStorage.setItem("theme", colorScheme);
  }, [theme, setTheme]);

  useEffect(() => {
    let storedTheme = localStorage.getItem("theme");
    let colorScheme: ColorScheme = "light";

    // set default color scheme to localStorage
    if (storedTheme === null) {
      colorScheme = colorSchemeQuery.matches ? "dark" : "light";
      localStorage.setItem("theme", colorScheme);
    } else if (storedTheme === "dark") {
      colorScheme = "dark";
    } else {
      // default color scheme is 'light'
      colorScheme = "light";
    }

    // set global css variable
    if (colorScheme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty("--color", "light");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty("--color", "dark");
    }
    setTheme(colorScheme);
  }, [colorSchemeQuery, setTheme]);

  return {
    colorScheme: theme,
    setColorScheme,
  };
};
