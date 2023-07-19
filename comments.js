// Create web server
// Run: node comments.js
// Load in browser: http://localhost:3000

var http = require('http');
var fs = require('fs');

// Create server
var server = http.createServer(function(req, res) {

    // Check URL
    if (req.url === '/' || req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if (req.url === '/api/comments') {
        var comments = [
            { name: 'John', comment: 'Hello' },
            { name: 'Mary', comment: 'Hi' },
            { name: 'Sue', comment: 'Howdy' }
        ];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(comments));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }

});

// Listen port
server.listen(3000);
