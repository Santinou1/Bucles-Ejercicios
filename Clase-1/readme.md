# Clase 1

# Introduccion a Node.JS

Node.js Es un entorno de ejecucion para JavaScript, que permite ejecutar codigo fuera del navegaodr. Esta basado en el motor V8 de Google Chrome y se usa mucho para construir aplicacion de servidor eficientes y escalables.

---

## Event Loop en Node.JS

Node.js es de un solo hilo (single-threaded) y usa un modelo de ejecucion basado en eventos. 
La clave de su eficiencia es el **Event Loop*, que maneja las operacionas ASINCRONAS sin bloquear la ejecucion del programa.

### Analogia con la vida real.

Imaginemonos que somos cocineros en un restaurante.

- Si trabajas de forma "sincrona", cocinas un plato a la vez. No podes empezar otro hasta que termines el anterior.
- Si trabajas de forma "Asincrona", mientras esperamos que el agua hierva, podemos empezar a picar los ingredientes de otro plato. De esta manera , lo que estamos haciendo es aprovechar el tiempo y servir los pedidos mas rapidos..


El **Event Loop** en Node.JS funcinoa de manera similar: Maneja multiples tareas sin bloquear la ejecucion del programa.

---

Diferencias entre codigo sincrono y asincrono.

### Codigo Sincrono.

El codigo se ejecuta linea por linea, bloqueando la ejecucion hasta que una tarea termine.

```js


console.log("Inicio")

for (let i = 0; i <= 5; i++) {
   console.log(i)
    
}


console.log("Fin")

```

**Ejemplo en la vida real**

Es como hacer una fila en un banco. No puedes ser atendido hasta que la persona antes de ti termine.

---


### Codigo Asincrono.

Permite que cieras operaciones se ejecuten en un segundo plano mientras el resto del codigo se sigue ejecuntando.

```js

console.log("Inicio")

setTimeout(()=>{
    console.log("Esto se ejecuta cuando termine los 5 segundos")
},5000)

console.log("Fin")
```

**Ejemplo en la vida real**

Es como pedir una pizza a domicilio. No te qeudas parado esperando el repartidor, sino que sigues haciendo cosas hasta que llega la comida a tu domicilio.

--

## Conclusion

-- **Node.js** Es eficiente porque usa un modeo basado en eventos y un solo hilo.
-- **El Event Loop** Permite manejar tareas asincronas sin bloquear la ejecucion.
-- **El codigo Sincrono** Bloquea la ejecucion hasta que una tarea termina.
-- **El codigo Asincrono** Permite manejar multiples tareas en paralelo. 