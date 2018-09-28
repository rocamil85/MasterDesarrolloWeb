
var num1 = parseInt(prompt("Inserte el primer numero",0));    
while (isNaN(num1)) {
    num1 = parseInt(prompt("Inserte el primer numero",0));
}

var num2 = parseInt(prompt("Inserte el segundo numero",0));
while (isNaN(num2)) {
    num2 = parseInt(prompt("Inserte el segundo numero",0));
}


var myArray = new Array((num2-num1)-1);
var myArrayImpar = new Array();
var j=0;

for (let i = 0; i < (num2-num1)-1; i++) {
    myArray[i]=num1+1+i;
    if (myArray[i]%2 != 0) {
        myArrayImpar[j]=myArray[i];
        document.write( myArrayImpar[j]+"<br/>");
        j++; 
    }
}



console.log(myArray);
 