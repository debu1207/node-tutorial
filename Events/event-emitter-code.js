const eventEmitter = require('events');

const customEmitter = new eventEmitter();

customEmitter.on('response', () => {
    console.log('data recieved.');
})

customEmitter.on('print-name', (name, age) => {
    console.log(`${name} is ${age} years old.`);
})

customEmitter.emit('print-name', 'Debu Patra', 23);