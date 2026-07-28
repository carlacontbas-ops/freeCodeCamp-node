const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("Hello World");
  res.send("Hello World");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor funcionando en puerto ${PORT}`);
});