module.exports = {
    siteMetadata: {
        title: `Jaewook's point of view`,
        name: 'Jaewook Ahn',
        description: `Post all about Jaewook's point of view. Write code, memorable moment, take photo, share lifestyle, experience.`,
        siteUrl: 'https://jaewook.me',
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
    plugins: [
        {
            resolve: 'gatsby-plugin-disqus',
            options: {
                shortname: 'jaewook-ahns-logbase',
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Jaewook\'s point of view | Blog',
                short_name: 'Jaewook\'s point of view',
                start_url: '/',
                background_color: `#fff`,
                theme_color: `#fff`,
                lang: 'ko',
                display: `standalone`,
                icon: 'src/images/favicon.png'
            },
        },
        {
            resolve: 'gatsby-plugin-google-gtag',
            options: {
                trackingId: 'UA-108816190-1',
            },
        },
    ],
}
