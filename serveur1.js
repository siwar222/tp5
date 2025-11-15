// serveur1.js (version minimale)
//const http = require('http');

//const PORT = 8080;

///const server = http.createServer((req, res) => {
  //res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  //res.end('Bonjour');
//});

//server.listen(PORT, () => {
  //console.log(`Serveur démarré sur http://localhost:${PORT}`);
//});
const http = require('http');

// Récupérer le port passé en argument
const port = process.argv[2] || 3000;  // 3000 si aucun port n'est donné

const serveur = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Serveur Node.js en marche !");
});

serveur.listen(port, () => {
  console.log("Serveur démarré sur le port :", port);
});
