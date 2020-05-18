module.exports = {
    siteMetadata: {
        title: `Jaewook's point of view`,
        name: 'Jaewook Ahn',
        description: `Post all about Jaewook's point of view. Write code, memorable moment, take photo, share lifestyle, experience.`,
        siteUrl: 'https://jaewoook.github.io',
        hero: {
            heading: 'Point of view',
            maxWidth: 768,
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
        {
            resolve: '@narative/gatsby-theme-novela',
            options: {
                basePath: "/",
                authorsPage: true,
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Jaewook\'s point of view',
                short_name: 'Jaewook Ahn\'s blog',
                short_url: '/',
                background_color: `#fff`,
                theme_color: `#fff`,
                display: `standalone`,
            },
        },
    ],
}
