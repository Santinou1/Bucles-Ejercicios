# Import y Export vs Require (CommonJS)

##  ¿Que son los modulos?

Un **Modulo** en Node.JS es simplemente un archivo que contiene codigo reutilizable. 
Los modulos permiten dividir el codigo en partes mas pequeñas y organizadas, facilitando su mantenimiento y reutilizacion.
En Lugar de escribir todo en un solo archivo, podemos dividir el codigo en mulitples archivos y luego importar SOLO si es necesario.

En javascript existen dos formas principales de manejar modulos: **CommonJS (CJS)** y **ECMAScript Modules (ESM)**

---

## CommonJS (require)

CommonJS es el sistema de modulos tradicional de Node.JS. Utiliza "require" para importar y "module.exports" para exportar.

### Analogia: Pedido de Pizza.

Pensemos en commonJS como pedir una pizza por telefono.
Llamas (require) y te entregan la pizza lista para comer (module.exports).

### Ejemplo en codigo.

**chef.js** (el que prepara la pizza)

```js
let pizza = "Pizza de Mozzarella"

module.exports = pizza // Estamos dejando la pizza preparada para exportarla
```

**cliente.js** (El "cliente" que pide la pizza)

```js
const comida = require("./chef")

console.log(comida)
```

### ECMAScript Modules (Import / Export)

Los modules ESM (ECMAScript modules) son la forma MODERNA de manejar los modulos en JS.

### Analogia : Supermercado

Pensa en ESM como ir al supermercado. 
Tomas solo los ingredientes que necesitas ("import") en lugar de recibir un plato completo ("require")

### Ejepmlo en codigo

**supermercado.js** 
```js
 const tomate= "Tomate fresco"
 const queso= "Queso gouda"


module.exports= {tomate,queso}
```

**cocinero.js** (Solamente utiliza el tomate)

```js
import {tomate} from "./supermercado.js" 

console.log(tomate)
```

**cocinero2.js** (Utiliza ambos ingredientes)

```js
import {queso,tomate} from "./supermercado.js"
console.log(queso,tomate)
```

## ¿Cual Usar?

SI estas trabajando en un proyecto antiguo tal vez es mejor utilizando paquetes basados en CJS (require), pero si estas utilizando un nuevo proyecto, es mejor utilizar ESM (Import/Export).

