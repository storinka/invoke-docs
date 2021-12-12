module.exports = {
    base: '/invoke-docs/',

    lang: 'en-US',
    title: 'Invoke',
    description: 'Write functions, not controllers.',

    themeConfig: {
        logo: '/images/logo.png',
        logoDark: '/images/logo_dark.png',
        locales: {
            '/': {
                sidebar: {
                    '/guide/': [
                        {
                            text: 'Guide',
                            children: [
                                '/guide/README.md',
                                '/guide/getting-started.md',
                                '/guide/methods.md',
                                '/guide/typesystem.md',
                                '/guide/configuration.md',
                                '/guide/style-guide.md',
                            ],
                        }
                    ]
                },
            },
        }
    },

    head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
    locales: {
        '/': {
            lang: 'en-US',
            label: 'English',
            // title: 'Invoke',
            description: 'Make functions, not controllers.',
        },
        '/uk/': {
            lang: 'uk-UA',
            label: 'Українська',
            // title: 'Виклик',
            description: 'Роби функції, а не контролери.'
        }
    },
}
