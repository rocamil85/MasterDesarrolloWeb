'use strict'
window.addEventListener("load", function () {
    var form2 = document.getElementById("form2");
    var form3 = document.getElementById("form3");

    
    form2.addEventListener("submit", function () {
        var input4 = document.getElementById("input4").value;
        localStorage.setItem("pelicula" + input4, input4);
        FillDiv();
    });

    form3.addEventListener("submit", function () {
        var input5 = document.getElementById("input5").value;
        localStorage.removeItem("pelicula" + input5);
        FillDiv();
    });

    function FillDiv() {
       var div1 = document.getElementById("div1");        

        for (const key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                const element = localStorage[key];

                var li = document.createElement("li");
                li.innerText = element;
                div1.appendChild(li);
            }
        }

    }

    FillDiv();

    //---
});