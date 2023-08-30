const http = require('http');

const server = http.createServer((req,res) => {
    
    if(req.url === '/') {
        res.end('Home page')
    }
    if(req.url === '/about') {
        // Blocking code
        for (let i = 0; i<100; i++) {
            for(let j = 0; j<100;j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('About Page')
    }
    // console.log(req);
    console.log(res.statusCode);
})

server.listen(8000, ()=> {
    console.log("Server is listening on port 8000...");
})