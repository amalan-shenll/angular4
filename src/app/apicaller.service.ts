import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApicallerService {

  constructor(public http:Http) { }
  loadAllData(){
    var url="https://ghibliapi.herokuapp.com/films/";
    var response=this.http.get(url).map(res=>res.json());
    return response;
  }

}
