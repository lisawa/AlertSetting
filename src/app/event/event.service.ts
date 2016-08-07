import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
//import { TaskData } from './task-data';
import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/map';

@Injectable()
export class EventService {
//tl: TaskData[];
  constructor(private http: Http) {
    console.log('Task Service created.', http); 
  }

  url: string = 'http://192.168.100.153/taskserver/TaskSetting/';

  public GetTask(){
/*
    return this.http.get(this.url + 'GetTaskDetail')
                    .toPromise()
                    .then(Response => Response.json().Data as TaskData[])
                    .catch(this.handleError);
*/    
  }

  handleError(error: any){
    console.log(error);

  }
    
}
