/**
 * External modules
 */
import React from "react";
import { navigate } from "gatsby";

/**
 * Internal modyles
 */
import { useSiteMetadata } from "../hooks/useSiteMetadata";

export const Header = () => {
    const siteMetadata = useSiteMetadata();

    const handleTitleClick = () => {
        navigate("/");
    }

    return (
        <header className="container mx-auto px-3 py-3 md:py-10">
            <h1 className="w-fit text-3xl font-medium cursor-pointer" onClick={handleTitleClick}>{siteMetadata?.title}</h1>
        </header>
    );
};
