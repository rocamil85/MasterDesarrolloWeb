'use strict'

var result="Los dos numeros son iguales";

var num1 = parseInt(prompt("Inserte el primer numero",0));    
while (isNaN(num1)||num1<0) {
    num1 = parseInt(prompt("Inserte el primer numero",0));
}

var num2 = parseInt(prompt("Inserte el segundo numero",0));
while (isNaN(num2)||num2<0) {
    num2 = parseInt(prompt("Inserte el segundo numero",0));
}



if (num1 > num2) {
    result="El mayor es el Numero 1";
}
else if(num2>num1)
{
    result="El mayor es el Numero 2";
}

console.log(num1,num2);
