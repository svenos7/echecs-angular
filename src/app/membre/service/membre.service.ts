import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Membre} from "../model/membre";

@Injectable({
  providedIn: 'root'
})
export class MembreService {

  private URL: string = 'http://localhost:8080/echecs/rest/membre';

  private headers: HttpHeaders;
  private options: object;

  constructor(private httpClient: HttpClient) {
  }

  private initOption() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + sessionStorage.getItem('user')
    });
    this.options = {headers: this.headers};
  }
  public findAll(): Observable<Array<Membre>> {
    this.initOption();
    return this.httpClient.get<Array<Membre>>(this.URL, this.options);
  }
  public infos(id: number): Observable<Array<number>> {
    this.initOption();
    return this.httpClient.get<Array<number>>(this.URL + '/infos/' + id, this.options)
  }

  public findById(id: number): Observable<Membre> {
    this.initOption();
    return this.httpClient.get<Membre>(this.URL + '/' + id, this.options);
  }

  public delete(id: number): Observable<any> {
    this.initOption();
    return this.httpClient.delete(this.URL + '/' + id, this.options);
  }

  public update(membre: Membre): Observable<any> {
    this.initOption();
    const o: object = {
      'prenom': membre.prenom,
      'nom': membre.nom,
      'civilite': membre.civilite,
      'nationalite': membre.nationalite,
      'elo': membre.elo,
      'email': membre.email,
      'adresse': membre.adresse,
      'partieBlancs': membre.partieBlancs,
      'partieNoirs': membre.partieNoirs,
      'club': membre.club
    }
    return this.httpClient.put(this.URL + '/' + membre.id, o, this.options);
  }

  public create(membre: Membre): Observable<any> {
    this.initOption();
    const o: object = {
      'prenom': membre.prenom,
      'nom': membre.nom,
      'civilite': membre.civilite,
      'nationalite': membre.nationalite,
      'elo': membre.elo,
      'email': membre.email,
      'adresse': membre.adresse,
      'partieBlancs': membre.partieBlancs,
      'partieNoirs': membre.partieNoirs,
      'club': membre.club
    }
    return this.httpClient.post(this.URL, o, this.options);
  }
}
