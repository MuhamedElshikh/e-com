import { rmoveitem, showcart } from './../interfaces/cart';

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { base } from '../../base/environment';
import { json } from 'stream/consumers';
import { BehaviorSubject, Observable } from 'rxjs';
import { cart } from '../interfaces/cart';
import { beforeEach } from 'node:test';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  
  cartItemNum: BehaviorSubject<any> = new BehaviorSubject(0);

  constructor(
    private _HttpClient: HttpClient,
    @Inject(PLATFORM_ID) private platformid: object
  ) {
    if (isPlatformBrowser(this.platformid)) {
  this.cartItemNum.next(localStorage.getItem('num'));    
      
    }
  }
  addToCart(productId: string): Observable<cart> {
    return this._HttpClient.post<cart>(
      `${base.baseurl}api/v1/cart`,
      { productId },
      
    );
  }
  showcart(): Observable<showcart> {
    return this._HttpClient.get<showcart>(`${base.baseurl}api/v1/cart`);
  }
  deleteItem(id: string): Observable<any> {
    return this._HttpClient.delete<any>(`${base.baseurl}api/v1/cart/${id}`);
  }
  updataItem(id: string, count: string): Observable<any> {
    return this._HttpClient.put<any>(
      `${base.baseurl}api/v1/cart/${id}`,
      { count },
      
    );
  }
  deleteall(): Observable<any> {
    return this._HttpClient.delete<any>(`${base.baseurl}api/v1/cart`);
  }
  cartnum() {
    this.cartItemNum.next(localStorage.getItem('num'));
  }
}
