var http = require('http')
var server = http.createServer((function (request, response) {
    response.writeHead(200,
        { "Content-Type": "text/plain" });
    response.end("Welcome to NodeJS\n");
}));
server.listen(3000);