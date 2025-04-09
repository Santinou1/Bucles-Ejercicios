/*
Para actualizar un usuario especifico de la db usamos la palabra reservada ".findByIdAndUpdate()".
.findByIdAndUpdate() Nos trae la informacion de ese id y ademas le pasamos por parametro los campos que queremos actualizar.
Le tenemos que pasar el id por parametro.

*/

const User = require("./Models/user.model");
const connectDb = require("./config/database");

connectDb();

const id = "67f5c4cad6cd2a860db46243";

User.findByIdAndUpdate(id,{email: ""} )
  .then((user) => console.log("Usuario Actualizado " + user))
  .catch((error) => console.log("El error que aparece es " + error));
