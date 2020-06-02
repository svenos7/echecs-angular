import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {MembreComponent} from "./membre/membre.component";
import {MembreService} from "./service/membre.service";
import {InfosMembreComponent} from "./infos-membre/infos-membre.component";
import {routeMembre} from "./routeMembre";
import {HttpClientModule} from "@angular/common/http";
import { EditMembreComponent } from './edit-membre/edit-membre.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [MembreComponent, InfosMembreComponent, EditMembreComponent],
  imports: [
    CommonModule, RouterModule.forChild(routeMembre), HttpClientModule, FormsModule
  ],
  providers: [MembreService]
})
export class MembreModule { }
