// Ejercicio del dia  de hoy.
//[]}{
// Mediante la DB brindada, realizar 2 funciones que nos permitan =
// Traer todos los usuarios.
// Traer un usuario unico.

const db = [
  {
    id: 1,
    name: "Juan Perez",
    age: 30,
  },
  {
    id: 2,
    name: "Maria Fernadez",
    age: 10,
  },
  {
    id: 3,
    name: "Santino Ursino",
    age: 20,
  },
  {
    id: 4,
    name: "Santino Ursino",
    age: 35,
  },
];

// Funcion para traer todos los usuarios.

function obtenerUsuarios() {
  return new Promise((resolve, reject) => {
    if (db.length > 0) {
      resolve(db);
    }
    else{
      reject("No tiene informacion la db")
    }
  });
}

obtenerUsuarios()
.then((datosUsuarios) => {
  const usuario= datosUsuarios.find(u=> u.id===1)
  console.log("Usuarios obtenidos: ", datosUsuarios);
  console.log("Usuario especifico obtenido : " , usuario)
})
.catch((error) => {
  console.log("Error al obtener usuarios " + error);
});

// Funcion para traer un usuario unico

/* function obtenerUsuarioUnico(id){
  return new Promise((resolve,reject)=>{
    const usuario= db.find(u=> u.id===id)
    if(usuario){
      resolve(usuario)
    }else{
      reject("No se encontro el usuario")
    }
  })
}

obtenerUsuarioUnico(2)
.then((usuarioUnico) => {
  console.log("Usuario obtenido: ", usuarioUnico);
})
.catch((error) => {
  console.log("Error al obtener usuarios " + error);
}); */
