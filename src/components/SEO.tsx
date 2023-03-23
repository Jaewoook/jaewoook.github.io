/**
 * External modules
 */
import React, { useMemo } from "react";

/**
 * Internal modules
 */
import { useSiteMetadata } from "../hooks/useSiteMetadata";

interface SEOProps {
  path: string;
  title?: string | null;
  description?: string | null;
  image?: string | null;
}

export const SEO = (props: React.PropsWithChildren<SEOProps>) => {
  const { children, title, description, image, path } = props;
  const siteMetadata = useSiteMetadata();
  const pageTitle = useMemo(() => {
    if (title) {
      return `${title} - ${siteMetadata?.title}`;
    } else {
      return siteMetadata?.title ?? "";
    }
  }, [title, siteMetadata?.title]);

  return (
    <>
      <html lang="ko" />
      <title>{pageTitle}</title>
      <meta name="og:title" content={pageTitle} />
      <meta name="og:site_name" content={siteMetadata?.title ?? ""} />
      <meta name="og:url" content={siteMetadata?.siteUrl + path} />
      <meta name="author" content={siteMetadata?.name ?? ""} />
      <meta name="og:type" content="blog" />
      <meta name="og:locale" content="ko_KR" />
      <meta name="description" content={description ?? siteMetadata?.description ?? ""} />
      <meta name="og:description" content={description ?? siteMetadata?.description ?? ""} />
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
