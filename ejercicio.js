// Ejercicio 1 = Mostrar todos los años cumplidos hasta la edad ingresada.

let anioDeNacimiento = parseInt(prompt("Ingrese su año de nacimiento"));
let anioActual = 2024;

for (let i = anioDeNacimiento; i <= anioActual; i++) {
  console.log(i);
}


let altura = parseInt(
  prompt("Ingrese un numero entero para la altura del triangulo")
);
let linea = "";

if (altura <= 10) {
  for (let i = 1; i <= altura; i++) {
    linea += "*";
    console.log(linea);
  }
} else {
  console.error("El limite de la altura es 10");
}

// Ejercicio 3 = Pedir contraseña hasta que sea correcta.

let pass = "123";
let input = null;

let oportunidades = 0;
let maxOportunidades = 3;

while (oportunidades !== maxOportunidades && input !== pass) {
  input = prompt("Ingresa la contraseña");
  oportunidades++;
  if (input != pass) {
    console.error("Contraseña incorrecta, vuleve a intentar.");
  } else {
    console.log("Contraseña correcta");
  }
}


// Ejercicio 4 = Contar hasta el numero ingresado por el usuario.

let conteo= parseInt(prompt("Ingrese un numero entero para el conteo"))

for(let i = 1 ; i<= conteo; i++){
    console.log(i)
}

// Ejercicio 5 = Consologear una cuenta regresiva desde un numero ingresado.


let cuentaRegresiva= parseInt(prompt("Ingrese un numero entero para la cuenta regresiva"))

for(let i= cuentaRegresiva; i>=0 ; i--){
    console.log(i)
}

// Ejercicio 6 = Pedir numeros hasta que el usuario ingrese 0 y calcular la suma total usando while

let suma= 0
let numeroIngresado= parseInt(prompt("Ingrese un numero (0 para terminar)"))

while(numeroIngresado!==0){
    console.log(suma+=numeroIngresado)
    numeroIngresado= parseInt(prompt("Ingrese otro numero (0 para terminar)"))
}
console.log("La suma total de los numeros ingresados es = ", suma)

// Ejercicio 7 = Mostrar los numeros pares HASTA el numero ingresado.

let numPares= parseInt(prompt("Ingrese un numero entero para mostrar los numeros pares hasta el."))

for (let i = 2; i <= numPares; i+=2) {
  console.log(i)
}

// Ejercicio 8 = Genearar una tabla de multiplicar de un numero ingresado

let numTabla = parseInt(prompt("Ingrese un numero entero para mostrar su tabla de multiplicar."))

for(let i=1; i<= 10; i++){
  console.log(numTabla + " x" + i + " = " + (numTabla*i))
}



