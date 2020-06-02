import { Component, OnInit } from '@angular/core';
import {Membre} from "../model/membre";
import {MembreService} from "../service/membre.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-infos-membre',
  templateUrl: './infos-membre.component.html',
  styleUrls: ['./infos-membre.component.css']
})
export class InfosMembreComponent implements OnInit {

  private _membre: Membre = new Membre();

  constructor(private membreService: MembreService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.id) {
        this.membreService.findById(params.id).subscribe(data => {
          this._membre = data;
        })
      }
    })
  }

  get membre(): Membre {
    return this._membre;
  }

  set membre(value: Membre) {
    this._membre = value;
  }

  private goMembre() {
    this.router.navigate(['/membre']);
  }
}
