import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TaskModel } from './TaskData';
import { TaskEventData } from './TaskEventData';
import { TaskCheckData } from './TaskCheckData';
import { TaskData } from '../Model/task-data';

import { TaskCheckListComponent } from './task-check-list/task-check-list.component';
import { TaskEventListComponent } from './task-event-list/task-event-list.component';
import { TaskSettingComponent } from './task-setting/task-setting.component';
import { EventSettingComponent } from './event-setting/event-setting.component'

import { TaskService } from './task.service';

@Component({
  moduleId: module.id,
  selector: 'app-task',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.css'],
  directives: [
      TaskCheckListComponent,
      TaskEventListComponent,
      TaskSettingComponent,
      EventSettingComponent,
      ],
  providers: [TaskService],
})
export class TaskComponent implements OnInit {
  @Input() TaskList: TaskModel[];
  @Input() CheckGroupOnSelect: TaskCheckData[];
  @Input() CheckDataOnSelect: TaskCheckData;
  @Input() SelectedCheckName: string;
  @Input() TaskDataList: any;//TaskData[];
  sub: any;
  error: any;

  GetSelectedCheckGroup(c: TaskCheckData[]){
      this.CheckGroupOnSelect = c;
  }

  GetSelectCheck(c: TaskCheckData){
      this.SelectedCheckName = c.Description;
  }

  constructor(private taskService: TaskService){
      this.sub = this.taskService.GetTask().then(
          td => {
              this.TaskDataList = td;
              console.log(this.TaskDataList);
          }
      )

      this.TaskList = [
          {
              TaskName:'01_HoldLotCheck',
              Description:'扣留通知',
              EventList:[
                  {
                      EventSID:'A2016052523250144970000',
                      EventName:'HoldLotEvent',
                      EventDescription:'批號扣留',
                      CheckGroupList:[
                          {
                              CheckGroupSeq:0,
                              Description:'發生扣留',
                          }
                      ],
                  },
                  {
                      EventSID:'A2016052523250144980000',
                      EventName:'HoldLotEvent1',
                      EventDescription:'扣留次數警報',
                      CheckGroupList:[
                          {
                              CheckGroupSeq:0,
                              Description:'扣留3次以上',
                          },
                          {
                              CheckGroupSeq:1,
                              Description:'扣留2次',
                          },
                          {
                              CheckGroupSeq:2,
                              Description:'發生扣留',
                          },
                      ],
                  }
              ],
              Display:false,
          },
          {
              TaskName:'02_DefectCheck',
              Description:'報廢數量過多通知',
              EventList:[],
              Display:false,
          },
          {
              TaskName:'03_WoYieldCheck',
              Description:'工單良率過低通知',
              EventList:[],
              Display:false,
          },
      ];
  }

  ngOnInit() {
  }

}
