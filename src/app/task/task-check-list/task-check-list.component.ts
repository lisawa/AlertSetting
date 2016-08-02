import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {TaskCheckData} from '../TaskCheckData';

@Component({
  moduleId: module.id,
  selector: 'task-check-list',
  templateUrl: 'task-check-list.component.html',
  styleUrls: ['task-check-list.component.css']
})
export class TaskCheckListComponent implements OnInit {
  
  @Input() TaskCheckList: TaskCheckData[];
  @Output() SelectedCheck = new EventEmitter();

  OnSelectCheck(check: TaskCheckData){
      this.SelectedCheck.next(check);
  }

  constructor() { }

  ngOnInit() {
  }

}
