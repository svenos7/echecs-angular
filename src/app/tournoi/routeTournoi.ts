import {Routes} from "@angular/router";
import {CanActivateService} from "../login/services/can-activate.service";
import {TournoiComponent} from "./tournoi/tournoi.component";
import {EditTournoiComponent} from "./edit-tournoi/edit-tournoi.component";

export const routeTournoi: Routes = [
  {path: 'tournoi', component: TournoiComponent, canActivate: [CanActivateService]},
  {path: 'tournoi/edit', component: EditTournoiComponent, canActivate: [CanActivateService]}
];
