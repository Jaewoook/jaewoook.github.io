/**
 * External modules
 */
import React from "react";
import { navigate } from "gatsby";
import { AiFillGithub } from "react-icons/ai";
import { BiCodeCurly } from "react-icons/bi";

/**
 * Internal modyles
 */
import { useSiteMetadata } from "../hooks/useSiteMetadata";

interface NavItemProps {
  url: string;
  label: string;
  icon: React.ReactNode;
}

const NavItem = (props: NavItemProps) => {
  return (
    <a className="inline-flex items-center cursor-pointer" target="_blank" href={props.url}>
      {props.icon}
      <span className="ml-3 text-xl font-extralight select-none hidden md:inline">{props.label}</span>
    </a>
  )
};

export const Header = () => {
    const siteMetadata = useSiteMetadata();

    const handleTitleClick = () => {
        navigate("/");
    }

    return (
        <header className="container mx-auto px-3 py-4 flex items-baseline">
            <h1 className="text-4xl font-medium cursor-pointer" onClick={handleTitleClick}>{siteMetadata?.title}</h1>
            <nav className="lg:ml-24 md:ml-20 hidden md:block space-x-8 lg:space-x-12">
              <NavItem url={siteMetadata?.portfolioUrl ?? ""} label="Portfolio" icon={<BiCodeCurly className="text-2xl" />} />
              <NavItem url={siteMetadata?.githubUrl ?? ""} label="GitHub" icon={<AiFillGithub className="text-2xl"/>} />
            </nav>
        </header>
    );
};
