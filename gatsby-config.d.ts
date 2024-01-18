export type MdxFrontmatter = Queries.MdxFrontmatter;

export interface AllMdx {
  site: Queries.Site;
  allMdx: Queries.MdxConnection;
}

export type RSSSerializerReturn = {
  title: string;
  date: string;
  author: string;
  url: string;
}[];

interface SitePage extends Queries.SitePage {
  pageContext: {
    frontmatter: MdxFrontmatter
  };
}

export interface SitemapQuery {
  allSitePage: {
    nodes: ReadonlyArray<SitePage>;
  };
}

export interface SitemapPage {
  path: string;
  date: string | null;
  secret: boolean;
}

export interface Sitemap {
  url: string;
  lastmod: string | null;
}
