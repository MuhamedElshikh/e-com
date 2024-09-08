import { base } from './../../base/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { category } from '../interfaces/cat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  constructor(private _HttpClient: HttpClient) {}
  getallcat():Observable<category> {
   return this._HttpClient.get<category>(`${base.baseurl}api/v1/categories`);
  }
}
