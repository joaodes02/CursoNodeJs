const path = require("path");

// path absoluto

console.log(path.resolve("text.txt"));

// formar path

const midFolder = "relatorios";
const fileName = "joaovictor.pdf";
const finalPath = path.join("/", "arquivos", midFolder, fileName);

// --------

customPath = "/aulas/joaovictor/aula1.pdf";

console.log(path.dirname(finalPath));
console.log(path.basename(finalPath));
console.log(path.extname(finalPath));
