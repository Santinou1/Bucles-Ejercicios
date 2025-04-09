/*
Para encontrar los usuarios en la db usamos la palabra reservada ".find()".
.find() Nos trae todos los usuarios del modelo de Users.
 
*/

const User = require("./Models/user.model");
const connectDb = require("./config/database");

connectDb();

User.find()
  .then((users) => console.log("Usuarios encontrador " + users))
  .catch((error) => console.error + error);
