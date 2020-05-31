import {Arbitre} from "./arbitre";
import {Cadence} from "./cadence.enum";
import {Club} from "./club";
import {Partie} from "./partie";
import {Participation} from "./participation";

export class Tournoi {

  constructor(private _id?: number,
              private _nom?: string,
              private _date?: Date,
              private _nbRondes?: number,
              private _salle?: string,
              private _fraisInscription?: number,
              private _prix?: number,
              private _cadence?: Cadence,
              private _arbitre?: Arbitre,
              private _organisateur?: Club,
              private _parties?: Partie[],
              private _participations?: Participation[]) {
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

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get nbRondes(): number {
    return this._nbRondes;
  }

  set nbRondes(value: number) {
    this._nbRondes = value;
  }

  get salle(): string {
    return this._salle;
  }

  set salle(value: string) {
    this._salle = value;
  }

  get fraisInscription(): number {
    return this._fraisInscription;
  }

  set fraisInscription(value: number) {
    this._fraisInscription = value;
  }

  get prix(): number {
    return this._prix;
  }

  set prix(value: number) {
    this._prix = value;
  }

  get cadence(): Cadence {
    return this._cadence;
  }

  set cadence(value: Cadence) {
    this._cadence = value;
  }

  get arbitre(): Arbitre {
    return this._arbitre;
  }

  set arbitre(value: Arbitre) {
    this._arbitre = value;
  }

  get organisateur(): Club {
    return this._organisateur;
  }

  set organisateur(value: Club) {
    this._organisateur = value;
  }

  get parties(): Partie[] {
    return this._parties;
  }

  set parties(value: Partie[]) {
    this._parties = value;
  }

  get participations(): Participation[] {
    return this._participations;
  }

  set participations(value: Participation[]) {
    this._participations = value;
  }
}
