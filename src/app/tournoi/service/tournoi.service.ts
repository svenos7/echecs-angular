import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Tournoi} from "../model/tournoi";

@Injectable({
  providedIn: 'root'
})
export class TournoiService {

  private URL: string = 'http://localhost:8080/echecs/rest/tournoi';

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

  public findAll(): Observable<Array<Tournoi>> {
    this.initOption();
    return this.httpClient.get<Array<Tournoi>>(this.URL, this.options);
  }

  public findById(id: number): Observable<Tournoi> {
    this.initOption();
    return this.httpClient.get<Tournoi>(this.URL + '/' + id, this.options);
  }

  public delete(id: number): Observable<any> {
    this.initOption();
    return this.httpClient.delete(this.URL + '/' + id, this.options);
  }

  public update(tournoi: Tournoi): Observable<any> {
    this.initOption();
    const o: object = {
      'id': tournoi.id,
      'nom': tournoi.nom,
      'date': tournoi.date,
      'nbRondes': tournoi.nbRondes,
      'salle': tournoi.salle,
      'fraisInscription': tournoi.fraisInscription,
      'prix': tournoi.prix,
      'cadence': tournoi.cadence,
      'arbitre': tournoi.arbitre,
      'organisateur': tournoi.organisateur,
      'parties': tournoi.parties,
      'participations': tournoi.participations
    };
    return this.httpClient.put(this.URL + '/' + tournoi.id, o, this.options);
  }

  public create(tournoi: Tournoi): Observable<any> {
    this.initOption();
    const o: object = {
      'nom': tournoi.nom,
      'date': tournoi.date,
      'nbRondes': tournoi.nbRondes,
      'salle': tournoi.salle,
      'fraisInscription': tournoi.fraisInscription,
      'prix': tournoi.prix,
      'cadence': tournoi.cadence,
      'arbitre': tournoi.arbitre,
      'organisateur': tournoi.organisateur,
      'parties': tournoi.parties,
      'participations': tournoi.participations
    }
    return this.httpClient.post(this.URL, o, this.options);
  }

}
