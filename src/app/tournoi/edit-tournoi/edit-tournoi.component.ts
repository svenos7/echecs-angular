import { Component, OnInit } from '@angular/core';
import {Tournoi} from "../model/tournoi";
import {TournoiService} from "../service/tournoi.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Cadence} from "../../model/cadence.enum";

@Component({
  selector: 'app-edit-tournoi',
  templateUrl: './edit-tournoi.component.html',
  styleUrls: ['./edit-tournoi.component.css']
})
export class EditTournoiComponent implements OnInit {

  private _tournoi: Tournoi = new Tournoi();

  public cadence = Cadence;
  public cadenceOptions = [];

  constructor(private tournoiService: TournoiService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
        if (params.id) {
          this.tournoiService.findById(params.id).subscribe(data => {
            this.tournoi = data;
          });
        }
      }
    );
    this.cadenceOptions = Object.keys(this.cadence);
  }


  get tournoi(): Tournoi {
    return this._tournoi;
  }

  set tournoi(value: Tournoi) {
    this._tournoi = value;
  }

  public save() {
    if (this.tournoi.id) {
      this.tournoiService.update(this.tournoi).subscribe(res => {
        this.goTournois();
      });
    } else {
      this.tournoiService.create(this.tournoi).subscribe(res => {
        this.goTournois()
      });
    }
  }

  private goTournois() {
    this.router.navigate(['/tournoi']);
  }
}
