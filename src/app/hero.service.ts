import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(public _HttpClient:HttpClient) { }
  GetUsaNews():Observable<any>
  {
   return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=cabc164b73c641ee8cbb809233480467')
  }
  GetEgyptNews():Observable<any>
  {
   return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=eg&apiKey=cabc164b73c641ee8cbb809233480467')
  }
}
