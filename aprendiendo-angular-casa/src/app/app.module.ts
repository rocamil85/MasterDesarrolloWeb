import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursoComponent } from './curso/curso.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
