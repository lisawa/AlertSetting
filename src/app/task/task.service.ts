import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TaskData } from '../Model/task-data';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TaskService {
  constructor(private http:Http) { }

  url: string = 'http://192.168.100.153/taskserver/TaskSetting/';

  public GetTask(){
    return this.http.get(this.url + 'GetTaskDetail')
               .toPromise()
               .then(Response => Response.json().Data as TaskData[])
               .catch(this.handleError);
  }

  handleError(error: any){
    console.log(error);
  }
}
