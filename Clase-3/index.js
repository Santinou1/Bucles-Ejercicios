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





  