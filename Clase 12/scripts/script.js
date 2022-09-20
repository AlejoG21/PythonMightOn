//comentario de una linea
/*
comentario MULTILINEA
*/

let usuario = "alejo"; //con let estableces variables.
let Usuario = "juan"; //distingue mayusculas.
let _usuario = "miguel"; //acepta guión bajo
let $usuario = "maria"; //y también signo de dinero
let nombreUsuario = "Javier";  //para multiples palabras, se usa CAMEL CASE
/*Camel Case hace que cada palabra subsecuente empiece con Mayuscula */
let NombreUsuario = "pascal"; // si todas tienen mayuscula es Pascal Case
let nombre_usuario = "snake"; //usando guion bajo es snake Case
// let 1ernombre = "fugg"  //las variables NUNCA EMPIEZAN CON NUMEROS
// let primer-nombre = "numero" // las variables NO USAN GUIONES
// let break = "drill" //tampoco podes usar palabras reservadas para otras cosas.

console.log(usuario, Usuario, _usuario,$usuario,nombreUsuario, NombreUsuario);
//En JavaScript las variables son dinamicamente establecidas. Osea que la variable se define por su contenido

//los strings se definen con comillas
let str1 = "string"; //los strings se definen con comillas dobles
let str2 = 'string'; //o con comillas simples
let variableCompuestaComplicada = str1 + "y ademas " + str2; //hay que atrapar el texto dentro de comillas
let varibleCompuesta = `${str1} y ademas ${str2}`; //hay que atrapar los comandos dentro de ${}
//En Javascript todo lo que involucra numeros es NUMBER.
let num1 = 5
let num2 = 45.6
//los elementos dentro de las variables siempre deben ser posibles de modificar.
//"Hardcodear" (poner valores absolutos) esta muy mal visto.
let quest1 = prompt("Que onda, tirame un numero");
//prompt siempre devuelve un string
let answer1 = quest1 + 3;
// esto no es realmente una suma, sino un concat (porque quest1 es string)
console.log(answer1);
//mediante parsefloat podes transformar texto en numeros
let quest2 = parseFloat(prompt("que onda, otro numero pls"));
let answer2 = quest2 + 3;
console.log(answer2)
console.log(typeof answer1); //typeof te tira el tipo de la variable que le das 