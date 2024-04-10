const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }

    if(req.url === '/about'){
        res.end('Welcome to our short history');
    }

    // res.write('Welcome to Node Example HomePage');
    // res.end();
    res.end(`
    <h1>Oops!</h1>
    <p>Cant seem to the page you are looking for</p>
    <a href ="/">back home</a>
    `);
})

server.listen(5001)