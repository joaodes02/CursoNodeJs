const express = require("express");
const app = express();
const port = 3000;

const path = require("path");

const basePath = path.join(__dirname, "templates");

app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  // Resgatando usuario do banco de dados

  console.log(`Busncando pelo usuario: ${id}`);

  res.sendFile(`${basePath}/users.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
