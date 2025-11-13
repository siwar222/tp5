const fs = require('fs'); // 1. Import du module

console.log("Reading file, please wait..."); // 2. Message d'attente

// 3. Lire le fichier data.txt
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Erreur :", err);
        return;
    }
    console.log("Contenu du fichier :");
    console.log(data);
});
