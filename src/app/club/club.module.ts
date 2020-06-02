import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ClubComponent} from "./club/club.component";
import {CanActivateService} from "../login/services/can-activate.service";
import {ClubService} from "./service/club.service";
import {EditClubComponent} from "./edit-club/edit-club.component";
import {routeClub} from "./routeClub";



@NgModule({
  declarations: [ClubComponent, EditClubComponent],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(routeClub), HttpClientModule, ReactiveFormsModule
  ],
  providers: [CanActivateService, ClubService],
  exports: [ClubComponent, EditClubComponent]
})
export class ClubModule {
}
