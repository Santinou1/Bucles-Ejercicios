# Async / Await

## ¿Que es Async / Await?

"Async/Await" es una forma moedrna y mas prolija de manejar operacion asincronas en Javascript. 
Facilita la escritura y lectura del codigo en comparacion con los callbacks y las promesas encadenadas. (".then()" y ".catch()")


### Analogia de la vida real.

Imaginemos que pedimos una pizza por telefono.

El proceso seria el siguiente.

1- **Llamas a la Pizzeria** (Hacer una solicitud).
2- **Esperas** mientras preparan y entregan tu pizza.
3- **Mientras esperamos** podemos hacer otras tareas (Como poner la mesa, o ver una serie).
4- **Cunado llega la pizza**, la recibimos y la comemos.

Todo esto que comentamos recien es el concepto de Async / Await : en lugar de bloquear el codigo esperando una respuesta, podemos seguir ejecutando otras tareas hasat que la operacion asincrona finalice.


---

## Como funciona Async / Await

## 1 Funcion "Async"

Cualquier funcion que use "await" debe  ser declarada como "async". Esto significa que la funcion SIEMPRE devuelve una promesa.

```js
async function obtenerDatos(){
    return "datos obtenidos"
}

obtenerDatos.then(console.log)
```


## 2 Funcion "Await"

El opearador "await" hace que JavaScript espera hasta que una promesa se resuelva antes de continuar con la ejecucion del codigo.

```js

async function esperar(){
    console.log("Inicio")
    await new Promise(resolve=>setTimeout(resolve,2000))
    console.log("Despues de 2 segundos")
}


```

### Esperar usando Promesas y ".then()"

Podemos hacer lo mismo sin "async/await" , usando promesas encadenadas.

```js

function esperarConThen(){
    console.log("Inicio")
    new Promise(resolve=>setTimeout(resolve,2000))
    .then(()=>console.log("Despues de 2 segundos"))
}

```



