import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', pathMatch:'full',redirectTo:'start' },
  { path: 'start', component: StartComponent },
  { path: 'menu', component: MenuComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
