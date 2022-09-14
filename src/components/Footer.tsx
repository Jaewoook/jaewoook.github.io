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
        <footer className="py-8 flex flex-col items-center">
            <p className="my-3">
                <span>{siteMetadata?.title}</span> | <span>{siteMetadata?.name}</span>
            </p>
            <a className="inline-flex items-center" target="_blank" href={siteMetadata?.githubUrl ?? ''}>
                <FaGithub className="mr-1" />
                GitHub
            </a>
        </footer>
    );
}
