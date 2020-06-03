import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../model/login';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private url: string = 'http://localhost:8080/echecs/rest/inscription';

  constructor(private client: HttpClient) {
  }

  public inscription(user: Login): Observable<any> {
    const o = {
      login: user.login,
      password: user.password,
      membre: {
        prenom: user.membre.prenom,
        nom: user.membre.nom,
        email: user.membre.email
      }
    };
    return this.client.post(this.url, o);
  }

  public disponibilite(login: string): Observable<boolean> {
    return this.client.get<boolean>(this.url + '/' + login);
  }

}
