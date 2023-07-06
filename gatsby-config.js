// @ts-check

const siteMetadata = {
  title: "point of view.",
  name: "Jaewook Ahn",
  description: "Jaewook's point of view.",
  siteUrl: "https://jaewook.me",
  githubUrl: "https://github.com/Jaewoook",
  portfolioUrl: "https://portfolio.jaewook.me",
};

const rssQuery = `
{
  site {
    siteMetadata {
      siteUrl
    }
  }
  allMdx(sort: { frontmatter: { date: DESC } }) {
    nodes {
      frontmatter {
        title
        date
        slug
        secret
        author
      }
    }
  }
}
`;

/**
 * @type {({ query }: { query: any }) => string[]}
 */
const rssSerializer = ({ query }) => {
  const siteUrl = query.site.siteMetadata.siteUrl;
  return query.allMdx.nodes
    .filter((/** @type {{ frontmatter: { secret: boolean; }; }} */ node) => !node.frontmatter.secret)
    .map((
      /** @type {{ frontmatter: { title: string; date: string; author: string; slug: string | URL; }; }} */ node
    ) => ({
      title: node.frontmatter.title,
      date: node.frontmatter.date,
      author: node.frontmatter.author,
      url: new URL(node.frontmatter.slug, siteUrl).href,
    }));
};

/**
 * @type {import("gatsby").PluginRef[]}
 */
const plugins = [
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "point of view.",
      short_name: "point of view.",
      start_url: "/",
      background_color: "#fff",
      theme_color: "#fff",
      lang: "ko",
      display: "standalone",
      icon: "src/images/favicon.png",
    },
  },
  "gatsby-plugin-postcss",
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  "gatsby-plugin-styled-components",
  {
    resolve: "gatsby-plugin-mdx",
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 800,
            linkImagesToOriginal: false,
            withWebp: true,
          },
        },
        {
          resolve: "gatsby-remark-prismjs",
          options: {
            showLineNumbers: true,
          },
        },
        {
          resolve: "gatsby-remark-autolink-headers",
          options: {
            elements: ["h1", "h2", "h3"],
          },
        },
      ],
      mdxOptions: {
        remarkPlugins: [import("remark-gfm")],
      },
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "posts",
      path: `${__dirname}/content/posts`,
    },
  },
  "gatsby-plugin-catch-links",
  {
    resolve: "gatsby-plugin-feed",
    options: {
      feeds: [
        {
          serialize: rssSerializer,
          query: rssQuery,
          output: "/rss.xml",
          title: "point of view RSS feed",
        },
      ],
    },
  },
  {
    resolve: "gatsby-plugin-disqus",
    options: {
      shortname: "jaewook-ahns-logbase",
    },
  },
  {
    resolve: "gatsby-plugin-google-gtag",
    options: {
      trackingIds: ["G-FQPC5W480F"],
      pluginConfig: {
        head: true,
      },
    },
  },
];

if (process.env.NODE_ENV === "production") {
  plugins.push({
    resolve: "@sentry/gatsby",
    options: {
      dsn: "https://f864f1fd319441c494152a7686d1283a@o415139.ingest.sentry.io/4504888767610880",
    },
  });
} else {
  console.info("Skipped plugin: @sentry/gatsby");
}

/**
 * @type {import("gatsby").GatsbyConfig}
 */
const config = {
  siteMetadata,
  graphqlTypegen: {
    typesOutputPath: "src/types/gatsby-types.d.ts",
  },
  jsxRuntime: "automatic",
  trailingSlash: "ignore",
  plugins,
};

module.exports = config;
