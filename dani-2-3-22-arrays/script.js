/* 1 */
 
let programmingLenguages = ["C", "C++", "C#", "Java", "Python", "JavaScript"]

console.log(programmingLenguages)

let artStyles = ["Pop Art", "Surrealism", "Contemporary", "Fantasy", "Impressionist", "Cubism"]

console.log(artStyles)

let popularGames = ["League of Legends", "Osu!", "Apex", "Call of Duty", "Genshin Impact"]

console.log(popularGames)

/* 2 */

const user1 ={
    name: "Daniel",
    lastName: "Torres",
    age: 23,
    single: true,
    skills: ["Illustrator", "Photoshop", "HTML", "CSS", "JavaScript"],
    mother: {
        name: "Giomara",
        lastName: "Guevara",
    },
    father: {
        name: "Alejandro",
        lastName: "Torres",
    },
}
console.log(user1)

const user2 ={
    name: "Alejandra",
    lastName: "Torres",
    age: 25,
    single: false,
    favoriteColor: ["violet", "hot pink"],
    guardian: {
        name: "Alejandro",
        lastName: "Torres",
    },
    
}
console.log(user2)

const user3 ={
    name: "Juan",
    middleName: "Esteban",
    lastName: "Torres",
    age: 18,
    single: true,
    ocupation: ["Student", "Panera Worker"],
    guardian: {
        name: "Giomara",
        lastName: "Guevara",
    },
}
console.log(user3)

/* 3 */

let allUsers = [{
    name: "Daniel",
    lastName: "Torres",
    age: 23,
    single: true,
    skills: ["Illustrator", "Photoshop", "HTML", "CSS", "JavaScript"],
    mother: {
        name: "Giomara",
        lastName: "Guevara",
    },
    father: {
        name: "Alejandro",
        lastName: "Torres",
    },
}, {
    name: "Alejandra",
    lastName: "Torres",
    age: 25,
    single: false,
    favoriteColor: ["violet", "hot pink"],
    guardian: {
        name: "Alejandro",
        lastName: "Torres",
    },
    
}, {
    name: "Juan",
    middleName: "Esteban",
    lastName: "Torres",
    age: 18,
    single: true,
    ocupation: ["Student", "Panera Worker"],
    guardian: {
        name: "Giomara",
        lastName: "Guevara",
    },
}]

console.log(allUsers) 

/* 4 */

let userNombre = prompt("Ingresa tu nombre")
let userLastName = prompt("Ingresa tu apellido")
let userAge = prompt("Ingresa tu edad") 

function saludo(_userNombre, _userLastName, _userAge){
    return "<div>Hola", _userNombre, _userLastName, "tu edad es;", _userAge, "</div>"
}


console.log(saludo(userNombre, userLastName, userAge))


//console.log("<div>Hola", nombre, lastName, "tu edad es;", age, "</div>")






/////////////////////////////////////////////////////////////////////////////

/* var number1= prompt("Ingrese el primer número")
var number2= prompt("Ingrese el segundo número")

var suma= "el resultado de la suma es: " + (Number(number1) + Number(number2))
var resta= "el resultado de la rest es: " + (Number(number1) - Number(number2))
var multi= "el resultado de la multiplicasion es: " + (Number(number1) * Number(number2))
var divi= "el resultado de la divisionon es: " + (Number(number1) / Number(number2))

console.log(suma, resta, multi, divi) */

/* console.log(suma)
console.log(resta)
console.log(multi)
console.log(divi) */

/* document.write(suma, resta, multi, divi) */


/* document.write(suma)
document.write(resta)
document.write(multi)
document.write(divi) */

/* alert(suma)
alert(resta)
alert(multi)
alert(divi) */

//////////////////////////////////////////////////////////////////////////////

/* let userNumber1 = prompt("Inegrese el primer numero")
let userNumber2 = prompt("Ingrese el segundo numero")

function suma(number1, number2){
    return Number(number1) + Number(number2)
}
function resta(number1, number2){
    return Number(number1) - Number(number2)
}
function multi(number1, number2){
    return Number(number1) * Number(number2)
}
function divi(number1, number2){
    return Number(number1) / Number(number2)
}

console.log( suma(userNumber1, userNumber2), resta(userNumber1, userNumber2),multi(userNumber1, userNumber2),divi(userNumber1, userNumber2))
 */

////////////////////////////////////////////////////////////////////////////
