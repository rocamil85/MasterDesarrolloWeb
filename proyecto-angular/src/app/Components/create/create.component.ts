import { Component, OnInit } from '@angular/core';
import{Project} from '../../Models/Project';
import{ProjectService} from '../../Services/project.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectService]
})
export class CreateComponent implements OnInit {
  public title:string;
  public project:Project;
   
  constructor(private _projectService:ProjectService) { 
    this.title = "Crear un Proyecto";
    this.project = new Project("","Mary","pedagogian","Master",2019,"Special,Primary,Didactic","imageeee");
  }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(this.project);
  }

}
