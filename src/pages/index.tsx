import { useMemo } from "react";
import { graphql } from "gatsby";
import { useRecoilValue } from "recoil";

import { Category, PostCard, SEO } from "@/components/blog";
import { selectedCategoryState } from "@/states/category";

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
          date(formatString: "D MMMM, YYYY")
          category
          tags
          title
          slug
          secret
          hero {
            childImageSharp {
              gatsbyImageData(width: 350, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;

const Index = (props: PageProps<Queries.AllPostInfoQuery>) => {
  const {
    data: { allMdx: allPostInfo },
  } = props;
  const selectedCategory = useRecoilValue(selectedCategoryState);
  const categories = useMemo(() => {
    const c = allPostInfo.nodes.map((post) => post.frontmatter?.category ?? "").filter((c) => !!c);
    const catSet = new Set<string>(c);
    return Array.from(catSet);
  }, [allPostInfo]);
  const posts = useMemo(() => {
    return allPostInfo.nodes.filter(
      (post) => selectedCategory.index === 0 || selectedCategory.name === post.frontmatter?.category
    );
  }, [allPostInfo, selectedCategory]);

  return (
    <div className="container mx-auto pt-6 max-sm:pt-4">
      <Category
        mb={["16px", "24px"]}
        categories={categories}
        selectedIndex={selectedCategory.index}
      />
      <section className="mt-12">
        <div className="grid grid-cols-5 gap-x-6 gap-y-9 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
          {posts.map((post) => {
            return (
              <PostCard
                key={post.id}
                title={post.frontmatter?.title ?? ""}
                excerpt={post.excerpt ?? ""}
                category={post.frontmatter?.category ?? ""}
                image={post.frontmatter?.hero?.childImageSharp?.gatsbyImageData}
                slug={post.frontmatter?.slug ?? ""}
                secret={post.frontmatter?.secret ?? false}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Index;

export const Head: HeadFC = ({ location }) => {
  return <SEO path={location.pathname} />;
};
