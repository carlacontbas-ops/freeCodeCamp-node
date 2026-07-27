const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hola, soy Carla Contreras. Mi proyecto Node.js funciona correctamente.");
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en puerto ${PORT}`);
});