import {Tournoi} from "./tournoi";
import {Niveau} from "./niveau.enum";

export class Arbitre {

  private _tournois: Tournoi[] = [];

  constructor(private _id?: number,
              private _prenom?: string,
              private _nom?: string,
              private _email?: string,
              private _niveau?: Niveau) {
  }

  get tournois(): Tournoi[] {
    return this._tournois;
  }

  set tournois(value: Tournoi[]) {
    this._tournois = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get niveau(): Niveau {
    return this._niveau;
  }

  set niveau(value: Niveau) {
    this._niveau = value;
  }
}
