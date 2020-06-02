import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Club} from "../model/club";
import {ClubService} from "../service/club.service";

@Component({
  selector: 'app-edit-club',
  templateUrl: './edit-club.component.html',
  styleUrls: ['./edit-club.component.css']
})
export class EditClubComponent implements OnInit {

  private _club: Club = new Club();

  constructor(private clubService: ClubService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
        if (params.id) {
          this.clubService.findById(params.id).subscribe(data => {
            this.club = data;
          });
        }
      }
    );
  }


  get club(): Club {
    return this._club;
  }

  set club(value: Club) {
    this._club = value;
  }

  public save() {
    if (this.club.id) {
      this.clubService.update(this.club).subscribe(res => {
        this.goClubs();
      });
    } else {
      this.clubService.create(this.club).subscribe(res => {
        this.goClubs()
      });
    }
  }

  private goClubs() {
    this.router.navigate(['/club']);
  }
}
