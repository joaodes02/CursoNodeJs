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
  res.render("dashboard");
});

app.get("/", (req, res) => {
  res.render("home", { usuario: usuario, auth, aprovado });
});

app.listen(3000, () => {
  console.log("App funcionando!");
});
