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

  if (!name) {
    res.status(422).json({ message: "o campo Nome não foi preenchido" });
    return;
  }

  res.status(201).json({ message: `${name} ${price}` });
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Primeira rota" });
});

app.listen(3333);
