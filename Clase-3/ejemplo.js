function obtenerUsuarios() {
  return new Promise((resolve) => {
    let usuariosDB={ id: 1, nombre: "Juan" }
    resolve(usuariosDB);
  });
}

function obtenerPedidos(usuario) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Pedido 1", "Pedido 2"]);
    }, 1000);
  });
}



obtenerUsuarios()
  .then((usuario) => {
    console.log("Usuario obtenido: " + usuario.nombre);
    return obtenerPedidos(usuario);
  })
  .then((pedidos) => {
    console.log("Pedidos del usuario: " + pedidos.join(","));
  })
  .catch((error) => {
    console.log("El error es : " + error);
  })
  .finally(() => {
    console.log("Ciclo finalizado");
  });

