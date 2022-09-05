import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
query getSiteMetadata {
    site {
        siteMetadata {
            name
            siteUrl
            title
            description
        }
    }
}
`;

export const useSiteMetadata = () => {
    const siteMetadata = useStaticQuery<Queries.getSiteMetadataQuery>(query).site?.siteMetadata;
    return siteMetadata;
};
