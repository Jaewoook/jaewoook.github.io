/**
 * External modules
 */
import React from "react";
import { FaGithub } from "react-icons/fa";

/**
 * Internal modules
 */
import { useSiteMetadata } from "../hooks/useSiteMetadata";

export const Footer = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <footer className="container flex flex-row justify-items-center py-8 mx-auto">
      <p>
        <span>{siteMetadata?.title}</span> | <span>©️ {siteMetadata?.name}</span>
      </p>
      <a className="ml-3 inline-flex items-center" target="_blank" href={siteMetadata?.githubUrl ?? ""}>
        <FaGithub className="mr-1" />
        GitHub
      </a>
    </footer>
  );
};
