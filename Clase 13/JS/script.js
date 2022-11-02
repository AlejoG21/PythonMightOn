let num1 = 1;

//OPERADORES
num1+=1 //suma
num1-=1 //resta
num1*=1 //multiplica
num1/=1 //divide
num1%=1 //MODULO te da el resto luego de dividir por el valor. util para chequear si es par.


console.log("el valor es" + num1++, num1)

let edadAlejo = 26;
let edadPaula = 25;

if(edadAlejo > edadPaula){
console.log ("1");
}else if(edadPaula > edadAlejo){
    console.log("2");
}else{
    console.log("3");
}
//poner ==true en un if es al pedo, solo poner la variante alcanza.
if((pagoCuota==true || tieneCupon) && edadAlejo>=18){
    console.log("movie time");
}

//Ejemplo de una cascada de ifs excesivos

let nota = 7;
console.log("He realizado mi examen.");
// Condición
if (nota < 5) {
 calificacion = "Insuficiente";
} else if (nota < 6) {
 calificación = "Suficiente";
} else if (nota < 8) {
 calificacion = "Bien";
} else if (nota <= 9) {
 calificacion = "Notable";
} else {
 calificacion = "Sobresaliente";
}

//Ejemplo de Switch (que ya no se usa un carajo y esta mal visto)

switch(nota){
    case 1:
    case 2:
    case 3:
    case 4:
        calificacion="insuficiente";
        break;
    case 5:
        calificacion="suficiente";
        break;
    case 6:
    case 7:
        calificacion="bien";
        break;
    case 8:
    case 9:
        calificacion="notable";
    case 10:
        calificacion="sobresaliente";
    default:
        calificacion="nah sos un capo man";

}