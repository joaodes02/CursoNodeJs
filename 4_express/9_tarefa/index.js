const express = require("express");
const app = express();
const path = require("path");
const views = require("./views");

const port = 5000;

app.use(express.static("public"));

const basePath = path.join(__dirname, "templates");

app.use("/views", views);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/home.html`);
});

app.listen(port, () => {
  console.log(`Server rodando ${port}`);
});
