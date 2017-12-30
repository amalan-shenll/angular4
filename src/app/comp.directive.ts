import { Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appComp]'
})
export class CompDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
