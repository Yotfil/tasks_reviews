"use strict"

//Primera parte

let deportes = ["Atletismo", "Aatacion", "Ciclismo", "Equitación", "Gimnasia"];
console.log(deportes);

let pasaTiempos = ["Leer", "Escuchar Musica", "Tejer", "Dormir", "Estudiar"];
console.log(pasaTiempos);

let verbos = ["Leer", "Correr", "Mirar", "Caminar", "Estudiar"];
console.log(verbos);

//Segunda parte

let variado1 = ["Diego", "Acosta", 34, true, ["Leer manga", "Juegar Wow", "Montar cicla"]]
let variado2 = ["Monica", "Castillo", 36, true, ["Tejer", "Dormir", "Montar cicla"]]
let variado3 = ["Juan", "Acosta", 3, true, ["Ver videos de terror", "Fregar la vida", "Jugar con plastilina"]]
console.log(variado1);
console.log(variado2);
console.log(variado3);

//Tercera parte

let user1 = {
    name: "Diego",
    lastName: "Acosta",
    age: 34,
    pet: true,
    hobbies: ["Leer manga", "Juegar Wow", "Montar cicla"],
    mother: {
        name: "Hortencia",
        lastName: "Ordoñez",
        hobbies: ["Estudiar", "Viajar"]
    },
    father: {
        name: "Pablo",
        lastName: "Acosta"
    }
}

console.log(user1)

let user2 = {
    name: "Monica",
    lastName: "Castillo",
    age: 36,
    pet: true,
    hobbies: ["Tejer", "Dormir", "Montar cicla"],
    mother: {
        name: "Dubia",
        lastName: "Castillo",
        hobbies: ["Cocinar", "Tejer"]
    },
    father: {
        name: "Cristobal",
        lastName: "Castillo"
    }
}

console.log(user2)

let user3 = {
    name: "Juan",
    lastName: "Acosta",
    age: 3,
    pet: true,
    hobbies: ["Ver videos de terror", "Fregar la vida", "JUgar con plastilina"],
    mother: {
        name: "Monica",
        lastName: "Castillo",
        hobbies: ["Tejer", "Dormir", "Montar cicla"]
    },
    father: {
        name: "Alejandro",
        lastName: "Acosta"
    }
}

console.log(user3)