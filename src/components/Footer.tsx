/**
 * External modules
 */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FaGithub } from "react-icons/fa";

const footerQuery = graphql`
query {
    site {
        siteMetadata {
            title
            name
            social { url }
        }
    }
}
`;
export const Footer = () => {
    const queryResult = useStaticQuery(footerQuery);

    return (
        <footer className="py-8 flex flex-col items-center">
            <p className="my-3">
                <span>{queryResult.site.siteMetadata.title}</span> | <span>{queryResult.site.siteMetadata.name}</span>
            </p>
            <a className="inline-flex items-center" target="_blank" href={queryResult.site.siteMetadata.social[0].url}>
                <FaGithub className="mr-1" />
                GitHub
            </a>
        </footer>
    );
}
