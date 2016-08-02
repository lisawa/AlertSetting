import { Component, Output, EventEmitter } from '@angular/core';
import { InkButton } from '../component/inkButton';


@Component({
  moduleId: module.id,
  selector: 'topbar',
  templateUrl: 'topbar.component.html',
  styleUrls: ['topbar.component.css'],
  directives: [InkButton],
})
export class TopbarComponent {
  @Output() SelectPage = new EventEmitter();

  constructor() { 

  }

  OnSelectPage(value){
    this.SelectPage.next(value);
  }

}
