import { Component, OnInit } from '@angular/core';
import { ApicallerService } from '../apicaller.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.scss']
})
export class DisplaydataComponent implements OnInit {
  movies:any;
  constructor(public apiCaller:ApicallerService, private _location: Location) {
    this.apiCaller.loadAllData().subscribe(data=>{
      console.log(data);
      this.movies = data;
    });
   }

  ngOnInit() {
  }
  
  back(){
    this._location.back();
  }

}
