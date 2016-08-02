import { Component, Input } from '@angular/core';
import { TopbarComponent } from './topbar/topbar.component';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {  } from './action.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TopbarComponent, ROUTER_DIRECTIVES],
})
export class AppComponent {
    @Input() TopBarHeight: number;
    @Input() ViewHeight: number;

    constructor(private router: Router){
      this.TopBarHeight = 70;
      this.ViewHeight = window.innerHeight - this.TopBarHeight;
    }

    OnSelectPage(value){
      console.log(value);
      this.router.navigate([value]);
    }
}

