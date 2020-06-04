import {Injectable} from '@angular/core';
import {Login} from '../model/login';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private client: HttpClient) {
  }

  login(user: Login): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(`${user.login}:${user.password}`)
    });
    return this.client.get(`http://localhost:8080/echecs/rest/login/${user.login}`, {headers: headers});
  }
}
