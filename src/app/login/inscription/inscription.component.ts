import {Component, OnInit} from '@angular/core';
import {Login} from '../model/login';
import {AbstractControl, Form, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {InscriptionService} from '../services/inscription.service';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  private _user: Login = new Login();
  private _erreur: boolean = false;
  private _hide: boolean = true;

  private _inscriptionForm: FormGroup;
  private _loginCtrl: FormControl;
  private _passwordCtrl: FormControl;
  private _confirmeCtrl: FormControl;
  private _prenomCtrl: FormControl;
  private _nomCtrl: FormControl;
  private _mailCtrl: FormControl;


  constructor(private fb: FormBuilder, private inscriptionService: InscriptionService, private router: Router) {
    this.loginCtrl = this.fb.control('', Validators.required, control => this.disponibilite(control));
    this.passwordCtrl = this.fb.control('', [Validators.required,
      Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,})')]);
    this.confirmeCtrl = this.fb.control('', Validators.required);
    this.prenomCtrl = this.fb.control('', Validators.required);
    this.nomCtrl = this.fb.control('', Validators.required);
    this.mailCtrl = this.fb.control('', Validators.required);
    this.inscriptionForm = this.fb.group({
      login: this.loginCtrl,
      password: this.passwordCtrl,
      confirme: this.confirmeCtrl,
      prenom: this.prenomCtrl,
      nom: this.nomCtrl,
      email: this.mailCtrl
    }, {validator: InscriptionComponent.correspond});
  }

  ngOnInit(): void {
  }

  inscription() {
    this.inscriptionService.inscription(this.user).subscribe(res => {
      this.router.navigate(['/login']);
    }, error => {
      this.erreur = true;
    });
  }

  private disponibilite(control: AbstractControl) {
    return this.inscriptionService.disponibilite(control.value).pipe(map(res => {
      if (res) {
        return null;
      }
      return {'nonDisponible': true};
    }));
  }

  static correspond(fg: FormGroup) {
    const password = fg.controls['password'];
    const confirme = fg.controls['confirme'];
    if (password.errors) {
      return null;
    }
    if (password.value !== confirme.value) {
      return {nonIdentique: true};
    } else {
      return null;
    }
  }

  get user(): Login {
    return this._user;
  }

  set user(value: Login) {
    this._user = value;
  }

  get erreur(): boolean {
    return this._erreur;
  }

  set erreur(value: boolean) {
    this._erreur = value;
  }

  get hide(): boolean {
    return this._hide;
  }

  set hide(value: boolean) {
    this._hide = value;
  }

  get inscriptionForm(): FormGroup {
    return this._inscriptionForm;
  }

  set inscriptionForm(value: FormGroup) {
    this._inscriptionForm = value;
  }


  get loginCtrl(): FormControl {
    return this._loginCtrl;
  }

  set loginCtrl(value: FormControl) {
    this._loginCtrl = value;
  }

  get passwordCtrl(): FormControl {
    return this._passwordCtrl;
  }

  set passwordCtrl(value: FormControl) {
    this._passwordCtrl = value;
  }

  get confirmeCtrl(): FormControl {
    return this._confirmeCtrl;
  }

  set confirmeCtrl(value: FormControl) {
    this._confirmeCtrl = value;
  }

  get prenomCtrl(): FormControl {
    return this._prenomCtrl;
  }

  set prenomCtrl(value: FormControl) {
    this._prenomCtrl = value;
  }

  get nomCtrl(): FormControl {
    return this._nomCtrl;
  }

  set nomCtrl(value: FormControl) {
    this._nomCtrl = value;
  }

  get mailCtrl(): FormControl {
    return this._mailCtrl;
  }

  set mailCtrl(value: FormControl) {
    this._mailCtrl = value;
  }
}
