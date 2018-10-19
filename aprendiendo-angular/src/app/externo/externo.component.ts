import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user: any;
  public new_user: any;
  public user_guardado:any;

  constructor(private _peticionesService: PeticionesService) {
    this.new_user = {
      "name": "",
      "job": ""
    };
  }
/*
  ngOnInit() {
    this._peticionesService.getUser().subscribe(
      result => {
        this.user = result.data;
        console.log(this.user);
      },
      error => {
        console.log(<any>error);
      }
    );
  }*/
  ngOnInit() {
    this._peticionesService.getUser().subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(form) {
    this._peticionesService.addUser(this.new_user).subscribe(
      response => {
        this.user_guardado = response;
        form.reset();
      },
      error => {
        console.log(<any>error);
      }

    );

  }

}
