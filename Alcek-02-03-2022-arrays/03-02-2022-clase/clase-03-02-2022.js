'use strict'
let userNumber1 = Number(prompt("Por favor ingrese un primer numero: "))
let userNumber2 = Number(prompt("Por favor ingrese un segundo numero: "))

console.log("El numero ingresado es: " + userNumber1)
console.log("El numero ingresado es: " + userNumber2)
document.write("El primer numero ingresado es: " + userNumber1 + "<br>")
document.write("El segundo numero ingresado es: " + userNumber2 + "<br>")

function suma(number1, number2) {
    return number1 + number2
}
console.log("la suma de ambos numeros es: " + suma(userNumber1, userNumber2))

function resta(number1, number2) {
    return number1 - number2
}
console.log("la resta de ambos numeros es: " + resta(userNumber1, userNumber2))

function multiplicacion(number1, number2) {
    return number1 * number2
}
console.log("la multiplicación de ambos numeros es: " + multiplicacion(userNumber1, userNumber2))

function division(number1, number2) {
    return number1 / number2
}
console.log("la división de ambos numeros es: " + division(userNumber1, userNumber2))

document.write("la suma de ambos numeros es: " + suma(userNumber1, userNumber2) + "<br>")
document.write("la resta de ambos numeros es: " + resta(userNumber1, userNumber2) + "<br>")
document.write("la multiplicación de ambos numeros es: " + multiplicacion(userNumber1, userNumber2) + "<br>")
document.write("la división de ambos numeros es: " + division(userNumber1, userNumber2) + "<br>")