# Introduccion a NPM y los paquetes de node.JS

## ¿Que es NPM?

npm (node package manager) es el gesto de paquetes de Node.js. 
Es como una tienda de aplicaciones, pero en lugar de aplicaciones completas, contiene pequeñas herramientas (paquetes) que podemos usar en nuestros proyectos.

## ¿Que es un paquete en Node.js?

Un paquete en node.js es un conjunto de archivos de codigo reutilizable que otros desarrolladores han creado para facilitar tareas especificas. Estos paquetes pueden ser librerias, frameworks o herramientas que ayudan a construir aplicaciones.

### Analogia con la vida real

Imaginate que vas a hacer una pizza. 
En lugar de hacer la masa desde cero, podes comprar una pre-pizza (masa ya hecha) y asi podes enfocarte en los ingredientes y en la coccion.

## Instalacion de npm y paquetes.

Para instalar un paquete, necesitas tener Node.JS instalado en tu PC, debido que NPM ya viene incluido con Node.js.

## Instalar un paquete.

Para instalar un paquete (por ejemplo, "calculador" https://www.npmjs.com/package/calculador?activeTab=readme), usamos el siguiente comando.

```sh
npm install calculador
```

Esto va a descargar y guardara el paquete en la carpeta "node_modules" de tu proyecto.


## SI VAMOS A USAR MODULOS AGREGAR ESTA LINEA EN EL PACKAGE.JSON

"type": "module"


{
  "name": "ejemplo-npm",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "calculador": "^1.0.2",
    "randomcolor": "^0.6.2"
  },
  "type": "module"
}
