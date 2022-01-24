const sidebarMenu = require('../menu');

const dev = process.env.DEV;
const googleAnalyticsCode = process.env.GA_DRD2;
const googleAnalytics = (dev == 0) ? googleAnalyticsCode : '';


module.exports = {

    title: 'Český překlad DrD 2 SRD',
    description: 'Český překlad DrD 2 SRD',

    themeConfig: {
        theme: '@vuepress/theme-default',

        // horní navigace
        nav: [
            {
                text: 'Rozcestník SRD',
                link: 'http://srd.d20.cz/'
            },
            {
                text: 'Vytváření a editace SRD',
                link: 'http://srd.d20.cz/faq/'
            },
            {
                text: 'd20.cz',
                link: 'http://www.d20.cz/'
            },
        ],

        // boční menu
        sidebar: sidebarMenu,

        displayAllHeaders: false,
        sidebarDepth: 2,
    },

    locales: {
        '/': {
            lang: 'cs',
        }
    },

    extendMarkdown: md => {
        md.use(require('markdown-it-deflist'));
    },

    plugins: [
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        ['@vuepress/medium-zoom'],
        ['@vuepress/google-analytics', {
            'ga': googleAnalytics
        }]
    ],

};

