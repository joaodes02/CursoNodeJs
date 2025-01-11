const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

const products = [
  {
    id: "1",
    title: "Livro",
    price: "2.89",
  },
  {
    id: "2",
    title: "Lampada",
    price: "3.00",
  },
  {
    id: "3",
    title: "Cadeira",
    price: "500",
  },
];

app.get("/", (req, res) => {
  res.render("home", { products });
});

app.get("/product/:id", (req, res) => {
  const product = products[parseInt(req.params.id) - 1];

  res.render("product", { product });
});

app.listen(3000, () => {
  console.log("Rodando porta 3000");
});
