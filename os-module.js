const os = require('os');

// info about current user
const user = os.userInfo();

// method returns the system uptime in seconds
const upTime = os.uptime();

console.log(`System uptime: ${upTime}`);
console.log(`Total memory: ${os.totalmem()}`)
console.log(`Free memory: ${os.freemem()}`)

const currentOS = {
    name: os.type(),
    release: os.release(),
}

console.log(currentOS);