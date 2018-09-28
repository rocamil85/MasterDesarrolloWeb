'use strict'

var usuario = {
    nombre:"Victor Hugo",
    email: "victor@gmail.com",
    web: "www.victor.com",
    edad:35
};

localStorage.setItem("nombre","ronaldo");
localStorage.setItem("usuario",JSON.stringify(usuario));

console.log(localStorage.getItem("nombre"));
console.log(localStorage.getItem("usuario"));

var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);