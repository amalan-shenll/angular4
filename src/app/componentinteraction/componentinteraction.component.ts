import { Component, OnInit, ViewChild } from '@angular/core';
import { AnotherChildComponent } from '../another-child/another-child.component';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-componentinteraction',
  templateUrl: './componentinteraction.component.html',
  styleUrls: ['./componentinteraction.component.scss']
})
export class ComponentinteractionComponent implements OnInit {


  @ViewChild(AnotherChildComponent) anotherChild;
  parentMsg : string = "";
  siblingMsg : string = "";

  colorCode = [
    {
      color: "red",
      value: "#f00"
    },
    {
      color: "green",
      value: "#0f0"
    },
    {
      color: "blue",
      value: "#00f"
    },
    {
      color: "cyan",
      value: "#0ff"
    },
    {
      color: "magenta",
      value: "#f0f"
    },
    {
      color: "yellow",
      value: "#ff0"
    },
    {
      color: "black",
      value: "#000"
    }
  ]

  constructor(public inter:InteractionService) { 
  }

  ngOnInit() {
    this.parentMsg = this.anotherChild.childMessage;
    this.inter.currentMessage.subscribe(message => this.siblingMsg = message)
  }

  showColorInParent = function(color){
    alert(color);
  }

}
