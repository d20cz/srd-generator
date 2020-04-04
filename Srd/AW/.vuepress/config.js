const sidebarMenu = require('../menu');
const moment = require('moment');

const dev = process.env.DEV;
const googleAnalyticsCode = process.env.GA_AW;
const googleAnalytics = (dev == 0) ? googleAnalyticsCode : '';


module.exports = {

    title: 'Českej překlad Apokalyptickýho světa SRD',
    description: 'Českej překlad Apokalyptickýho světa SRD',

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
        ['@vuepress/last-updated', {
            transformer: (timestamp, lang) => {
                moment.locale(lang);
                return moment(timestamp).format('LLL');
            }
        }],
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        ['@vuepress/medium-zoom'],
        ['@vuepress/google-analytics', {
            'ga': googleAnalytics
        }]
    ],

};

