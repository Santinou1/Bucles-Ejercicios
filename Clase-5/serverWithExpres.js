const express = require("express");
const { usuarios, saludar } = require("./services");
const app = express();

app.get("/usuarios", (req, res) => {
  res.status(200).json(usuarios);
});

app.get("/saludar", (req, res) => {
  res.status(200).send(saludar());
});

app.get("/", (req, res) => {
  res.status(200).send("Hola Mundo desde Express");
});

app.use((req, res) => {
  res.status(404).send("Ruta No Existe");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Escuchando el servidor http://localhost:${PORT}/`);
});
