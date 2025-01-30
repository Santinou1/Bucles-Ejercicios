# README - Explicación de Ejercicios en JavaScript

Este documento explica detalladamente cada ejercicio del código proporcionado, sus propósitos y qué ocurriría si se realizaran ciertos cambios. Está diseñado para que cualquier persona, independientemente de su nivel de experiencia en programación, pueda comprenderlo.

---

## Ejercicio 1: Mostrar todos los años cumplidos desde el año de nacimiento

### Explicación
- Se pide al usuario que ingrese su año de nacimiento.
- Se obtiene el año actual con new Date().getFullYear().
- Se utiliza un bucle for para recorrer desde el año de nacimiento hasta el año actual e imprimir cada año en la consola.

### Ejemplo
Si el usuario ingresa 2000 y estamos en 2025, el programa imprimirá:

2000
2001
...
2025


---

## Ejercicio 2: Triángulo rectángulo

### Explicación
- Se solicita un número entero al usuario como altura del triángulo.
- Se usa un bucle for para construir una cadena de * de forma progresiva.
- Cada iteración agrega un * a la línea y la imprime.

### Ejemplo
Si el usuario ingresa 5, la salida sería:

*
**
***
****
*****


---

## Ejercicio 3: Pedir contraseña hasta que sea correcta (3 intentos máximo)

### Explicación
- Se define una contraseña preestablecida ("123").
- Se usa un bucle while que permite hasta 3 intentos.
- Si el usuario ingresa la contraseña correcta, se muestra un mensaje y se detiene.
- Si falla 3 veces, se indica que alcanzó el límite de intentos.

### Ejemplo
#### Entrada:

Usuario ingresa: "abc"
Usuario ingresa: "456"
Usuario ingresa: "123"

#### Salida:

Contraseña correcta

Si fallara 3 veces:

Máximo de intentos alcanzado


---

## Ejercicio 4: Contar hasta un número ingresado

### Explicación
- Se solicita un número entero al usuario.
- Se usa un bucle for para imprimir todos los números desde 1 hasta el ingresado.

### Ejemplo
Si el usuario ingresa 4, la salida sería:

1
2
3
4


---

## Ejercicio 5: Cuenta regresiva

### Explicación
- Se pide un número entero.
- Se usa un bucle for para imprimir una cuenta regresiva desde ese número hasta 0.

### Ejemplo
Si el usuario ingresa 3, la salida sería:

3
2
1
0


---

## Ejercicio 6: Sumar números hasta que el usuario ingrese 0

### Explicación
- Se inicia suma en 0.
- Se usa un while para seguir solicitando números y sumarlos.
- El ciclo se detiene cuando el usuario ingresa 0.

### Ejemplo
#### Entrada:

Usuario ingresa: 5
Usuario ingresa: 3
Usuario ingresa: 0

#### Salida:

La suma total de los números ingresados es: 8


### Qué ocurre si no se vuelve a pedir la variable en el while
Si eliminamos esta línea dentro del while:
js
numeroIngresado = parseInt(prompt("Ingrese otro número (0 para terminar):"));

El bucle se volvería infinito, porque numeroIngresado nunca cambiaría y seguiría teniendo el primer valor ingresado, lo que haría que el programa nunca terminara.

---

## Ejercicio 7: Mostrar números pares hasta un número ingresado

### Explicación
- Se pide un número entero.
- Se usa un for para recorrer desde 2 hasta el número ingresado, sumando de 2 en 2.

### Ejemplo
Si el usuario ingresa 10, la salida sería:

2
4
6
8
10


---

## Ejercicio 8: Tabla de multiplicar

### Explicación
- Se solicita un número entero.
- Se usa un bucle for para multiplicarlo por los números del 1 al 10 y mostrar los resultados.

### Ejemplo
Si el usuario ingresa 3, la salida sería:

3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
...
3 x 10 = 30


---

