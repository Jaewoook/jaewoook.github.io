const siteMetadata = {
  title: `point of view.`,
  name: "Jaewook Ahn",
  description: `Post all about Jaewook's point of view. Write code, memorable moment, take photo, share lifestyle, experience.`,
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
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Jaewook's point of view | Blog",
        short_name: "point of view",
        start_url: "/",
        background_color: `#fff`,
        theme_color: `#fff`,
        lang: "ko",
        display: `standalone`,
        icon: "src/images/favicon.png",
      },
    },
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
    {
      resolve: "gatsby-plugin-disqus",
      options: {
        shortname: "jaewook-ahns-logbase",
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingId: "UA-108816190-1",
      },
    },
  ],
};

module.exports = config;
