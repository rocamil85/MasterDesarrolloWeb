
var result="Los dos numeros son iguales";

var num1 = parseInt(prompt("Inserte el primer numero",0));    
while (isNaN(num1)) {
    num1 = parseInt(prompt("Inserte el primer numero",0));
}

var num2 = parseInt(prompt("Inserte el segundo numero",0));
while (isNaN(num2)) {
    num2 = parseInt(prompt("Inserte el segundo numero",0));
}

/*
var j=1;
var myArray = new Array((num2-num1)-1);
for (let i = num1+1; i < num2; i++) {
    myArray[i]=num1+j;      
    j++;    
}
*/

var myArray = new Array((num2-num1)-1);
for (let i = 0; i < (num2-num1)-1; i++) {
    myArray[i]=num1+1+i;   
    document.write(myArray[i]+"<br/>") ;
}


console.log(myArray);
 