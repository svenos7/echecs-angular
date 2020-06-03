import { Component, OnInit } from '@angular/core';
import {Membre} from "../model/membre";
import {Civilite} from "../model/civilite.enum";
import {MembreService} from "../service/membre.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Nationalite} from "../model/nationalite.enum";

@Component({
  selector: 'app-edit-membre',
  templateUrl: './edit-membre.component.html',
  styleUrls: ['./edit-membre.component.css']
})
export class EditMembreComponent implements OnInit {

  private _membre: Membre = new Membre();

  get membre(): Membre {
    return this._membre;
  }

  set membre(value: Membre) {
    this._membre = value;
  }

  public _nationalite = Nationalite;
  public nationaliteOptions = [];

  public _civilite = Civilite;
  public civiliteOptions = [];

  constructor(private membreService: MembreService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params=> {
      if (params.id) {
        this.membreService.findById(params.id).subscribe(data => {
          this._membre = data;
        })
      }
    });
    this.civiliteOptions = Object.keys(this._civilite);
    this.nationaliteOptions = Object.keys(this._nationalite);
  }

  public save() {
    if (this.membre.id) {
      this.membreService.update(this.membre).subscribe(res => {
        this.goMembres();
      });
    } else {
      this.membreService.create(this.membre).subscribe(res => {
        this.goMembres()
      });
    }
  }

  private goMembres() {
    this.router.navigate(['/membre']);
  }
}
