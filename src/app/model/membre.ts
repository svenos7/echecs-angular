export class Membre {

  constructor(private _id?: number,
              private _prenom?: string,
              private _nom?: string,
              private _email?: string,
              private _elo?: number) {
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
