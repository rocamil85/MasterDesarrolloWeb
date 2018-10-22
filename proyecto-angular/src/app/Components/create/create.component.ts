import { Component, OnInit } from '@angular/core';
import{Project} from '../../Models/Project';
import{ProjectService} from '../../Services/project.service';
import{UploadService} from '../../Services/upload.service';
import {Global} from '../../Services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectService,UploadService]
})
export class CreateComponent implements OnInit {
  public title:string;
  public project:Project;
  public status:boolean;
  public filesToUpload:Array<File>;
   
  constructor(private _projectService:ProjectService,private _uploadService:UploadService) { 
    this.title = "Crear un Proyecto";
    this.project = new Project("","Mary","pedagogian","Master",2019,"Special","");
    this.status = false;
  }

  ngOnInit() {
  }

  onSubmit(form){
    this._projectService.saveProject(this.project).subscribe(
      response=>{
          console.log(response.message);          
          console.log(Global.url+'upload-image/'+response.message._id);
          //Subir Imagen
          this._uploadService.makeFileRequest(Global.url+'upload-image/'+response.message._id,[],this.filesToUpload,'image')
          .then((result:any)=>{
              console.log(result);
              this.status = true;
              form.reset();
          });
      },

      error=>{
        console.log(error);
      }
    );
  }

  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

//---
}
