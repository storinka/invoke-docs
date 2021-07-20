module.exports = {
    base: '/invoke-docs/',

    lang: 'en-US',
    title: 'Invoke',
    description: 'Write functions, not controllers.',

    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
    },

    head: [['link', {rel: 'icon', href: '/images/logo.png'}]],
    locales: {
        '/': {
            lang: 'en-US',
            label: 'English',
            title: 'Invoke',
            description: 'Write functions, not controllers.'
        },
        '/uk/': {
            lang: 'uk-UA',
            label: 'Українська',
            title: 'Виклик',
            description: 'Пиши функції, а не контролери.'
        }
    }
}
