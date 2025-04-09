### Guia Facil y Explicada de MongoDB + Node

Tuviste alguna vez una libreta donde anotas los datos importantes de tus amigos?
Por ejemplo , nombre,edad,correo,etc. Bueno, MongoDB es como esa libreta, pero con superpoderes, es decir; Digital, Organizada y pensada para apps.

En este Readme, vamos a hablar sobre.

- Instalar MongoDB
- Conectarlo con una APP de Node
- Y Guardar , buscar, modificar y borrar datos.


### 1. Instalacion de MongoDB

1- Descargar MongoDB desde https://www.mongodb.com/try/download/community-kubernetes-operator

2- Durante la Instalacion, instalar todo.

### 2. Conectar MongoDB con NodeJS

#### Instala las herramientas necesarias.

```js
npm install moongose 
```

-Moongose: Como un asistente que te ayuda a hablar con MongoDB de forma mas clara.

Tenemos que crear un archivo para almacenar la configuracion de mongo.

En este repo, esta creado en la carpeta config/database.js

```js
const mongoose = require("mongoose")

const url = "mongodb://localhost:27017/miBaseDeDatos"

const connectDb= async () =>{
    try{
        await mongoose.connect(url)
        console.log("Conectado a mongo")
    }
    catch(error){
        console.error("ERROR A MONGO "+ error)
    }
}

 module.exports= connectDb
 ```

 Este archivo vendria a ser como prender una lampara para poder leer la libreta.

 ### 4. Modelos

 Imagina que tu libreta (MongoDB) es una hoja en blanco.
 Pero si vas a anotar muchos contactos, lo ideal es tener un formato fijo.

 Por ejepmlo

 -Nombre:
 -Edad:
 -Mail:

 Bueno eso es un modelo.

 Una plantilla o estructura que define como deben lucir los datos que vamos a guardar.

 En Mongoose, los modelos se crear a partir de algo llamado Schema (esquema). El Schema le dice a MongoDB.

 "Ey, cada documento de esta persona tiene que tener estas propiedades, con estos tipos de datos"

 ```js
 const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "El nombre es obligatorio"]
    },
    email:String,
    age: Number,
    colorFav:String
})

const User = mongoose.model("User", userSchema)

module.exports = User
```

#### ¿Que hace este modelo?

1- Define la estructura que debe seguir los datos de cada usuario.
2- Le da vida a la coleccion de MongoDB: Si tu base de datos se llama miBaseDeDatos, y usas el modelo User, MongoDB creara una coleccion llamda users.
3- Te permite usar metodos magicos con poderes como .find() , .save() etc,  sin que vos tengas que escribir consultas complicadas.
4- Cuando usamos "Required:true" hacemos referencia que ese campo es obligatorio!

##### Analogia.

Si MongoDB es una Biblioteca, 
y cada documento es un libro,
entonces el Modelo es el formato de ese libro: tapa,indice,capitulos, etc.
TRodos los libros de "Usuarios" siguen el mismo diseño: Nombre, Email, Edad

### 5 Crud

Supongamos que tenemos nuestro modelo User que representa a nuestros amigos.
Vas a ver como

#### 1- Guardar un nuevo Usuario (Agregar un amigo a tu libreta)

```js
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

```

#### 2- Leer todos los usuarios (Ver todos los amigos en tu libreta)

```js
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
```

#### 3- Buscar un usuario por ID (Buscar un amigo por su DNI)

```js
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
```

#### 4- Actualizar un Usuario (Cambiarle la edad a un amigo)

```js
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
```

#### 5- Eliminar un usuario (Borrar un amigo de la biblioteca)

```js
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
```


