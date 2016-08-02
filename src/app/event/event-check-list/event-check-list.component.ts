import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CheckGroupData } from '../CheckGroupData';

@Component({
  moduleId: module.id,
  selector: 'event-check-list',
  templateUrl: 'event-check-list.component.html',
  styleUrls: ['event-check-list.component.css']
})
export class EventCheckListComponent implements OnInit {

  @Input() CheckGroupList: CheckGroupData[];
  @Output() OnSelected = new EventEmitter();

  OnSelectedCheck(c: CheckGroupData){
      this.OnSelected.next(c);
  }

  constructor() { }

  ngOnInit() {
  }

}
