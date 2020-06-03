import {Component, OnInit} from '@angular/core';
import {Login} from '../model/login';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private _user: Login = new Login();
  private _erreur: boolean = false;

  private _loginForm: FormGroup;
  private _loginCtrl: FormControl;
  private _passwordCtrl: FormControl;


  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginCtrl = this.fb.control('', Validators.required);
    this.passwordCtrl = this.fb.control('', Validators.required);
    this.loginForm = this.fb.group({
      login: this.loginCtrl, password: this.passwordCtrl
    });
  }

  ngOnInit(): void {
  }

  connect() {

    this.loginService.login(this.user).subscribe(res => {
      sessionStorage.setItem('user', btoa(`${this.user.login}:${this.user.password}`));
      sessionStorage.setItem('login', this.user.login);
      if (this.user.membre != null) {
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/contact']);
      }

    }, error => {
      this.erreur = true;
    });
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

  get loginForm(): FormGroup {
    return this._loginForm;
  }

  set loginForm(value: FormGroup) {
    this._loginForm = value;
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
}
