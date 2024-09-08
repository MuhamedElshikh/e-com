import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base } from '../../base/environment';
import { Observable } from 'rxjs';
import { prand, prands } from '../interfaces/prand';

@Injectable({
  providedIn: 'root',
})
export class PrandService {
  constructor(private _HttpClient: HttpClient) {}
  getallPrands(page:number = 1):Observable<prands>{
  return this._HttpClient.get<prands>(
    `${base.baseurl}api/v1/brands?page=${page}`
  );
  }
}
