import { Component, OnInit } from '@angular/core';
import { ApicallerService } from "../apicaller.service";

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.scss'],
  providers: [ApicallerService]
})
export class ArchitectureComponent implements OnInit {

  dataBinding = "Data binding";
  dataImg = "assets/images/databinding.png";
  name = "";
  display = true;
  angulars = ["*ngIf","*ngFor"];
  constructor(public apiCaller:ApicallerService) { 
    this.apiCaller.loadAllData().subscribe(data=>{
      console.log(data);
    })
  }

  ngOnInit() {
  }

  sayHello(){
    alert("Hello !" + this.name);
  }

}
