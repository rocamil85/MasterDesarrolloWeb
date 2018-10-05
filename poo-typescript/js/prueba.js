"use strict";
window.addEventListener("load", function () {
    console.log("se metio en prueba nuevaaa");
    var Camiseta = /** @class */ (function () {
        function Camiseta(color, modelo, marca, talla, precio) {
            this.color = color;
            this.modelo = modelo;
            this.marca = marca;
            this.talla = talla;
            this.precio = precio;
        }
        Camiseta.prototype.Mix = function () {
            return this.color + " " + this.marca;
        };
        ;
        return Camiseta;
    }());
    var a = new Camiseta("rojo", "adidas", "Abc", "M", 15);
    var b = a.Mix();
    console.log(b);
    //---
});
