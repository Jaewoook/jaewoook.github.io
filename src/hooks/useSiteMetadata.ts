import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        name
        siteUrl
        githubUrl
        portfolioUrl
        title
        description
      }
    }
  }
`;

export const useSiteMetadata = () => {
  return useStaticQuery<Queries.SiteMetadataQuery>(query).site?.siteMetadata;
};
