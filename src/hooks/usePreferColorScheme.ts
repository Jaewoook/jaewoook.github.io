import { useCallback, useEffect, useState } from "react";

type ColorScheme = "light" | "dark";

export const usePreferColorScheme = () => {
  const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState<ColorScheme>("light");

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
  }, [theme]);

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
  }, [colorSchemeQuery]);

  return {
    colorScheme: theme,
    setColorScheme,
  };
};
