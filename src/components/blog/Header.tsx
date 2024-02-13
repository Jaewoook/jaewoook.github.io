/**
 * External modules
 */
import React, { HTMLAttributes, useCallback } from "react";
import { navigate } from "gatsby";
import { AiFillGithub } from "react-icons/ai";
import { BiCodeCurly } from "react-icons/bi";
import { CiDark, CiLight } from "react-icons/ci";
import styled from "styled-components";
import tw from "twin.macro";

/**
 * Internal modyles
 */
import { usePreferColorScheme } from "@/hooks/usePreferColorScheme";
import { useSiteMetadata } from "@/hooks/useSiteMetadata";

/**
 * Type modules
 */
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
      ? `linear-gradient(90deg, #fafafa 0%, rgba(212, 212, 216, 1) 50%, #fafafa 100%)`
      : `linear-gradient(90deg,#18181b 0%, rgba(212, 212, 216, 1) 50%, #18181b 100%)`};
  border-image-slice: 1;
  ${tw`container mx-auto px-3 py-4 flex items-baseline transition-all`}
`;

const NavItem = (props: NavItemProps) => {
  return (
    <a
      className="dark:text-neutral-50 hidden md:inline-flex items-center cursor-pointer"
      rel="noreferrer"
      target="_blank"
      href={props.url}
    >
      {props.icon}
      <span className="ml-3 text-xl font-extralight select-none hidden md:inline">{props.label}</span>
    </a>
  );
};

const ThemeToggle = (props: ColorSchemeProps & HTMLAttributes<HTMLButtonElement>) => {
  const { colorScheme, onClick } = props;

  return (
    <button
      className={"dark:text-neutral-50 font-extralight select-none inline-flex items-center " + props.className}
      onClick={onClick}
    >
      {colorScheme === "light" ? <CiDark className="text-2xl" /> : <CiLight className="text-2xl" />}
      <span className="ml-2 md:ml-3 text-sm md:text-xl">
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
      <h1 className="dark:text-neutral-50 text-4xl font-medium cursor-pointer select-none transition-colors" onClick={handleTitleClick}>
        {siteMetadata?.title}
      </h1>
      <nav className="lg:ml-24 md:ml-20 space-x-8 lg:space-x-12">
        <NavItem url={siteMetadata?.portfolioUrl ?? ""} label="Portfolio" icon={<BiCodeCurly className="text-2xl" />} />
        <NavItem url={siteMetadata?.githubUrl ?? ""} label="GitHub" icon={<AiFillGithub className="text-2xl" />} />
        <ThemeToggle colorScheme={colorScheme} onClick={handleThemeToggleClick} />
      </nav>
    </HeaderWrapper>
  );
};
