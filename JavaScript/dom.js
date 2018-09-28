'use strict'

var divList = document.getElementsByTagName("div");
//var seccion = document.querySelector("#section1");
var seccion = document.getElementById("section1");

for (const key in divList) {
    if (divList.hasOwnProperty(key)) {
        const element = divList[key];

        element.style.color="blue";

        var li = document.createElement("li");
        //var text = document.createTextNode(element.innerText);
        //p.appendChild(text);
        li.innerText = element.innerText;
        seccion.appendChild(li);
    }
}



//console.log(newdivList);