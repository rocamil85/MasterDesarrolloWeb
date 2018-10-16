//importar modulos del router de angular
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

//importar componentes
import {AboutComponent} from './Components/about/about.component';
import {ProjectsComponent} from './Components/projects/projects.component';
import {CreateComponent} from './Components/create/create.component';
import {ContactComponent} from './Components/contact/contact.component';
import {ErrorComponent} from './Components/error/error.component';


//Array de rutas
const appRoutes: Routes =[
{path:'',component: AboutComponent},
{path:'sobre-mi',component: AboutComponent},
{path:'proyectos',component: ProjectsComponent},
{path:'crear-proyecto',component: CreateComponent},
{path:'contacto',component: ContactComponent},
{path:'**',component: ErrorComponent},
];

//Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);