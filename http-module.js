const http = require('http');
const port = 8080;
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('HOME PAGE');
    }
    if(req.url === '/about') {
        res.end('ABOUT');
    }
})

server.listen(port, ()=> {
    console.log(`Server running on http://localhost:${port}`);
});
