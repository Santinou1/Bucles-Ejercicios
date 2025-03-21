/* import calculadora from "calculador"
import generadorDeColorAleatorio from "randomcolor"

let suma = calculadora.add(2,2)
let resta=  calculadora.subtract(2,2)

console.log(suma)
console.log(resta)

const color = generadorDeColorAleatorio({
    count: 10,
    hue: 'green'
 });

console.log(color) */


import os from "os"

// Obtener la arquitectura de nuestro sistema.

console.log("Arquitectura del Sistema", os.arch())

// Obtener el nombre del sistema operativo

console.log("Nombre del sistema operativo", os.platform())

// Obtener informacion del procesador

console.log("Informacion del Procesador",os.cpus())

