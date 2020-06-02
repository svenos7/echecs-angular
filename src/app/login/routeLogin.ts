import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {InscriptionComponent} from "./inscription/inscription.component";

export const routeLogin: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'inscription', component: InscriptionComponent}
];
