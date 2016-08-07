import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { EventTemplateData } from './EventTemplateData';
import { CheckGroupData } from './CheckGroupData';

import { EventTemplateListComponent } from './event-template-list/event-template-list.component';
import { EventCheckListComponent } from './event-check-list/event-check-list.component';
import { EventSettingComponent } from './event-setting/event-setting.component';
import { CheckSettingComponent } from './check-setting/check-setting.component'; 

import { EventService } from './event.service';
//import { TaskData } from './task-data';
import { Http, Response, Headers } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-event',
  templateUrl: 'event.component.html',
  styleUrls: ['event.component.css'],
  directives: 
    [
      EventTemplateListComponent,
      EventCheckListComponent,
      EventSettingComponent,
      CheckSettingComponent,
    ],
  providers:[ EventService ],
})


export class EventComponent implements OnInit {
  error: any;
  sub: any;
  //tl: TaskData[];

  @Input() EventData: EventTemplateData[];
  @Input() NowSettingEvent:EventTemplateData;
  @Input() SelectedGroup: CheckGroupData[];
  @Input() NowSettingCheck: CheckGroupData;
  @Input() NowSelectedCheck: string;
  @Input() NowContentType: string;

  ngOnInit() {
      /*
      this.sub = this.service.GetTask().then(td => {
            this.tl = td;
            console.log(this.tl);
      });
      */
  }

  GetSelectedTemplate(value: EventTemplateData){
      this.NowContentType = 'Event';
      this.SelectedGroup = value.CheckList;
      this.NowSettingEvent = value;
      console.log(this.NowContentType);
  }

  GetSelectedCheck(value: CheckGroupData){
      this.NowContentType = 'Check';
      this.NowSettingCheck = value;
      console.log(this.NowContentType);
  }

    constructor(private service: EventService,private http: Http){
      this.NowContentType = 'Check';
      this.EventData = [
          {
              TaskName: '',
              EventName: '扣留',
              CheckList: [
                  {
                      AttritubeName: 'Lot',
                      AttritubeType: 'System',
                      Caption: '批號',
                      Sequence: 0,
                      CheckOperator: 'Like',
                      CheckType: 'Value',
                      CheckValue: 'CheckValue',
                  }
              ],
          },
          {
              TaskName: '',
              EventName: '扣留次數',
              CheckList: [
                  {
                      AttritubeName: 'Lot',
                      AttritubeType: 'System',
                      Caption: '批號',
                      Sequence: 0,
                      CheckOperator: 'Like',
                      CheckType: 'Value',
                      CheckValue: 'CheckValue',
                  },
                  {
                      AttritubeName: 'Count',
                      AttritubeType: 'System',
                      Caption: '次數',
                      Sequence: 1,
                      CheckOperator: '<',
                      CheckType: 'Value',
                      CheckValue: 'CheckValue',
                  }
              ],
          },
      ];
    }
}
