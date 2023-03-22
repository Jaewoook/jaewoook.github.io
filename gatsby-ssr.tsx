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
import { RecoilRoot } from "recoil";

/**
 * Internal modules
 */
import Layout from "./src/components/Layout";

/**
 * Type modules
 */
import type { GatsbySSR } from "gatsby";

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element, props }) => {
  return (
    <RecoilRoot>
      <Layout {...props}>
        {element}
      </Layout>
    </RecoilRoot>
  );
};
