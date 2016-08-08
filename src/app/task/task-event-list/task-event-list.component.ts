import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TaskModel } from '../TaskData';
import {TaskEventData} from '../TaskEventData';

@Component({
  moduleId: module.id,
  selector: 'task-event-list',
  templateUrl: 'task-event-list.component.html',
  styleUrls: ['task-event-list.component.css']
})
export class TaskEventListComponent implements OnInit {
    @Input() TaskList: TaskModel[];
    @Output() OnSelectCheckGroup = new EventEmitter(); 

    ChangeDisplay(task:TaskModel){
        task.Display = !task.Display;
    }

    SelectedEvent(e: TaskEventData){
        this.OnSelectCheckGroup.next(e.CheckGroupList);
    }

  constructor() { }

  ngOnInit() {
  }

}
