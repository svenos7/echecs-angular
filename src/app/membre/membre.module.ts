import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {MembreComponent} from "./membre/membre.component";
import {MembreService} from "./service/membre.service";
import {InfosMembreComponent} from "./infos-membre/infos-membre.component";
import {routeMembre} from "./routeMembre";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [MembreComponent, InfosMembreComponent],
  imports: [
    CommonModule, RouterModule.forChild(routeMembre), HttpClientModule
  ],
  providers: [MembreService]
})
export class MembreModule { }
