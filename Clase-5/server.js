const http = require("http");
const { usuarios, saludar } = require("./services");

const server = http.createServer((request, response) => {
  console.log(response);
  if (request.method === "GET" && request.url === "/usuarios") {
    response.writeHead(202, {
      "Content-Type": "application/json",
      Texto: "hola",
    });
    response.end(JSON.stringify(usuarios));
  } else if (request.method === "GET" && request.url === "/usuarios/santino") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(saludar());
  } else if (request.method === "GET" && request.url === "/tareas") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end("Estas en el endpoint de Tareas");
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Ruta no encontrada");
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Escuchando el servidor http://localhost:${PORT}/`);
});
