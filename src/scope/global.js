var a; //declaracion
var b = "b"; //declaracion / asignacion
b = "bb"; // reasignacion
var a = "aa"; //redeclaracion

//Global Scope
var fruit = "Apple"; //Global

//La variables que se asignen en la parte superior del documento o fuera de un bloque o funcion pasan a ser variables globales
console.log(fruit); 

function bestFruit() {
  console.log(fruit); 
}

bestFruit()

//Otra forma de crear otra variable global es cuando se declara sin asignar (country sin el var, let o const), por defecto pasa a ser global
function countries() {
  country = "Colombia"; //sin var, let o const es global
  console.log(country); // Colombia
}

countries()
console.log(country); //Colombia