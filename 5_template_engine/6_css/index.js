const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const hbs = exphbs.create({
  partialsDir: "views/partials",
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"));

const usuario = {
  name: "João Victor",
  age: "21",
};

const auth = true;
const aprovado = true;

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

app.get("/blog", (req, res) => {
  const posts = [
    {
      title: "Aprendendo JS",
      Categoria: "JS",
      body: "Artigo para aprender sobre JS",
      comentarios: 4,
    },
    {
      title: "Aprendendo PHP",
      Categoria: "PHP",
      body: "Artigo para aprender sobre PHP",
      comentarios: 4,
    },
    {
      title: "Aprendendo C#",
      Categoria: "C#",
      body: "Artigo para aprender sobre C#",
      comentarios: 4,
    },
  ];
  res.render("blog", { posts });
});

app.get("/", (req, res) => {
  res.render("home", { usuario: usuario, auth, aprovado });
});

app.listen(3000, () => {
  console.log("App funcionando!");
});
