import {Tournoi} from "../../tournoi/model/tournoi";
import {Adresse} from "../../model/adresse";
import {Membre} from "../../membre/model/membre";

export class Club {

  constructor(private _id?: number,
              private _nom?: string,
              private _adresse?: Adresse,
              private _membres?: Membre[],
              private _tournois?: Tournoi[]) {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get adresse(): Adresse {
    return this._adresse;
  }

  set adresse(value: Adresse) {
    this._adresse = value;
  }

  get membres(): Membre[] {
    return this._membres;
  }

  set membres(value: Membre[]) {
    this._membres = value;
  }

  get tournois(): Tournoi[] {
    return this._tournois;
  }

  set tournois(value: Tournoi[]) {
    this._tournois = value;
  }
}
