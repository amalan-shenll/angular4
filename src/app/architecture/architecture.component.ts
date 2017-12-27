import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.scss']
})
export class ArchitectureComponent implements OnInit {

  dataBinding = "Data binding";
  dataImg = "assets/images/databinding.png";
  name = "";
  display = true;
  angulars = ["*ngIf","*ngFor"];
  constructor(private _location: Location) { 

  }

  ngOnInit() {
  }

  sayHello(){
    alert("Hello !" + this.name);
  }

  back(){
    this._location.back();
  }

}
