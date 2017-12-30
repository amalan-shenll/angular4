import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another-child',
  templateUrl: './another-child.component.html',
  styleUrls: ['./another-child.component.scss']
})
export class AnotherChildComponent implements OnInit {

  childMessage: string = "Msg from child!";

  constructor() { }

  ngOnInit() {
  }

}
