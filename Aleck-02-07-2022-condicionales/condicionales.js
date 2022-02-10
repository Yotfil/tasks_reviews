"use strict"

const userName = prompt("Escribe tu nombre por favor: ")
const userAge = Number(prompt("Escribe tu edad por favor: "))

console.log(userName, userAge)

if (userAge >= 18) {
    alert("Bienvenido al bar " + userName + " ten una feliz noche.")
}else{
    alert("Eres menor de edad " + userName + " no puedes entrar igual ten feliz noche.")
}

const userNameId = "Aleckjo"
const passwordId = "sibuenas"

const contraseña = prompt("Escribe tu contraseña: ")

if (contraseña == passwordId) {
    alert("Bienvenido")
}else{
    alert("Contraseña incorecta")
}



