const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile("index.html", (err, html) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(html);
            res.end;
        })
    } else if (req.url === "/about") {
        fs.readFile("about.html", (err, html) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(html);
            res.end;
        })
    } else if (req.url === "/contact") {
        fs.readFile("contact-me.html", (err, html) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(html);
            res.end;
        })
    } else {
        fs.readFile("404.html", (err, html) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(html);
            res.end;
        })
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});