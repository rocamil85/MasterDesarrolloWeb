'use strict'
window.addEventListener("load", function () {

    var div1 = document.getElementById("div1");

    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    var form2 = document.getElementById("form2");
    var form3 = document.getElementById("form3");

    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            const element = localStorage[key];

            var li = document.createElement("li");
            li.innerText = element;
            div1.appendChild(li);
        }
    }

    form2.addEventListener("submit", function () {
        var input4 = document.getElementById("input4").value;
        localStorage.setItem(input4, input4);
    });

    form3.addEventListener("submit", function () {
        var input5 = document.getElementById("input5").value;
        localStorage.removeItem(input5);
    });













    //-- 
});