/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { TaskCheckListComponent } from './task-check-list.component';

describe('Component: TaskCheckList', () => {
  it('should create an instance', () => {
    let component = new TaskCheckListComponent();
    expect(component).toBeTruthy();
  });
});
