module.exports = {
  siteMetadata: {
    title: `Jaewook's point of view`,
    name: 'Jaewook Ahn',
    author: 'Jaewook Ahn',
    description: `Post all about Jaewook's point of view. Write code, memorable moment, take photo, share lifestyle, experience.`,
    siteUrl: 'https://jaewoook.github.io',
    hero: {
      heading: 'Point of view',
      maxWidth: 720,
    },
    social: [
      {
        name: 'github',
        url: 'https://github.com/Jaewoook',
      },
    ],
  },
  pathPrefix: 'jaewoook',
  plugins: [
    '@narative/gatsby-theme-novela'
  ],
}
