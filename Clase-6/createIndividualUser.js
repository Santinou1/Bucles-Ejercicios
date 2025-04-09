/*
Para crear un SOLO usuario vamos a utilizar la palabra reservada ".save()".
.save() guarda un SOLO DOCUMENTO en la base de daots.
 
*/

const User = require("./Models/user.model");
const connectDb = require("./config/database");

connectDb();


const usuarioACrear = {
  name: "Santino Ursino",
  email: "santino@gmail.com",
  age: 22,
};

const usuarioACrear2 = {
    name: "Bautista Pietraroia",
    email: "bauti@gmail.com",
    age: 22,
    colorFav:"Red",
    foodFav:"fideos"
  };
  
const usuarioACrear3 = {
    name: "Monica Ruiz",
    email: "monica@gmail.com",
    age: 30,
  };
  
  const usuarioACrear4 = {
    name: "diana",
    email: "Diana@gmail.com",
    age: 22,
  };
const guardandoUsuarios = new User(usuarioACrear4);

// Guardarlos en la base de datos.

guardandoUsuarios
  .save()
  .then(() => console.log("Usuario guardado"))
  .catch((err) => console.error("Error al guardar usuaroi " + err));
