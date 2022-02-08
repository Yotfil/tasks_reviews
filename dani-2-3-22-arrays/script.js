let programmingLenguages = ["C", "C++", "C#", "Java", "Python", "JavaScript"]

/* console.log(programmingLenguages) */

let artStyles = ["Pop Art", "Surrealism", "Contemporary", "Fantasy", "Impressionist", "Cubism"]

/* console.log(artStyles) */

let favoriteGames = ["League of Legends", "Osu!", "Valorant", "Call of Duty", "Genshin Impact"]

/* console.log(favoriteGames) */


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

/* console.log(user1) */

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

/* console.log(user2) */

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

/* console.log(user3) */


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

/* console.log(allUsers)  */


let userNombre = prompt("Ingresa tu nombre")
let userLastName = prompt("Ingresa tu apellido")
let userAge = prompt("Ingresa tu edad") 

function saludo(_userNombre, _userLastName, _userAge){
    return "<div>Hola " + _userNombre + " " + _userLastName + " tu edad es; " + _userAge + "</div>"
}


/* console.log(saludo(userNombre, userLastName, userAge)) */