import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, FormGroupName, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';
import { register } from 'module';
import { AthuService } from '../../../shared/servies/athu.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
   isloading:boolean = false
  errmsg!:string
  constructor(private _AthuService: AthuService, private _Router: Router) {}
  RegisterForm: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^01[0125][0-9]{8}$/),
      ]),
      password: new FormControl(null, [
        Validators.required,

        Validators.pattern(/^[A-Z][a-z0-9]{8,}$/),
      ]),
      rePassword: new FormControl(null, [Validators.required]),
    },
    this.rebassword
  );
  rebassword(x: AbstractControl) {
    if (x.get('password')?.value === x.get('rePassword')?.value) {
      return null;
    } else {
      x.get('rePassword')?.setErrors({ mismatch: true });
      return { mismatch: true };
    }
  }
  Register() {
   this.isloading = true
    if (this.RegisterForm.valid) {
      this._AthuService.singup(this.RegisterForm.value).subscribe({
        next: (res) => {
this.isloading = false;
          this._Router.navigate(['/login'])
          console.log(res);
        },
        
        error: (err) => {
          this.isloading = false;
         this.errmsg=err.error.message;
         
          console.log(err);
        },
      });
    }
  }
}
