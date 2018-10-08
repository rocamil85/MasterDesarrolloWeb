import { Component,OnInit } from '@angular/core';
import { Zapatilla } from '../models/Zapatilla';
import { VideojuegoService } from '../services/videojuego.service';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html',
    providers:[VideojuegoService]
})

export class VideojuegoComponent implements OnInit {
    public rating: number;
    public paisFabricacion: string;
    public respuesta: string;
    public paisesFabricacion: string[];
    public zapatillas: Zapatilla[];

    

    constructor(private _zapatillaService:VideojuegoService) {
        this.rating = 3;
        this.paisFabricacion = "Japan";
        this.paisesFabricacion = ["Korea","Dinamarca","Francia"];
                
        this.zapatillas = _zapatillaService.getZapatillas();
    };

    ngOnInit() {
        this.respuesta = this._zapatillaService.Respuesta();
        console.log(this.respuesta);
      }

    public informacion(): string {
        return this.rating + " " + this.paisFabricacion;
    }

    public MostrarPais() {
        alert(this.paisFabricacion);
    }
    public AdicionarPais() {
        this.paisesFabricacion.push(this.paisFabricacion);
    }

}
