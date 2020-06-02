import {Routes} from "@angular/router";
import {CanActivateService} from "../login/services/can-activate.service";
import {ClubComponent} from "./club/club.component";
import {EditClubComponent} from "./edit-club/edit-club.component";

export const routeClub: Routes = [
  {path: 'club', component: ClubComponent, canActivate: [CanActivateService]},
  {path: 'club/edit', component: EditClubComponent, canActivate: [CanActivateService]}
  ];
