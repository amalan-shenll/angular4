import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-templatesyntax',
  templateUrl: './templatesyntax.component.html',
  styleUrls: ['./templatesyntax.component.scss']
})
export class TemplatesyntaxComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  back(){
    this._location.back();
  }

}
