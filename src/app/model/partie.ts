import {Membre} from "../membre/model/membre";
import {Cadence} from "./cadence.enum";

export class Partie {

  constructor(private _id?: number,
              private _joueurBlancs?: Membre,
              private _joueurNoirs?: Membre,
              private _cadence?: Cadence) {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get joueurBlancs(): Membre {
    return this._joueurBlancs;
  }

  set joueurBlancs(value: Membre) {
    this._joueurBlancs = value;
  }

  get joueurNoirs(): Membre {
    return this._joueurNoirs;
  }

  set joueurNoirs(value: Membre) {
    this._joueurNoirs = value;
  }

  get cadence(): Cadence {
    return this._cadence;
  }

  set cadence(value: Cadence) {
    this._cadence = value;
  }
}
