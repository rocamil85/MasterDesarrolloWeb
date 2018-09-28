'use strict'
var nombre= prompt("Introduce tu nombre");
var apellidos= prompt("Introduce tus apellidos");

var texto=`
            <h1>Hola que tal</h1>
            <h3>Mi nombres es: ${nombre}</h3>
            <h4>Mis Apellidos son: ${apellidos}</h4>
            `;

document.write(texto);