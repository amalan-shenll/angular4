import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent implements OnInit {

  message:string = "";
  inputMsg:string = "";

  constructor(public inter:InteractionService) { }

  ngOnInit() {
    this.inter.currentMessage.subscribe(message => this.message = message);
  }

  setMessage() {
    this.inter.changeMessage(this.inputMsg);
    this.inter.currentMessage.subscribe(message => this.message = message);
  }

}
