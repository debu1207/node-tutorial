const { createReadStream } = require('fs');

const stream = createReadStream('./tmp.txt', { highWaterMark: 900, encoding: 'utf8'});

stream.on('data', (result) => {
    console.log(result);
})

stream.on('error', (result) => {
    console.log(result);
})