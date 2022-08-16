/**
 * External modules
 */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";

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

    return (
        <header className="px-3 py-3">
            <h1 className="text-3xl font-medium">{title}</h1>
        </header>
    );
};
