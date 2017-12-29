import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [
    trigger('liState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class AnimationsComponent implements OnInit {

  constructor(private _location: Location) { }
  liState :string = "active";
  ngOnInit() {
  }

  back(){
    this._location.back();
  }

  toggleState(){
    if(this.liState == 'active') this.liState = 'inactive';
    else this.liState = 'active';
  }

}
