const fs = require("fs");
const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  const urlInfo = require("url").parse(req.url, true);
  const name = urlInfo.query.name;

  if (!name) {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, "contenty-type", "text/html");
      res.write(data);
      res.end();
    });
  } else {
    fs.writeFile("arquivo.txt", name, function (err, data) {
      res.writeHead(302, {
        location: "/",
      });
      return res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
