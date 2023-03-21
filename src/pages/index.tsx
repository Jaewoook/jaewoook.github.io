/**
 * External modules
 */
import React, { useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";

/**
 * Internal modules
 */
import { useAllPostInfo } from "../hooks/useAllPostInfo";
import { PostCard } from "../components/PostCard";
import { Category } from "../components/Category";
import { selectedCategoryState } from "../states/category";

const Index = () => {
  const allPostInfo = useAllPostInfo();
  const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryState);
  const [categories, setCategories] = useState<string[]>([]);
  const posts = useMemo(() => {
    return allPostInfo.nodes.filter((post) => selectedCategory.index === 0 ? true : post.frontmatter?.category === selectedCategory.name);
  }, [allPostInfo.nodes, selectedCategory]);

  useEffect(() => {
    const c = allPostInfo.nodes.map((post) => post.frontmatter?.category ?? "").filter((c) => !!c);
    const catSet = new Set<string>(c);
    setCategories(Array.from(catSet));
    console.log(c);
  }, [allPostInfo]);

  return (
    <div className="container mx-auto pt-6">
      <Category mb={["16px", "32px"]} categories={categories} selectedIndex={selectedCategory.index} />
      <section className="flex flex-1 flex-wrap gap-4">
        {posts.map((node) => {
          return (
            <PostCard
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
