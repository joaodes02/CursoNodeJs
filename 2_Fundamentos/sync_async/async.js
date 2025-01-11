const fs = require("fs");

console.log("Inicio");

fs.writeFile("arquivo.tx", "oi", function (err) {
  setTimeout(function () {
    console.log("Arquivo Criado");
  }, 2000);
});

console.log("fim");
