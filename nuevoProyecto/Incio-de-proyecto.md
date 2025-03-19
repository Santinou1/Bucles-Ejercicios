### Inicio de proyecto

Para iniciar un proyecto de Node.js, vamos a necesitar el "Package.json".

***Que es package.json***

El package.json es como nuestra cedula de identificacion personal de nuestro proyecto de node.js . Es  un archivo que contiene informacion clave sobre nuestra aplicacion, como el nombre, la version, las dependencias, scripts etc.


***Que contiene***

Dentro del package.json, podemos encontrar cosas como:

```js
{
    "name": "mi-primer-proyecto",
    "version": "1.0.0",
    "description": "Mi primer proyecto en node.js",
    "main" : "index.js",
    "scripts":{
        "start": "node index.js"
    },
    "dependencies":{
        "express": "4.18.1"
    }
}

```

***Analogia***

Pensemos que el package.json es como el menu de un restaurante.

 - El nombre y version serian el nombre del restaurante y su numero de sucursal.
 - Las dependencias son los ingredientes que necesita la cocina.
 - Los scripts son las recetas para preparar cada plato.


 ### Cuando se crea el package.json

 Se crea cuando iniciamos un nuevo proyecto en Node.js.

 Pasos para crear un proyecto DESDE CERO.

 Crear una carpeta para el proyecto.

 ```sh
 mkdir nuevoProyecto
 ```

 Nos movilizamos hacia esa carpeta

 ```sh
 cd nuevoProyecto
 ```

 Inicializamos el proyecto de Node.js

 ```sh
 npm init -y
 ```

 Instalar una dependencia.

 ```sh
 npm install express
 ```



 Listo!!!!



 #### Otra analogia.

 Crear un proyecto en Node.js es como empezar un nuevo negocio.

 - Primero conseguimos un local. (crear la carpeta)
 - Luego registramos la empresa. (npm init -y)
 - Despues compramos materiales y herramientas (npm install)
 - Y finalmente comenzamos a operar (node index.js)