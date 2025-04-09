/*
Para crear un  usuario vamos a utilizar la palabra reservada ".insertMany()".
.insertMany() guarda un array de usuarios en la base de daots.
 
*/

const User = require("./Models/user.model");
const connectDb = require("./config/database");

connectDb();

const userArrays = [
  { name: "Melina", email: "melinacontreras@gmail.com", age: 19 },
  { name: "Juan", email: "juan@gmail.com", age: 19 },
  { name: "Lilian", email: "lilian@gmail.com", age: 19 },
];

User.insertMany(userArrays)
  .then((result) => {
    console.log("Usuarios Guardados " + result);
  })
  .catch((error) => {
    console.error("Error al guardar usuarios " + error);
  });
