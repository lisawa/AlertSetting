import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
//import { ActionNavigationComponent} from './action-navigation/action-navigation.component';
//import {LineSettingComponent} from './line-setting/line-setting.component';

@Component({
  moduleId: module.id,
  selector: 'app-action',
  templateUrl: 'action.component.html',
  styleUrls: ['action.component.css'],
  directives: [ROUTER_DIRECTIVES],
})

export class ActionComponent {

  GetSelected(value: string){
    console.log(value);
    this.router.navigate(['Action/' + value]);
  }

  ngOnInit(){

  }
  constructor(private router: Router){
    
  }
}
