import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";


import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { MenuComponent } from './menu/menu.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { DisplaydataComponent } from './displaydata/displaydata.component';
import { TemplatesyntaxComponent } from './templatesyntax/templatesyntax.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ComponentinteractionComponent } from './componentinteraction/componentinteraction.component';
import { ComponentstylesComponent } from './componentstyles/componentstyles.component';
import { DynamiccomponentsComponent } from './dynamiccomponents/dynamiccomponents.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { AnimationsComponent } from './animations/animations.component';

import { ApicallerService } from "./apicaller.service";
import { AreaOfCirclePipe } from './area-of-circle.pipe';
import { TrueOnlyPipe } from './true-only.pipe';
import { TimeAgoPipe } from 'time-ago-pipe';

//for angular animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', pathMatch:'full',redirectTo:'start' },
  { path: 'start', component: StartComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'architecture', component: ArchitectureComponent },
  { path: "displayData", component: DisplaydataComponent },
  { path: "templateSyntax", component: TemplatesyntaxComponent},
  { path: "lifecycleHooks", component: LifecyclehooksComponent},
  { path: "componentInteraction", component: ComponentinteractionComponent},
  { path: "componentStyles", component: ComponentstylesComponent},
  { path: "dynamicComponents", component: DynamiccomponentsComponent},
  { path: "attributeDirectives", component: AttributeDirectivesComponent},
  { path: "structuralDirectives", component: StructuralDirectivesComponent},
  { path: "pipes", component: PipesComponent},
  { path: "animations", component: AnimationsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    MenuComponent,
    ArchitectureComponent,
    DisplaydataComponent,
    TemplatesyntaxComponent,
    LifecyclehooksComponent,
    ComponentinteractionComponent,
    ComponentstylesComponent,
    DynamiccomponentsComponent,
    AttributeDirectivesComponent,
    StructuralDirectivesComponent,
    PipesComponent,
    AnimationsComponent,
    AreaOfCirclePipe,
    TrueOnlyPipe,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule, 
    BrowserAnimationsModule
  ],
  providers: [ApicallerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
