const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Erreur interne du serveur.");
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    });
});

server.listen(port, () => {
    console.log("Serveur HTML démarré sur le port :", port);
});
