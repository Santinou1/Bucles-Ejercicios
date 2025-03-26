//[]}{
const fakeDatabase = [
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
];

function getUsersFromDb() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fakeDatabase.length > 0) {
        resolve(fakeDatabase);
      } else {
        reject("No users found in the database.");
      }
    }, 2000);
  });
}

getUsersFromDb()
  .then((datosUsuarios) => {
    console.log("Usuarios obtenidos: ", datosUsuarios);
    return processUsers(datosUsuarios);
  })
  .catch((error) => {
    console.log("Error al obtener usuarios " + error);
  });
