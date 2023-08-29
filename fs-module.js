const {readFileSync, writeFileSync } = require('fs');
const path = require('path');

const filePath = path.join("./content", "./first.txt");

const first = readFileSync(filePath, 'utf-8');

writeFileSync('./content/result-sync.txt', first, {flag: 'a'});