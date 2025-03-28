# API (Application Programming Interface)

## ¿Que es una API?

Una API es un conjunto de reglas y herramientas que permite que dos aplicaciones se comuniquen entre si.
Basicamente es un puente que conecta diferentes sistemas para intercambiar informacion.

## Analogia: Restaurante y el Mesero.

Imagina que estas en un restaurante:
- **Tu** (El cliente) lees el menu y decides que ordenar.
- **El Mesero** (API) lleva tu peiddo a la cocina.
- **La cocina** (Servidor) prepara tu comida y se la da al mesero.
- **El mesero** Te trae la comida.

En este caso, la API es el "mesero" que permite la comunicacion entre el cliente y el servidor sin que el cliente tenga que preocuparse por como se prepara la comida.


## Tipos de API

Existen diferentes tipos de APIs

### 1 **APIs Publicas** (Open Apis)

- Son accesibles para cualquier desarrollador.
- Ejemplo: Api de Rick and Morty.

### 2 **APIs Privadas** 
- Solo pueden ser usadas dentro de una organizacion.
- Ejemplo : Api interna de una empresa para gestionar usuarios.

### 3 **APIs de Socios**

- Requieren permisos especiales para ser usadas.
- Ejemplo: Api de Paypal para procesar pagos en una tienda online.


### 4 **APIs Rest y SOAP

- **REST** : Utiliza HTTP y devuelve los datos en formato JSON o XML.
- **SOAP** : Usa XML y es mas estricto en su estructura.

### Ejemplo de una API REST (Peticion GET)

```http
GET https://rickandmortyapi.com/api/character
```

Respuesta:
```js
[
{
  info: {
    count: 826,
    pages: 42,
    next: 'https://rickandmortyapi.com/api/character?page=2',
    prev: null
  },
  results: [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: [Object],
      location: [Object],
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      episode: [Array],
      url: 'https://rickandmortyapi.com/api/character/1',
      created: '2017-11-04T18:48:46.250Z'
    },
    {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: [Object],
      location: [Object],
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      episode: [Array],
      url: 'https://rickandmortyapi.com/api/character/2',
      created: '2017-11-04T18:50:21.651Z'
    },
    {
      id: 3,
      name: 'Summer Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Female',
      origin: [Object],
      location: [Object],
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      episode: [Array],
      url: 'https://rickandmortyapi.com/api/character/3',
      created: '2017-11-04T19:09:56.428Z'
    },
    {
      id: 4,
      name: 'Beth Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Female',
      origin: [Object],
      location: [Object],
      image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
      episode: [Array],
      url: 'https://rickandmortyapi.com/api/character/4',
      created: '2017-11-04T19:22:43.665Z'
    },
    {
      id: 5,
      name: 'Jerry Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: [Object],
      location: [Object],
      image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
      episode: [Array],
      url: 'https://rickandmortyapi.com/api/character/5',
      created: '2017-11-04T19:26:56.301Z'
    },
    {
      id: 6,
      name: 'Abadango Cluster Princess',
      status: 'Alive',
      species: 'Alien',
      type: '',
      gender: 'Female',
      origin: [Object],
      location: [Object],
      image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
      episode: [Array],
      url: 'https://rickandmortyapi.com/api/character/6',
      created: '2017-11-04T19:50:28.250Z'
    },
    {
      id: 7,
      name: 'Abradolf Lincler',
      status: 'unknown',
      species: 'Human',
      type: 'Genetic experiment',
      gender: 'Male',
      origin: [Object],
      location: [Object],
      image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
      episode: [Array],
      url: 'https://rickandmortyapi.com/api/character/7',
      created: '2017-11-04T19:59:20.523Z'
    },
    {
      id: 8,
      name: 'Adjudicator Rick',
      status: 'Dead',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: [Object],
      location: [Object],
      image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
      episode: [Array],
      url: 'https://rickandmortyapi.com/api/character/8',
      created: '2017-11-04T20:03:34.737Z'
    },
    {
      id: 9,
      name: 'Agency Director',
      status: 'Dead',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: [Object],
      location: [Object],
      image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
      episode: [Array],
      url: 'https://rickandmortyapi.com/api/character/9',
      created: '2017-11-04T20:06:54.976Z'
    },
    {
      id: 10,
      name: 'Alan Rails',
      status: 'Dead',
      species: 'Human',
      type: 'Superhuman (Ghost trains summoner)',
      gender: 'Male',
      origin: [Object],
      location: [Object],
      image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
      episode: [Array],
      url: 'https://rickandmortyapi.com/api/character/10',
      created: '2017-11-04T20:19:09.017Z'
    },
    {
      id: 11,
      name: 'Albert Einstein',
      status: 'Dead',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: [Object],
      location: [Object],
      image: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
      episode: [Array],
      url: 'https://rickandmortyapi.com/api/character/11',
      created: '2017-11-04T20:20:20.965Z'
    },
    {
      id: 12,
      name: 'Alexander',
      status: 'Dead',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: [Object],
      location: [Object],
      image: 'https://rickandmortyapi.com/api/character/avatar/12.jpeg',
      episode: [Array],
      url: 'https://rickandmortyapi.com/api/character/12',
      created: '2017-11-04T20:32:33.144Z'
    },
    {
      id: 13,
      name: 'Alien Googah',
      status: 'unknown',
      species: 'Alien',
      type: '',
      gender: 'unknown',
      origin: [Object],
      location: [Object],
      image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
      episode: [Array],
      url: 'https://rickandmortyapi.com/api/character/13',
      created: '2017-11-04T20:33:30.779Z'
    },
    {
      id: 14,
      name: 'Alien Morty',
      status: 'unknown',
      species: 'Alien',
      type: '',
      gender: 'Male',
      origin: [Object],
      location: [Object],
      image: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
      episode: [Array],
      url: 'https://rickandmortyapi.com/api/character/14',
      created: '2017-11-04T20:51:31.373Z'
    },
    {
      id: 15,
      name: 'Alien Rick',
      status: 'unknown',
      species: 'Alien',
      type: '',
      gender: 'Male',
      origin: [Object],
      location: [Object],
      image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
      episode: [Array],
      url: 'https://rickandmortyapi.com/api/character/15',
      created: '2017-11-04T20:56:13.215Z'
    },
    {
      id: 16,
      name: 'Amish Cyborg',
      status: 'Dead',
      species: 'Alien',
      type: 'Parasite',
      gender: 'Male',
      origin: [Object],
      location: [Object],
      image: 'https://rickandmortyapi.com/api/character/avatar/16.jpeg',
      episode: [Array],
      url: 'https://rickandmortyapi.com/api/character/16',
      created: '2017-11-04T21:12:45.235Z'
    },
    {
      id: 17,
      name: 'Annie',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Female',
      origin: [Object],
      location: [Object],
      image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg',
      episode: [Array],
      url: 'https://rickandmortyapi.com/api/character/17',
      created: '2017-11-04T22:21:24.481Z'
    },
    {
      id: 18,
      name: 'Antenna Morty',
      status: 'Alive',
      species: 'Human',
      type: 'Human with antennae',
      gender: 'Male',
      origin: [Object],
      location: [Object],
      image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg',
      episode: [Array],
      url: 'https://rickandmortyapi.com/api/character/18',
      created: '2017-11-04T22:25:29.008Z'
    },
    {
      id: 19,
      name: 'Antenna Rick',
      status: 'unknown',
      species: 'Human',
      type: 'Human with antennae',
      gender: 'Male',
      origin: [Object],
      location: [Object],
      image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
      episode: [Array],
      url: 'https://rickandmortyapi.com/api/character/19',
      created: '2017-11-04T22:28:13.756Z'
    },
    {
      id: 20,
      name: 'Ants in my Eyes Johnson',
      status: 'unknown',
      species: 'Human',
      type: 'Human with ants in his eyes',
      gender: 'Male',
      origin: [Object],
      location: [Object],
      image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
      episode: [Array],
      url: 'https://rickandmortyapi.com/api/character/20',
      created: '2017-11-04T22:34:53.659Z'
    }
  ]
}
]
```


## Autenticacion en APIs.

Algunas APIs requiren autenticacion para asegurar que solo usuarios autorizados accedan a los datos.

- **API KEY**: Una clave unica de acceso.
- **OAuth** : Un protocolo de autorizacion mas seguro.

## Beneficios de las Apis.

- Facilitan la Integracion entre aplicaciones.
- Ahorran tiempo y esfuerzo en desarrollo.
- Permiten reutilizar funcionalidades existentes.
- Mejoran la interoperabilidad entre sistemas.

## Conclusion
Las APIs son esenciales para el desarrolo de software moderno, permitiendo que aplicaciones y servicios interactuen de manera eficiente y segura.
Conocer su funcionamiento te permitira crear sistemas mas dinamicos y contectados.