import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.scss']
})
export class LifecyclehooksComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
    console.log("ng on init");
  }

  back(){
    this._location.back();
  }

  ngOnChanges(){
    console.log("ng on changes");
  }

  ngDoCheck(){
    console.log("ng do check");
  }

  ngAfterContentInit(){
    console.log("ng after content init");
  }

  ngAfterContentChecked(){
    console.log("ng after content checked");
  }

  ngAfterViewInit(){
    console.log("ng after view init");
  }

  ngAfterViewChecked(){
    console.log("ng after view checked");
  }

  ngOnDestroy(){
    console.log("ng on destroy");
  }

}
