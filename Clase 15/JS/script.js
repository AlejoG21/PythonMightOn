//FUNCIONES

function saludar(){
    alert("hola!");
};
function despedirse(){
    alert("chau!");
};
function numer3(num){ //de esta manera le podes dar valores a la función
    let numero = num*3;
    return numero;
};
function numMult(num1,num2){ //le podes dar multiples valores!
    let res = num1 * num2;
    return res;
    /*return num1*num2 también sería valido, pero siempre es lo ideal */
};
function multiplu(num1=0,num2=0) //de esta manera podes declarar valores default
{return num1*num2};
function convertirADolares(cotizacion,monto){
    return monto/cotizacion
};
console.log(numer3(3));
console.log(numMult(2,5));

let cotizacionDolar = 288;
let ahorrosEnPesos = 50000;
console.log("podes comprar " +convertirADolares(cotizacionDolar,ahorrosEnPesos)+ "Dolares");

//SCOPE
function variablesInternas(){
    let variableInterna = "hola";
    var variableInterna2 = 1;
    console.log(variableGlobal, variableInterna, variableInterna2)
}

let variableGlobal = "soy Global";
let variableInterna = "gila";
var variableInterna2 = 2;
console.log(variableGlobal, variableInterna, variableInterna2)
variablesInternas();

console.log(variableGlobal, variableInterna, variableInterna2)

let arr = [1,2,3,4,5,6];
let array2 =[];
for (i=0;i<arr.length;i++){
array2[i]= arr[i]+1;
console.log(array2[i]);
}
console.log(array2);