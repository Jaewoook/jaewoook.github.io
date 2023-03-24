/**
 * External modules
 */
import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

/**
 * Internal modules
 */
import * as Heading from "../components/typography/Heading";
import * as List from "../components/typography/List";
import * as Paragraph from "../components/typography/Paragraph";
import { SEO } from "../components/SEO";

/**
 * Type modules
 */
import type { HeadFC, PageProps } from "gatsby";

const TagSpan = styled.span`
  color: rgb(82 82 91);
  font-weight: 300;
  margin-right: 8px;
  padding: 8px 12px;
  position: relative;
  z-index: 0;

  ::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    padding: 1px;
    border-radius: 4px;
    background: linear-gradient(to right, #9c20aa, #fb3570);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

interface TagsProps {
  tags: Readonly<(string | null)[] | null | undefined>;
}

const Tags = (props: TagsProps) => {
  if (!props.tags) return null;

  return (
    <section className="max-sm:px-4 max-sm:mt-8 mt-12 flex flex-wrap items-center">
      {props.tags.map((tag) => (
        <TagSpan key={tag} className="max-sm:mt-2">
          {tag}
        </TagSpan>
      ))}
    </section>
  );
};

const mdxComponents = {
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  h4: Heading.H4,
  ul: List.UL,
  ol: List.OL,
  p: Paragraph.P,
  blockquote: Paragraph.BlockQuote,
};

interface PageContext {
  id: string;
  pagePath: string;
}

export const query = graphql`
  query GetPostById($id: String) {
    mdx(id: { eq: $id }) {
      excerpt
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
        excerpt
        author
        hero {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
        secret
        category
        tags
      }
    }
  }
`;

const Post = ({ data, children }: PageProps<Queries.GetPostByIdQuery, PageContext>) => {
  const heroImage = getImage(data.mdx?.frontmatter?.hero?.childImageSharp?.gatsbyImageData ?? null);
  return (
    <div className="max-w-3xl mx-auto pt-12 max-sm:pt-0">
      <section className="flex flex-col items-center py-6 px-4">
        <h1 className="text-zinc-900 text-4xl leading-snug font-semibold">{data.mdx?.frontmatter?.title}</h1>
        <div className="mt-4 flex flex-row text-zinc-700">
          <p>{data.mdx?.frontmatter?.author}</p>
          <span className="mx-3">⸺</span>
          <p>{data.mdx?.frontmatter?.date}</p>
        </div>
        {heroImage ? (
          <div className="mt-8 shadow-slate-400 shadow-lg">
            <GatsbyImage alt={data.mdx?.frontmatter?.title ?? "hero image"} image={heroImage} />
          </div>
        ) : null}
      </section>
      <article className="max-sm:px-4">
        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
      </article>
      <Tags tags={data.mdx?.frontmatter?.tags} />
    </div>
  );
};

export default Post;

export const Head: HeadFC<Queries.GetPostByIdQuery, PageContext> = ({ location, data }) => {
  return (
    <SEO
      title={data.mdx?.frontmatter?.title}
      description={data.mdx?.frontmatter?.excerpt ?? data.mdx?.excerpt}
      path={location.pathname}
      image={data.mdx?.frontmatter?.hero?.publicURL}
    />
  );
};
