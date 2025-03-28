async function obtenerUsuarios(){
    try{
        let respuesta = await fetch('https://rickandmortyapi.com/api/character')
        let datos = await respuesta.json()
        console.log(datos)
    }
    catch (error){
        console.error("Error al obtener usuarios ", error)
    }
}

obtenerUsuarios()

async function obtenerUsuariosConThen(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(respuesta=>respuesta.json())
    .then(datos=>console.log(datos))
    .catch(error=> console.error("Error al obtener usuarios ", error))


}

//obtenerUsuariosConThen()