const express = require("express");
const { usuarios, saludar } = require("./services");
const app = express();


app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.get("/saludar", (req, res) => {
  res.send(saludar())
});

app.use((req, res) => {
  res.send("holaa prueba 3");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Escuchando el servidor http://localhost:${PORT}/`);
});
