/**
 * External modules
 */
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

/**
 * Internal modules
 */
import { Comment, SEO, TableOfContents } from "../components/blog";
import * as Heading from "../components/typography/Heading";
import * as Link from "../components/typography/Link";
import * as List from "../components/typography/List";
import * as Paragraph from "../components/typography/Paragraph";
import { usePreferColorScheme } from "../hooks/usePreferColorScheme";
import type { ColorSchemeProps } from "../hooks/usePreferColorScheme";

/**
 * Type modules
 */
import type { HeadFC, PageProps } from "gatsby";

const TagSpan = styled.span<ColorSchemeProps>`
  color: ${({ colorScheme }) => colorScheme === "light" ? "rgb(82 82 91)" : "#d4d4d8"};
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
  const { colorScheme } = usePreferColorScheme();

  if (!props.tags) return null;

  return (
    <div className="flex flex-wrap items-center">
      {props.tags.map((tag) => (
        <TagSpan key={tag} className="max-sm:mt-2" colorScheme={colorScheme}>
          {tag}
        </TagSpan>
      ))}
    </div>
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
  a: Link.Anchor,
  blockquote: Paragraph.BlockQuote,
};

export const query = graphql`
  query GetPostById($id: String) {
    mdx(id: { eq: $id }) {
      excerpt
      tableOfContents
      frontmatter {
        date(formatString: "D MMMM, YYYY")
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
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

const Post = ({ data, children, pageContext }: PageProps<Queries.GetPostByIdQuery>) => {
  const heroImage = getImage(data.mdx?.frontmatter?.hero?.childImageSharp?.gatsbyImageData ?? null);

  return (
    <>
      {/* Post header section */}
      <div className="flex flex-col items-center pt-12 max-sm:pt-6 pb-6 px-4">
        <h1 className="text-zinc-900 dark:text-zinc-100 text-4xl leading-snug font-semibold">{data.mdx?.frontmatter?.title}</h1>
        <p className="mt-4 flex text-zinc-700 dark:text-zinc-300">
          {data.mdx?.frontmatter?.author}
          <span className="mx-3">⸺</span>
          {data.mdx?.frontmatter?.date}
        </p>
        {heroImage ? (
          <div className="mt-8 shadow-zinc-400 dark:shadow-zinc-800 shadow-lg">
            <GatsbyImage
              className="post-hero-image"
              alt={data.mdx?.frontmatter?.title ?? "hero image"}
              image={heroImage}
            />
          </div>
        ) : null}
      </div>
      <div className="flex mt-8 justify-end max-sm:mt-4">
        <div className="max-w-4xl px-8 max-xl:max-w-3xl max-xl:px-6 max-sm:px-4 max-sm:w-full">
          {/* Post section */}
          <article>
            <MDXProvider components={mdxComponents}>{children}</MDXProvider>
          </article>
          {/* Tags section */}
          <section className="max-sm:mt-8 mt-12">
            <Tags tags={data.mdx?.frontmatter?.tags} />
          </section>
        </div>
        {/* Sticky TOC */}
        <nav className="max-lg:hidden w-80 max-xl:w-72 self-stretch px-4 order-last">
          <div className="sticky top-8 overflow-y-auto">
            <Heading.H3 className="mt-0">Table of Contents</Heading.H3>
            <TableOfContents items={(data.mdx?.tableOfContents?.items as any) ?? []} />
          </div>
        </nav>
      </div>
      {/* Comment section */}
      <section className="max-w-4xl mx-auto pt-16 max-sm:px-4">
        <Comment repo="Jaewoook/point-of-view" theme="github-light" />
      </section>
    </>
  );
};

export default Post;

export const Head: HeadFC<Queries.GetPostByIdQuery> = ({ location, data }) => {
  return (
    <SEO
      title={data.mdx?.frontmatter?.title}
      description={data.mdx?.frontmatter?.excerpt ?? data.mdx?.excerpt}
      path={location.pathname}
      image={data.mdx?.frontmatter?.hero?.publicURL}
    />
  );
};
