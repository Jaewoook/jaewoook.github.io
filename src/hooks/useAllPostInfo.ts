import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query AllPostInfo {
    allMdx(sort: { frontmatter: { date: DESC } }) {
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
          hero {
            childImageSharp {
              gatsbyImageData(width: 400 placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;

export const useAllPostInfo = () => {
  return useStaticQuery<Queries.AllPostInfoQuery>(query).allMdx;
};
