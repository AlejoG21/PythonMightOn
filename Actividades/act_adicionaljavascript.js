/* 1 a 6
alert("Hello World");
document.getElementById("world_holder").textContent = "Hello World";
document.getElementById("math_holder").textContent = 3 + 5;
let nombre = prompt("cual es tu nombre?");
alert("hola " + nombre);
let num1 = prompt("primer numero");
console.log(num1)
let num2 = prompt("segundo numero");
console.log(num2)
document.getElementById("numberResult").textContent = parseInt(num1) + parseInt(num2);
let num3 = prompt("tercer numero (mayor o menor)?");
let num4 = prompt("cuarto numero");
if(num3>num4){
    document.getElementById("biggerNumber").textContent = "el tercer numero es más grande";
}else{ document.getElementById("biggerNumber").textContent = "el cuarto numero es más grande";}
*/
/* 7
let  num= [];
for (let i = 0; i < 3; i++) {
 num[i] = prompt ("numero" + i)
}
console.log(num)
for (let i = 0; i < num.length;i++){
    console.log(i)
    console.log(num[i])
    for(let w = 0; w < num.length;w++){
        if(num[i]< num[w]){
            console.log("this ain't it chief");
            break;
        }else if (w == 2){
            console.log(i + " and " + w);
            console.log(num[i] + " is the biggest")
        }
        console.log("the journey continues")
    }
    
}*/
let num = prompt("numero divisible por 2");
if((num %=2)==0 ){
    console.log("es divisible por dos");
}else{
    console.log("no lo es tontito");
}
