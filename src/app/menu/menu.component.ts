import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  topics = [
    {link: "displayData", name: "Displaying Data"},
    {link: "templateSyntax", name: "Template Syntax"},
    {link: "lifecycleHooks", name: "Lifecycle Hooks"},
    {link: "componentInteraction", name: "Component Interaction"},
    {link: "componentStyles", name: "Component Styles"},
    {link: "dynamicComponents", name: "Dynamic Components"},
    {link: "attributeDirectives", name: "Attribute Directives"},
    {link: "structuralDirectives", name: "Structural Directives"},
    {link: "pipes", name: "Pipes"},
    {link: "animations", name: "Animations"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
