import {Routes} from "@angular/router";
import {MembreComponent} from "./membre/membre.component";
import {InfosMembreComponent} from "./infos-membre/infos-membre.component";

export const routeMembre: Routes = [
  {path: 'membre', component: MembreComponent},
  {path: 'membre/infos', component: InfosMembreComponent}
];
