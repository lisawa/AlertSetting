import { Component, OnInit } from '@angular/core';

import {RuleTaskListComponent} from './rule-task-list/rule-task-list.component';
import {TaskEventActionComponent} from './task-event-action/task-event-action.component';
import {TaskData} from '../task/TaskData';

@Component({
    moduleId: module.id,
    selector: 'app-wip-setting',
    templateUrl: 'wip-setting.component.html',
    styleUrls: ['wip-setting.component.css'],
    directives: [RuleTaskListComponent, TaskEventActionComponent]
})

export class WipSettingComponent implements OnInit {
    public users: any[] = [];
    public selectedUsers: any[] = [];

    constructor() {
        for (var i = 1; i <= 5; i++) {
            this.users.push({
                value: i,
                name: ("athlete-" + i),
                id: ("id-" + i),
                selected: false
            })
        }
    }

    ngOnInit() {
    }

    GetSelectedTask(t: TaskData) {
        alert('Main' + t.TaskName);
    }

    toggleMultiSelect(event, val) {
        event.preventDefault();
        if (this.selectedUsers.indexOf(val) == -1) {
            this.selectedUsers = [...this.selectedUsers, val];
            val.selected = true;
        } else {
            this.selectedUsers = this.selectedUsers.filter(function (elem) {
                return elem != val;
            })
            val.selected = false;
        }
    }

}
