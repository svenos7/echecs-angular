import {Routes} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {ReglesComponent} from "./regles/regles.component";

export const routeStatic: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'regles', component: ReglesComponent}
];
