const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

const conn = require("./db/conn").run;

const productsRoutes = require("./routes/productsRoutes");

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static("public"));

app.use("/products", productsRoutes);

app.listen(3000);
