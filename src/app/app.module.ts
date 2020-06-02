import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TournoiComponent } from './tournoi/tournoi.component';
import { ClubComponent } from './club/club.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {HttpClientModule} from "@angular/common/http";
import { EditTournoiComponent } from './edit-tournoi/edit-tournoi.component';
import { HomeComponent } from './home/home.component';
import { EditClubComponent } from './edit-club/edit-club.component';
import {LoginModule} from "./login/login.module";
import {MembreModule} from "./membre/membre.module";

@NgModule({
  declarations: [
    AppComponent,
    TournoiComponent,
    ClubComponent,
    EditTournoiComponent,
    HomeComponent,
    EditClubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    LoginModule,
    MembreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
