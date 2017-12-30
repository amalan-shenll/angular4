import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver} from '@angular/core';
import { CompDirective } from '../comp.directive';
import { CompCComponent } from '../comp-c/comp-c.component';
import { CompBComponent } from '../comp-b/comp-b.component';
import { CompAComponent } from '../comp-a/comp-a.component';

@Component({
  selector: 'app-comp-loader',
  templateUrl: './comp-loader.component.html',
  styleUrls: ['./comp-loader.component.scss']
})
export class CompLoaderComponent implements OnInit {

  comps = [CompAComponent,CompBComponent,CompCComponent]
  @ViewChild(CompDirective) adHost;
  currentAddIndex: number = -1;
  interval: any; 
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.repeatComps();
  }
  
  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAddIndex = (this.currentAddIndex + 1) % this.comps.length;
    let adItem = this.comps[this.currentAddIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
  }

  repeatComps() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

}
