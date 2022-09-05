import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
query getAllPosts {
    allMdx {
        totalCount
        nodes {
            id
            excerpt
            frontmatter {
                author
                date
                title
                slug
                secret
            }
        }
    }
}
`;

export const useAllPosts = () => {
    const { allMdx } = useStaticQuery<Queries.getAllPostsQuery>(query);
    return allMdx;
};
