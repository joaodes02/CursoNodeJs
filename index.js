const express = require("express");
const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

//endpoints

app.get("/", (req, res) => {
  res.json({ message: "Primeira rota" });
});

app.listen(3333);
