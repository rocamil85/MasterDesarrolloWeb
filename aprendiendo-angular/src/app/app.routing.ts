//importar modulos del router de angular
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

//importar componentes
import {HomeComponent} from './home/home.component';
import {VideojuegoComponent} from './videojuego/videojuego.component';
import {CursoComponent} from './curso/curso.component';
import {ExternoComponent} from './externo/externo.component';
import {ContactoComponent} from './contacto/contacto.component';

//Array de rutas
const appRoutes: Routes =[
{path:'home',component: HomeComponent},
{path:'videojuego',component: VideojuegoComponent},
{path:'curso',component: CursoComponent},
{path:'curso/:nombre/:followers',component: CursoComponent},
{path:'externo',component: ExternoComponent},
{path:'contacto',component: ContactoComponent},
{path: '**', component: HomeComponent}
];

//Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);