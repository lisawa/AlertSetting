import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { EventTemplateData } from '../EventTemplateData';

@Component({
  moduleId: module.id,
  selector: 'event-template-list',
  templateUrl: 'event-template-list.component.html',
  styleUrls: ['event-template-list.component.css']
})
export class EventTemplateListComponent implements OnInit {
  @Input() TemplateList: EventTemplateData[];
  @Output() OnSelected = new EventEmitter(); 

  OnSelectedTemplate(t: EventTemplateData){
      this.OnSelected.next(t);
  }

  constructor(){
      
  }

  ngOnInit() {
  }

}
