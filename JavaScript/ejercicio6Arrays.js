'use strict'

var numberArray = new Array(6);
for (let i = 0; i < 6; i++) {
    //numberArray.push(parseInt(prompt("Entre un numero")));    
    numberArray[i] = parseInt(prompt("Entre un numero"));    
}
console.log(numberArray);

var valor_busqueda = parseInt(prompt("Entre un numero a buscar en el arreglo"))
var respuesta = numberArray.findIndex(function (params) {
    return params==valor_busqueda;
})

document.write("<h2>Estos son los numeros introducidos inicialmente</h2>");
numberArray.forEach(item => {
    document.write(item+"<br/>");    
});

document.write("<h2>Estos son los numeros ordenados</h2>");
numberArray.sort().forEach(item => {
    document.write(item+"<br/>");    
});

document.write("<h2>Estos son los numeros en reversa</h2>");
numberArray.reverse().forEach(item => {
    document.write(item+"<br/>");    
});

document.write("<h2>El arreglo tiene: "+numberArray.length+" elementos</h2>");

if (respuesta == -1) {
    document.write("<h2>El numero seleccionado no se encuentra en este arreglo</h2>");
}
else
{
    document.write("<h2>El numero seleccionado se encuentra en este arreglo con indice: "+respuesta+"</h2>");
}

