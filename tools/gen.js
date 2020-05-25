const fs = require('fs');
const replace = require('replace-in-file');
const srd = process.env.SELECT_SRD;
let configFile = '../Gen/'+srd+'/config.js';

const config = require(configFile);

const args = process.argv;

const namespace = args[2];
const namespaceSettings = config.namespaces.find(settings => settings.name === namespace);
let replaceFiles = [];

if (namespaceSettings !== undefined) {
    console.log(`Zahajuji generování namespace ${namespace}`);

    namespaceSettings.template.forEach(file => {

        let dir = namespaceSettings.distFolder.replace('./Srd/'+srd+'/', './tmp/'+srd+'/');
        let dist = dir + '/' + file.replace('./Gen/'+srd+'/templates/', '');

        replaceFiles.push(dist);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        fs.copyFileSync(
            file,
            dist
        );
        console.log(` - Vytvářím soubor v tmp složce ${dist}`);
    });

    namespaceSettings.applySnippets.forEach(snipetSettings => {

        let dir = config.snippets[snipetSettings.snippet];
        const headerprefix = "#".repeat(snipetSettings.headerOffset);
        snippetsFiles = fs.readdirSync(dir);
        console.log(` - Začínám nahrazovat snippety ${dir}: ${snippetsFiles.length}`);
        snippetsFiles.sort((a,b) => b.length - a.length).forEach(file => {
            let snippetToken = 'snippet-'+snipetSettings.snippet+':' + file.replace('.md', '');
            const regex = new RegExp(snippetToken, 'g');
            let to = fs.readFileSync(dir + '/' + file, 'utf8');
            const regexHeader = new RegExp('# ', 'g');
            replace.sync({
                files: replaceFiles,
                from: regex,
                to: to.replace(regexHeader,headerprefix +'# '),
            });
            console.log(`    - Nahrazuji ${snippetToken}`);
        });

    });


    replaceFiles.forEach(file => {
        let to = file.replace('./tmp/'+srd+'/', './Srd/'+srd+'/');
        fs.copyFileSync(
            file,
            to
        );
        console.log(` - Kopíruji soubor z tmp složky ${file} do ${to}`);
        fs.unlinkSync(file);
        console.log(` - Mažu soubor v tmp složce ${file}`);
    });

} else {
    console.log(`Nebyl zadán platný namespace pro generování obsahu`);
    console.log(`Registrované namespace:`);
    config.namespaces.forEach(namespace => console.log('   ' + namespace.name))
}



