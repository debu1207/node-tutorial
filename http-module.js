const http = require('http');
const port = 8080;
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('HOME PAGE');
    }
    if(req.url === '/about') {
        res.end('ABOUT');
    }

    res.end(`
<h2>PAGE NOT FOUND!</h2>
<a href="/">Go back</a>`)
})

server.listen(port, ()=> {
    console.log(`Server running on http://localhost:${port}`);
});
