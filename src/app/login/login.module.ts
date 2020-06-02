import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InscriptionComponent} from './inscription/inscription.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {routeLogin} from "./routeLogin";
import {HttpClientModule} from "@angular/common/http";
import {CanActivateService} from "./services/can-activate.service";
import {InscriptionService} from "./services/inscription.service";
import {LoginService} from "./services/login.service";

@NgModule({
  declarations: [InscriptionComponent, LoginComponent],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(routeLogin), HttpClientModule, ReactiveFormsModule
  ],
  providers: [CanActivateService, InscriptionService, LoginService],
  exports: [InscriptionComponent, LoginComponent]
})
export class LoginModule {
}
