/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

/**
 * External modules
 */
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
// import "prismjs/plugins/line-numbers/prism-line-numbers.css";

/**
 * Internal modules
 */
import "./src/styles/global.css";
import "./src/styles/syntax-highlight.css";
import Layout from "./src/components/blog/Layout";

/**
 * Type modules
 */
import type { GatsbyBrowser } from "gatsby";

const PageElement: GatsbyBrowser["wrapPageElement"] = ({ element, props }) => {
  useEffect(() => {
    // Set vh - px as CSS variable
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  return (
    <RecoilRoot>
      <Layout {...props}>
        {element}
      </Layout>
    </RecoilRoot>
  );
};

export const wrapPageElement = PageElement;
