### Llamando a una API con Async/Await

Veamos como obtener datos de una API usando "fetch" y "async/await"

```js

async function obtenerUsuarios(){
    try{
        let respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
        let datos = await respuesta.json()
        console.log(datos)
    }
    catch (error){
        console.error("Error al obtener usuarios ", error)
    }
}

obtenerUsuarios()

```

### Llamando a una API con ".then()"

Veamos como obtener datos de una API usando "fetch" y ".then()"

```js

async function obtenerUsuariosConThen(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(respuesta=>respuesta.json())
    .then(datos=>console.log(datos))
    .catch(error=> console.error("Error al obtener usuarios ", error))


}

obtenerUsuariosConThen()

```



