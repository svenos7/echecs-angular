import {Component} from '@angular/core';

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
    sessionStorage.removeItem('role');
  }

  public get role() {
    return sessionStorage.getItem('role');
  }

  public affichageRole(role: string): string {
    if (role === 'ROLE_ADMIN') {
      return 'Administrateur';
    } else if (role === 'ROLE_MODO') {
      return 'Modérateur';
    } else {
      return 'Utilisateur';
    }
  }


}
