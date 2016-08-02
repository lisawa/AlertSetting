import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CheckGroupData } from '../CheckGroupData';

@Component({
  moduleId: module.id,
  selector: 'check-setting',
  templateUrl: 'check-setting.component.html',
  styleUrls: ['check-setting.component.css']
})
export class CheckSettingComponent implements OnInit {

  constructor() { }

  @Input() CheckGroup: CheckGroupData;
  @Input() testS: string;
  
  ngOnInit(){
      this.CheckGroup = {
          AttritubeName: 'Lot',   
          AttritubeType: 'System',
          Caption: '批號',
          Sequence: 0,
          CheckOperator: 'Like',
          CheckType: 'Value',
          CheckValue: '',
      };
  }
}
