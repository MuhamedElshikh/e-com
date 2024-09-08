import { User } from './../interfaces/sing';
import { AthuService } from './athu.service';
import { showorder } from './../interfaces/order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base } from '../../base/environment';
import { ShippingAddress } from '../interfaces/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  Userid!: string;
  constructor(
    private _HttpClient: HttpClient,
    private _AthuService: AthuService
  ) {}
  cashOrder(data: ShippingAddress, id: string): Observable<any> {
    return this._HttpClient.post(`${base.baseurl}api/v1/orders/${id}`, data, {
      headers: {
        token: localStorage.getItem('usertoken') || '',
      },
    });
  }
  Checkout(data: ShippingAddress, id: string): Observable<any> {
    return this._HttpClient.post(
      `${base.baseurl}api/v1/orders/checkout-session/${id}?url=https://e-com-liard-zeta.vercel.app/`,
      data,
      {
        headers: {
          token: localStorage.getItem('usertoken') || '',
        },
      }
    );
  }
  getAllOrder(id: string): Observable<showorder[]> {
    this.Userid = this._AthuService.usertoken.getValue().id;
    return this._HttpClient.get<showorder[]>(
      `${base.baseurl}api/v1/orders/user/${this.Userid}`
    );
  }
}
