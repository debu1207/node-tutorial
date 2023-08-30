const { readFile } = require('fs');
const path = require('path');
console.log('Started a first task');

const filePath = path.join("./content", 'first.txt');

readFile(filePath, 'utf8', (err, res)=> {
    if(err){
        console.log(err);
        return;
    }
    console.log(res);
    console.log('completed frist task');
})

console.log('Starting next task');

setTimeout(() => {
    console.log('2nd task');
}, 0)
console.log('finished second task');

setInterval(() => {
    console.log('Done');
}, 2000)
console.log(`I'll run first`)