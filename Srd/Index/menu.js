/*
Zde se vyplnují položky menu

Je potřeba vytvořit záznam v dané skupině pro všechny stránky v pořadím v jakém je chceme mít
 */
const menu = {
    '/': [
        {
            title: '',
            collapsable: false,
            children: [
                '/faq/',
                '/faq/editace',
                '/faq/formatovani',
                '/faq/tvorba-virtualnich-knih',
                '/faq/components',
            ]
        },
        {
            title: 'Existující SRD',
            collapsable: false,
            children: [
                ['http://fatesrd.d20.cz', 'Fate SRD'],
                ['http://dnd5esrd.d20.cz', 'DnD 5e SRD'],
                ['http://awsrd.d20.cz', 'Apokalyptickej svět SRD'],
            ]
        },
    ],
};


module.exports = menu;