const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

const usuario = {
  name: "João Victor",
  age: "21",
};

app.get("/", (req, res) => {
  res.render("home", { usuario: usuario });
});

app.listen(3000, () => {
  console.log("App funcionando!");
});
