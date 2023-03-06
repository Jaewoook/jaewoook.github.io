/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

/**
 * External modules
 */
import path from "path";

/**
 * Type modules
 */
import { CreatePagesArgs } from "gatsby";

const ALL_POST_PATHS_QUERY = `
  query AllPostPaths {
    allMdx {
      nodes {
        id
        frontmatter {
          slug
          secret
        }
        internal {
          contentFilePath
        }
      }
    }
  }
`;

export const createPages = async ({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs) => {
  const { createPage } = actions;

  const queryResults = await graphql<Queries.AllPostPathsQuery>(ALL_POST_PATHS_QUERY);
  if (queryResults.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  const PostComponent = path.resolve("src/pages/Post.tsx");
  queryResults.data?.allMdx.nodes.forEach((node) => {
    if (!node?.frontmatter?.slug) return;

    createPage({
      path: node.frontmatter.slug,
      component: `${PostComponent}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        pagePath: node.frontmatter.slug,
      },
    });
  });
};
