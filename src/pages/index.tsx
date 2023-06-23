/**
 * External modules
 */
import { useMemo } from "react";
import { graphql } from "gatsby";
import { useRecoilValue } from "recoil";

/**
 * Internal modules
 */
import { PostCard } from "../components/PostCard";
import { Category } from "../components/Category";
import { SEO } from "../components/SEO";
import { selectedCategoryState } from "../states/category";

/**
 * Type modules
 */
import type { HeadFC, PageProps } from "gatsby";

export const query = graphql`
  query AllPostInfo {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      totalCount
      nodes {
        id
        excerpt
        frontmatter {
          author
          date(formatString: "DD MMMM, YYYY")
          category
          tags
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


const Index = (props: PageProps<Queries.AllPostInfoQuery>) => {
  const { data: { allMdx: allPostInfo } } = props;
  const selectedCategory = useRecoilValue(selectedCategoryState);
  const categories = useMemo(() => {
    const c = allPostInfo.nodes.map((post) => post.frontmatter?.category ?? "").filter((c) => !!c);
    const catSet = new Set<string>(c);
    return Array.from(catSet);
  }, [allPostInfo]);

  return (
    <div className="container mx-auto pt-6 max-sm:pt-4">
      <Category mb={["16px", "24px"]} categories={categories} selectedIndex={selectedCategory.index} />
      <section className="flex flex-1 flex-wrap gap-4">
        {allPostInfo.nodes.map((node) => {
          return (
            <PostCard
              className={selectedCategory.index === 0 || selectedCategory.name === node.frontmatter?.category ? "flex" : "hidden"}
              key={node.id}
              title={node.frontmatter?.title ?? ""}
              excerpt={node.excerpt ?? ""}
              category={node.frontmatter?.category ?? ""}
              date={node.frontmatter?.date ?? ""}
              image={node.frontmatter?.hero?.childImageSharp?.gatsbyImageData}
              slug={node.frontmatter?.slug ?? ""}
              secret={node.frontmatter?.secret ?? false}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Index;

export const Head: HeadFC = ({ location }) => {
  return <SEO path={location.pathname} />;
};
