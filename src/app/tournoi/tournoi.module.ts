import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CanActivateService} from "../login/services/can-activate.service";
import {EditTournoiComponent} from "./edit-tournoi/edit-tournoi.component";
import {TournoiComponent} from "./tournoi/tournoi.component";
import {TournoiService} from "./service/tournoi.service";
import {routeTournoi} from "./routeTournoi";



@NgModule({
  declarations: [TournoiComponent, EditTournoiComponent],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(routeTournoi), HttpClientModule, ReactiveFormsModule
  ],
  providers: [CanActivateService, TournoiService],
  exports: [TournoiComponent, EditTournoiComponent]
})
export class TournoiModule {
}
