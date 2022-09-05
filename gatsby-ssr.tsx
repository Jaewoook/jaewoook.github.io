/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

/**
 * External modules
 */
import React from "react";
import type { GatsbySSR } from "gatsby";

/**
 * Internal modules
 */
import Layout from "./src/components/Layout";

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
};
