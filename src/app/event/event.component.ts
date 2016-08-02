import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { EventTemplateData } from './EventTemplateData';
import { CheckGroupData } from './CheckGroupData';

import { EventTemplateListComponent } from './event-template-list/event-template-list.component';
import { EventCheckListComponent } from './event-check-list/event-check-list.component';
import { EventSettingComponent } from './event-setting/event-setting.component';
import { CheckSettingComponent } from './check-setting/check-setting.component'; 

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
})
export class EventComponent implements OnInit {

  ngOnInit() {
  }

  @Input() EventData: EventTemplateData[];
  @Input() NowSettingEvent:EventTemplateData;
  @Input() SelectedGroup: CheckGroupData[];
  @Input() NowSettingCheck: CheckGroupData;
  @Input() NowSelectedCheck: string;
  @Input() NowContentType: string;

  GetSelectedTemplate(value: EventTemplateData){
      this.NowContentType = 'Event';
      this.SelectedGroup = value.CheckList;
      this.NowSettingEvent = value;
  }

  GetSelectedCheck(value: CheckGroupData){
      this.NowContentType = 'Check';
      this.NowSettingCheck = value;
  }

    constructor(){
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
