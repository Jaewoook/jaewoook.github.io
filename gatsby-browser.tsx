/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

/**
 * External modules
 */
import React from "react";
import type { GatsbyBrowser } from "gatsby";

/**
 * Internal modules
 */
import "./src/styles/global.css";
import Layout from "./src/components/Layout";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
};
