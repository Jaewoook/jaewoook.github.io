const siteMetadata = {
  title: "point of view.",
  name: "Jaewook Ahn",
  description: "Jaewook's point of view.",
  siteUrl: "https://jaewook.me",
  githubUrl: "https://github.com/Jaewoook",
  portfolioUrl: "https://portfolio.jaewook.me",
};

const config = {
  siteMetadata,
  graphqlTypegen: true,
  // typesOutputPath: "src/types",
  plugins: [
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: "https://f864f1fd319441c494152a7686d1283a@o415139.ingest.sentry.io/4504888767610880",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "point of view",
        short_name: "point of view",
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
              elements: ["h1", "h2", "h3"]
            }
          }
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
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/*"]
      }
    },
    {
      resolve: "gatsby-plugin-disqus",
      options: {
        shortname: "point of view",
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
  ],
};

module.exports = config;
