import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Club} from "../model/club";

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  private URL: string = 'http://localhost:8080/echecs/rest/club';

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

  public findAll(): Observable<Array<Club>> {
    this.initOption();
    return this.httpClient.get<Array<Club>>(this.URL, this.options);
  }

  public findById(id: number): Observable<Club> {
    this.initOption();
    return this.httpClient.get<Club>(this.URL + '/' + id, this.options);
  }

  public delete(id: number): Observable<any> {
    this.initOption();
    return this.httpClient.delete(this.URL + '/' + id, this.options);
  }

  public update(club: Club): Observable<any> {
    this.initOption();
    const o: object = {
      'id': club.id,
      'nom': club.nom,
      'adresse': club.adresse,
      'membres': club.membres,
      'tournois': club.tournois
    };
    return this.httpClient.put(this.URL + '/' + club.id, o, this.options);
  }

  public create(club: Club): Observable<any> {
    this.initOption();
    const o: object = {
      'nom': club.nom,
      'adresse': club.adresse,
      'membres': club.membres,
      'tournois': club.tournois
    }
    return this.httpClient.post(this.URL, o, this.options);
  }

}
