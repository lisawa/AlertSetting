import { Component, OnInit } from '@angular/core';
import {TaskEventActionData} from '../TaskEventActionData';

@Component({
  moduleId: module.id,
  selector: 'task-event-action',
  templateUrl: 'task-event-action.component.html',
  styleUrls: ['task-event-action.component.css']
})
export class TaskEventActionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  taskEventActionData: TaskEventActionData = {
      TaskName: "01_HoldLotCheck",
      EventList: [
          "HoldLotEvent1",
          "HoldLotEvent"
      ],
      ActionList: [
          "HoldWeChatSender"
      ]
  };
}
