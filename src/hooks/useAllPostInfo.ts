import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query AllPostInfo {
    allMdx {
      totalCount
      nodes {
        id
        excerpt
        frontmatter {
          author
          date(formatString: "DD MMMM, YYYY")
          title
          slug
          secret
        }
      }
    }
  }
`;

export const useAllPostInfo = () => {
  return useStaticQuery<Queries.AllPostInfoQuery>(query).allMdx;
};
