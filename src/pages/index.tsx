/**
 * External modules
 */
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

/**
 * Internal modules
 */
import { useAllPostInfo } from "../hooks/useAllPostInfo";
import { PostCard } from "../components/PostCard";
import { Category } from "../components/Category";
import { SEO } from "../components/SEO";
import { selectedCategoryState } from "../states/category";

/**
 * Type modules
 */
import type { HeadFC } from "gatsby";

const Index = () => {
  const allPostInfo = useAllPostInfo();
  const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryState);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const c = allPostInfo.nodes.map((post) => post.frontmatter?.category ?? "").filter((c) => !!c);
    const catSet = new Set<string>(c);
    setCategories(Array.from(catSet));
    console.log(c);
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
