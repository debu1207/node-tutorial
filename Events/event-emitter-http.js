const http = require('http');
// const server = http.createServer((req, res) => {
//     res.end('Welcome');
// })

// using Event-emitter API
const server = http.createServer()
// emits request event
// subscribe to it / listen to it / respond to it
server.on('request', (req, res) => {
    res.end('welcome');
})

server.listen(8000, () => {
    console.log("Server is running on port 8000")
});