import {Injectable} from '@angular/core';
import {CanActivate, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CanActivateService implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(): boolean {
    const user = sessionStorage.getItem('user');
    if (user) {
      return true;
    } else {
      this.router.navigate(['/error'], {queryParams: {error: 'authentification requise'}});
    }
    return false;
  }
}
