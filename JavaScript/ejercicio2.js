'use strict'



var num1 = parseFloat(prompt("Inserte el primer numero",0));    
while (isNaN(num1)) {
    num1 = parseInt(prompt("Inserte el primer numero",0));
}

var num2 = parseFloat(prompt("Inserte el segundo numero",0));
while (isNaN(num2)) {
    num2 = parseInt(prompt("Inserte el segundo numero",0));
}

var suma = num1+num2;
var media = (num1+num2)/2;



console.log(num1,num2);
