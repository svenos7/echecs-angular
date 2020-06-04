import { Component, OnInit } from '@angular/core';
import {Club} from "../model/club";
import {ClubService} from "../service/club.service";

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {

  private _clubs: Club[] = [];

  constructor(private clubService: ClubService) {
  }

  ngOnInit() {
    this.initClubs();
  }

  private initClubs() {
    this.clubService.findAll().subscribe(datas => {
      this._clubs = datas;
    });
  }

  get clubs(): Club[] {
    return this._clubs;
  }

  set clubs(value: Club[]) {
    this._clubs = value;
  }

  public delete(id: number) {
    this.clubService.delete(id).subscribe(res => {
      this.initClubs();
    });
  }

  public get role() {
    return sessionStorage.getItem('role');
  }

}
