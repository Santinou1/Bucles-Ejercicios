import {sumar,sumarDe3Numeros} from "./operaciones-matematicas/sumar.js"
import {restar} from "./operaciones-matematicas/restar.js"
import {multiplicar} from "./operaciones-matematicas/multiplicar.js"
import {dividir} from "./operaciones-matematicas/dividir.js"
import {calculadoraInteres} from "./operaciones-matematicas/calculadoraFinanciera.js"

console.log(sumar(10,10))
console.log(sumarDe3Numeros(10,10,2))
console.log(restar(1,1))
console.log(multiplicar(1,7))
console.log(dividir(1,0))
console.log(calculadoraInteres(150,20,30,"simple"))