"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorator
function arranque(lanzar) {
    return function (target) {
        target.prototype.lanzamiento = function () {
            alert(lanzar);
        };
    };
}
//ejemplo de un modulo interno(no me pincha revisar  bien...)
/*module Tienda{
    export Class Ropa{
        constructor(titulo:string){
            alert(titulo);
        }
    }

    export Class Informatica{
        constructor(titulo:string){
            alert("Tienda de tecnologia: "+ titulo );
        }
    }
}

import Informatica = Tienda.Informatica;
let cargarInformatica = new Informatica("supertienda");*/
//clases
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
    Camiseta = __decorate([
        arranque("Ejemplo de un decorator")
    ], Camiseta);
    return Camiseta;
}());
var a = new Camiseta("rojo", "adidas", "Abc", "M", 15);
var b = a.Mix();
console.log(b);
a.lanzamiento();
