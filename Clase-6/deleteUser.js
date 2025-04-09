/*
Para eliminar un usuario especifico de la db usamos la palabra reservada ".findByIdAndDelete()".
.findByIdAndDelete() nos elimina el usuario con el id especificado.
Le tenemos que pasar el id por parametro.

*/

const User = require("./Models/user.model");
const connectDb = require("./config/database");

connectDb();

const id = "67f5bece9658fba7320223e7";

User.findByIdAndDelete(id)
.then(()=>console.log("Usuario Eliminado"))
.catch(err=>console.log("Hubo un error ")+ err )
