/*
Zde se vyplnují položky menu

Je potřeba vytvořit záznam v dané skupině pro všechny stránky v pořadím v jakém je chceme mít
 */
const menu = {
    '/': [
    {
            title: 'Základní příručka',
            collapsable: true,
            children: [
              {
                title: 'ČÁST I - Úvod do hry',
                collapsable: true,
                children: [
                  '/zakladni-prirucka/11-co-jsou-hry-na-hrdiny.md',
                  '/zakladni-prirucka/12-priklad-hry.md',
                ]
              },
              {
                title: 'ČÁST II - Tvorba postav',
                collapsable: true,
                children: [
              '/zakladni-prirucka/21-dobrodruzi.md',
              '/zakladni-prirucka/22-ukazkove-postavy.md',
              '/zakladni-prirucka/23-tvorba-hrdiny.md',
              '/zakladni-prirucka/24-rasy.md',
              '/zakladni-prirucka/25-zakladni-povolani.md',
              '/zakladni-prirucka/26-pokrocila-povolani.md',
                ]
              },
              {
                title: 'ČÁST III - Hraní hry',
                collapsable: true,
                children: [
              '/zakladni-prirucka/31-zakladni-pravidla.md',
              '/zakladni-prirucka/32-slozitejsi-situace.md',
              '/zakladni-prirucka/33-vybaveni.md',
              '/zakladni-prirucka/34-pomocnici-a-site.md',
              '/zakladni-prirucka/35-pouzivani-dovednosti.md',
              '/zakladni-prirucka/36-kouzla-nastrahy-leceni.md',
              '/zakladni-prirucka/37-zvlastni-schopnosti.md',
              '/zakladni-prirucka/38-zkusenosti-a-zlepsovani-postavy.md',
                ]
              },
              {
                title: 'ČÁST IV - Vyprávění příběhů',
                collapsable: true,
                children: [
              '/zakladni-prirucka/41-priprava-a-vedeni-hry.md',
              '/zakladni-prirucka/42-inspirace-pro-dobrodruzstvi.md',
              '/zakladni-prirucka/43-bestiar.md',
              '/zakladni-prirucka/44-navrat-do-bileho-hradu.md',
                ]
              },
            ]
        },
    ]
};


module.exports = menu;

