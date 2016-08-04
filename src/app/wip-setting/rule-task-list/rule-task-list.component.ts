import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MODAL_DIRECTIVES } from 'ng2-bs3-modal/ng2-bs3-modal';

import {RuleData} from '../RuleData';
import {TaskData} from '../../task/TaskData';

@Component({
  moduleId: module.id,
  selector: 'rule-task-list',
  templateUrl: 'rule-task-list.component.html',
  styleUrls: ['rule-task-list.component.css'],
  directives: [MODAL_DIRECTIVES]
})
export class RuleTaskListComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  @Output() OnSelectTask = new EventEmitter();

  private selectedRule: string; 
  private rules: string[] = ['Rule1', 'Rule2', 'Rule3'];
  private tasks: string[] = ['Task1', 'Task2', 'Task3'];
  ruleList: RuleData[] = [
      {
          RuleName: 'All',
          TaskList: [
              {
                  TaskName: '01_HoldLotCheck',
                  Description: '扣留通知',
                  EventList: [],
                  Display: true
              },
              {
                  TaskName: '02_DefectCheck',
                  Description: '報廢數量過多通知',
                  EventList: [],
                  Display: true
              }
          ],
          Display: false,
      }
  ];

  ChangeDisplay(rule: RuleData) {
      rule.Display = !rule.Display;
  }

  SelectedEvent(e: TaskData) {
      //alert('inner' + e.TaskName);
      this.OnSelectTask.next(e);
  }

}
