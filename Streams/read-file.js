const { writeFileSync } = require('fs');

for (let i = 0; i<1000; i++) {
    writeFileSync('./tmp.txt', `${i}\n`, {flag: 'a'})
}