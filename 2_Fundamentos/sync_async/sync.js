const fs = require("fs");

console.log("Inicio");

fs.writeFileSync("arquivo.tx", "oi");

console.log("fim");

// o fim é executado após a criação do arquivo
