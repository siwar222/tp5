// serveur2.js
const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const PORT = 3000;
const FILE_PATH = path.join(__dirname, 'message.txt');

const server = http.createServer(async (req, res) => {
  try {
    const data = await fs.readFile(FILE_PATH, 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Fichier non trouvé (404)');
    } else {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Erreur serveur (500)');
    }
  }
});

server.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
