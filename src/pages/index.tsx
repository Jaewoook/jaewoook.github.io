/**
 * External modules
 */
import React from "react";
import { graphql } from "gatsby";

/**
 * Internal modules
 */
import { useAllPostInfo } from "../hooks/useAllPostInfo";
import { PostCard } from "../components/PostCard";

const Index = () => {
  const allPostInfo = useAllPostInfo();

  return (
    <div className="container mx-auto pt-6">
      <section className="flex flex-wrap">
        {allPostInfo.nodes.map((node) => {
          return (
            <PostCard
              key={node.id}
              title={node.frontmatter?.title ?? ""}
              excerpt={node.excerpt ?? ""}
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
