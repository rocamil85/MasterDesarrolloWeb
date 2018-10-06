import { Component } from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl:'./videojuego.component.html' 
})

export class VideojuegoComponent {
    public rating:number;
    public paisFabricacion:string;

    /*constructor(rt:number,pf:string) {
        this.rating = 3;
        this.paisFabricacion = "ewwer";
    }*/
    constructor() {
        this.rating = 3;
        this.paisFabricacion = "Japan";
    };

    public informacion():string{
        return this.rating +" "+ this.paisFabricacion;
    }
}


