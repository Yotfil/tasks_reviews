/*  punto 1 */
 let soccerPlayers = ["messi", "ronaldo", "falcao", "james", "ospina"]
 
 let tennisPlayers = ["federer", "nadal", "djokovic", "medvered", "murray"]

 let basketballPlayers = ["lebron", "curry", "garden", "green", "porcinguis"]

 let fastFood = ["pizza", "hot dog", 'donnuts', 'hamburger' ]


/*  punto2 */

 const user = {
     name:'Felipe',
     lastname:"Gutierrez",
     age:23,
     female:false,
     girlfriend:{
         name:"Natalia",
         age:22,
         favoriteartits:["bad bunnny","dua lipa","ozuna",["j cortez",'daddy yankie']]
     }
 }


 const brother = {
     name:'Gabriel',
     lastname:"Gutierrez",
     age:14,
    girlfriend:false,
    father:{
         name:"Eduardo",
         age:52,
         favoritefood:["hot dog","pizza","chiken",["hamburger",'pasta']]
     }
 }

 const mother = {
     name:'Angela',
     lastname:"Guevara",
     age:42,
     marry:true,
     hobbies:{
         Work:"Accountant",
         goodmother:true,
         favoriteactivities:["pray","listen music","read",["watch tv",'shopping']]
     }
 }
 

 /* punto3 */
 
 let array = [{
    name:'Angela',
    lastname:"Guevara",
    age:42,
    marry:true,
    hobbies:{
        Work:"Accountant",
        goodmother:true,
        favoriteactivities:["pray","listen music","read",["watch tv",'shopping']]
    }
}, 
{
    name:'Gabriel',
    lastname:"Gutierrez",
    age:14,
   girlfriend:false,
   father:{
        name:"Eduardo",
        age:52,
        favoritefood:["hot dog","pizza","chiken",["hamburger",'pasta']]
    }
}, 
{
    name:'Felipe',
    lastname:"Gutierrez",
    age:23,
    female:false,
    girlfriend:{
        name:"Natalia",
        age:22,
        favoriteartits:["bad bunnny","dua lipa","ozuna",["j cortez",'daddy yankie']]
    }
}]

/* punto #4
 */
 
 let nombre = prompt ("su nombre")
 let lastname = prompt ("su apellido")
 let age = prompt ("age")
 function saludo(nombre,lastname,age)
 {
    return "<div> hola "+ nombre + " " + lastname + " tu edad " + age + "</div>"
 }
console.log(saludo (nombre,lastname,age))