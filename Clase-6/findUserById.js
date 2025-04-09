/*
Para encontrar un usuario especifico de la db usamos la palabra reservada ".findById()".
.findById() Nos trae la informacion de ese id.
Le tenemos que pasar el id por parametro.

*/

const User = require("./Models/user.model");
const connectDb = require("./config/database");

connectDb();

const id = "67f5c4cad6cd2a860db46243";

User.findById(id)
  .then((user) => console.log("Usuario Encontrado : " + user))
  .catch((error) => console.error("Error encontrado " + error));
