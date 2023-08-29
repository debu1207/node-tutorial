const {readFile, writeFile } = require('fs');
const path = require('path');

const filepath = path.join('./content', 'first.txt');

const file = readFile(filepath, 'utf8', (err, result)=>{
    if (err) throw err;
    const content = result;
    console.log("File has been read.");
    writeFile("./content/result-async.txt", content, (err, result) => {
        if(err) throw err;
    } );
})
