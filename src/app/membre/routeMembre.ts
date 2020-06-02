import {Routes} from "@angular/router";
import {MembreComponent} from "./membre/membre.component";
import {InfosMembreComponent} from "./infos-membre/infos-membre.component";
import {EditMembreComponent} from "./edit-membre/edit-membre.component";

export const routeMembre: Routes = [
  {path: 'membre', component: MembreComponent},
  {path: 'membre/infos', component: InfosMembreComponent},
  {path: 'membre/edit', component: EditMembreComponent}
];
