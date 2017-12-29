import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  today : any;
  name : string = "Shenll Technologies";
  price : number = 1898.7987566;
  tax : number = 0.12;
  radius : number = 2;
  currentTimeStamp : any;
  students =[
    {name:'amalan',pass:false},
    {name:'paddy',pass:true},
    {name:'anand',pass:true},
    {name:'mani',pass:false}
  ]
  constructor(private _location: Location) {
    this.today = new Date();
    this.currentTimeStamp = new Date().getTime();
   }

  ngOnInit() {
  }

  back(){
    this._location.back();
  }
}
