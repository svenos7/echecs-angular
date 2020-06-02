import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {TournoiComponent} from "./tournoi/tournoi.component";
import {EditTournoiComponent} from "./edit-tournoi/edit-tournoi.component";
import {ClubComponent} from "./club/club.component";
import {EditClubComponent} from "./edit-club/edit-club.component";


export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'tournoi', component: TournoiComponent},
  {path: 'tournoi/edit', component: EditTournoiComponent},
  {path: 'club', component: ClubComponent},
  {path: 'club/edit', component: EditClubComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
  ];
