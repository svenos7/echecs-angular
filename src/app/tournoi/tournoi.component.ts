import {Component, OnInit} from '@angular/core';
import {TournoiService} from "../services/tournoi.service";
import {Tournoi} from "../model/tournoi";

@Component({
  selector: 'app-tournoi',
  templateUrl: './tournoi.component.html',
  styleUrls: ['./tournoi.component.css']
})
export class TournoiComponent implements OnInit {

  private _tournois: Tournoi[] = [];

  constructor(private tournoiService: TournoiService) {
  }

  ngOnInit() {
    this.initTournois();
  }

  private initTournois() {
    this.tournoiService.findAll().subscribe(datas => {
      this._tournois = datas;
    });
  }

  get tournois(): Tournoi[] {
    return this._tournois;
  }

  set tournois(value: Tournoi[]) {
    this._tournois = value;
  }

  public delete(id: number) {
    this.tournoiService.delete(id).subscribe(res => {
      this.initTournois();
    });
  }

}
