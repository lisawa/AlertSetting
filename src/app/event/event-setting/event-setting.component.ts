import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventTemplateData } from '../EventTemplateData';

@Component({
  moduleId: module.id,
  selector: 'event-setting',
  templateUrl: 'event-setting.component.html',
  styleUrls: ['event-setting.component.css']
})
export class EventSettingComponent implements OnInit {
  @Input() NowSettingEvent: EventTemplateData;

  ngOnInit(){
      this.NowSettingEvent= 
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
      };
  }

  constructor() { }

}
