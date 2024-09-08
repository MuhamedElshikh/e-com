import { code, Resetpasswod } from './../../../shared/interfaces/sing';
import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AthuService } from '../../../shared/servies/athu.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss',
})
export class ForgetpasswordComponent {
 email!:string|null
  private _formBuilder = inject(FormBuilder);
  constructor(private _AthuService: AthuService, private _Router: Router) {
     if (typeof localStorage !='undefined') {
      this.email = localStorage.getItem('email');

  }
  
  
  }
  firstFormGroup = this._formBuilder.group({
    email: [this.email, Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    resetCode: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    email: [this.firstFormGroup.value.email, [Validators.required, Validators.email]],
    newPassword: [
      '',
      [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{8,}$/)],
    ],
  });
  isEditable = false;
  sendcode() {
    this._AthuService
      .Forgetpassword(this.firstFormGroup.value.email)
      .subscribe((res) => {
       
       
      });
  }
  verifyResetCode() {
    const resetcode = this.secondFormGroup.value;
    this._AthuService.verifyResetCode(resetcode).subscribe((res) => {});
  }
  Resetpasswod() {
    this._AthuService
      .Resetpasswod(this.thirdFormGroup.value)
      .subscribe((res) => {
        this._Router.navigate(["/login"])
      });
  }
}
