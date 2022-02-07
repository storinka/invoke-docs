module.exports = {
    base: '/invoke-docs/',

    lang: 'en-US',
    title: 'Invoke',
    description: 'Create fast and modern web APIs',

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
                                '/guide/pipe.md',
                                '/guide/type.md',
                                '/guide/method.md',
                                '/guide/data.md',
                                '/guide/validator.md',
                                '/guide/extensions.md',
                                '/guide/configuration.md',
                                '/guide/style-guide.md',
                                '/guide/schema.md',
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
            description: 'Create fast and modern web APIs',
        },
        // '/uk/': {
        //     lang: 'uk-UA',
        //     label: 'Українська',
        //     // title: 'Виклик',
        //     description: 'Роби функції, а не контролери.'
        // }
    },
}
