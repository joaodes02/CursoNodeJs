const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

const usuario = {
  name: "João Victor",
  age: "21",
};

const auth = true;
const aprovado = false;

app.get("/dashboard", (req, res) => {
  const itens = ["item A", "Item B", "Item C"];

  res.render("dashboard", { itens });
});

app.get("/post", (req, res) => {
  const post = {
    title: "Aprendendo JS",
    Categoria: "JS",
    body: "Artigo para aprender sobre JS",
    comentarios: 4,
  };

  res.render("blogpost", { post });
});

app.get("/", (req, res) => {
  res.render("home", { usuario: usuario, auth, aprovado });
});

app.listen(3000, () => {
  console.log("App funcionando!");
});
