let config = {
    namespaces: [
        {
            name: 'grimoar-jmen',
            applySnippets: [
                { snippet: 'kouzla', headerOffset: 2 },
            ],
            template: [
                './Gen/DnD5e/templates/grimoar-jmen.md',
            ],
            distFolder: './Srd/DnD5e/grimoar',
        },
        {
            name: 'grimoar-moci',
            applySnippets: [
                { snippet: 'kouzla', headerOffset: 3 },
            ],
            template: [
                './Gen/DnD5e/templates/grimoar-moci.md',
            ],
            distFolder: './Srd/DnD5e/grimoar',
        },
        {
            name: 'grimoar-skol',
            applySnippets: [
                { snippet: 'kouzla', headerOffset: 3 },
            ],
            template: [
                './Gen/DnD5e/templates/grimoar-skol.md',
            ],
            distFolder: './Srd/DnD5e/grimoar',
        },
        {
            name: 'soupis',
            applySnippets: [
                { snippet: 'povolani', headerOffset: 1 },
                { snippet: 'obory',    headerOffset: 2 },
                { snippet: 'kouzla',   headerOffset: 3 },
            ],
            template: [
                './Gen/DnD5e/templates/barbar.md',
                './Gen/DnD5e/templates/bard.md',
                './Gen/DnD5e/templates/bojovnik.md',
                './Gen/DnD5e/templates/carodej.md',
                './Gen/DnD5e/templates/cernokneznik.md',
                './Gen/DnD5e/templates/druid.md',
                './Gen/DnD5e/templates/hranicar.md',
                './Gen/DnD5e/templates/klerik.md',
                './Gen/DnD5e/templates/kouzelnik.md',
                './Gen/DnD5e/templates/mnich.md',
                './Gen/DnD5e/templates/paladin.md',
                './Gen/DnD5e/templates/tulak.md',
            ],
            distFolder: './Srd/DnD5e/soupis',
        },
    ],
    snippets: {
        kouzla: './Gen/DnD5e/snippets/kouzla',
        povolani: './Gen/DnD5e/snippets/povolani',
        obory: './Gen/DnD5e/snippets/obory',
    }
};

module.exports = config;