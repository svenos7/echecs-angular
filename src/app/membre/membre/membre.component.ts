import { Component, OnInit } from '@angular/core';
import {Membre} from "../model/membre";
import {MembreService} from "../service/membre.service";

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit {
  private _membres: Membre[] = [];

  constructor(private membreService: MembreService) { }

  private initMembre() {
    this.membreService.findAll().subscribe(datas => {
      this._membres = datas;
    });
  }

  get membres(): Membre[] {
    return this._membres;
  }

  set membres(value: Membre[]) {
    this._membres = value;
  }

  ngOnInit() {
    this.initMembre();
  }

  public delete(id: number) {
    this.membreService.delete(id).subscribe(res => {
      this.initMembre();
    });
  }

}
