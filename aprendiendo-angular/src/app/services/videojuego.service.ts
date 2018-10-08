import {Injectable} from '@angular/core';
import {Zapatilla} from '../models/Zapatilla';

@Injectable()
export class VideojuegoService{
    public zapatillas: Zapatilla[];
    
constructor(){
    this.zapatillas = [
        new Zapatilla("Mercurial", "Nike", "Orange", 50, 0),
        new Zapatilla("Lines", "Adidas", "Black", 65, 100),
        new Zapatilla("Trinag", "Reebok", "Blue", 80, 100)
    ]

}

public getZapatillas():Zapatilla[]
{
    return this.zapatillas;
}

public Respuesta():string
{
    return "mi respuesta desde el servicio";
}



}