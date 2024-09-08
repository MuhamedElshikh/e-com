import { Router } from '@angular/router';
import { base } from './../../base/environment';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { code, failsingup, Resetpasswod, scseccsSingin, scseccsSsingup, Sing, singin } from '../interfaces/sing';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root',
})
export class AthuService {
  usertoken: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(
    private _HttpClient: HttpClient,
    private _Router: Router,
    @Inject(PLATFORM_ID) platformid: object
  ) {
    if (isPlatformBrowser(platformid)) {
      if (localStorage.getItem('usertoken')) {
        this.decodetoken();
      }
    }
  }
  singup(data: Sing): Observable<scseccsSsingup | failsingup> {
    return this._HttpClient.post<scseccsSsingup | failsingup>(
      `${base.baseurl}api/v1/auth/signup`,
      data
    );
  }
  login(data: singin): Observable<scseccsSingin | failsingup> {
    return this._HttpClient.post<scseccsSingin | failsingup>(
      `${base.baseurl}api/v1/auth/signin`,
      data
    );
  }
  decodetoken() {
    const token = JSON.stringify(localStorage.getItem('usertoken'));
    const decoded = jwtDecode(token);
    this.usertoken.next(decoded);
  }
  logout() {
    localStorage.removeItem('usertoken');
    this.usertoken.next(null);
    this._Router.navigate(['/login']);
  }
  Forgetpassword(email: any): Observable<any> {
    return this._HttpClient.post(`${base.baseurl}api/v1/auth/forgotPasswords`, {
      email,
    });
  }
  verifyResetCode(resetcode: any): Observable<any> {
    return this._HttpClient.post(
      `${base.baseurl}api/v1/auth/verifyResetCode`,
      resetcode
    );
  }
  Resetpasswod(restpasswoedd:any): Observable<any> {
    return this._HttpClient.put(
      `${base.baseurl}api/v1/auth/resetPassword`,
      restpasswoedd
    );
  }
}
