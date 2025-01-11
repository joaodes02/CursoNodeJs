const http = require("http");
const fs = require("fs");

const port = 7000;

const server = http.createServer((req, res) => {
  fs.readFile("mensagem.html", (err, data) => {
    res.writeHead(200, "contenty-type", "text/html");
    res.write(data);
    res.end();
  });
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
