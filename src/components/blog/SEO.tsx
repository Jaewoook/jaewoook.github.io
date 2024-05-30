/**
 * External modules
 */
import React, { useMemo } from "react";

/**
 * Internal modules
 */
import { useSiteMetadata } from "@/hooks/useSiteMetadata";

interface SEOProps {
  path: string;
  title?: string | null;
  description?: string | null;
  image?: string | null;
  type?: "website" | "article";
  section?: string | null;
  publishedTime?: string | null;
  tags?: readonly (string | null)[] | null;
}

export const SEO = (props: React.PropsWithChildren<SEOProps>) => {
  const { children, title, description, image, path, type = "website", section, publishedTime, tags } = props;
  const siteMetadata = useSiteMetadata();
  const pageTitle = useMemo(() => {
    if (title) {
      return `${title} - ${siteMetadata?.title}`;
    } else {
      return siteMetadata?.title ?? "";
    }
  }, [title, siteMetadata?.title]);
  const pageDescription = description ?? siteMetadata?.description;
  const pageTags = useMemo(() => (tags?.filter((tag) => !!tag) ?? []) as string[], [tags]);

  return (
    <>
      <html lang="ko" />
      <title>{pageTitle}</title>
      <meta name="og:title" content={pageTitle} />
      {siteMetadata?.title ? <meta name="og:site_name" content={siteMetadata?.title} /> : null}
      <meta name="og:url" content={siteMetadata?.siteUrl + path} />
      {siteMetadata?.name ? <meta name="author" content={siteMetadata?.name} /> : null}
      <meta name="og:type" content={type} />
      <meta name="og:locale" content="ko_KR" />
      {pageDescription ? (
        <>
          <meta name="description" content={pageDescription} />
          <meta name="og:description" content={pageDescription} />
        </>
      ) : null}
      {type === "article" ? (
        <>
          {siteMetadata?.name ? <meta name="og:article:author" content={siteMetadata?.name} /> : null}
          {publishedTime ? <meta name="og:article:published_time" content={publishedTime} /> : null}
          {section ? <meta name="og:article:section" content={section} /> : null}
          {pageTags.map((tag) => (
            <meta key={tag} name="og:article:tag" content={tag} />
          ))}
        </>
      ) : null}
      {image ? (
        <>
          <meta name="image" content={`${siteMetadata?.siteUrl}${image}`} />
          <meta name="og:image" content={`${siteMetadata?.siteUrl}${image}`} />
        </>
      ) : null}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      {children}
    </>
  );
};
