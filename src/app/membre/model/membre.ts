import {Civilite} from "./civilite.enum";
import {Nationalite} from "./nationalite.enum";
import {Adresse} from "../../model/adresse";
import {Partie} from "../../model/partie";
import {Club} from "../../model/club";
import {Participation} from "../../model/participation";

export class Membre {
  get civilite(): Civilite {
    return this._civilite;
  }

  set civilite(value: Civilite) {
    this._civilite = value;
  }

  get nationalite(): Nationalite {
    return this._nationalite;
  }

  set nationalite(value: Nationalite) {
    this._nationalite = value;
  }

  get adresse(): Adresse {
    return this._adresse;
  }

  set adresse(value: Adresse) {
    this._adresse = value;
  }

  get partieBlancs(): Partie[] {
    return this._partieBlancs;
  }

  set partieBlancs(value: Partie[]) {
    this._partieBlancs = value;
  }

  get partieNoirs(): Partie[] {
    return this._partieNoirs;
  }

  set partieNoirs(value: Partie[]) {
    this._partieNoirs = value;
  }

  get club(): Club {
    return this._club;
  }

  set club(value: Club) {
    this._club = value;
  }

  constructor(private _id?: number,
              private _prenom?: string,
              private _nom?: string,
              private _email?: string,
              private _elo?: number,
              private _civilite?: Civilite,
              private _nationalite?: Nationalite,
              private _adresse?: Adresse,
              private _partieBlancs?: Partie[],
              private _partieNoirs?: Partie[],
              private _club?: Club,
              ) {
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

  get elo(): number {
    return this._elo;
  }

  set elo(value: number) {
    this._elo = value;
  }
}
