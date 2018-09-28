'use strict'

window.addEventListener("load", function () {

   
    var button2 = document.getElementById("button2");
    var section1 = document.getElementById("section1");
    var section2 = document.getElementById("section2");
    var form1 = document.getElementById("form1");


    button2.addEventListener("click", function () {

        var inputs = document.getElementsByTagName("input");
        
        for (const key in inputs) {
            if (inputs.hasOwnProperty(key)) {
                const element = inputs[key];
                
                var li = document.createElement("li");
                li.innerText = element.value;
                section1.appendChild(li);
            }
        }
    });

    form1.addEventListener("submit",function () {
       
        var inputs = document.getElementsByTagName("input");
        
        for (const key in inputs) {
            if (inputs.hasOwnProperty(key)) {
                const element = inputs[key];
                
                                                            /*if (isNaN(element.value)) {        Ej: de como validar un campo,en este caso un campo numerico...
                                                                alert("Introduzca un numero");
                                                                return false;
                                                            }*/
                var li = document.createElement("li");
                li.innerText = element.value;
                section1.appendChild(li);
            }
        }
    });


});