import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base } from '../../base/environment';
import { Observable } from 'rxjs';
import { product, productdetails, productlist } from '../interfaces/prducts';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _HttpClient: HttpClient) {}
  getallproduct(page:number = 1): Observable<productlist> {
    return this._HttpClient.get<productlist>(
      `${base.baseurl}api/v1/products?page=${page}`
    );
  }
  getoneproduct(id: string): Observable<productdetails> {
    return this._HttpClient.get<productdetails>(
      `${base.baseurl}api/v1/products/${id}`
    );
  }
}
