"use strict"

let userName = prompt("Escribe tu nombre por favor: ")
let userAge = Number(prompt("Escribe tu edad por favor: "))
let userGender = prompt("por favor dinos si eres Hombre o Mujer: ")

console.log(userName, userAge, userGender)

if (userAge >= 18) {
    if (userAge <= 50 && userGender == "Mujer") {
        alert(userName + " tienes " + userAge + " años, eres bienvenida, tienes tragos gratis")
    } else if (userAge <= 50 && userGender == "Hombre") {
        alert(userName + " tienes " + userAge + " años, eres bienvenido... pero despues de las 10 jajaja")
    } else if (userAge > 50 && userGender == "Mujer") {
        alert(userName + " tienes " + userAge + " años, ya estas jugando tiempo extra señorita vete a casa")
    } else if (userAge > 50 && userGender == "Hombre") {
        alert(userName + " tienes " + userAge + " años, ya estas jugando tiempo extra viejo vete a casa")
    } else if (userAge < 18 && userGender == "Mujer") {
        alert(userName + " tienes " + userAge + " años, estas muy joven chiquilla... a dormir")
    } else if (userAge < 18 && userGender == "Hombre") {
        alert(userName + " tienes " + userAge + " años, estas muy joven chiquillo... a dormir")
    } else {
        alert("pon datos valido")
    }
}

// if (userAge >= 18) {
//     if (userAge <= 50 && userGender === Mujer) {
//         alert(userName + " tienes " + userAge + " años, eres bienvenida, tienes tragos gratis")
//     } else if (userAge > 50) {
//         alert(userName + " tienes " + userAge + " años, ya estas jugando tiempo extra vete a casa")
//     if (userAge <= 50 && userGender === Hombre) {
//         alert(userName + " tienes " + userAge + " años, eres bienvenido... pero despues de las 10 jajaja")
//     } else if (userAge > 50) {
//         alert(userName + " tienes " + userAge + " años, ya estas jugando tiempo extra vete a casa")
//     }
// } else if (userAge < 18) {
//     alert(userName + " tienes " + userAge + " años, estas muy joven... a dormir")
// }
// }



// if (userAge >= 18) {
//     if (userAge <= 50) {
//         alert(userName + " tienes " + userAge + " años, eres bienvenido.")
//     } else if (userAge > 50) {
//         alert(userName + " tienes " + userAge + " años, ya estas jugando tiempo extra vete a casa")
//     }
// } else if (userAge < 18) {
//     alert(userName + " tienes " + userAge + " años, estas muy joven... a dormir")
// }