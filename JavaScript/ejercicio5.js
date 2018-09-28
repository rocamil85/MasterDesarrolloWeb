
var num2 = parseInt(prompt("Inserte el segundo numero",0));
while (isNaN(num2)) {
    num2 = parseInt(prompt("Inserte el segundo numero",0));
}

var num1=0;
while (num1<=num2) {    
if (num2%num1==0)
 {
    document.write("<h4>El numero "+num1+" es divisor de "+ num2+"</h4><br/>")
 }

num1++;
}