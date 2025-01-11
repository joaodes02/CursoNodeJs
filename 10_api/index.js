const express = require("express");
const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

//endpoints

app.post("/createproduct", (req, res) => {
  const name = req.body.name;
  const price = req.body.price;

  res.json({ message: `${name} ${price}` });
});

app.get("/", (req, res) => {
  res.json({ message: "Primeira rota" });
});

app.listen(3333);
