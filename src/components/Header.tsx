/**
 * External modules
 */
import React, { useCallback } from "react";
import { navigate } from "gatsby";
import { AiFillGithub } from "react-icons/ai";
import { BiCodeCurly } from "react-icons/bi";
import styled from "styled-components";

/**
 * Internal modyles
 */
import { useSiteMetadata } from "../hooks/useSiteMetadata";

interface NavItemProps {
  url: string;
  label: string;
  icon: React.ReactNode;
}

const HeaderWrapper = styled.header`
  border-bottom-width: 2px;
  border-image: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(212,212,216,1) 50%, rgba(255,255,255,1) 100%);
  border-image-slice: 1;
`;

const NavItem = (props: NavItemProps) => {
  return (
    <a className="inline-flex items-center cursor-pointer" target="_blank" href={props.url}>
      {props.icon}
      <span className="ml-3 text-xl font-extralight select-none hidden md:inline">{props.label}</span>
    </a>
  );
};

export const Header = () => {
  const siteMetadata = useSiteMetadata();
  const handleTitleClick = useCallback(() => {
    navigate("/");
  }, []);

  return (
    <HeaderWrapper className="container mx-auto px-3 py-4 flex items-baseline">
      <h1 className="text-4xl font-medium cursor-pointer" onClick={handleTitleClick}>
        {siteMetadata?.title}
      </h1>
      <nav className="lg:ml-24 md:ml-20 hidden md:block space-x-8 lg:space-x-12">
        <NavItem url={siteMetadata?.portfolioUrl ?? ""} label="Portfolio" icon={<BiCodeCurly className="text-2xl" />} />
        <NavItem url={siteMetadata?.githubUrl ?? ""} label="GitHub" icon={<AiFillGithub className="text-2xl" />} />
      </nav>
    </HeaderWrapper>
  );
};
