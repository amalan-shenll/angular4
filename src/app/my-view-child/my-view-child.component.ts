import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-view-child',
  templateUrl: './my-view-child.component.html',
  styleUrls: ['./my-view-child.component.scss']
})
export class MyViewChildComponent implements OnInit {

  @Input() colorcode;
  @Output() clickColor: EventEmitter<String> =new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  showColor(event,color){
    this.clickColor.emit(color);
  }

}
