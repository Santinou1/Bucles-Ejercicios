# Promesas

## ¿Que es una Promesa?

Las promesas en JavaScript son una forma de manejar operaciones que toman tiempo en completarse, como pedir datos a un servidor, leer un archivo o esperar una respuesta del usuario.


### Analogia de la vida real.

Imaginemos que pedimos una pizza por telefono. Cuando colgamos, no tenemos la pizza inmediatamente, sino que tenemos que esperar a que la pizza llegue.
Entonces mientras esperamos a que llegue, podemos hacer otras cosas, como ver una serie, o limpiar la casa.

 - Promesa Pendiente (pending) : Mientras la pizza esta en camino, aun no sabemossi llegara a tiempo si habra un problema.

 - Promesa Resuelta (fullfilled): La pizza llego y la podes comer.

 - Promesa Rechazada (rejected): El repartidor se le rompio la moto y no va a poder enviarte la pizza.


```js
const pedirPizza = new Promise((resolve, reject) => {
  console.log("Pidiendo la pizza tutuutu");

  setTimeout(() => {
    let exito = Math.random() > 0.3;
    console.log(exito)
    if (exito) {
      resolve("La pizza llego");
    } else {
      reject("El repartidor no llego");
    }
  }, 3000);
});


pedirPizza
  .then((mensaje) => console.log("Perfectoo " + mensaje))
  .catch((error) => {
    console.log("Oh.." + error);
  })
  .finally(() => console.log("Promesa ejecutada"));
```

### Explicacion del codigo.


1- Se crea una promesa (new Promise) , que adentro de new promise tiene 2 funciones internas.
  -- resolve(): Se ejecuta cuando la operacion es exitosa
  -- reject(): Se ejecuta cuando hay un error

2- Usamos setTimeout() para simular el tiempo de espera.
3- .then(): Si la promesa se reseulve, se ejecuta lo que esta dentro.
4- .catch(): Si hay un error, se ejecuta lo que esta dentro.
5- finally(): Se ejecuta siempre, independientemente del resultado.


### Metodos de las promesas.

then() --> Maneja el exito.

```js

miPromesa.then((resultado)=> console.log("TODO SALIO BIEN, SE EJECUTO EL RESUTLADO " + resultado))

```


catch() --> Maneja los errores.

```js

miPromesa.then((error)=> console.log("Hubo un error, el error es " + resultado))

```

finally() --> Se ejecuta siempre.

```js

miPromesa.then((error)=> console.log("Finalizo el ciclo de promesas"))

```