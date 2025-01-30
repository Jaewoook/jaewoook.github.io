import React, { HTMLAttributes, useCallback } from "react";
import { navigate } from "gatsby";
import { AiFillGithub } from "react-icons/ai";
import { BiCodeCurly } from "react-icons/bi";
import { CiDark, CiLight } from "react-icons/ci";
import styled from "styled-components";
import tw from "twin.macro";

import { usePreferColorScheme } from "@/hooks/usePreferColorScheme";
import { useSiteMetadata } from "@/hooks/useSiteMetadata";

import type { ColorSchemeProps } from "@/hooks/usePreferColorScheme";

interface NavItemProps {
  url: string;
  label: string;
  icon: React.ReactNode;
}

const HeaderWrapper = styled.header<ColorSchemeProps>`
  border-bottom-width: 1px;
  border-image: ${({ colorScheme }) =>
    colorScheme === "light"
      ? `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(212, 212, 216, 1) 50%, rgba(0,0,0,0) 100%)`
      : `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(212, 212, 216, 1) 50%, rgba(0,0,0,0) 100%)`};
  border-image-slice: 1;
  ${tw`container mx-auto px-3 py-4 flex items-baseline transition-all`}
`;

const NavItem = (props: NavItemProps) => {
  return (
    <a
      className="hidden cursor-pointer items-center dark:text-neutral-50 md:inline-flex"
      rel="noreferrer"
      target="_blank"
      href={props.url}
    >
      {props.icon}
      <span className="ml-3 hidden select-none text-xl font-extralight md:inline">
        {props.label}
      </span>
    </a>
  );
};

const ThemeToggle = (props: ColorSchemeProps & HTMLAttributes<HTMLButtonElement>) => {
  const { colorScheme, onClick } = props;

  return (
    <button
      className={
        "inline-flex select-none items-center font-extralight dark:text-neutral-50 " +
        props.className
      }
      onClick={onClick}
    >
      {colorScheme === "light" ? <CiDark className="text-2xl" /> : <CiLight className="text-2xl" />}
      <span className="ml-2 text-sm md:ml-3 md:text-xl">
        <span className="hidden md:inline">Switch to </span>
        {colorScheme === "light" ? "Dark" : "Light"}
      </span>
    </button>
  );
};

export const Header = () => {
  const { colorScheme, setColorScheme } = usePreferColorScheme();
  const siteMetadata = useSiteMetadata();
  const handleTitleClick = useCallback(() => {
    navigate("/");
  }, []);

  const handleThemeToggleClick = useCallback(() => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  }, [colorScheme, setColorScheme]);

  return (
    <HeaderWrapper colorScheme={colorScheme}>
      <h1
        className="cursor-pointer select-none text-4xl font-medium transition-colors dark:text-neutral-50"
        onClick={handleTitleClick}
      >
        {siteMetadata?.title}
      </h1>
      <nav className="space-x-8 md:ml-20 lg:ml-24 lg:space-x-12">
        <NavItem
          url={siteMetadata?.portfolioUrl ?? ""}
          label="Portfolio"
          icon={<BiCodeCurly className="text-2xl" />}
        />
        <NavItem
          url={siteMetadata?.githubUrl ?? ""}
          label="GitHub"
          icon={<AiFillGithub className="text-2xl" />}
        />
        <ThemeToggle colorScheme={colorScheme} onClick={handleThemeToggleClick} />
      </nav>
    </HeaderWrapper>
  );
};
