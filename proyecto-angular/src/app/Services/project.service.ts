import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Project} from '../Models/Project';
import {Global} from './global';

@Injectable()
export class ProjectService{
    public url:string;

    constructor(private _http:HttpClient){     
        this.url = Global.url;   
    }


    getUser():Observable<any>{
        return this._http.get(this.url+"api/users/2");
    }

    addUser(user):Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+"api/users",params,{headers:headers});
    }

    saveProject(project:Project):Observable<any>{
       let params = JSON.stringify(project);
       let headers = new HttpHeaders().set('Content-Type','application/json');
       
       return this._http.post(this.url+'save-project',params,{headers:headers});
    }

    getProjects():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'/projects',{headers:headers});
    }

//----
}