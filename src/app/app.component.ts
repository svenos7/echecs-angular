import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'echecs-angular';

  public get login() {
    return sessionStorage.getItem('login');
  }

  public logout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('login');
  }
}
