/**
 * External modules
 */
import React from "react";
import { navigate, graphql, useStaticQuery } from "gatsby";

const headerQuery = graphql`
query {
    site {
        siteMetadata {
            shortTitle
        }
    }
}
`;

export const Header = () => {
    const queryResult = useStaticQuery(headerQuery);
    const title = queryResult?.site?.siteMetadata?.shortTitle ?? '';

    const handleTitleClick = () => {
        navigate("/");
    }

    return (
        <header className="container mx-auto px-3 py-3 md:py-10">
            <h1 className="w-fit text-3xl font-medium cursor-pointer" onClick={handleTitleClick}>{title}</h1>
        </header>
    );
};
