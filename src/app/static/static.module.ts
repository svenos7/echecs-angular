import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import {RouterModule} from '@angular/router';
import {routeStatic} from './routeStatic';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule, RouterModule.forChild(routeStatic)
  ]
})
export class StaticModule { }
