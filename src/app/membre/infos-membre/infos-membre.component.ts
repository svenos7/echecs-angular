import {Component, OnInit} from '@angular/core';
import {MembreService} from "../service/membre.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Membre} from "../model/membre";
import {Nationalite} from "../model/nationalite.enum";
import {Civilite} from "../model/civilite.enum";

@Component({
  selector: 'app-infos-membre',
  templateUrl: './infos-membre.component.html',
  styleUrls: ['./infos-membre.component.css']
})
export class InfosMembreComponent implements OnInit {
  get membre(): Membre {
    return this._membre;
  }

  set membre(value: Membre) {
    this._membre = value;
  }

  private _membre: Membre = new Membre();
  private _infosMembre: Array<number> = new Array<number>();

  public _nationalite = Nationalite;
  public nationaliteOptions = [];

  public _civilite = Civilite;
  public civiliteOptions = [];

  get infosMembre(): Array<number> {
    return this._infosMembre;
  }

  set infosMembre(value: Array<number>) {
    this._infosMembre = value;
  }

  constructor(private membreService: MembreService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
        if (params.id) {
          this.membreService.infos(params.id).subscribe(data => {
            this._infosMembre = data;
          })
          this.membreService.findById(params.id).subscribe(data => {
            this._membre = data;
          })
        }
      }
    );
    this.civiliteOptions = Object.keys(this._civilite);
    this.nationaliteOptions = Object.keys(this._nationalite);
  }


  private goMembre() {
      this.router.navigate(['/membre']);
    }
  }
