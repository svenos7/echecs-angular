import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import {LoginModule} from "./login/login.module";
import {ClubModule} from "./club/club.module";
import {TournoiModule} from "./tournoi/tournoi.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    LoginModule,
    ClubModule,
    TournoiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
