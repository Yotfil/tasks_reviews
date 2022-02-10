const validations = {
    clima: "lluvioso",
    hora: 7,
    diaDeLaSemana: "lunes",
}

if (validations.clima === "soleado") {
    if (validations.diaDeLaSemana === "lunes" && validations.hora >= 0 && validations.hora < 7) {
        alert("Buenos dias cliente, abriremos a las 7 a.m.")
    } else if (validations.diaDeLaSemana === "lunes" && validations.hora >= 7 && validations.hora < 12) {
        alert("Buenos dias bienvenido")
    } else if (validations.diaDeLaSemana === "lunes" && validations.hora >= 12 && validations.hora < 17) {
        alert("Buenas tardes bienvenido")
    } else if (validations.diaDeLaSemana === "lunes" && validations.hora >= 17 && validations.hora <= 24) {
        alert("Buenas tardes, ya esta cerrado pero lo invitamos a volver el dia de mañana")
    } else if (validations.diaDeLaSemana === "martes" && validations.hora >= 0 && validations.hora < 7) {
        alert("Buenos dias cliente, abriremos a las 7 a.m.")
    } else if (validations.diaDeLaSemana === "martes" && validations.hora >= 7 && validations.hora < 12) {
        alert("Buenos dias bienvenido")
    } else if (validations.diaDeLaSemana === "martes" && validations.hora >= 12 && validations.hora < 17) {
        alert("Buenas tardes bienvenido")
    } else if (validations.diaDeLaSemana === "martes" && validations.hora >= 17 && validations.hora <= 24) {
        alert("Buenas tardes, ya esta cerrado pero lo invitamos a volver el dia de mañana")
    } else if (validations.diaDeLaSemana === "miercoles" && validations.hora >= 0 && validations.hora < 7) {
        alert("Buenos dias cliente, abriremos a las 7 a.m.")
    } else if (validations.diaDeLaSemana === "miercoles" && validations.hora >= 7 && validations.hora < 12) {
        alert("Buenos dias bienvenido")
    } else if (validations.diaDeLaSemana === "miercoles" && validations.hora >= 12 && validations.hora < 17) {
        alert("Buenas tardes bienvenido")
    } else if (validations.diaDeLaSemana === "miercoles" && validations.hora >= 17 && validations.hora <= 24) {
        alert("Buenas tardes, ya esta cerrado pero lo invitamos a volver el dia de mañana")
    } else if (validations.diaDeLaSemana === "jueves" && validations.hora >= 0 && validations.hora < 7) {
        alert("Buenos dias cliente, abriremos a las 7 a.m.")
    } else if (validations.diaDeLaSemana === "jueves" && validations.hora >= 7 && validations.hora < 12) {
        alert("Buenos dias bienvenido")
    } else if (validations.diaDeLaSemana === "jueves" && validations.hora >= 12 && validations.hora < 17) {
        alert("Buenas tardes bienvenido")
    } else if (validations.diaDeLaSemana === "jueves" && validations.hora >= 17 && validations.hora <= 24) {
        alert("Buenas tardes, ya esta cerrado pero lo invitamos a volver el dia de mañana")
    } else if (validations.diaDeLaSemana === "viernes" && validations.hora >= 0 && validations.hora < 7) {
        alert("Buenos dias cliente, abriremos a las 7 a.m.")
    } else if (validations.diaDeLaSemana === "viernes" && validations.hora >= 7 && validations.hora < 12) {
        alert("Buenos dias bienvenido")
    } else if (validations.diaDeLaSemana === "viernes" && validations.hora >= 12 && validations.hora < 17) {
        alert("Buenas tardes bienvenido")
    } else if (validations.diaDeLaSemana === "viernes" && validations.hora >= 17 && validations.hora <= 24) {
        alert("Buenas tardes, ya esta cerrado pero lo invitamos a volver el dia de mañana")
    } else if (validations.diaDeLaSemana === "sabado" && validations.hora >= 0 && validations.hora < 10) {
        alert("Buenos dias cliente, abriremos a las 10 a.m.")
    } else if (validations.diaDeLaSemana === "sabado" && validations.hora >= 10 && validations.hora < 12) {
        alert("Buenos dias bienvenido")
    } else if (validations.diaDeLaSemana === "sabado" && validations.hora >= 12 && validations.hora < 17) {
        alert("Buenas tardes bienvenido")
    } else if (validations.diaDeLaSemana === "sabado" && validations.hora >= 17 && validations.hora <= 24) {
        alert("Buenas tardes, ya esta cerrado pero lo invitamos a volver el dia de mañana")
    } else if (validations.diaDeLaSemana === "domingo" && validations.hora >= 0 && validations.hora < 10) {
        alert("Buenos dias cliente, abriremos a las 10 a.m.")
    } else if (validations.diaDeLaSemana === "domingo" && validations.hora >= 10 && validations.hora < 12) {
        alert("Buenos dias bienvenido")
    } else if (validations.diaDeLaSemana === "domingo" && validations.hora >= 12 && validations.hora < 17) {
        alert("Buenas tardes bienvenido")
    } else if (validations.diaDeLaSemana === "domingo" && validations.hora >= 17 && validations.hora <= 24) {
        alert("Buenas tardes, ya esta cerrado pero lo invitamos a volver el dia de mañana")
    }
} else if (validations.diaDeLaSemana === "lunes" && validations.hora >= 0 && validations.hora < 8) {
    alert("Buenos dias cliente, abriremos a las 8 a.m.")
} else if (validations.diaDeLaSemana === "lunes" && validations.hora >= 8 && validations.hora < 12) {
    alert("Buenos dias bienvenido")
} else if (validations.diaDeLaSemana === "lunes" && validations.hora >= 12 && validations.hora < 17) {
    alert("Buenas tardes bienvenido")
} else if (validations.diaDeLaSemana === "lunes" && validations.hora >= 17 && validations.hora <= 24) {
    alert("Buenas tardes, ya esta cerrado pero lo invitamos a volver el dia de mañana")
} else if (validations.diaDeLaSemana === "martes" && validations.hora >= 0 && validations.hora < 8) {
    alert("Buenos dias cliente, abriremos a las 8 a.m.")
} else if (validations.diaDeLaSemana === "martes" && validations.hora >= 8 && validations.hora < 12) {
    alert("Buenos dias bienvenido")
} else if (validations.diaDeLaSemana === "martes" && validations.hora >= 12 && validations.hora < 17) {
    alert("Buenas tardes bienvenido")
} else if (validations.diaDeLaSemana === "martes" && validations.hora >= 17 && validations.hora <= 24) {
    alert("Buenas tardes, ya esta cerrado pero lo invitamos a volver el dia de mañana")
} else if (validations.diaDeLaSemana === "miercoles" && validations.hora >= 0 && validations.hora < 8) {
    alert("Buenos dias cliente, abriremos a las 8 a.m.")
} else if (validations.diaDeLaSemana === "miercoles" && validations.hora >= 8 && validations.hora < 12) {
    alert("Buenos dias bienvenido")
} else if (validations.diaDeLaSemana === "miercoles" && validations.hora >= 12 && validations.hora < 17) {
    alert("Buenas tardes bienvenido")
} else if (validations.diaDeLaSemana === "miercoles" && validations.hora >= 17 && validations.hora <= 24) {
    alert("Buenas tardes, ya esta cerrado pero lo invitamos a volver el dia de mañana")
} else if (validations.diaDeLaSemana === "jueves" && validations.hora >= 0 && validations.hora < 8) {
    alert("Buenos dias cliente, abriremos a las 8 a.m.")
} else if (validations.diaDeLaSemana === "jueves" && validations.hora >= 8 && validations.hora < 12) {
    alert("Buenos dias bienvenido")
} else if (validations.diaDeLaSemana === "jueves" && validations.hora >= 12 && validations.hora < 17) {
    alert("Buenas tardes bienvenido")
} else if (validations.diaDeLaSemana === "jueves" && validations.hora >= 17 && validations.hora <= 24) {
    alert("Buenas tardes, ya esta cerrado pero lo invitamos a volver el dia de mañana")
} else if (validations.diaDeLaSemana === "viernes" && validations.hora >= 0 && validations.hora < 8) {
    alert("Buenos dias cliente, abriremos a las 8 a.m.")
} else if (validations.diaDeLaSemana === "viernes" && validations.hora >= 8 && validations.hora < 12) {
    alert("Buenos dias bienvenido")
} else if (validations.diaDeLaSemana === "viernes" && validations.hora >= 12 && validations.hora < 17) {
    alert("Buenas tardes bienvenido")
} else if (validations.diaDeLaSemana === "viernes" && validations.hora >= 17 && validations.hora <= 24) {
    alert("Buenas tardes, ya esta cerrado pero lo invitamos a volver el dia de mañana")
} else if (validations.diaDeLaSemana === "sabado" && validations.hora >= 0 && validations.hora < 10) {
    alert("Buenos dias cliente, abriremos a las 10 a.m.")
} else if (validations.diaDeLaSemana === "sabado" && validations.hora >= 10 && validations.hora < 12) {
    alert("Buenos dias bienvenido")
} else if (validations.diaDeLaSemana === "sabado" && validations.hora >= 12 && validations.hora < 17) {
    alert("Buenas tardes bienvenido")
} else if (validations.diaDeLaSemana === "sabado" && validations.hora >= 17 && validations.hora <= 24) {
    alert("Buenas tardes, ya esta cerrado pero lo invitamos a volver el dia de mañana")
} else if (validations.diaDeLaSemana === "domingo" && validations.hora >= 0 && validations.hora < 10) {
    alert("Buenos dias cliente, abriremos a las 10 a.m.")
} else if (validations.diaDeLaSemana === "domingo" && validations.hora >= 10 && validations.hora < 12) {
    alert("Buenos dias bienvenido")
} else if (validations.diaDeLaSemana === "domingo" && validations.hora >= 12 && validations.hora < 17) {
    alert("Buenas tardes bienvenido")
} else if (validations.diaDeLaSemana === "domingo" && validations.hora >= 17 && validations.hora <= 24) {
    alert("Buenas tardes, ya esta cerrado pero lo invitamos a volver el dia de mañana")
}


/*/if (validations.clima === "soleado") {
    if (validations.diaDeLaSemana === "lunes" ||
        validations.diaDeLaSemana === "martes" ||
        validations.diaDeLaSemana === "miercoles" ||
        validations.diaDeLaSemana === "jueves" ||
        validations.diaDeLaSemana === "viernes" && validations.hora < 7 && validations.hora >= 0) {
        alert("Buenos dias cliente, abriremos a las 7 a.m.")
    } else if (validations.diaDeLaSemana === "lunes" ||
        validations.diaDeLaSemana === "martes" ||
        validations.diaDeLaSemana === "miercoles" ||
        validations.diaDeLaSemana === "jueves" ||
        validations.diaDeLaSemana === "viernes" && validations.hora >= 7 && validations.hora < 12) {
        alert("Buenos dias bienvenido")
    } else if (validations.diaDeLaSemana === "lunes" ||
        validations.diaDeLaSemana === "martes" ||
        validations.diaDeLaSemana === "miercoles" ||
        validations.diaDeLaSemana === "jueves" ||
        validations.diaDeLaSemana === "viernes" && validations.hora >= 12 && validations.hora < 17) {
        alert("Buenas tardes bienvenido")
    } else if (validations.diaDeLaSemana === "lunes" ||
        validations.diaDeLaSemana === "martes" ||
        validations.diaDeLaSemana === "miercoles" ||
        validations.diaDeLaSemana === "jueves" ||
        validations.diaDeLaSemana === "viernes" && validations.hora >= 17 && validations.hora <= 24) {
        alert("Buenoas tardes, ya esta cerrado pero lo invitamos a volver el dia de mañana")
    } else {
        alert("hola")
    }
}*/

/*if (validations.diaDeLaSemana === "lunes", "martes", "miercoles", "jueves","viernes" && validations.clima =="soleado") {
    alert("Abrimos a las 7am")
}else if (validations.diaDeLaSemana === "lunes", "martes", "miercoles", "jueves", "viernes" && validations.clima == "lluvioso") {
    alert("Abrimos a las 8am")
} else if (validations.diaDeLaSemana === "sabado", "domingo" && validations.clima == "lluvioso") {
    alert("Abrimos a las 10am")
} else if (validations.diaDeLaSemana === "sabado", "domingo" && validations.clima == "soleado") {
        alert("Abrimos a las 10am")
}else
    alert("Abrimos a las 10am")*/


/*
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
}*/


/*if (validations.diaDeLaSemana === "lunes", "martes", "miercoles", "jueves", "viernes" && validations.clima == "soleado") {
    alert("Abrimos a las 7am")
} else if (validations.diaDeLaSemana === "lunes", "martes", "miercoles", "jueves", "viernes" && validations.clima == "lluvioso") {
    alert("Abrimos a las 8am")
} else /*(validations.diaDeLaSemana === "sabado", "domingo" && validations.clima == "lluvioso")*/
/*alert("Abrimos a las 10am")*/