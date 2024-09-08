import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base } from '../../base/environment';
import { wishlist } from '../interfaces/wishlist';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor(private _HttpClient: HttpClient) {}
  addtowishlist(productId: string): Observable<any> {
    return this._HttpClient.post<any>(`${base.baseurl}api/v1/wishlist`, {
      productId,
    });
  }
  rmovefromwishlist(id: string): Observable<any> {
    return this._HttpClient.delete<any>(`${base.baseurl}api/v1/wishlist/${id}`);
  }
  getwishlist(): Observable<wishlist> {
    return this._HttpClient.get<wishlist>(`${base.baseurl}api/v1/wishlist`);
  }
}
