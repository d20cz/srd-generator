const fs = require('fs');

const args = process.argv;

let name = args[2];

let folderPath = './Srd/' + name;
fs.readdir(folderPath, (err, files) => {
    files.forEach(file => {
        console.log('\'' + name + '/'+file.replace('.md','')+'\',');
    });
});