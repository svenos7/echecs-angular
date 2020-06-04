import {Membre} from '../../membre/model/membre';
import {Role} from './role.enum';

export class Login {

  constructor(private _membre: Membre = new Membre(),
              private _login?: string,
              private _password?: string,
              private _roles: Role[] = []) {
  }

  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get membre(): Membre {
    return this._membre;
  }

  set membre(value: Membre) {
    this._membre = value;
  }

  get roles(): Role[] {
    return this._roles;
  }

  set roles(value: Role[]) {
    this._roles = value;
  }
}
