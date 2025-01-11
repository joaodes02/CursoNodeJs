const fs = require("fs");
const http = require("http");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  const filename = q.pathname.substring(1);
  if (filename.includes("html")) {
    if (fs.existsSync(filename)) {
      fs.readFile(filename, (err, data) => {
        res.writeHead(200, "contenty-type", "text/html");
        res.write(data);
        res.end();
      });
    } else {
      fs.readFile("404.html", (err, data) => {
        res.writeHead(404, "contenty-type", "text/html");
        res.write(data);
        res.end();
      });
    }
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
