'use strict'

window.addEventListener("load", function () {


    var button = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var input = document.getElementById("input1");

    //Events
    button.addEventListener("click", function (params) {
        button.style.color = "green";
        button.style.backgroundColor = "yellow";
    })

    //igual con keydown,keyup,etc...
    input.addEventListener("keypress", function (event) {
        console.log("tecla presionada", String.fromCharCode(event.keyCode));
    })

    //Timers
    //igual TimeOut,etc...
    var tiempo = setInterval(function () {
        console.log("respuesta depsues de 1000ms");
    },1000)

    button2.addEventListener("click",function () {
        clearInterval(tiempo);
        alert("Has parado el intervalo de tiempo en ejecucion");
    })

})
