# Llamadas HTTP y Servidores

## ¿Que es HTTP?

HTTP (HyperText Transfer Protocol) es el protocolo que permite la comunicacion entre clientes ( como un navegador ) y un servidor en la web.

## Analogia : Carta y oficina de correos.

Imaginemos que nuestra computadora es una casa (CLIENTE) y el servidor es una oficina de correos que almacena informacion.
Cuando nosotros enviamos una carta (peticion HTTP), a la oficina (serivodr) la recibe, la procesa y nos envia una resputa.

## ¿Que es un servidor?

Un servidor es una computadora que almacena datos y servicios, como paginas web, imagenes videos.
Su trabajo es recibir solicitud de los clientes y responder con la informacion solicitada.

## Tipos de llamados HTTP

Las llamadas HTTP, tambien conocidos como metodos HTTP, indican que tipo de accion queremos realizar en el servidor.

### 1- **GET** -- Solicitar datos

- "Ir a un restaurante y pedir el menú"

### 2- **POST** -- Envia Datos

- "Llenar un formulario y enviarlo."

### 3- **PUT** -- Actualizar Datos

- "Actualizar la direccion en tu perfil"

### 4- **DELETE** -- Eliminar Datos.

- "Cancelar una Suscripcion"

## ¿Como funciona una peticion HTTP?

1- **Cliente** : "Quiero ver una pelicula en Netflix"
2- **Servidor** : "Aqui esta la pelicula" (Envia los datos)

## Estados de las respuestas HTTP.

Cuando un servidor responde, en respuesta incluye un codigo de estado que indica si la solicitud fue exitosa o no:

 - **200 OK** : Todo funciono perfecto
 - **201 Created** : Algo fue creado (Ej un usuario)
 - **304 Redireccion** : Nos redirecciona a algun lado
 - **400 Bad Request** : Error en la solicitud
 - **401 Unauthorized** : No tienes permisos
 - **404 Not Found** : No se encontro el recurso
 - **500 Internal Server Error**: Falla del servidor


## Conlcusion

Las llamadas HTTP permiten la comunicacion entre clientes y servidores en la web.
Al entender como funcionan, puedes desarrolar aplicacion web mas eficientes y robustas.
