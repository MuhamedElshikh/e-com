import { singin, scseccsSingin, User, Userlog, failsingup } from './../../../shared/interfaces/sing';
import { Component } from '@angular/core';
import { AthuService } from '../../../shared/servies/athu.service';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  isloading: boolean = false;
  errmsgg!: string;
  email!:string
  constructor(private _AthuService: AthuService, private _Router: Router) {}
  loginform: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{8,}$/),
    ]),
  });
  login() {
    this.isloading = true;
    if (this.loginform.valid) {
      this._AthuService.login(this.loginform.value).subscribe({
        next: (res) => {
          if ('token' in res) {
            this.isloading = false;
            localStorage.setItem('usertoken', res.token);
            this._AthuService.decodetoken();
            this._Router.navigate(['/home']);
          }
        },
        error: (err) => {
          this.isloading = false;
          this.errmsgg = err.error.message;
        },
      });
    }
  }
  forgetpass(){
    this.email = this.loginform.value.email
    localStorage.setItem("email", this.email)
  }
}
